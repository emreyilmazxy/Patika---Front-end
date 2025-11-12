export class TaskService {
    constructor() {
        this.taskList = document.querySelector('.task-list');
        this.form = document.querySelector('#task-form');
        this.addBtn = document.querySelector("#add-task-btn");
        this.taskInput = document.querySelector("#new-task-input");
        this.clearBtn = document.querySelector("#clear-tasks-btn");

        this.bindEvents();
        this.loadTasks();
    }

    bindEvents() {
        this.addBtn.addEventListener('click', () => this.addTask());
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.addTask();
        });
        this.clearBtn.addEventListener('click', () => this.clearTasks());
        this.taskList.addEventListener('click', (e) => this.deleteTask(e));
    }

    addTask() {
        const taskText = this.taskInput.value.trim();
        if (taskText === '') return;

        const li = document.createElement('li');
        li.innerHTML = `${taskText} <button class="delete-btn">Delete</button>`;
        this.taskList.appendChild(li);
        this.taskInput.value = '';

        this.saveToLocalStorage(taskText);
    }

    deleteTask(e) {
        if (e.target.classList.contains('delete-btn')) {
            const li = e.target.parentElement;
            const text = li.firstChild.textContent.trim();
            li.remove();
            this.removeFromStorage(text);
        }
    }

    removeFromStorage(task) {
        const tasks = JSON.parse(localStorage.getItem('tasks')) ?? [];
        const updatedTasks = tasks.filter(t => t !== task);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }

    saveToLocalStorage(task) {
        const tasks = JSON.parse(localStorage.getItem('tasks')) ?? [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    clearTasks() {
        this.taskList.innerHTML = '';
        localStorage.removeItem('tasks');
    }

    loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) ?? [];
        tasks.forEach(task => {
            const li = document.createElement('li');
            li.innerHTML = `${task} <button class="delete-btn">Delete</button>`;
            this.taskList.appendChild(li);
        });
    }
}
