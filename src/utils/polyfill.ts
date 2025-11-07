// Workaround to avoid "Property 'VideoFrame' doesn't exist" error
global.VideoFrame = class VideoFrame {
  constructor() {
    console.log('tried to create VideoFrame');
  }
} as any;