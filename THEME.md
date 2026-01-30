# Ghanti App Theme and Structure

This document outlines the current theme, structure, and appearance of the Ghanti (Bell) application as per the reverted state (`f182ee6`).

## 1. Visual Theme
*   **Background**: Standard browser background (currently white/default).
*   **Bell Color**: Black (`currentColor` in SVG, inheriting from container defaults).
*   **Typography**: System default sans-serif (no custom fonts applied).
*   **Aesthetics**: Minimalist and functional. The focus is on the physics-based animation of the bell assembly.

## 2. Component Structure
The application is built using React and follows this DOM hierarchy:

### Main Layout (`.container`)
- Full viewport dimensions (`100vw`, `100vh`).
- Flexbox centering (`justify-content: center`, `align-items: center`).
- Relative positioning for overlaying buttons.

### Interactive Elements
- **Motion Button (`.motion-btn`)**: 
  - Positioned absolutely at the bottom (reverted state styling).
  - Used to request `DeviceMotionEvent` permissions on iOS devices.
- **Bell Assembly (`.circle` > `.bell`)**:
  - **.circle**: A decorative or structural container centered in the screen.
  - **.bell**: Controlled by a React state `rotation`. It uses a CSS `transform: rotate(Xdeg)` to simulate swinging.
  - **BellSVG**: A custom SVG component rendered inside the bell div, containing the bell, chain links, and mounting hardware.

## 3. Core Logic (Physics & Sound)
- **Physics Engine**: Uses `requestAnimationFrame` to simulate a damped harmonic oscillator (gravity + spring force + friction).
- **Shake Detection**: Uses Linear Acceleration (excluding gravity) via the `devicemotion` API.
- **Sound Trigger**: Plays `bell.wav` when the bell crosses the center point (rotation 0) with a velocity-dependent volume.
- **Click Interaction**: Tapping the screen gives the bell a random impulse to start swinging.

## 4. Current Configuration (f182ee6)
- **Gravity/Spring Constant**: `0.15`
- **Friction/Damping**: `0.992`
- **Shake Threshold**: `3.0 m/s²`
- **Max Rotation**: `60 degrees`
- **Debounce Time**: `150ms` between rings.
