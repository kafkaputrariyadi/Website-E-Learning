// tugas.js

// Global variables
let currentTaskId = null;
let uploadedFile = null;
let grades = [];

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  console.log('Tugas page loaded successfully');
  
  // Initialize upload area click handler
  initializeUploadArea();
  
  // Initialize file input change handler
  initializeFileInput();
  
  // Add entrance animations
  animateTaskCards();
  
  // Initialize tooltips
  initializeTooltips();
  
  // Initialize grades
  initializeGrades();
  
  // Handle tab changes
  handleTabChanges();
});

// Open task detail and show modal
function openTaskDetail(taskId) {
  currentTaskId = taskId;
  console.log('Opening task detail:', taskId);
  
  // Show modal
  const modal = new bootstrap.Modal(document.getElementById('uploadModal'));
  modal.show();
  
  // Reset upload area
  resetUploadArea();
}

// Initialize upload area
function initializeUploadArea() {
  const uploadArea = document.getElementById('uploadArea');
  if (!uploadArea) return;
  
  // Click handler
  uploadArea.addEventListener('click', function() {
    triggerFileUpload();
  });
  
  // Drag and drop handlers
  uploadArea.addEventListener('dragover', function(e) {
    e.preventDefault();
    e.stopPropagation();
    this.style.borderColor = '#00bcd4';
    this.style.background = '#e3f2fd';
  });
  
  uploadArea.addEventListener('dragleave', function(e) {
    e.preventDefault();
    e.stopPropagation();
    this.style.borderColor = '#ccc';
    this.style.background = '#f8f9fa';
  });
  
  uploadArea.addEventListener('drop', function(e) {
    e.preventDefault();
    e.stopPropagation();
    this.style.borderColor = '#ccc';
    this.style.background = '#f8f9fa';
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  });
}

// Trigger file upload
function triggerFileUpload() {
  const fileInput = document.getElementById('fileInput');
  if (fileInput) {
    fileInput.click();
  }
}

// Initialize file input
function initializeFileInput() {
  const fileInput = document.getElementById('fileInput');
  if (!fileInput) return;
  
  fileInput.addEventListener('change', function(e) {
    if (this.files.length > 0) {
      handleFileSelect(this.files[0]);
    }
  });
}

// Handle file selection
function handleFileSelect(file) {
  console.log('File selected:', file.name);
  
  // Check file size (max 10MB)
  const maxSize = 10 * 1024 * 1024; // 10MB in bytes
  if (file.size > maxSize) {
    showNotification('File terlalu besar! Maksimal 10MB', 'error');
    return;
  }
  
  // Store file
  uploadedFile = file;
  
  // Update upload area
  updateUploadArea(file);
  
  // Show notification
  showNotification('File berhasil dipilih: ' + file.name, 'success');
}

// Update upload area display
function updateUploadArea(file) {
  const uploadArea = document.getElementById('uploadArea');
  if (!uploadArea) return;
  
  // Get file extension
  const extension = file.name.split('.').pop().toLowerCase();
  let iconClass = 'fa-file';
  
  if (['pdf'].includes(extension)) {
    iconClass = 'fa-file-pdf';
  } else if (['doc', 'docx'].includes(extension)) {
    iconClass = 'fa-file-word';
  } else if (['jpg', 'jpeg', 'png', 'gif'].includes(extension)) {
    iconClass = 'fa-file-image';
  }
  
  // Update content
  uploadArea.innerHTML = `
    <i class="fas ${iconClass} fa-3x text-success mb-3"></i>
    <p class="text-success mb-2 fw-bold">${file.name}</p>
    <p class="small text-muted">${formatFileSize(file.size)}</p>
    <button class="btn btn-sm btn-outline-danger mt-2" onclick="removeFile(event)">
      <i class="fas fa-times"></i> Hapus File
    </button>
  `;
}

