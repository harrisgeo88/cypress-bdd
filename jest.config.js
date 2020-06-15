module.exports = {
  roots: ['<rootDir>'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: [
    '<rootDir>/test',
    '<rootDir>/src',
    '<rootDir>/cypress',
    '<rootDir>/node_modules',
    '<rootDir>/generate',
    '<rootDir>/_docs',
    '<rootDir>/build',
  ],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  testEnvironment: 'jsdom',
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/**/*/index.{ts,tsx}',
    '!src/**/**/*/*.styles.{ts,tsx}',
    '!src/**/**/*/*.model.{ts,tsx}',
    '!src/**/**/*/*.models.{ts,tsx}',
    '!src/**/models/**/*.{ts,tsx}',
    '!src/**/storybook/**/*.{ts,tsx}',
    '!src/**/**/*/*.story.{ts,tsx}',
    '!src/*.story.{ts,tsx}',
    '!src/**/**/*/*.contract.test.{ts,tsx}',
  ],
  coveragePathIgnorePatterns: ['index.ts,'],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },
  globals: {
    'ts-jest': {
      diagnostics: false,
      tsConfig: 'tsconfig.json',
    },
  },
  reporters: [
    'default',
    [
      'jest-junit',
      {
        suiteName: 'Unit, component tests',
        outputDirectory: './test-results/out/',
        outputName: 'results.xml',
      },
    ],
  ],
}
