# LearnFlix content plan

## Current behavior

LearnFlix is a static, client-side prototype built with HTML, CSS, Bootstrap,
and JavaScript. The Media page reads its catalogue from
`js/content-library.js`, renders searchable course cards, creates category
filters, and loads the selected course into the player.

For YouTube playlists, the YouTube IFrame Player API supplies the ordered video
IDs for a scrollable lesson selector. Selecting an item plays it in the
embedded player. The selector displays lesson numbers and thumbnails; this
prototype does not use the YouTube Data API to retrieve video titles.

The catalogue covers Web Development, AI & Machine Learning, Data Science, and
Cyber Security. It includes the supplied Sigma Web Development playlist and
courses from CodeWithHarry, freeCodeCamp, 3Blue1Brown, Harvard CS50, and
Professor Messer. YouTube serves the video streams; LearnFlix does not download
or store them. The Media page also uses a short local WAV narration for its
audio control.

Preview the site through a local web server such as VS Code Live Server.
YouTube playback requires an internet connection and may fail when a video
owner blocks embedding, removes a video, or limits its availability. Opening
the project through a `file://` URL can also prevent embedded playback. The
player includes an “Open on YouTube” fallback.

## Add a course

Add an object to `learnFlixCourses` in `js/content-library.js`:

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

Supported `sourceType` values are `youtube-playlist`, `youtube-video`, and
`local-video`. For a local video, set `source` to a project-relative MP4 path.
Choose a unique ID and use one of the catalogue's category labels:
`Web Development`, `AI & Machine Learning`, `Data Science`, or
`Cyber Security`. Write a short description that explains the course's focus.

## Organize and review courses

1. Group related lessons in a YouTube playlist or project folder.
2. Choose the matching category and identify the course's level.
3. Add its metadata and source to the JavaScript catalogue.
4. Confirm that the source is public and embeddable, or include the permitted
   MP4 in the project folder.
5. Review search, category filtering, and playback, then share the updated
   project folder.

For local lessons, place the permitted MP4 in `media/` and set a path such as
`media/html-basics.mp4`. Do not use a path that points to a file on your own
computer.

## Limits of this project stack

The prototype has no database, server-side upload feature, admin dashboard, or
secure account system. Updating the catalogue means editing
`js/content-library.js` and sharing an updated project copy. A local MP4 works
only when the file is distributed with the site. A production learning
platform would need a backend, database, media storage and streaming, and
access controls.
