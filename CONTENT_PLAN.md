# LearnFlix content plan

## What the project supports now

LearnFlix is a static, client-side prototype built with HTML, CSS, Bootstrap, and JavaScript. The Media page reads a small catalogue from `js/content-library.js`, creates searchable course cards and category filters, and loads the selected course into the player. For YouTube playlists, the YouTube IFrame Player API also supplies the ordered video IDs for an on-page, scrollable lesson selector; selecting a lesson plays it in the embedded player. The selector shows lesson numbers and thumbnails because this prototype does not use the YouTube Data API to retrieve every video title.

The starter catalogue contains curated entries in four learning areas: Web Development, AI & Machine Learning, Data Science, and Cyber Security. It retains the supplied Sigma Web Development playlist and includes beginner and intermediate courses from CodeWithHarry, freeCodeCamp, 3Blue1Brown, Harvard CS50, and Professor Messer. YouTube serves these sources through its embedded player; LearnFlix does not download or store the streams. A short local WAV narration is included for the HTML audio control. Preview through a local web server such as VS Code Live Server. YouTube's embed documentation requires a valid HTTP Referer for playback, so opening the HTML directly as a `file://` URL can cause an embed error. If embedding is blocked, the player has an “Open on YouTube” fallback.

## How to add a course

Add a JavaScript object to `learnFlixCourses` in `js/content-library.js`:

```js
{
  id: "unique-course-id",
  title: "Course title",
  category: "Web Development",
  level: "Beginner",
  duration: "6 lessons",
  instructor: "Instructor or channel name",
  description: "What learners will be able to do after this course.",
  sourceType: "youtube-playlist",
  source: "YOUTUBE_PLAYLIST_ID"
}
```

Supported source types are `youtube-playlist` (playlist ID), `youtube-video` (video ID), and `local-video` (relative MP4 path). Use a short title, accurate category and level, and a description that explains the learning outcome. Keep one course per playlist or lesson sequence so categories and course cards remain clear.

## Organizing and reviewing content

1. Group related lessons into a playlist on YouTube or a project folder.
2. Choose one consistent category label, such as `Programming`, `Design`, or `Study Skills`.
3. Add the course metadata and source to the JavaScript catalogue.
4. Verify the source is public/embeddable or that the MP4 is included in the project folder.
5. Test the category filter, search, and playback, then update the project ZIP.

For local videos, put the permitted MP4 inside `media/` and set a relative path such as `media/html-basics.mp4`. Include the file in the submitted project. A path from the developer's personal computer will not work on another user's device.

## Limits of this assignment stack

There is no database, server-side upload, admin dashboard, or secure account system. Editing the catalogue means editing `js/content-library.js` and sharing a new project copy. YouTube playback needs an internet connection, and a video may refuse embedding, be removed, or be region-limited. A local MP4 works only when distributed with the site. A future production platform would need a backend, storage/streaming service, access controls, and a database.
