# 501 Dart Bot Score Tracker - Progressive Web App

This app has been converted to a **Progressive Web App (PWA)** and can be **fully installed** on your Samsung phone as a standalone app (not just a shortcut).

## Features

✅ **Offline Support** - Play and track scores without an internet connection  
✅ **Full App Installation** - Installs as a real app without browser UI (Chrome required)  
✅ **Dartboard Icon** - Custom SVG dartboard icon for the app  
✅ **Automatic Updates** - Service worker handles caching and updates  
✅ **Local Storage** - All data is stored locally on your device  
✅ **Standalone Mode** - Runs fullscreen without address bar or browser controls

## Installation on Samsung Phone

### ⭐ Best Method: Chrome Browser (Standalone App)

This installs the app as a real app, not just a shortcut.

1. **Open in Chrome** on your Samsung phone
2. Navigate to the app URL or open the folder location
3. **Wait 5-10 seconds** for the install prompt to appear
4. Tap **"Install"** when prompted
5. The app will be installed as a standalone app on your home screen

**What to expect:**
- No address bar or browser UI
- Runs fullscreen like a native app
- App icon appears on home screen and app drawer
- Can be managed like any other app in Settings

### Alternative Method: Samsung Internet (Quick Shortcut)

If Chrome install doesn't prompt, or you prefer Samsung Internet:

1. Open in **Samsung Internet**
2. Tap the **three-dot menu** (⋮)
3. Tap **"Add page to"** → **"Home screen"**
4. Customize the name and tap **"Add"**

This creates a shortcut (not a full app install).

### Alternative Method: Firefox

1. Open in **Firefox**
2. Tap **three-dot menu** (⋮)
3. Tap **"Install"**
4. Confirm installation

## How to Verify It's Installed as a Real App

After installation:
- ✅ No address bar or browser controls visible
- ✅ Shows "Darts Tracker" in home screen
- ✅ Appears in Settings → Apps with uninstall option
- ✅ Can be updated independently from browser
- ✅ Works in airplane mode (offline)

## How to Use

### Starting a Match
1. Launch the app from your home screen
2. Select your game mode (301, 501, or 701)
3. Configure match settings (best-of legs/sets)
4. Select players from your profiles
5. Tap **"START MATCH"** to begin

### Scoring During a Match
- **High Score Mode** (>170): Enter total points for the turn
- **Per-Dart Mode** (≤170): Enter each dart individually with multipliers (Single/Double/Triple)
- View statistics, best legs, and performance metrics

### Player Management
- Create custom player profiles to track statistics
- Set up quick score favorites for each player
- View detailed statistics across all games

## Offline Usage

Once installed as a standalone app:
- ✅ All app features work without internet
- ✅ Match data is saved locally
- ✅ Statistics are preserved across sessions
- ✅ Works even if your device goes offline during a match
- ✅ Automatic updates download when online (applied on restart)

## File Structure

```
MyDartsScoreTracker/
├── index.html           # Main app (no internet needed after install)
├── manifest.json        # PWA configuration (enables standalone mode)
├── sw.js               # Service worker (enables offline functionality)
├── dartboard.svg       # App icon
└── README.md           # This file
```

## Browser Compatibility for Installation

| Browser | Standalone Install | Shortcut Only |
|---------|:------------------:|:-------------:|
| Chrome 31+ | ✅ Yes | - |
| Firefox 44+ | ✅ Yes | - |
| Samsung Internet 4+ | ❌ Shortcut | ✅ Yes |
| Safari 11.1+ (iOS) | ✅ Yes | - |
| Edge 79+ | ✅ Yes | - |

**Recommendation:** Use Chrome for the best standalone app experience on Android.

## Troubleshooting

**No install prompt in Chrome:**
- Make sure you wait 5-10 seconds after loading the page
- Try opening the page in a new tab
- Clear Chrome cache and reload
- Ensure you're using a recent version of Chrome

**App won't work offline:**
- Reinstall the app to ensure service worker is registered
- Check that "offline" features are allowed in Chrome Settings
- Clear app cache: Settings → Apps → Darts Tracker → Storage → Clear Cache

**Lost data after reinstalling:**
- Data is stored locally - reinstalling shouldn't delete it
- If data is lost, check that you have the same app installed (name: "My Darts Score Tracker")
- Consider creating profiles regularly to backup player names

**How to Uninstall:**
- Android: Long-press the app icon → Uninstall
- Or: Settings → Apps → Darts Tracker → Uninstall

**How to Update:**
- The app automatically checks for updates in the background
- Restart the app to apply new updates
- Updates happen transparently without browser interference

## Why Use the Standalone Install?

| Feature | Browser Shortcut | Standalone App |
|---------|:---------------:|:---------------:|
| Works offline | ✅ | ✅ |
| No browser UI | ❌ | ✅ |
| Full screen | ❌ | ✅ |
| Separate app icon | ❌ | ✅ |
| Faster startup | ❌ | ✅ |
| Auto-updates | ⚠️ Manual | ✅ Auto |
| Settings integration | ❌ | ✅ |

## Technical Details

### Service Worker
The app includes a service worker that:
- Caches essential files on first load
- Serves cached content when offline
- Automatically updates in the background
- Handles navigation offline gracefully

### Manifest.json
Defines the app as:
- Standalone display mode (no browser UI)
- Portrait orientation
- Custom theme colors matching the app design
- App shortcuts for quick actions

### Local Storage
All data is saved to browser local storage:
- Player profiles
- Match statistics
- Game history
- Preferences

Data persists even if:
- Browser is closed
- Device is restarted
- Network is disconnected

## Privacy & Data

✅ **No data sent to servers** - everything stays on your device  
✅ **No ads or tracking** - app is ad-free  
✅ **No accounts required** - no login or registration needed  
✅ **Full offline access** - after installation, zero internet dependencies

## Tips & Best Practices

🎯 **Quick Tips:**
- Create profiles with initials for faster input (e.g., "JD" instead of "John Doe")
- Customize quick score buttons for your favorite combinations
- Check statistics after each match to track progress
- Use the undo button liberally - it's safe to correct mistakes
- The app saves data in real-time as you play

📊 **Statistics Tips:**
- Filter by game mode to see specific performance
- Check "Most Recent" to review your last match
- Use "All-Time" for overall trends
- Watch your 3-dart average to measure improvement

## Frequently Asked Questions

**Q: Will my data be lost if I uninstall?**  
A: Yes, uninstalling clears all local data. Consider creating profiles in advance.

**Q: Can I use this on multiple devices?**  
A: Yes, but data is local to each device. They won't sync automatically.

**Q: How much data does it use?**  
A: Less than 5MB total. Minimal battery impact. Works in low-power mode.

**Q: Is it safe to play offline?**  
A: Completely safe. No network calls are made. All processing is local.

**Q: Can I export my statistics?**  
A: Currently no, but data is stored as JSON in local storage if you want to manually export it.

---

Enjoy tracking your darts scores! 🎯

