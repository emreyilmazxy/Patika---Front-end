import { useState } from 'react';
import type { Todo, FilterType } from './types';
import { Header } from './components/header';
import { TodoList } from './components/todo-list';
import { Footer } from './components/footer';
import { InfoFooter } from './components/info-footer';
import './App.css';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<FilterType>('all');

  // Add new todo
  const handleAddTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  // Toggle todo completion
  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete todo
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Edit todo
  const handleEdit = (id: number, text: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text } : todo
      )
    );
  };

  // Toggle all todos
  const handleToggleAll = () => {
    const allCompleted = todos.every((todo) => todo.completed);
    setTodos(
      todos.map((todo) => ({ ...todo, completed: !allCompleted }))
    );
  };

  // Clear completed todos
  const handleClearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  // Filter todos
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const activeCount = todos.filter((todo) => !todo.completed).length;
  const completedCount = todos.filter((todo) => todo.completed).length;
  const allCompleted = todos.length > 0 && todos.every((todo) => todo.completed);

  return (
    <>
      <section className="todoapp">
        <Header onAddTodo={handleAddTodo} />

        <TodoList
          todos={filteredTodos}
          onToggle={handleToggle}
          onDelete={handleDelete}
          onEdit={handleEdit}
          onToggleAll={handleToggleAll}
          allCompleted={allCompleted}
        />

        {todos.length > 0 && (
          <Footer
            activeCount={activeCount}
            completedCount={completedCount}
            filter={filter}
            onFilterChange={setFilter}
            onClearCompleted={handleClearCompleted}
          />
        )}
      </section>

      <InfoFooter />
    </>
  );
}

export default App;
