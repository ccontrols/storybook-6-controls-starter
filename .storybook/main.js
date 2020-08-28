module.exports = {
  stories: [
    '../src/docs/*.@(mdx|tsx)',
  ],
  addons: [{
    name: '@component-controls/storybook',
    options: {
      pages: [
        require.resolve('@component-controls/storybook/full-page'),
        require.resolve('./testing-page.js'),
        require.resolve('./viewport-page.js'),
      ],
      webpack: ['instrument', 'react-docgen-typescript'],
    }
  }]
};