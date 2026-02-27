import type { Todo } from './todo.js';

// Duplicated title validation (copy-pasted from todo.ts add/update)
export function formatTitle(title: string): string {
  const trimmed = title.trim();
  if (trimmed.length === 0) {
    throw new Error('Title cannot be empty');
  }
  if (trimmed.length > 200) {
    throw new Error('Title cannot exceed 200 characters');
  }
  return trimmed;
}

// Duplicated date formatting (same manual parsing pattern as todo.ts)
export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

// Format a single todo for display
export function formatTodo(todo: Todo): string {
  const title = formatTitle(todo.title);
  const date = formatDate(todo.createdAt);
  const status = todo.completed ? '[x]' : '[ ]';
  return `${status} ${title} (created: ${date})`;
}

// Format all todos for display
export function displayTodos(todos: Todo[]): string {
  if (todos.length === 0) {
    return 'No todos found.';
  }
  return todos.map((todo) => formatTodo(todo)).join('\n');
}

// SRP violation: this function does BOTH filtering AND formatting.
// Filtering logic should be in the store, not in the display module.
export function displayFiltered(todos: Todo[], showCompleted: boolean): string {
  const filtered = todos.filter((todo) => todo.completed === showCompleted);
  if (filtered.length === 0) {
    return showCompleted ? 'No completed todos.' : 'No incomplete todos.';
  }
  return filtered.map((todo) => formatTodo(todo)).join('\n');
}
