// general configuration file for Jest, applicable to the entire project

module.exports = {
  transform: {
    '^.+\\.(js|mjs)$': 'babel-jest',
  },
  testMatch: [
    '**/__tests__/api/01_dbConnection.test.js',
    '**/__tests__/api/02_auth.test.js',
    '**/__tests__/api/03_blog.test.js',
  ],
};
