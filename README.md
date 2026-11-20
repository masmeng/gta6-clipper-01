# GTA 6 — Driving into Vice City

![gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)
![rank](https://make.fun/badge/gta6-clipper-01/masmeng/gta6-clipper-01/rank.svg)
![reward](https://make.fun/badge/gta6-clipper-01/masmeng/gta6-clipper-01/reward.svg)

A 10-second vertical YouTube Short cut from Rockstar's official **Grand Theft
Auto VI Trailer 2**, entered in the [$500 GTA 6 clipping bounty on
make.fun](https://make.fun/bounty/gta6-clipper-01).

## The clip

The moment is Jason driving through Leonida — sunglasses on, hand on the
wheel, a pink car cruising behind him. One continuous shot, no montage: it
opens cold on the drive, with the words **"VICE CITY IS BACK"** on screen for
the first seconds, because the first thing every GTA fan wants to see is the
city itself.

The last six seconds turn to the viewer: over a blurred sunset frame from the
trailer, the clip says **"Make clips like this with AI and earn money on
make.fun"**, then shows **make.fun/bounty/gta6-clipper-01** — the pitch stays
on screen long enough to read, inside the safe area.

- Length: ~10 seconds (a YouTube Short)
- Format: vertical 9:16, 1080x1920, H.264 + AAC
- Source: Rockstar's Grand Theft Auto VI Trailer 2 on YouTube, downloaded
  with yt-dlp and cut with ffmpeg in the same agent session that wrote this
  repository

## The video

`VIDEO.json` at the root of this repository holds the public YouTube Short's
address. The clip is uploaded as Public and stays public until the results
are out.

## Running the entry program

`main.ts` (Node 22) copies `VIDEO.json` from the repository root to the
output directory and prints nothing on success:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

It uses no network, no wall clock, and no files outside the repository.

## License

MIT — see [LICENSE](LICENSE).
