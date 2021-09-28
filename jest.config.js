module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  transform: {
    "^.+\\.vue$": "vue-jest",
  },
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,ts}"],
  coverageDirectory: "coverage",
  reporters: [
    "default",
    [
      "jest-junit",
      {
        suiteName: "jest tests",
        outputDirectory: "reports/jest",
        outputName: "js-test-results.xml",
        classNameTemplate: "{classname}-{title}",
        titleTemplate: "{classname}-{title}",
        ancestorSeparator: " › ",
      },
    ],
  ],
};