// Reset upload area
function resetUploadArea() {
  uploadedFile = null;
  const uploadArea = document.getElementById('uploadArea');
  if (!uploadArea) return;
  
  uploadArea.innerHTML = `
    <i class="fas fa-cloud-upload-alt fa-3x text-muted mb-3"></i>
    <p class="text-muted mb-2">Upload Tugas Anda Disini</p>
    <p class="small text-muted">Ukuran Maksimum File : 10MB</p>
  `;
}

// Remove file
function removeFile(event) {
  event.stopPropagation();
  uploadedFile = null;
  resetUploadArea();
  showNotification('File berhasil dihapus', 'info');
}

// Format file size
function formatFileSize(bytes) {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

// Show notification
function showNotification(message, type = 'info') {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `alert alert-${type === 'error' ? 'danger' : type === 'success' ? 'success' : 'info'} alert-dismissible fade show notification-toast`;
  notification.style.cssText = `
    position: fixed;
    top: 80px;
    right: 20px;
    z-index: 9999;
    min-width: 300px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    animation: slideIn 0.3s ease;
  `;
  
  notification.innerHTML = `
    <div class="d-flex align-items-center">
      <i class="fas fa-${type === 'error' ? 'exclamation-circle' : type === 'success' ? 'check-circle' : 'info-circle'} me-2"></i>
      <span>${message}</span>
      <button type="button" class="btn-close ms-auto" data-bs-dismiss="alert"></button>
    </div>
  `;
  
  document.body.appendChild(notification);
  
  // Auto dismiss after 3 seconds
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Add notification animations
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(400px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(400px);
      opacity: 0;
    }
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);

// Animate task cards on load
function animateTaskCards() {
  const cards = document.querySelectorAll('.task-card');
  cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.animation = `fadeInUp 0.5s ease forwards`;
    card.style.animationDelay = `${index * 0.1}s`;
  });
}

// Initialize Bootstrap tooltips
function initializeTooltips() {
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
}

// Submit assignment
function submitAssignment() {
  if (!uploadedFile) {
    showNotification('Silakan pilih file terlebih dahulu!', 'error');
    return;
  }
  
  // Show loading
  showLoading();
  
  // Simulate upload (replace with actual upload logic)
  setTimeout(() => {
    hideLoading();
    showNotification('Tugas berhasil dikumpulkan!', 'success');
    
    // Close modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('uploadModal'));
    if (modal) {
      modal.hide();
    }
    
    // Reset
    resetUploadArea();
    uploadedFile = null;
    currentTaskId = null;
  }, 2000);
}

// Show loading indicator
function showLoading() {
  const loadingOverlay = document.createElement('div');
  loadingOverlay.id = 'loadingOverlay';
  loadingOverlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
  `;
  
  loadingOverlay.innerHTML = `
    <div class="text-center">
      <div class="spinner-border text-light" role="status" style="width: 3rem; height: 3rem;">
        <span class="visually-hidden">Loading...</span>
      </div>
      <p class="text-light mt-3">Mengunggah tugas...</p>
    </div>
  `;
  
  document.body.appendChild(loadingOverlay);
}

// Hide loading indicator
function hideLoading() {
  const loadingOverlay = document.getElementById('loadingOverlay');
  if (loadingOverlay) {
    loadingOverlay.remove();
  }
}

// Smooth scroll to top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Handle tab changes
document.querySelectorAll('[data-bs-toggle="tab"]').forEach(tab => {
  tab.addEventListener('shown.bs.tab', function (e) {
    console.log('Tab changed to:', e.target.id);
    animateTaskCards();
  });
});

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
  // Escape key to close modal
  if (e.key === 'Escape') {
    const modal = bootstrap.Modal.getInstance(document.getElementById('uploadModal'));
    if (modal) {
      modal.hide();
    }
  }
  
  // Ctrl/Cmd + S to save (submit)
  if ((e.ctrlKey || e.metaKey) && e.key === 's') {
    e.preventDefault();
    if (uploadedFile) {
      submitAssignment();
    }
  }
});

// Handle modal close event
document.getElementById('uploadModal')?.addEventListener('hidden.bs.modal', function() {
  resetUploadArea();
  uploadedFile = null;
  currentTaskId = null;
});

// Add scroll to top button
window.addEventListener('scroll', function() {
  const scrollBtn = document.getElementById('scrollTopBtn');
  if (window.pageYOffset > 300) {
    if (!scrollBtn) {
      createScrollTopButton();
    }
  } else {
    if (scrollBtn) {
      scrollBtn.remove();
    }
  }
});

// Create scroll to top button
function createScrollTopButton() {
  const btn = document.createElement('button');
  btn.id = 'scrollTopBtn';
  btn.className = 'btn btn-primary rounded-circle';
  btn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    z-index: 999;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  `;
  btn.innerHTML = '<i class="fas fa-arrow-up"></i>';
  btn.onclick = scrollToTop;
  document.body.appendChild(btn);
}

