import { configure } from "@storybook/react";

function loadStories() {
  require("../src/stories/BookmarkGroup");
  require("../src/stories/Bookmark");
}

configure(loadStories, module);
