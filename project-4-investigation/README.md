# Project 4: Investigation

## Goal

You've been dropped into a codebase you've never seen before — the Apollo 11 Lunar Module guidance computer source code. This is real AGC (Apollo Guidance Computer) assembly, written in the 1960s, that flew humans to the Moon.

A bug has been introduced somewhere in this code. You have a report from a simulated test run describing the symptoms. Your job is to use AI to:

1. Understand what this codebase is and how it's structured
2. Figure out which parts of the code are relevant to the reported problem
3. Narrow down the root cause
4. Propose a fix

You are not expected to learn AGC assembly. You are expected to use AI as a tool to navigate, comprehend, and reason about a totally unfamiliar code space.

## The Codebase

The `Luminary099/` directory contains the source code for the Lunar Module's guidance computer — the software that controlled the LM during descent, landing, ascent, and rendezvous. It's roughly 90 files of AGC assembly, totaling tens of thousands of lines.

Key things to know:
- Files use the `.agc` extension (Apollo Guidance Computer assembly)
- `MAIN.agc` is the entry point — it includes all other files
- Comments start with `#`
- The code is organized into functional modules (guidance, navigation, control, telemetry, etc.)
- Constants and parameters are defined separately from the routines that use them

## The Bug Report

During a simulated descent test run, the following anomaly was observed:

---

**ANOMALY REPORT — LM DESCENT SIMULATION #471**

**Summary:** Landing site position drifts unexpectedly during braking phase (P63) and approach phase (P64). The LAND vector, which represents the target landing site in guidance coordinates, accumulates a systematic lateral error over the course of powered descent.

**Observed behavior:**
- During P63 (braking phase), the computed landing site position shows a growing offset from the expected coordinates
- The lateral drift is approximately 75% smaller than expected lunar surface motion compensation
- The RANGEDSP (slant range to landing site) display shows values inconsistent with the actual trajectory
- Redesignation corrections in P64 do not fully compensate for the drift
- The error is consistent and repeatable across multiple simulation runs

**Expected behavior:**
- The LAND vector should be continuously updated to account for lunar rotation during the descent
- The landing site should remain stable in inertial coordinates when properly corrected for the Moon's rotation
- RANGEDSP should accurately reflect the true slant range

**Additional notes:**
- The guidance equations themselves (LUNLAND, RGVGCALC, TTF/8CL, QUADGUID) appear to execute correctly
- The issue seems to be in the *inputs* to the guidance loop rather than the guidance math itself
- The drift rate is constant, suggesting a scaling or parameter error rather than a logic bug
- Engine parameters and thrust profiles check out nominal
- The error manifests in the TTFINCR routine where LAND is updated using the lunar rotation vector WM

**Affected routines:** TTFINCR (in LUNAR_LANDING_GUIDANCE_EQUATIONS.agc), and anything downstream that reads the LAND vector.

---

## Workflow: ASK → PLAN → AGENT

### 1. ASK

Start by asking the AI to help you understand the codebase. You know nothing about AGC assembly — that's the point. For example:

> "I have a codebase I've never seen before. It's the Apollo 11 Lunar Module guidance computer. Can you help me understand how it's structured and what the main modules do?"

Then share the bug report and ask the AI to help you reason about it:

> "Here's a bug report from a simulation test. Can you help me trace through the code to understand what might cause the landing site position to drift during descent?"

### 2. PLAN

Work with the AI to narrow down the root cause. The bug report gives you clues — follow them:

> "The report mentions TTFINCR updates the LAND vector using a lunar rotation vector WM. Can you find where WM is computed and what constants feed into it?"

> "Can you check if any of the physical constants related to lunar rotation look wrong?"

### 3. AGENT

Once you've identified the issue, let the AI fix it:

> "Can you fix the constant and explain what the correct value should be?"

## Success Criteria

You've completed the exercise when you can:

1. Explain (in your own words) what the codebase is and how it's organized
2. Identify the specific file and line containing the bug
3. Explain why the bug causes the symptoms described in the report
4. Apply the correct fix

## Tips

- Don't try to read the code yourself line by line. Use AI to summarize, search, and explain.
- Follow the chain: symptom → routine → inputs → constants
- The bug is subtle — the code *looks* correct at a glance. Pay attention to scaling and units.
- There are ~90 files. Let AI help you figure out which ones matter.
