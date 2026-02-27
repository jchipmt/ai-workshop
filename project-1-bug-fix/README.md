# Project 1: Bug Fix

## Goal

This is a TODO application with a bug. One of the tests is failing because of a defect somewhere in the code. Your job is to use AI to find the bug and fix it.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the tests:

```bash
npm test
```

You should see that one test is failing. Don't fix it manually — use the AI workflow below to find and resolve the issue.

## Workflow: ASK → PLAN → AGENT

### 1. ASK

Start by asking the AI to analyze the failing test and the source code. For example:

> "I have a failing test in this project. Can you look at the test output and the source code to identify the root cause?"

The AI will read the test results, trace through the relevant code, and explain what's going wrong.

### 2. PLAN

Once the AI has identified the issue, ask it to propose a fix:

> "Can you suggest a fix for this bug?"

Review the proposed change before applying it. Make sure you understand what the fix does and why it works.

### 3. AGENT

Let the AI implement the fix:

> "Go ahead and apply the fix."

The AI will edit the source code to resolve the bug.

## Success Criteria

Run the tests again after the fix:

```bash
npm test
```

All tests should pass. If they do, you've completed the exercise!
