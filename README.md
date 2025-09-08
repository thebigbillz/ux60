# 60 Days of UX Design - Figma Plugin

A Figma plugin that brings your 60-day UX design learning challenge directly into Figma. Track your daily progress, access video tutorials, and organize your learning by category.

## Features

- **Daily Challenge Tracking**: View all 60 days of UX design challenges
- **Progress Tracking**: Mark days as complete with persistent local storage
- **Category Filtering**: Filter by User Research, Wireframes, Usability Testing, Visual Design, Interaction Design, and Whiteboard Challenges
- **Video Integration**: Direct links to YouTube tutorials for each day
- **Progress Visualization**: See your completion percentage with a visual progress bar
- **Dark Theme**: Matches Figma's design system

## Installation

1. Open Figma
2. Go to Plugins → Development → Import plugin from manifest
3. Select the `manifest.json` file from this project
4. The plugin will be available in your Plugins menu

## Usage

1. Open the plugin from Figma's Plugins menu
2. Browse through the 60-day challenge
3. Click checkboxes to mark days as complete
4. Use category filters to focus on specific types of learning
5. Click "Watch Video" to open YouTube tutorials in your browser
6. Track your overall progress with the progress bar at the top

## Development

To modify the plugin:

1. Edit `src/ui.html` for UI changes
2. Edit `src/code.js` for plugin logic
3. Update `manifest.json` for configuration changes
4. Reload the plugin in Figma to see changes

## Data Structure

The plugin includes sample data for all 60 days. To update with your actual YouTube links:

1. Edit the `challengeData` array in `src/ui.html`
2. Replace the sample YouTube URLs with your actual video links
3. Ensure the day types match your categories

## Local Storage

Progress is saved locally using `localStorage` with the key `ux60-completed`. This means progress persists across Figma sessions but is device-specific.