module.exports = {
  preset: "ts-jest",
  testMatch: ["<rootDir>/issues/**/*.ts"],
  collectCoverage: false,
  errorOnDeprecated: true,
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.json"
    }
  },
  moduleFileExtensions: ["ts", "js", "json"],
  testEnvironment: "node",
  transform: {
    "^.+\\.ts$": "ts-jest"
  }
};
