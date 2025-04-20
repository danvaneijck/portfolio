# Choice Exchange AMM

**Link:** [Live Demo](https://choice.exchange)  
**Source Code:** [GitHub](https://github.com/choice-exchange/choice_exchange)  
**Date:** November 2024 - March 2025

---

## Overview

**Choice Exchange** is an automated money market protocol designed for the Injective blockchain. At its core, it leverages a suite of smart contracts written in **Rust**, enabling the **permissionless creation of liquidity pools** that follow the constant product formula: `x * y = k`. These pools facilitate decentralized trading between assets directly on-chain.

A unique aspect of Choice Exchange is its contribution to the **Injective burn auction**. Specifically, **0.05% of every swap** is automatically sent to the burn auction subaccount. These funds participate in Injective’s weekly auction, where wallets compete to win a basket of tokens. The winning bid—paid in INJ—is permanently burned, reducing total supply and supporting long-term deflation.

---

## My Role & Contributions

The foundation of this project was forked from **TerraSwap**, an open-source AMM protocol modeled after UniSwap v2 and originally built for the Terra Luna blockchain. Choice Exchange extends this implementation, adapting it to run natively on the Injective blockchain.

My primary responsibility was to **upgrade and customize the core smart contracts** for Injective compatibility. This included:

- **Adding a new feature**: the ability to automatically route 0.05% of all swap fees to the Injective burn auction. I designed and implemented a custom `send_to_auction` contract, which integrates with the pair contract and is executed during swaps.
- **Upgrading dependencies**: I migrated the entire codebase from `cosmwasm` v1 to v2, ensuring compatibility with the latest Injective tooling and ecosystem improvements.
- **Migrating to native tokens**: I replaced the CW20-based liquidity token system with native denominations using Injective’s **Token Factory module**. This involved:
  - Modifying the `factory` contract's `create_pair` function to generate native LP token denominations.
  - Refactoring the `pair` contract to use Injective's native `mint` and `burn` message types.
  - Updating and expanding the unit tests to validate all changes and ensure the new native token logic worked as expected.

These contributions significantly modernized the protocol’s architecture, reduced external dependencies, and aligned Choice Exchange more closely with Injective’s native ecosystem.

---

## Tech Stack

The Choice Exchange contracts are built using the `Rust` programming language. 
The primary dependencies are `cosmwasm-std` and `injective-cosmwasm`. 

---

## Highlights

- Native lp token denominations allow the liquidity tokens to be used in Injective-EVM modules. 
- Offering part of swap fees contribute to the Injective burn auction, which contributes to token supply deflation. 

---

## Screenshots

![Choice Swap](/choice_swap.png)

---

## Learnings & Reflections

**Choice Exchange** was the first large-scale project I completed using **Rust**, and it served as my introduction to smart contract development. Throughout the process, I gained hands-on experience writing new functions, refactoring existing logic, and designing and maintaining a comprehensive suite of unit tests.

One of the most rewarding aspects of forking an existing protocol was the ability to **break and fix** the original tests. The existing test suite acted as a safety net — helping me ensure that my enhancements didn't unintentionally alter core behavior. For example, while implementing the new fee-routing logic in the pair contract’s `swap` function, I was able to verify correctness by ensuring the original math-based tests still passed.

As part of the modernization process, I upgraded all dependencies (including a major migration from `cosmwasm` v1 to v2), which required reviewing and refactoring nearly every test case to ensure compatibility with the latest APIs and type definitions.

Working with Rust taught me the value of **strict type safety** and its impact on code clarity and reliability. I also developed a strong appreciation for **test-driven development** — and learned firsthand how **high test coverage** and thoughtful test design lead to safer, more maintainable code.
