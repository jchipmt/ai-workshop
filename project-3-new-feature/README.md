# Project 3: New Feature

## Goal

This is a clean, working TODO application. All the tests pass and the code is well-structured. Your job is to use AI to plan and implement a new feature: **priority levels** for todos.

## The Feature

Add priority levels to the TODO app. Specifically:

- Each todo should have a `priority` field with values: `low`, `medium`, or `high`
- When a todo is created without specifying a priority, it should default to `medium`
- Users should be able to filter the todo list by priority
- Users should be able to sort todos by priority (high > medium > low)

This feature requires changes across multiple parts of the codebase:

- **Data model** — Add the `priority` field to the `Todo` interface
- **Store logic** — Update `add()` to accept an optional priority, implement `filterByPriority()` and `sortByPriority()`
- **Tests** — Write new tests covering the priority feature

## The Code

The app has two source files:

- `src/todo.ts` — `TodoStore` class with add, list, and remove operations
- `src/storage.ts` — JSON file persistence, separated from business logic

## Acceptance Criteria

Your implementation is complete when:

1. Todos have a `priority` field that accepts `low`, `medium`, or `high`
2. Creating a todo without specifying a priority defaults to `medium`
3. The todo list can be filtered by a specific priority level
4. The todo list can be sorted by priority, where high comes first, then medium, then low
5. All existing tests still pass
6. New tests cover the priority feature and pass

## Getting Started

Install dependencies:

```bash
npm install
```

Run the tests:

```bash
npm test
```

All tests should pass. This is your clean baseline before adding the feature.

## Workflow: ASK → PLAN → AGENT

### 1. ASK

Start by asking the AI to understand the current codebase and think through the feature. For example:

> "I need to add priority levels (low, medium, high) to this TODO app. Can you review the current code and explain what changes would be needed to support priorities, filtering by priority, and sorting by priority?"

The AI will read through the source files and tests, then outline what needs to change.

### 2. PLAN

Ask the AI to create a detailed implementation plan:

> "Can you create a plan for implementing the priority feature? I need changes to the data model, the store logic, and new tests. The default priority should be medium."

Review the plan before proceeding. Make sure it covers the data model change, the new store methods, and the test additions. Check that it won't break existing functionality.

### 3. AGENT

Let the AI implement the feature:

> "Go ahead and implement the priority feature according to the plan."

The AI will modify the data model, add the new store methods, and write tests for the new functionality.

## Success Criteria

Run the tests after implementing the feature:

```bash
npm test
```

All existing tests should still pass, and your new tests for the priority feature should pass too. Specifically:

- Adding a todo without a priority gives it `medium` by default
- Adding a todo with a specific priority stores it correctly
- Filtering by priority returns only todos with that priority
- Sorting by priority orders todos from high to low
