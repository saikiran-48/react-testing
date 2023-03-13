// eslint-disable-next-line import/no-anonymous-default-export
export default {
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
    '\\.(gif|ttf|eot|svg)$': '<rootDir>/__mocks__/fileMock.js',
  },
  testEnvironment: 'jsdom',
  coverageThreshold: {
    global: {
      lines: '30',
      statements: '30',
      branches: '30',
      functions: '30',
    },
  },
};
