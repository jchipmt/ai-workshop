1. Purposeful Use

Use Cursor where it meaningfully saves time or reduces manual effort, especially for:

One-off scripts and tooling

Repetitive or tedious tasks

Documentation and pull request summaries

Prefer using AI to build tools that solve problems rather than directly performing manual problem-solving.

Avoid using Cursor for low-value tasks (e.g., Git commands) where token cost outweighs benefit.

2. Structured Workflow

Follow a three-stage workflow for non-trivial work:

ASK – explore and understand the codebase

PLAN – define approach (prefer Markdown over chat)

AGENT – implement the plan

Break large tasks and refactors into small, well-scoped chunks to reduce retries and wasted tokens.

3. Context Discipline

Context directly impacts both quality and cost.

Provide:

Clear goals and constraints

Examples from the same or similar codebase

Explicit instructions on what to replicate or modify

Start new chat sessions regularly to prevent context bloat or when switching tasks / domains

Choose models wisely based on context size and cost

4. Model Cost Management

Use a tiered model strategy:

Higher-reasoning / premium models for planning and complex logic

Lower-cost models for routine tasks (e.g., unit tests, scaffolding)

Default to cheaper models first for execution; escalate only if results are insufficient.

Monitor the usage and credits dashboard regularly.

5. Standards and Rules

Rules files should be used for each code base

Rules must define architecture, patterns, and constraints to:

Reduce rework

Improve consistency

Minimize review cycles

Well-structured, consistent codebases reduce token usage and improve outcomes.

6. Safety and Review

Do not allow agents to execute commands without verification.

Manually whitelist expected actions in agent mode.

AI-generated code must always be reviewed, especially for:

Long-lived code

Core business logic

Unfamiliar technologies

7. Documentation Efficiency

Use Cursor to generate:

Pull request descriptions

Change summaries

Technical documentation

Prefer outputs in formats Cursor handles efficiently:

Markdown

Mermaid diagrams

8. Accountability

Treat token usage as a shared cost.

Be intentional with prompts, models, and session length.

The engineer is still copiable for the outputs of AI Models