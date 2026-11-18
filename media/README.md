# Local media

This folder includes `sample-intro.wav`, a short original narration used by the
Media page's audio player.

## Adding a local lesson video

1. Add an MP4 that you created or have permission to use to this folder.
2. Add a `local-video` course entry to `../js/content-library.js` and set `source` to a project-relative path, such as `media/html-basics.mp4`.
3. Include the MP4 when sharing the project so it is available on other devices.

Do not use a path that points to a file on your personal computer. The current
course catalogue uses YouTube for its video lessons, so adding an MP4 is
optional. YouTube videos are streamed by YouTube and are not copied into this
folder.
