import { TodoStore } from '../src/todo.js';

describe('TodoStore', () => {
  let store: TodoStore;

  beforeEach(() => {
    store = new TodoStore();
  });

  describe('add', () => {
    it('creates a todo with correct properties', () => {
      const todo = store.add('Buy groceries');

      expect(todo.title).toBe('Buy groceries');
      expect(todo.completed).toBe(false);
      expect(todo.id).toBeDefined();
      expect(typeof todo.id).toBe('string');
      expect(todo.createdAt).toBeDefined();
      // Verify createdAt is a valid ISO timestamp
      expect(new Date(todo.createdAt).toISOString()).toBe(todo.createdAt);
    });

    it('trims whitespace from title', () => {
      const todo = store.add('  Buy milk  ');
      expect(todo.title).toBe('Buy milk');
    });

    it('throws for empty title', () => {
      expect(() => store.add('')).toThrow('Title cannot be empty');
    });

    it('throws for whitespace-only title', () => {
      expect(() => store.add('   ')).toThrow('Title cannot be empty');
    });
  });

  describe('list', () => {
    it('returns all added todos', () => {
      store.add('Task 1');
      store.add('Task 2');
      store.add('Task 3');

      const todos = store.list();
      expect(todos).toHaveLength(3);
      expect(todos.map((t) => t.title)).toEqual(['Task 1', 'Task 2', 'Task 3']);
    });

    it('returns a copy, not the internal array', () => {
      store.add('Task 1');

      const list1 = store.list();
      const list2 = store.list();

      expect(list1).toEqual(list2);
      expect(list1).not.toBe(list2);

      // Mutating the returned array should not affect the store
      list1.push(list1[0]);
      expect(store.list()).toHaveLength(1);
    });
  });

  describe('remove', () => {
    it('removes a todo by id', () => {
      const todo = store.add('To remove');
      store.add('To keep');

      const result = store.remove(todo.id);

      expect(result).toBe(true);
      const remaining = store.list();
      expect(remaining).toHaveLength(1);
      expect(remaining[0].title).toBe('To keep');
    });

    it('throws for non-existent id', () => {
      expect(() => store.remove('non-existent-id')).toThrow(
        'Todo with id "non-existent-id" not found'
      );
    });
  });
});
