# AI Introduction Workshop

Learn how to use AI-assisted development tools through hands-on exercises with real TypeScript projects. This workshop covers three core workflows: bug fixing, refactoring, and building new features — all guided by a structured ASK → PLAN → AGENT approach.

## Learning Objectives

- Use AI to identify and fix bugs in unfamiliar code
- Use AI to detect code smells and refactor for cleaner structure
- Use AI to plan and implement a new feature from scratch
- Use AI to navigate and reason about a completely unknown codebase
- Practice the ASK → PLAN → AGENT workflow for non-trivial development tasks

## Prerequisites

- **Node.js** 18 or later
- **npm** (included with Node.js)

## Getting Started

Each exercise is a self-contained project with its own dependencies. Pick any project and get going:

```bash
# Clone the repository
git clone <repository-url>
cd ai-workshop

# Choose a project and set it up
cd project-1-bug-fix   # or project-2-refactor, project-3-new-feature
npm install
npm test
```

You can work through the projects in any order. They are completely independent — no shared setup required.

## Exercise Projects

| Project | Description |
|---------|-------------|
| [Project 1 — Bug Fix](./project-1-bug-fix/) | A TODO app with an intentional bug. One test fails. Use AI to find and fix the defect. |
| [Project 2 — Refactor](./project-2-refactor/) | A TODO app with duplicated code and SRP violations. All tests pass. Use AI to clean up the code smells. |
| [Project 3 — New Feature](./project-3-new-feature/) | A clean TODO app baseline. All tests pass. Use AI to plan and implement priority levels. |
| [Project 4 — Investigation](./project-4-investigation/) | The Apollo 11 Lunar Module guidance computer code — with a hidden bug. Use AI to navigate a totally unfamiliar codebase, trace a reported anomaly, and find the root cause. |

## AI Usage Guidelines

Before starting, review [policy.md](./policy.md) for guidelines on using AI tools effectively and responsibly during the workshop.
