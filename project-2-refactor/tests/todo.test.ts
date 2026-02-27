import { TodoStore } from '../src/todo.js';

describe('TodoStore', () => {
  let store: TodoStore;

  beforeEach(() => {
    store = new TodoStore();
  });

  describe('add', () => {
    it('creates a todo with correct properties', () => {
      const todo = store.add('Buy groceries');

      expect(todo.id).toBeDefined();
      expect(todo.title).toBe('Buy groceries');
      expect(todo.completed).toBe(false);
      expect(todo.createdAt).toBeDefined();
    });

    it('trims whitespace from the title', () => {
      const todo = store.add('  Buy groceries  ');
      expect(todo.title).toBe('Buy groceries');
    });

    it('throws on empty title', () => {
      expect(() => store.add('')).toThrow('Title cannot be empty');
    });

    it('throws on whitespace-only title', () => {
      expect(() => store.add('   ')).toThrow('Title cannot be empty');
    });
  });

  describe('list', () => {
    it('returns all added todos', () => {
      store.add('First');
      store.add('Second');

      const todos = store.list();
      expect(todos).toHaveLength(2);
      expect(todos[0].title).toBe('First');
      expect(todos[1].title).toBe('Second');
    });

    it('returns a copy, not the internal array', () => {
      store.add('Test');
      const list1 = store.list();
      list1.pop();
      expect(store.list()).toHaveLength(1);
    });
  });

  describe('toggle', () => {
    it('flips completed status from false to true', () => {
      const todo = store.add('Toggle me');
      expect(todo.completed).toBe(false);

      const toggled = store.toggle(todo.id);
      expect(toggled.completed).toBe(true);
    });

    it('flips completed status back to false', () => {
      const todo = store.add('Toggle twice');
      store.toggle(todo.id);
      const toggled = store.toggle(todo.id);
      expect(toggled.completed).toBe(false);
    });

    it('throws for non-existent id', () => {
      expect(() => store.toggle('non-existent')).toThrow('not found');
    });
  });

  describe('remove', () => {
    it('removes a todo by id', () => {
      const todo = store.add('Remove me');
      expect(store.list()).toHaveLength(1);

      const result = store.remove(todo.id);
      expect(result).toBe(true);
      expect(store.list()).toHaveLength(0);
    });

    it('throws for non-existent id', () => {
      expect(() => store.remove('non-existent')).toThrow('not found');
    });
  });

  describe('update', () => {
    it('updates the title of an existing todo', () => {
      const todo = store.add('Original title');
      const updated = store.update(todo.id, 'Updated title');

      expect(updated.title).toBe('Updated title');
      expect(updated.id).toBe(todo.id);
    });

    it('trims whitespace from the new title', () => {
      const todo = store.add('Original');
      const updated = store.update(todo.id, '  New title  ');
      expect(updated.title).toBe('New title');
    });

    it('throws on empty new title', () => {
      const todo = store.add('Original');
      expect(() => store.update(todo.id, '')).toThrow('Title cannot be empty');
    });

    it('throws on whitespace-only new title', () => {
      const todo = store.add('Original');
      expect(() => store.update(todo.id, '   ')).toThrow('Title cannot be empty');
    });

    it('throws for non-existent id', () => {
      expect(() => store.update('non-existent', 'New title')).toThrow('not found');
    });
  });
});
