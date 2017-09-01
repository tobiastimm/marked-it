import { configure } from "@storybook/react";

function loadStories() {
  require("../src/stories/BookmarkFolder");
  require("../src/stories/Bookmark");
}

configure(loadStories, module);
