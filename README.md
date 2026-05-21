# Todo App

A simple, modern, and fully functional todo application built with HTML, CSS, and JavaScript.

## Features

- ✅ **Add Tasks** - Quickly add new tasks to your todo list
- ✅ **Mark Complete** - Check off tasks as you finish them
- ✅ **Delete Tasks** - Remove individual tasks with the delete button
- ✅ **Filter Tasks** - View All, Active, or Completed tasks
- ✅ **Clear Completed** - Delete all finished tasks at once
- ✅ **Persistent Storage** - All tasks are saved to browser's local storage
- ✅ **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- ✅ **Beautiful UI** - Modern gradient design with smooth animations

## How to Use

1. **Open the App**
   - Simply open `index.html` in your web browser

2. **Add a Task**
   - Type your task in the input field
   - Press Enter or click the "Add" button
   - The task will appear in your list

3. **Complete a Task**
   - Click the checkbox next to a task to mark it as complete
   - The task will appear struck-through

4. **Delete a Task**
   - Click the "Delete" button next to any task to remove it

5. **Filter Tasks**
   - Click "All" to see all tasks
   - Click "Active" to see only incomplete tasks
   - Click "Completed" to see only finished tasks

6. **Clear Completed Tasks**
   - Click "Clear Completed" to remove all finished tasks at once
   - You'll be asked to confirm before deletion

## File Structure

```
.
├── index.html      # Main HTML file with app structure
├── styles.css      # CSS styling and animations
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## Technical Details

- **Storage:** Uses browser's localStorage API to persist data
- **Security:** Includes HTML escaping to prevent XSS attacks
- **Compatibility:** Works in all modern browsers (Chrome, Firefox, Safari, Edge)

## Browser Requirements

- Modern web browser with JavaScript enabled
- Minimum screen size: 320px (for mobile)

## Tips

- Press **Enter** to quickly add a task
- Use the **filter buttons** to organize your workflow
- Your tasks are **automatically saved** - no need to save manually
- Tasks persist even after closing and reopening the browser

## Customization

Feel free to modify:
- Colors in `styles.css` (gradient colors, button colors, etc.)
- Font family and sizes
- Animation speeds and timing
- Task limit and scrolling behavior

Enjoy organizing your tasks! 🎯
