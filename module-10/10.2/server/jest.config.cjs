module.exports = {
  transform: {
    '^.+\\.(js|mjs)$': 'babel-jest',
  },
  testMatch: [
    '**/__tests__/01_dbConnection.test.js',
    '**/__tests__/02_auth.test.js',
    '**/__tests__/03_blog.test.js',
  ],
};
