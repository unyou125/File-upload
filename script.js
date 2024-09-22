document.getElementById('uploadButton').onclick = uploadFile;

async function uploadFile() {
    const fileInput = document.getElementById('fileInput');
    const formData = new FormData();
    formData.append('file', fileInput.files[0]);

    try {
        const response = await fetch('/api/upload', {  // Update the URL
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            alert('File uploaded successfully.');
            loadFiles();
        } else {
            const errorText = await response.text();
            alert(`Failed to upload file: ${errorText}`);
        }
    } catch (error) {
        console.error('Error uploading file:', error);
    }
}

async function loadFiles() {
    try {
        const response = await fetch('/api/files');  // Update the URL
        const files = await response.json();
        const fileList = document.getElementById('fileList');
        fileList.innerHTML = '';

        files.forEach(file => {
            const fileItem = document.createElement('div');
            fileItem.className = 'file-item';
            fileItem.innerHTML = `${file.name} <button onclick="deleteFile('${file.name}')">Delete</button>`;
            fileList.appendChild(fileItem);
        });
    } catch (error) {
        console.error('Error loading files:', error);
    }
}

async function deleteFile(fileName) {
    const confirmDelete = confirm(`Are you sure you want to delete "${fileName}"?`);

    if (confirmDelete) {
        try {
            const response = await fetch(`/api/delete?filename=${fileName}`, {  // Update the URL
                method: 'DELETE'
            });

            if (response.ok) {
                alert('File deleted successfully.');
                loadFiles();
            } else {
                alert('Failed to delete file.');
            }
        } catch (error) {
            console.error('Error deleting file:', error);
        }
    }
}

// Load files on page load
window.onload = loadFiles;
