import fs from 'node:fs';
import path from 'node:path';
import type { Todo } from './todo.js';

export function load(filePath: string): Todo[] {
  const resolved = path.resolve(filePath);

  if (!fs.existsSync(resolved)) {
    return [];
  }

  const content = fs.readFileSync(resolved, 'utf-8');

  try {
    const data = JSON.parse(content);
    if (!Array.isArray(data)) {
      throw new Error(`Invalid data in "${filePath}": expected an array`);
    }
    return data as Todo[];
  } catch (error) {
    if (error instanceof SyntaxError) {
      throw new Error(`Corrupted JSON in "${filePath}": ${error.message}`);
    }
    throw error;
  }
}

export function save(filePath: string, todos: Todo[]): void {
  const resolved = path.resolve(filePath);
  fs.mkdirSync(path.dirname(resolved), { recursive: true });
  fs.writeFileSync(resolved, JSON.stringify(todos, null, 2), 'utf-8');
}
