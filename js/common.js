// ===== COMMON UTILITIES =====

const Utils = {
  formatBytes(bytes, decimals = 2) {
    if (!bytes) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(decimals)) + ' ' + sizes[i];
  },

  showStatus(el, message, type = 'info') {
    if (!el) return;
    el.textContent = message;
    el.className = `status-msg show ${type}`;
  },

  hideStatus(el) {
    if (!el) return;
    el.className = 'status-msg';
  },

  setProgress(el, pct) {
    if (!el) return;
    el.style.width = pct + '%';
  },

  downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  },

  readFileAsArrayBuffer(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = e => resolve(e.target.result);
      reader.onerror = reject;
      reader.readAsArrayBuffer(file);
    });
  },

  readFileAsText(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = e => resolve(e.target.result);
      reader.onerror = reject;
      reader.readAsText(file);
    });
  },

  readFileAsDataURL(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = e => resolve(e.target.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  },

  setupDropZone(dropZone, onFiles, accept = '.pdf') {
    const input = dropZone.querySelector('input[type="file"]');

    dropZone.addEventListener('dragover', e => {
      e.preventDefault();
      dropZone.classList.add('drag-over');
    });

    dropZone.addEventListener('dragleave', () => {
      dropZone.classList.remove('drag-over');
    });

    dropZone.addEventListener('drop', e => {
      e.preventDefault();
      dropZone.classList.remove('drag-over');
      const files = Array.from(e.dataTransfer.files);
      onFiles(files);
    });

    if (input) {
      input.addEventListener('change', () => {
        onFiles(Array.from(input.files));
        input.value = '';
      });
    }
  },

  createFileItem(file, onRemove) {
    const item = document.createElement('div');
    item.className = 'file-item';
    item.innerHTML = `
      <span>📄</span>
      <span class="file-name">${file.name}</span>
      <span class="file-size">${Utils.formatBytes(file.size)}</span>
      <button class="remove-btn" title="Remove">✕</button>
    `;
    item.querySelector('.remove-btn').onclick = onRemove;
    return item;
  }
};

// PDF.js global init
if (typeof pdfjsLib !== 'undefined') {
  pdfjsLib.GlobalWorkerOptions.workerSrc =
    'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
}
