# LearnFlix

LearnFlix is a client-side learning library prototype with a dark crimson theme. It organizes video lessons into categories and provides course search, category filtering, and an embedded YouTube player with a playlist selector.

## Theme and technology

- **Theme:** An educational streaming-style library for learners.
- **Technology:** HTML, CSS, Bootstrap, and JavaScript.
- **Content:** YouTube videos and playlists play through YouTube's embedded player. A local video can be added in the project's `media/` folder. The site has no server, database, or account backend.

## Assignment 1 pages

1. **Home** — `index.html`; introduces LearnFlix and links to learning content.
2. **Media and Info** — `media.html`; demonstrates video and audio, lists, a lesson-details table, and the course library.
3. **Register** — `register.html`; demonstrates form inputs and browser validation.

Each page links its own stylesheet in `css/`. The course entries and client-side search/filter behavior are in `js/content-library.js`.

## AI usage log

| Tool | What I asked | What changed / learning plan |
| --- | --- | --- |
| OpenAI Codex | Brainstorm a project theme, discuss page layout and color choices, draft course descriptions, and explain HTML/CSS/JavaScript concepts when I was stuck on logic or syntax. I also asked for help implementing and refining parts of the pages and interactions, including the JavaScript course search and category filter. | LearnFlix's layout, theme, descriptions, and some code and interactions were developed with AI assistance. I plan to study the search/filter component so I can explain how it works and recreate it myself. |

## Teacher approval evidence

Not added yet. Add the teacher-approved plan or a link to the approval email/screenshot here before submission.

## Run locally

Open the project folder in VS Code and use Live Server to serve `index.html`. YouTube playback requires an internet connection. Opening the pages directly with a `file://` URL may prevent embedded playback.
