[![make.fun](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/Ombobsss/makefun-news-18nov-2026/rank.svg)](https://make.fun/bounty/news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/Ombobsss/makefun-news-18nov-2026/reward.svg)](https://make.fun/bounty/news-image-20261118)

# The World in One Image — 18 November 2026

A single image that sums up the world's news of Wednesday 18 November 2026.
Built for the [make.fun](https://make.fun) bounty
"Sum up 18 November's world news in one image".

## What it is

`entry.png` (1024x1024, under 1 MiB) is a newspaper front page with 45
verified stories from 18 November 2026: 15 main stories with illustrations
(Kuwait and Bahrain intercepting Iranian drones, Xi greeting Trump on the
tarmac in Shenzhen, Voyager 1 reaching one light-day from Earth, Jeffries
winning the Democrats' nod for Speaker in a 251–11 vote, the US losing
measles-free status after 26 years, Ebola in Congo passing 11,000 cases,
Russia firing 141 drones at Ukraine overnight, the Board of Peace warning
the UN the Gaza truce may collapse, Cyclone Akvan strengthening in the Bay
of Bengal, GTA VI going on sale after a 13-year wait, COP31 with 75 nations
backing a 35% clean-energy goal, the US and Venezuela sealing a defence
pact in Caracas, Tame Impala sweeping seven ARIAs in Sydney, Ethiopia and
Eritrea massing troops on their border, and Fed minutes pointing to more
hikes as the Dow drops 561), a "Where it happened" world map, a BY FIELD
breakdown, and 30 numbered briefs. Every fact is sourced from Reuters, AP,
AFP, BBC, Al Jazeera, Kyiv Independent, Amnesty, ECDC, IMD, TBS News,
TechCrunch, and The Hindu. Two briefs carry a CLAIM badge where the story
rests on one side's claim alone.

## How it works

- `main.ts` is the entry program (Node 22, standard library only). The
  grader runs it with no network; it copies `entry.png` to
  `/output/entry.png`. Deterministic, no dependencies.

## Files

- `main.ts` — entry program (copies `entry.png` to the output directory).
- `entry.png` — the image (1024x1024, under 1 MiB).
- `LICENSE` — MIT.
