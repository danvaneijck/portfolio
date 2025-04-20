
# Trippy Tools

**Link:** [Live Demo](https://trippyinj.xyz)  
**Source Code:** [GitHub](https://github.com/danvaneijck/trippytools)  
**Date:** April 2024 – January 2025

---

## Overview

**Trippy Token Tools** is a suite of utilities for analyzing and distributing tokens on the Injective blockchain. The initial motivation came during a period of increased interest in Injective during early 2024, when I was researching tokens to potentially invest in. A key part of that research was analyzing **holder distributions** to identify wallets with disproportionately large ownership.

While browsing various tokens, two distinct categories became apparent: **utility tokens** and **meme coins**.

Meme coins are particularly fascinating—they function almost like cultural prediction markets. They typically have no intrinsic value and don’t pretend to. Instead, people speculate on the rise of ideas, memes, or narratives. Their real value lies in the **community that forms around them**—individuals who hold a portion of the token supply and rally together to grow and promote the project.

Despite their light-hearted nature, participating in meme coin ecosystems still requires proper research to avoid scams. The **decentralized and anonymous** nature of blockchain makes it trivial for bad actors to spin up fake communities and execute rug pulls.

**Trippy Tools** was built to:
- Explore the culture and mechanics of meme tokens
- Empower Injective users with research tools
- Enable token creation and distribution without requiring deep technical knowledge

---

## Tech Stack

- **Frontend:** React (with Vite), TypeScript, Tailwind CSS
- **Deployment:** Vercel + GitHub
- **Blockchain Integration:** Injective TypeScript SDK (for token holder and metadata queries)

As the app evolved, a backend was introduced for caching data and enabling deeper analytics:
- **Backend:** Python (Django) with Celery for async tasks
- **GraphQL API:** Hasura (serving Django models)
- **Database:** PostgreSQL (shared by Django & Hasura)
- **Infrastructure:** Docker Compose

The backend handles on-chain queries using the Injective Python SDK and exposes a view to trigger holder updates directly from the frontend.

---

## Highlights

- Analyze token holder distribution and liquidity sources
- View AMM protocol liquidity and identify whether it’s burned
- Create your own token and manage its metadata
- Perform token airdrops using various criteria:
  - Token holders
  - Liquidity providers
  - Mito Finance vault stakers
  - Governance proposal voters
  - Custom CSV uploads
- Run presales via airdrops to wallets that send funds to a designated wallet
- Invest in the toolset by holding the `$SHROOM` token, used to pay for airdrop and presale execution

---

## Screenshots

![Trippy Tools](/trippy-tools.png)

---

## Learnings & Reflections

This was my **first fully open-source project** built from scratch that gained real users. It served as both a technical learning experience and a way for me to embed myself in the Injective developer community.

Through this project, I gained deep familiarity with the Injective blockchain, smart contract integrations, and asynchronous backend architecture. It also helped me recognize the importance of planning features ahead of time, rather than building ad hoc. In hindsight, gathering community feedback earlier on would have helped shape the product to better meet user needs and likely increased engagement.

This project also reinforced the value of open source in building community trust, visibility, and collaborative innovation.
