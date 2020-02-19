module.exports = {
    roots: [
        '<rootDir>/app'
    ],
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js?|ts?)$',
    moduleFileExtensions: [
        'js',
        'jsx',
        'json',
        'node'
    ],
    moduleDirectories: ['node_modules', 'app'],
    collectCoverageFrom: [
        'app/**/*.{js,jsx}',
        '!app/index.jsx',
    ],
    setupFilesAfterEnv: ['<rootDir>/setupTests.js']
};
