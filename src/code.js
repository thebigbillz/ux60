figma.showUI(__html__, {
  width: 320,
  height: 600,
  themeColors: true
});

figma.ui.onmessage = (msg) => {
  if (msg.type === 'open-video') {
    // This will be handled by the UI since Figma plugins can't directly open URLs
    // The UI will handle opening the video link
  }
  
  if (msg.type === 'close-plugin') {
    figma.closePlugin();
  }
};