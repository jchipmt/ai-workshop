# Project 2: Refactor

## Goal

This is a working TODO application with messy code. All the tests pass, but the codebase is full of code smells — duplicated logic, copy-pasted validation, and functions that do too many things. Your job is to use AI to identify these problems and refactor the code while keeping all tests green.

## The Code

The app is split across three files:

- `src/todo.ts` — CRUD operations for managing todos
- `src/display.ts` — Formatting and display logic
- `src/storage.ts` — File-based JSON persistence

Everything works, but the structure is poor. There are specific code smells for you to find and fix.

## Code Smells to Address

1. **Duplicated title validation** — The same trim, empty check, and length check logic is copy-pasted in `todo.ts` `add()`, `todo.ts` `update()`, and `display.ts` `formatTitle()`.

2. **Duplicated date formatting** — Manual date-to-string formatting logic is duplicated in `todo.ts` (when creating todos) and `display.ts` (when rendering todos).

3. **Duplicated file I/O** — JSON read/write logic in `storage.ts` `load()` and `save()` both manually handle file existence checks, JSON parsing, and error handling with nearly identical patterns.

4. **SRP violations** — `todo.ts` handles both business logic AND console output. `display.ts` handles both formatting AND filtering.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the tests:

```bash
npm test
```

All tests should pass. Your goal is to refactor the code so that all tests still pass after your changes.

## Workflow: ASK → PLAN → AGENT

### 1. ASK

Start by asking the AI to analyze the codebase for code smells. For example:

> "Can you review the source code in this project and identify the code smells? I know there are issues with duplicated logic and single responsibility violations."

The AI will read through the files, spot the duplication and SRP violations, and explain what it finds.

### 2. PLAN

Ask the AI to propose a refactoring plan:

> "Can you suggest a plan to refactor this code? I want to eliminate the duplication and fix the SRP violations without breaking any tests."

Review the plan before proceeding. Make sure the proposed changes make sense and that the AI isn't changing behavior — only structure.

### 3. AGENT

Let the AI carry out the refactoring:

> "Go ahead and refactor the code according to the plan."

The AI will extract shared helpers, remove duplication, and separate concerns across the modules.

## Success Criteria

Run the tests after refactoring:

```bash
npm test
```

All tests should still pass. The code smells listed above should be eliminated — no more duplicated validation, no more duplicated date formatting, no more duplicated I/O patterns, and each function should have a single clear responsibility.
