module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
  testEnvironment: "jsdom",
  testMatch: ["**/+(*.)+(spec).+(ts|js)?(x)"],
  transform: {
    "^.+\\.(ts|js|html)$": "ts-jest",
  },
  transformIgnorePatterns: ["node_modules/(?!.*\\.mjs$)"],
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1",
  },
  moduleFileExtensions: ["ts", "js", "html"],
  coverageReporters: ["html", "lcov", "text-summary"],
};
