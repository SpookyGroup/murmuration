# Contributing to Murmuration

Murmuration is built on a biological trait architecture. Contributions should respect that foundation.

## What We Welcome

- **Bug fixes** — if something doesn't work as described, fix it
- **Performance improvements** — the engine should run smoothly at 300 agents
- **New emergence metrics** — if the extractor should surface something it currently doesn't, propose it
- **Visualization improvements** — better rendering, connection line algorithms, canvas performance
- **Documentation** — clearer explanations, better examples, translations

## What We Don't Accept

- **Framework dependencies** — Murmuration is zero-dependency by design. No React, no D3, no lodash. If it can't be done in vanilla JS, it doesn't belong here.
- **Build tools** — no webpack, no vite, no npm scripts. The product ships as files you can open.
- **Changes to core trait mechanics** — the trust battery charging rules, grief state machine, seppuku criteria, dishonor-to-sentinel flow, and collective memory weighting are architectural decisions, not bugs. If you think a mechanic should change, open an issue to discuss it first.
- **AI/LLM integration into the core engine** — the engine is rule-based by design. LLM integration belongs at the edges (input processing, output interpretation), not inside the simulation loop.

## How to Contribute

1. Fork the repository
2. Create a branch with a descriptive name
3. Make your changes
4. Open a pull request with a clear description of what changed and why

## Trait Proposals

If you want to propose a new biological trait for the engine:

1. Open an issue titled `[Trait Proposal] Name — Biological Source`
2. Describe the biological mechanism you're modeling
3. Explain what computational behavior it maps to
4. Show how it interacts with existing traits

The trait system has a specific design philosophy — biology is the blueprint, not the metaphor. Proposals that treat biological mechanisms as loose inspiration rather than engineering specifications will be redirected.

## Code Style

- No comments unless the WHY is non-obvious
- Variable names that say what they are
- No abstractions unless they earn their existence through reuse
- If it works in one function, don't split it into three
