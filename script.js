// Initialize todos from localStorage
let todos = JSON.parse(localStorage.getItem('todos')) || [];
let currentFilter = 'all';

// DOM Elements
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');
const todoCount = document.getElementById('todoCount');
const filterButtons = document.querySelectorAll('.filter-btn');

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    renderTodos();
    updateStats();
    setupFilterButtons();
    setupEnterKey();
});

// Add todo function
function addTodo() {
    const text = todoInput.value.trim();
    
    if (text === '') {
        alert('Please enter a task!');
        return;
    }

    const todo = {
        id: Date.now(),
        text: text,
        completed: false
    };

    todos.push(todo);
    saveTodos();
    todoInput.value = '';
    todoInput.focus();
    renderTodos();
    updateStats();
}

// Delete todo function
function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    saveTodos();
    renderTodos();
    updateStats();
}

// Toggle todo completion
function toggleTodo(id) {
    const todo = todos.find(t => t.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        saveTodos();
        renderTodos();
        updateStats();
    }
}

// Clear completed todos
function clearCompleted() {
    if (confirm('Are you sure you want to delete all completed tasks?')) {
        todos = todos.filter(todo => !todo.completed);
        saveTodos();
        renderTodos();
        updateStats();
    }
}

// Filter todos based on current filter
function getFilteredTodos() {
    switch(currentFilter) {
        case 'active':
            return todos.filter(todo => !todo.completed);
        case 'completed':
            return todos.filter(todo => todo.completed);
        default:
            return todos;
    }
}

// Render todos in the list
function renderTodos() {
    const filtered = getFilteredTodos();
    
    if (filtered.length === 0) {
        todoList.innerHTML = '<div class="empty-state"><p>No tasks to show!</p></div>';
        return;
    }

    todoList.innerHTML = filtered.map(todo => `
        <li class="todo-item ${todo.completed ? 'completed' : ''}">
            <input 
                type="checkbox" 
                class="todo-checkbox"
                ${todo.completed ? 'checked' : ''}
                onchange="toggleTodo(${todo.id})"
            >
            <span class="todo-text">${escapeHtml(todo.text)}</span>
            <button class="delete-btn" onclick="deleteTodo(${todo.id})">Delete</button>
        </li>
    `).join('');
}

// Update statistics
function updateStats() {
    const activeTodos = todos.filter(todo => !todo.completed).length;
    todoCount.textContent = `${activeTodos} task${activeTodos !== 1 ? 's' : ''} remaining`;
}

// Save todos to localStorage
function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Setup filter buttons
function setupFilterButtons() {
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            renderTodos();
        });
    });
}

// Setup Enter key to add todo
function setupEnterKey() {
    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    });
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}
