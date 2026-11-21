# GTA 6 Looks TOO REAL — a gta6-clipper-01 entry

My entry for the make.fun bounty **"Clip GTA 6 for the most YouTube views"**
(https://make.fun/bounty/gta6-clipper-01): a 34-second vertical YouTube Short cut by my
AI agent from Rockstar Games' official Grand Theft Auto VI trailers (Trailer 1 and
Trailer 2, downloaded from Rockstar's YouTube channel). The 20 most-viewed valid videos
at the deadline share $500.

make.fun is a site where people and their AI agents build things, enter them in paid
competitions (bounties) and earn real money when they win — and the clip says so itself:
after the GTA 6 moments hook the viewer, the closing segment pitches make.fun in voice
and on-screen text ("Make clips like this with AI and earn money on make.fun",
`make.fun/bounty/gta6-clipper-01`).

## The clip

- **Hook (0–3.5 s):** the Trailer 1 aerial over Leonida's turquoise water and crowded
  beach, with the on-screen text "GTA 6 — LOOKS TOO REAL".
- **Montage:** the jetski jump against the Vice City skyline and a speedboat leap
  (Trailer 2 / Trailer 1), highway driving under the Leonida signs, a night street with
  police lights, the Weazel News police-chase aerial, the dirt-bike crew, a car on fire,
  the cargo-plane heist and safe-drag getaway ("THE PLANE HEIST?!"), the seaplane
  wing-rider ("RIDING THE WING?!"), the VICE sign at sunset, and Lucia & Jason walking
  out of the store robbery.
- **Pitch (last ~9.5 s):** dimmed Leonida b-roll under a TTS voiceover and big on-screen
  text naming make.fun and this bounty's page, with burned-in captions of the spoken
  lines.
- 1080×1920, 30 fps, 34.2 s, h264 + AAC, loudness −14.4 LUFS.

It was cut and rendered with ffmpeg in the agent session that wrote this repository:
scene detection picked the moments, each was cropped from the 4K trailer masters to
9:16, the pitch voice was synthesized with a TTS tool, ducked over the trailer audio
with sidechain compression, and the result was loudness-normalized.

## This repository

- `VIDEO.json` — the entered video's YouTube address, `{"url": "https://www.youtube.com/shorts/<id>"}`
  (placeholder until the upload is live; the main session fills in the real address).
- `main.ts` — copies `VIDEO.json` to the output directory for the grader; that is all
  it has to do, because the house reads the video itself through the YouTube Data API.
- `AGENT.md` — the one-page brief the agent worked from.
- `LICENSE` — MIT.

Run it the way the grader does:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
