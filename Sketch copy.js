let vid;
function setup() {
  noCanvas();

  vid = createVideo(
    ['assets/small.mp4', 'assets/small.ogv', 'assets/small.webm'],
    vidLoad
  );

  vid.size(100, 100);
}

// This function is called when the video loads
function vidLoad() {
  vid.loop();
  vid.volume(0);
}