import tokens from '../tokens.json';

const typeStyles = {
  'Headline 1': {
    color: tokens.colours.Text100,
    fontSize: tokens.typeSizes[7],
    fontFamily: tokens.fontFamilies.heading,
    fontWeight: tokens.fontWeights.bold,
    lineHeight: tokens.lineHeights[7],
  },
  'Headline 2': {
    color: tokens.colours.Text100,
    fontSize: tokens.typeSizes[6],
    fontFamily: tokens.fontFamilies.heading,
    fontWeight: tokens.fontWeights.bold,
    lineHeight: tokens.lineHeights[6],
  },
  'Headline 3': {
    color: tokens.colours.Text100,
    fontSize: tokens.typeSizes[5],
    fontFamily: tokens.fontFamilies.heading,
    fontWeight: tokens.fontWeights.bold,
    lineHeight: tokens.lineHeights[5],
  },
  'Title': {
    color: tokens.colours.Text100,
    fontSize: tokens.typeSizes[4],
    fontFamily: tokens.fontFamilies.heading,
    fontWeight: tokens.fontWeights.bold,
    lineHeight: tokens.lineHeights[4],
  },
  'Subtitle': {
    color: tokens.colours.Text100,
    fontSize: tokens.typeSizes[3],
    fontFamily: tokens.fontFamilies.heading,
    fontWeight: tokens.fontWeights.bold,
    lineHeight: tokens.lineHeights[3],
  },
  'Overline': {
    color: tokens.colours.Text25,
    fontSize: tokens.typeSizes[2],
    fontFamily: tokens.fontFamilies.heading,
    fontWeight: tokens.fontWeights.bold,
    textTransform: 'uppercase',
    letterSpacing: 2,
    lineHeight: tokens.typeSizes[2],
  },
  'Body 1': {
    color: tokens.colours.Text50,
    fontSize: tokens.typeSizes[3],
    fontFamily: tokens.fontFamilies.body,
    fontWeight: tokens.fontWeights.regular,
    lineHeight: tokens.lineHeights[3],
  },
  'Body 2': {
    color: tokens.colours.Text50,
    fontSize: tokens.typeSizes[2],
    fontFamily: tokens.fontFamilies.body,
    fontWeight: tokens.fontWeights.regular,
    lineHeight: tokens.lineHeights[2],
  },
  'Small': {
    color: tokens.colours.Text50,
    fontSize: tokens.typeSizes[1],
    fontFamily: tokens.fontFamilies.body,
    fontWeight: tokens.fontWeights.regular,
    lineHeight: tokens.lineHeights[1],
  },
  'Tiny': {
    color: tokens.colours.Text50,
    fontSize: tokens.typeSizes[0],
    fontFamily: tokens.fontFamilies.body,
    fontWeight: tokens.fontWeights.regular,
    lineHeight: tokens.lineHeights[0],
  },
  'Link 1': {
    color: tokens.colours.Primary,
    fontSize: tokens.typeSizes[3],
    fontFamily: tokens.fontFamilies.body,
    fontWeight: tokens.fontWeights.bold,
    lineHeight: tokens.lineHeights[3],
  },
  'Link 2': {
    color: tokens.colours.Primary,
    fontSize: tokens.typeSizes[2],
    fontFamily: tokens.fontFamilies.body,
    fontWeight: tokens.fontWeights.bold,
    lineHeight: tokens.lineHeights[2],
  }
};

export default {
  ...tokens,
  typeStyles,
};
