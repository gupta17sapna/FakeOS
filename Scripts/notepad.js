document.addEventListener('DOMContentLoaded', () => {
  const initNotepad = () => {
      const notepadHtml = `
          <div id="notepad-header">
              <span>Untitled - Notepad</span>
              <button id="close-notepad">X</button>
          </div>
          <div id="notepad-menu">
              <ul>
                  <li id="fileMenu">File
                      <ul id="fileDropdown" class="hidden">
                          <li id="saveFile">Save</li>
                      </ul>
                  </li>
                  <li>Edit</li>
                  <li>Format</li>
                  <li>View</li>
                  <li>Help</li>
              </ul>
          </div>
          <textarea id="notepad-textarea"></textarea>
          <div id="notepad-status-bar">Ln 1, Col 1</div>
      `;
      const notepadModal = document.getElementById('notepadModal');
      notepadModal.innerHTML = notepadHtml;
      notepadModal.classList.remove('hidden');
      notepadModal.style.display = 'flex';

      const textarea = document.getElementById('notepad-textarea');
      const closeButton = document.getElementById('close-notepad');
      const statusBar = document.getElementById('notepad-status-bar');
      const fileMenu = document.getElementById('fileMenu');
      const fileDropdown = document.getElementById('fileDropdown');
      const saveFile = document.getElementById('saveFile');

    
      const updateStatusBar = () => {
          const text = textarea.value.substr(0, textarea.selectionStart);
          const lines = text.split("\n");
          const line = lines.length;
          const column = lines[line - 1].length + 1;
          statusBar.textContent = `Ln ${line}, Col ${column}`;
      };

      textarea.addEventListener('input', updateStatusBar);
      textarea.addEventListener('keyup', updateStatusBar);

      
      closeButton.addEventListener('click', () => {
          notepadModal.classList.add('hidden');
          notepadModal.style.display = 'none';
      });

      
      fileMenu.addEventListener('click', (event) => {
          fileDropdown.classList.toggle('hidden');
          event.stopPropagation(); 
      });

      
      saveFile.addEventListener('click', () => {
          const blob = new Blob([textarea.value], { type: 'text/plain' });
          const a = document.createElement('a');
          a.href = URL.createObjectURL(blob);
          a.download = 'untitled.txt';
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          fileDropdown.classList.add('hidden'); 
      });

      // Close file menu dropdown if clicking outside
      document.addEventListener('click', () => {
          fileDropdown.classList.add('hidden');
      });

      updateStatusBar();
  };

  // Event listener for notepad icon
  const notepadIcon = document.querySelector('.icon[data-app="notepad"]');
  notepadIcon.addEventListener('dblclick', initNotepad);
});
