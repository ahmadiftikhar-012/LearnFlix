# LearnFlix

LearnFlix is a front-end learning library prototype with a black, crimson, and
warm-gold theme inspired by streaming services. It organizes educational videos
into subject areas and lets visitors search, filter, and watch public YouTube
videos or playlists in an embedded player.

## Technology and scope

- **Stack:** HTML, CSS, Bootstrap, and JavaScript.
- **Video sources:** Public YouTube embeds; permitted local MP4 files can be added to `media/`.
- **Architecture:** Static, client-side prototype. It has no server, database, account system, or upload service.

## Pages

| Page | File | Purpose |
| --- | --- | --- |
| Home | `index.html` | Introduces the project and links to learning topics. |
| Media and Info | `media.html` | Demonstrates media elements, lesson information, course search, category filters, and the video player. |
| Register | `register.html` | Demonstrates HTML form controls, browser validation, and a local profile preview; it does not create an account. |
| Learning Paths | `services.html` | Groups subjects into responsive learning-path cards. |
| Portfolio | `portfolio.html` | Presents a captioned gallery using CSS Grid and animation. |
| Contact | `contact.html` | Describes the project and demonstrates client-side form feedback. |

Each page has its own stylesheet in `css/`. Course data, search, filtering, and
player selection are in `js/content-library.js`. The Contact and Register form
demonstrations use `js/contact.js` and `js/register.js`.

## AI use log

**Tool:** OpenAI Codex

**Prompt and tasks:** Brainstorm project ideas; explore page layouts and colors;
draft course descriptions; explain HTML, CSS, and JavaScript logic and syntax;
help implement and refine the pages and interactions.

**Changes and learning:** AI helped shape the theme, page layouts, descriptions,
and several code interactions. The complete `js/content-library.js` file was
generated with AI as an extra feature to organize course data and support course
cards, category search, filters, and video selection. AI also helped implement
the Contact form feedback and the Register form's local preview. I plan to study
these interactions so I can explain how they work.

## Instructor approval

Approval evidence: **Pending instructor approval.** Add the approved proposal or an instructor-approved email/link here when available.

## Run locally

Open the project folder in VS Code and use Live Server to serve `index.html`.
YouTube playback needs an internet connection and may be unavailable when a
video owner blocks embedding or removes a video. A local MP4 must be included in
the project folder to play on another device. Opening pages directly as `file://`
can prevent YouTube embeds from working.

## GitHub Pages

The project can be published as a static site. In the repository, open **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/(root)`, then save. GitHub Pages does not provide a backend for real accounts, uploads, or shared progress.
