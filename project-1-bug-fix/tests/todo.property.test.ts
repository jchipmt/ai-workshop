// Feature: ai-workshop-projects, Property 1: Bug Fix Project CRUD round trip
// **Validates: Requirements 2.1**

import fc from 'fast-check';
import { TodoStore } from '../src/todo.js';

// Generator: non-empty trimmed strings between 1-200 chars
const validTitle = fc
  .string({ minLength: 1, maxLength: 200 })
  .filter((s) => s.trim().length > 0)
  .map((s) => s.trim());

describe('Property 1: Bug Fix Project CRUD round trip', () => {
  it('add/list/remove cycle preserves title and cleans up', () => {
    fc.assert(
      fc.property(validTitle, (title) => {
        const store = new TodoStore();

        // Add a todo with the generated title
        const added = store.add(title);

        // List should contain the added todo with the exact title
        const listAfterAdd = store.list();
        expect(listAfterAdd).toHaveLength(1);
        expect(listAfterAdd[0].title).toBe(title);
        expect(listAfterAdd[0].id).toBe(added.id);

        // Remove the todo by ID
        store.remove(added.id);

        // List should be empty after removal
        const listAfterRemove = store.list();
        expect(listAfterRemove).toHaveLength(0);
      }),
      { numRuns: 100 },
    );
  });
});
