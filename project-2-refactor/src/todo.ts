export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
}

export class TodoStore {
  private todos: Todo[] = [];

  add(title: string): Todo {
    // Inline title validation (duplicated in update())
    const trimmed = title.trim();
    if (trimmed.length === 0) {
      throw new Error('Title cannot be empty');
    }
    if (trimmed.length > 200) {
      throw new Error('Title cannot exceed 200 characters');
    }

    // Inline date formatting (duplicated in display.ts)
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;

    const todo: Todo = {
      id: crypto.randomUUID(),
      title: trimmed,
      completed: false,
      createdAt: formattedDate,
    };

    this.todos.push(todo);

    // SRP violation: business logic should not handle output
    console.log(`[ADD] Todo added: "${todo.title}" (id: ${todo.id})`);

    return todo;
  }

  list(): Todo[] {
    return [...this.todos];
  }

  toggle(id: string): Todo {
    const todo = this.todos.find((t) => t.id === id);
    if (!todo) {
      throw new Error(`Todo with id "${id}" not found`);
    }

    todo.completed = !todo.completed;

    // SRP violation: business logic should not handle output
    console.log(`[TOGGLE] Todo "${todo.title}" is now ${todo.completed ? 'completed' : 'incomplete'}`);

    return { ...todo };
  }

  remove(id: string): boolean {
    const index = this.todos.findIndex((t) => t.id === id);
    if (index === -1) {
      throw new Error(`Todo with id "${id}" not found`);
    }

    const removed = this.todos.splice(index, 1)[0];

    // SRP violation: business logic should not handle output
    console.log(`[REMOVE] Todo removed: "${removed.title}" (id: ${removed.id})`);

    return true;
  }

  update(id: string, newTitle: string): Todo {
    const todo = this.todos.find((t) => t.id === id);
    if (!todo) {
      throw new Error(`Todo with id "${id}" not found`);
    }

    // Inline title validation (duplicated from add())
    const trimmed = newTitle.trim();
    if (trimmed.length === 0) {
      throw new Error('Title cannot be empty');
    }
    if (trimmed.length > 200) {
      throw new Error('Title cannot exceed 200 characters');
    }

    todo.title = trimmed;

    // SRP violation: business logic should not handle output
    console.log(`[UPDATE] Todo updated: "${todo.title}" (id: ${todo.id})`);

    return { ...todo };
  }
}
