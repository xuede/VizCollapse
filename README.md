# Quantum Pinball

This repository contains a small, self-contained web demo illustrating wave-particle duality via a Mach-Zehnder interferometer. The entire simulation runs in a single HTML file (`index.html`) with vanilla JavaScript and SVG canvas drawing.

## Running locally

1. Clone the repository or download the files.
2. Open `index.html` in any modern browser. No build tools or external dependencies are required.
3. Adjust the **ΔL** slider to change the path difference between interferometer arms.
4. Click on an arm to insert or remove a detector. Detectors collapse the wave function, causing the histogram bars at ports **A** and **B** to equalize.
5. Use the **Single Photon** checkbox to toggle between a stream of photons or one photon at a time.

## GitHub Pages

This page can also be served directly from GitHub Pages. Simply enable Pages on your fork or clone and point it at the repository root. Visiting the published URL will load the demo.

## File overview

- `index.html` – All HTML, CSS, and JavaScript for the visualization.
- `README.md` – This documentation.

Enjoy exploring quantum interference!
