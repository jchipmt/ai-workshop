import fs from 'node:fs';
import path from 'node:path';
import type { Todo } from './todo.js';

// Duplicated file I/O patterns: load() and save() both manually handle
// file existence checks, JSON parsing/serialization, and error handling
// in nearly identical try/catch blocks.

export function load(filePath: string): Todo[] {
  try {
    // Manual file existence check (duplicated in save())
    const resolvedPath = path.resolve(filePath);
    if (!fs.existsSync(resolvedPath)) {
      // File not found — return empty array
      return [];
    }

    // Manual JSON read and parse (duplicated pattern with save's write)
    const fileContent = fs.readFileSync(resolvedPath, 'utf-8');
    const parsed = JSON.parse(fileContent);

    if (!Array.isArray(parsed)) {
      throw new Error(`Invalid data format in "${resolvedPath}": expected an array`);
    }

    return parsed as Todo[];
  } catch (error) {
    // Duplicated error handling pattern (mirrors save's catch block)
    if (error instanceof SyntaxError) {
      throw new Error(`Corrupted JSON in "${filePath}": ${error.message}`);
    }
    throw error;
  }
}

export function save(filePath: string, todos: Todo[]): void {
  try {
    // Manual file existence check (duplicated from load())
    const resolvedPath = path.resolve(filePath);
    const dir = path.dirname(resolvedPath);
    if (!fs.existsSync(dir)) {
      // Directory doesn't exist — create it
      fs.mkdirSync(dir, { recursive: true });
    }

    // Manual JSON serialize and write (duplicated pattern with load's read)
    const jsonContent = JSON.stringify(todos, null, 2);
    fs.writeFileSync(resolvedPath, jsonContent, 'utf-8');
  } catch (error) {
    // Duplicated error handling pattern (mirrors load's catch block)
    if (error instanceof SyntaxError) {
      throw new Error(`Failed to serialize todos to "${filePath}": ${error.message}`);
    }
    throw error;
  }
}
