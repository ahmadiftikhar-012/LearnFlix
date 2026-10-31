/* Course catalogue for the client-side LearnFlix prototype.
   Add or edit course objects here; cards and category filters are generated below. */
const learnFlixCourses = [
  {
    id: "sigma-web-development",
    title: "Sigma Web Development Course",
    category: "Web Development",
    level: "Beginner to intermediate",
    duration: "Full series",
    instructor: "CodeWithHarry",
    description:
      "A Hindi-led, project-based web development series covering HTML, CSS, JavaScript, frontend and backend concepts, databases, and practical website projects. English subtitles are available on the playlist.",
    sourceType: "youtube-playlist",
    source: "PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w",
    referenceUrl: "https://github.com/CodeWithHarry/Sigma-Web-Dev-Course",
  },
  {
    id: "frontend-bootcamp-freecodecamp",
    title: "Frontend Web Developer Bootcamp",
    category: "Web Development",
    level: "Beginner",
    duration: "21 hours",
    instructor: "freeCodeCamp · Zach Gollwitzer",
    description:
      "A long-form foundation in JavaScript, HTML, and CSS. It moves from programming basics and DOM practice to responsive layouts, Flexbox, and several small frontend projects.",
    sourceType: "youtube-video",
    source: "zJSY8tbf_ys",
    referenceUrl:
      "https://www.freecodecamp.org/news/frontend-web-developer-bootcamp",
  },
  {
    id: "learn-html-beginners-course",
    title: "Learn HTML: Beginner’s Course",
    category: "Web Development",
    level: "Beginner",
    duration: "4 hours",
    instructor: "freeCodeCamp · Dave Gray",
    description:
      "A structured introduction to HTML5, from document setup and text to links, images, semantic elements, tables, forms, and a small website project.",
    sourceType: "youtube-video",
    source: "kUMe1FH4CHE",
    referenceUrl:
      "https://www.freecodecamp.org/news/learn-html-beginners-course/",
  },
  {
    id: "machine-learning-for-everybody",
    title: "Machine Learning for Everybody",
    category: "AI & Machine Learning",
    level: "Beginner",
    duration: "Full course",
    instructor: "freeCodeCamp · Kylie Ying",
    description:
      "An introductory, hands-on tour of supervised and unsupervised learning. Topics include preparing data, K-nearest neighbors, Naive Bayes, logistic regression, support vector machines, neural networks, TensorFlow, clustering, and PCA.",
    sourceType: "youtube-video",
    source: "i_LwzRVP7bg",
    referenceUrl:
      "https://www.freecodecamp.org/news/machine-learning-for-everybody",
  },
  {
    id: "neural-networks-3blue1brown",
    title: "Neural Networks: Visual Introduction",
    category: "AI & Machine Learning",
    level: "Beginner",
    duration: "9-video playlist",
    instructor: "3Blue1Brown · Grant Sanderson",
    description:
      "Animated explanations build intuition for neurons, network layers, gradient descent, and how models learn. Later episodes introduce transformers and attention, so it pairs well with a first machine-learning course.",
    sourceType: "youtube-playlist",
    source: "PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi",
    referenceUrl: "https://www.3blue1brown.com/topics/neural-networks",
  },
  {
    id: "data-science-beginners-6-hour",
    title: "Data Science Full Course for Beginners",
    category: "Data Science",
    level: "Beginner",
    duration: "6 hours",
    instructor: "freeCodeCamp · Barton Poulson",
    description:
      "A concept-first overview of data science: foundations, finding and sourcing data, coding for data work, mathematics, and statistics. Designed as an accessible starting point before deeper tool-specific study.",
    sourceType: "youtube-video",
    source: "ua-CiDNNj30",
    referenceUrl:
      "https://www.freecodecamp.org/news/data-science-course-for-beginners/",
  },
  {
    id: "python-data-science-12-hour",
    title: "Python Data Science: Pandas, NumPy & Matplotlib",
    category: "Data Science",
    level: "Beginner",
    duration: "12 hours",
    instructor: "freeCodeCamp",
    description:
      "A practical Python path into data analysis. It covers Python fundamentals, Jupyter notebooks, NumPy, Pandas, and Matplotlib, then combines the tools in a COVID-19 trend-analysis project.",
    sourceType: "youtube-video",
    source: "LHBE6Q9XlzI",
    referenceUrl:
      "https://www.freecodecamp.org/news/python-data-science-course-matplotlib-pandas-numpy",
  },
  {
    id: "cs50-intro-cybersecurity",
    title: "CS50’s Introduction to Cybersecurity",
    category: "Cyber Security",
    level: "Beginner",
    duration: "Full university course",
    instructor: "Harvard CS50 · David J. Malan",
    description:
      "A broad introduction for technical and non-technical learners. It covers protecting accounts, data, systems, and software, preserving privacy, and thinking about cybersecurity as a practical balance of risks and usability.",
    sourceType: "youtube-video",
    source: "9HOpanT0GRs",
    referenceUrl: "https://cs50.harvard.edu/cybersecurity/",
  },
  {
    id: "professor-messer-security-plus",
    title: "CompTIA Security+ SY0-701 Training Course",
    category: "Cyber Security",
    level: "Intermediate",
    duration: "121 lessons · about 15 hours",
    instructor: "Professor Messer",
    description:
      "An exam-oriented security course organized around general security concepts, threats and mitigations, security architecture, security operations, and program oversight. A more structured next step after cybersecurity fundamentals.",
    sourceType: "youtube-playlist",
    source: "PLG49S3nxzAnl4QDVqK-hOnoqcSKEIDDuv",
    referenceUrl:
      "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/sy0-701-comptia-security-plus-course/",
  },
];

