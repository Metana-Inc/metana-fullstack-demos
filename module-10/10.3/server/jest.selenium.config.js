export default {
  testEnvironment: 'node',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  testMatch: ['**/__tests__/selenium/**/*.test.js'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.selenium.js'],
  collectCoverage: true,
  coverageDirectory: 'coverage/selenium',
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
};
