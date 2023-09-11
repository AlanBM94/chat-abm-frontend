import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  // Add more setup options before each test is run
  setupFilesAfterEnv: ["<rootDir>/src/tests/setupTests.js"],

  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    // Handle module aliases
    "^@/src/components/(.*)$": "<rootDir>/src/components/$1",
    "^@/src/context/(.*)$": "<rootDir>/src/context/$1",
    "^@/src/hooks/(.*)$": "<rootDir>/src/hooks/$1",
    "^@/src/styles/(.*)$": "<rootDir>/src/styles/$1",
    "^@/src/types/(.*)$": "<rootDir>/src/types/$1",
    "^@/src/utils/(.*)$": "<rootDir>/src/utils/$1",
  },
  transformIgnorePatterns: ["/node_modules/"],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