const categoryFilter = document.querySelector("#category-filter");
const courseGrid = document.querySelector("#course-grid");
const librarySearch = document.querySelector("#library-search");
const libraryStatus = document.querySelector("#library-status");
const youtubePlayer = document.querySelector("#active-youtube-player");
const localPlayer = document.querySelector("#active-local-player");
const localSource = document.querySelector("#active-local-source");
const lessonTitle = document.querySelector("#lesson-title");
const lessonSummary = document.querySelector("#lesson-summary");
const courseMeta = document.querySelector("#selected-course-meta");
const sourceFallback = document.querySelector("#source-fallback");
const playlistQueue = document.querySelector("#playlist-queue");
const playlistItems = document.querySelector("#playlist-items");
const playlistCount = document.querySelector("#playlist-count");
const playlistStatus = document.querySelector("#playlist-status");
let player = null;
let currentCourse = learnFlixCourses[0];

// The YouTube IFrame API exposes playlist item IDs, which lets LearnFlix
// provide its own complete, scrollable lesson selector below the player.
window.onYouTubeIframeAPIReady = function () {
  player = new YT.Player("active-youtube-player", {
    playerVars: { playsinline: 1, rel: 0 },
    events: {
      onReady: () => loadYouTubeCourse(currentCourse),
      onStateChange: () => refreshPlaylistItems(),
    },
  });
};
const youtubeApiScript = document.createElement("script");
youtubeApiScript.src = "https://www.youtube.com/iframe_api";
youtubeApiScript.async = true;
youtubeApiScript.onerror = () => {
  playlistCount.textContent = "Unavailable";
  playlistStatus.textContent =
    "The YouTube player could not load. Check your connection or open the playlist on YouTube.";
};
document.head.append(youtubeApiScript);

function createCourseCard(course) {
  const card = document.createElement("article");
  card.className = "course-card";

  const category = document.createElement("span");
  category.className = "course-category";
  category.textContent = course.category;

  const title = document.createElement("h3");
  title.textContent = course.title;

  const description = document.createElement("p");
  description.textContent = course.description;

  const meta = document.createElement("p");
  meta.className = "course-meta";
  meta.textContent = `${course.level} · ${course.duration} · ${course.instructor}`;

  const button = document.createElement("button");
  button.className = "course-watch-button";
  button.type = "button";
  button.textContent = "Watch course";
  button.addEventListener("click", () => selectCourse(course));

  card.append(category, title, description, meta, button);
  if (course.referenceUrl) {
    const source = document.createElement("a");
    source.className = "course-source-link";
    source.href = course.referenceUrl;
    source.target = "_blank";
    source.rel = "noopener noreferrer";
    source.textContent = "Course details";
    card.append(source);
  }
  return card;
}

function selectCourse(course) {
  currentCourse = course;
  lessonTitle.textContent = course.title;
  lessonSummary.textContent = course.description;
  courseMeta.replaceChildren();
  [
    `Category: ${course.category}`,
    `Level: ${course.level}`,
    `Source: ${course.sourceType.replaceAll("-", " ")}`,
  ].forEach((text) => {
    const item = document.createElement("span");
    item.textContent = text;
    courseMeta.append(item);
  });

  if (course.sourceType === "local-video") {
    playlistQueue.hidden = true;
    if (player) player.stopVideo();
    sourceFallback.hidden = true;
    youtubePlayer.hidden = true;
    localPlayer.hidden = false;
    localSource.src = course.source;
    localPlayer.load();
    localPlayer.play().catch(() => {});
    return;
  }

  localPlayer.pause();
  localPlayer.hidden = true;
  youtubePlayer.hidden = false;
  playlistQueue.hidden = course.sourceType !== "youtube-playlist";
  sourceFallback.hidden = false;
  sourceFallback.href =
    course.sourceType === "youtube-video"
      ? `https://www.youtube.com/watch?v=${encodeURIComponent(course.source)}`
      : `https://www.youtube.com/playlist?list=${encodeURIComponent(course.source)}`;
  sourceFallback.textContent =
    course.sourceType === "youtube-video"
      ? "Open this video on YouTube"
      : "Open this playlist on YouTube";
  loadYouTubeCourse(course);
  document
    .querySelector("#continue")
    .scrollIntoView({ behavior: "smooth", block: "start" });
}

