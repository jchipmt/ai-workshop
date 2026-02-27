export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
}

export class TodoStore {
  private todos: Todo[] = [];

  add(title: string): Todo {
    const trimmed = title.trim();
    if (!trimmed) {
      throw new Error('Title cannot be empty');
    }
    if (trimmed.length > 200) {
      throw new Error('Title cannot exceed 200 characters');
    }

    const todo: Todo = {
      id: crypto.randomUUID(),
      title: trimmed,
      completed: false,
      createdAt: new Date().toISOString(),
    };

    this.todos.push(todo);
    return todo;
  }

  list(): Todo[] {
    return [...this.todos];
  }

  remove(id: string): boolean {
    const index = this.todos.findIndex((todo) => todo.id === id);
    if (index === -1) {
      throw new Error(`Todo with id "${id}" not found`);
    }
    this.todos.splice(index, 1);
    return true;
  }
}
