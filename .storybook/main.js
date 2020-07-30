module.exports = {
  stories: [
    '../src/docs/*.@(mdx|tsx)',
  ],
  addons: [{
    name: '@component-controls/storybook',
    options: {
      webpack: ['instrument', 'react-docgen-typescript'],
    }
  }]
};