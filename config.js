"use strict";

const config = require("conventional-changelog-conventionalcommits");

module.exports = config({
  types: [
    { type: "feat", section: "Features" },
    { type: "fix", section: "Bug Fixes" },
    { type: "chore", scope: "deps", section: "Dependency Updates" },
    { type: "chore", section: "Chores" },
    { type: "perf", section: "Performance Improvements" },
    { type: "build", section: "Build System" },
    { type: "ci", section: "Continuous Integration" },
    { type: "docs", section: "Documentation" },
    { type: "refactor", section: "Code Refactoring" },
    { type: "revert", section: "Reverts" },
    { type: "style", section: "Styles" },
    { type: "test", section: "Tests" },
  ],
});