function loadYouTubeCourse(course) {
  if (!player || !course || course.sourceType === "local-video") return;
  playlistItems.replaceChildren();
  if (course.sourceType === "youtube-playlist") {
    playlistCount.textContent = "Loading…";
    playlistStatus.textContent = "Loading lessons from YouTube…";
    player.cuePlaylist({ listType: "playlist", list: course.source, index: 0 });
    refreshPlaylistItemsAfterCue();
  } else {
    playlistItems.replaceChildren();
    playlistCount.textContent = "1 lesson";
    playlistStatus.textContent = "This course is a single YouTube video.";
    player.cueVideoById(course.source);
    playlistQueue.hidden = true;
  }
}

function refreshPlaylistItemsAfterCue(attempt = 0) {
  refreshPlaylistItems();
  if (playlistItems.children.length) return;
  if (attempt >= 12) {
    playlistCount.textContent = "Unavailable";
    playlistStatus.textContent =
      "YouTube did not return the playlist items. Check your connection, or open the playlist on YouTube.";
    return;
  }
  window.setTimeout(() => refreshPlaylistItemsAfterCue(attempt + 1), 500);
}

function refreshPlaylistItems() {
  if (
    !player ||
    !currentCourse ||
    currentCourse.sourceType !== "youtube-playlist"
  )
    return;
  let videoIds = [];
  try {
    videoIds = player.getPlaylist() || [];
  } catch {
    return;
  }
  if (!videoIds.length) return;

  const activeIndex = player.getPlaylistIndex();
  playlistCount.textContent = `${videoIds.length} ${videoIds.length === 1 ? "lesson" : "lessons"}`;
  playlistStatus.textContent = "Choose any lesson to play it here.";
  playlistItems.replaceChildren(
    ...videoIds.map((videoId, index) => {
      const item = document.createElement("li");
      const button = document.createElement("button");
      button.type = "button";
      button.className = "playlist-item";
      button.setAttribute(
        "aria-current",
        index === activeIndex ? "true" : "false",
      );
      button.setAttribute("aria-label", `Play lesson ${index + 1}`);

      const thumbnail = document.createElement("img");
      thumbnail.src = `https://i.ytimg.com/vi/${encodeURIComponent(videoId)}/default.jpg`;
      thumbnail.alt = "";
      thumbnail.loading = "lazy";
      thumbnail.width = 120;
      thumbnail.height = 90;

      const copy = document.createElement("span");
      copy.className = "playlist-item-copy";
      const title = document.createElement("strong");
      title.textContent = `Lesson ${index + 1}`;
      const detail = document.createElement("span");
      detail.textContent =
        index === activeIndex ? "Now selected" : "Select to play";
      copy.append(title, detail);
      button.append(thumbnail, copy);
      button.addEventListener("click", () => player.playVideoAt(index));
      item.append(button);
      return item;
    }),
  );
}

function renderCourses() {
  const selectedCategory = categoryFilter.value;
  const query = librarySearch.value.trim().toLowerCase();
  const matches = learnFlixCourses.filter((course) => {
    const categoryMatches =
      selectedCategory === "all" || course.category === selectedCategory;
    const searchableText =
      `${course.title} ${course.category} ${course.level} ${course.description} ${course.instructor}`.toLowerCase();
    return categoryMatches && searchableText.includes(query);
  });

  courseGrid.replaceChildren(...matches.map(createCourseCard));
  libraryStatus.textContent = matches.length
    ? `${matches.length} course${matches.length === 1 ? "" : "s"} available. Select one to load it in the player above.`
    : "No courses match this search yet. Add one to js/content-library.js to publish it in the library.";
}

function initializeLibrary() {
  [...new Set(learnFlixCourses.map((course) => course.category))]
    .sort()
    .forEach((category) => {
      const option = document.createElement("option");
      option.value = category;
      option.textContent = category;
      categoryFilter.append(option);
    });
  categoryFilter.addEventListener("change", renderCourses);
  librarySearch.addEventListener("input", renderCourses);
  renderCourses();
}

initializeLibrary();