// Print functionality
function printPage() {
  window.print();
}

// Export to PDF (would need a library like jsPDF)
function exportToPDF() {
  showNotification('Fitur ekspor PDF akan segera hadir!', 'info');
}

// Log page view
console.log('Tugas page initialized at:', new Date().toLocaleString('id-ID'));

// Initialize grade data
function initializeGrades() {
  const gradeItems = document.querySelectorAll('.grade-item');
  
  gradeItems.forEach(item => {
    const title = item.querySelector('.grade-title')?.textContent || '';
    const subject = item.querySelector('.grade-subtitle')?.textContent || '';
    const gradeValue = item.querySelector('.grade-value')?.textContent || '-';
    
    grades.push({
      title: title,
      subject: subject,
      grade: gradeValue === '-' ? null : parseInt(gradeValue)
    });
  });
  
  console.log('Grades loaded:', grades.length);
  
  // Add click handlers to grade items
  gradeItems.forEach((item, index) => {
    item.addEventListener('click', function() {
      showGradeDetail(grades[index]);
    });
  });
}

// Show grade detail
function showGradeDetail(grade) {
  console.log('Showing grade detail:', grade);
  
  if (grade.grade === null) {
    showNotification('Nilai belum tersedia untuk tugas ini', 'info');
  } else {
    showNotification(`Nilai ${grade.subject}: ${grade.grade}`, 'success');
  }
}

// Handle tab changes
function handleTabChanges() {
  const tabLinks = document.querySelectorAll('[data-bs-toggle="tab"]');
  
  tabLinks.forEach(tab => {
    tab.addEventListener('shown.bs.tab', function (e) {
      const targetId = e.target.getAttribute('data-bs-target');
      console.log('Tab changed to:', targetId);
      
      if (targetId === '#nilai') {
        // Animate grade items when nilai tab is shown
        setTimeout(() => {
          const gradeItems = document.querySelectorAll('.grade-item');
          gradeItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.animation = `fadeInUp 0.5s ease forwards`;
            item.style.animationDelay = `${index * 0.1}s`;
          });
        }, 100);
      } else if (targetId === '#tugas') {
        // Animate task cards when tugas tab is shown
        setTimeout(() => {
          animateTaskCards();
        }, 100);
      }
    });
  });
}

// Calculate grade statistics
function calculateGradeStatistics() {
  const validGrades = grades.filter(g => g.grade !== null).map(g => g.grade);
  
  if (validGrades.length === 0) {
    console.log('No valid grades to calculate');
    return null;
  }
  
  const average = validGrades.reduce((a, b) => a + b, 0) / validGrades.length;
  const highest = Math.max(...validGrades);
  const lowest = Math.min(...validGrades);
  const total = validGrades.length;
  const pending = grades.length - total;
  
  return {
    average: average.toFixed(2),
    highest: highest,
    lowest: lowest,
    total: total,
    pending: pending
  };
}