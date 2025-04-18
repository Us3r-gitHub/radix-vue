export const commandMenuItems = [
  {
    group: 'File Operations',
    items: [
      { id: 'new_file', name: 'New File', icon: 'lucide:file-plus' },
      { id: 'open', name: 'Open...', icon: 'lucide:folder-open' },
      { id: 'save', name: 'Save', icon: 'lucide:save' },
      { id: 'save_as', name: 'Save As...', icon: 'lucide:save-all' },
      { id: 'close', name: 'Close File', icon: 'lucide:x' },
      { id: 'rename', name: 'Rename', icon: 'lucide:edit' },
      { id: 'delete', name: 'Delete', icon: 'lucide:trash-2' },
      { id: 'export', name: 'Export...', icon: 'lucide:download' },
      { id: 'import', name: 'Import...', icon: 'lucide:upload' },
      { id: 'properties', name: 'Properties', icon: 'lucide:info' },
    ],
  },
  {
    group: 'Edit',
    items: [
      { id: 'undo', name: 'Undo', icon: 'lucide:undo' },
      { id: 'redo', name: 'Redo', icon: 'lucide:redo' },
      { id: 'cut', name: 'Cut', icon: 'lucide:scissors' },
      { id: 'copy', name: 'Copy', icon: 'lucide:copy' },
      { id: 'paste', name: 'Paste', icon: 'lucide:clipboard' },
      { id: 'find', name: 'Find', icon: 'lucide:search' },
      { id: 'replace', name: 'Replace', icon: 'lucide:replace' },
      { id: 'select_all', name: 'Select All', icon: 'lucide:check-square' },
      { id: 'format', name: 'Format Code', icon: 'lucide:align-left' },
      { id: 'comment', name: 'Toggle Comment', icon: 'lucide:message-square' },
    ],
  },
  {
    group: 'View',
    items: [
      { id: 'zoom_in', name: 'Zoom In', icon: 'lucide:zoom-in' },
      { id: 'zoom_out', name: 'Zoom Out', icon: 'lucide:zoom-out' },
      { id: 'full_screen', name: 'Full Screen', icon: 'lucide:maximize' },
      { id: 'split_view', name: 'Split View', icon: 'lucide:layout' },
      { id: 'toggle_sidebar', name: 'Toggle Sidebar', icon: 'lucide:sidebar' },
      { id: 'toggle_terminal', name: 'Toggle Terminal', icon: 'lucide:terminal' },
      { id: 'outline', name: 'Show Outline', icon: 'lucide:list' },
      { id: 'problems', name: 'Show Problems', icon: 'lucide:alert-circle' },
      { id: 'output', name: 'Show Output', icon: 'lucide:terminal' },
      { id: 'theme', name: 'Change Theme', icon: 'lucide:palette' },
    ],
  },
]
