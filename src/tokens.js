const colours = {
  "Primary": '#07c',
  "Secondary": "#30c",
  "Text100": "#1d1d1d",
  "Text50": "#404040",
  "Text25": "#888",
  "Grey": "#d8d8d8",
  "Muted": "#f5f5f5",
  "Base": "#fff",
};

const spacing = {
  'xs': 4,
  'sm': 8,
  'base': 16,
  'md': 24,
  'lg': 32,
  'xl': 48,
  '2xl': 56,
  '3xl': 64,
  '4xl': 96
};

const typeSizes = [
  12,
  14,
  16,
  18,
  20,
  24,
  32,
  48
];

const lineHeights = [
  18,
  20,
  24,
  28,
  24,
  32,
  36,
  60
];

const fontFamilies = {
  heading: 'Inter',
  body: 'Inter',
};

const fontWeights = {
  regular: 'regular',
  bold: 'bold',
};


const typeStyles = {
  'Headline 1': {
    color: colours.Text100,
    fontSize: typeSizes[7],
    fontFamily: fontFamilies.heading,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights[7],
  },
  'Headline 2': {
    color: colours.Text100,
    fontSize: typeSizes[6],
    fontFamily: fontFamilies.heading,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights[6],
  },
  'Headline 3': {
    color: colours.Text100,
    fontSize: typeSizes[5],
    fontFamily: fontFamilies.heading,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights[5],
  },
  'Title': {
    color: colours.Text100,
    fontSize: typeSizes[4],
    fontFamily: fontFamilies.heading,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights[4],
  },
  'Subtitle': {
    color: colours.Text100,
    fontSize: typeSizes[3],
    fontFamily: fontFamilies.heading,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights[3],
  },
  'Overline': {
    color: colours.Text25,
    fontSize: typeSizes[2],
    fontFamily: fontFamilies.heading,
    fontWeight: fontWeights.bold,
    textTransform: 'uppercase',
    letterSpacing: 2,
    lineHeight: typeSizes[2],
  },
  'Body 1': {
    color: colours.Text50,
    fontSize: typeSizes[3],
    fontFamily: fontFamilies.body,
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights[3],
  },
  'Body 2': {
    color: colours.Text50,
    fontSize: typeSizes[2],
    fontFamily: fontFamilies.body,
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights[2],
  },
  'Small': {
    color: colours.Text50,
    fontSize: typeSizes[1],
    fontFamily: fontFamilies.body,
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights[1],
  },
  'Tiny': {
    color: colours.Text50,
    fontSize: typeSizes[0],
    fontFamily: fontFamilies.body,
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights[0],
  },
  'Link 1': {
    color: colours.Primary,
    fontSize: typeSizes[3],
    fontFamily: fontFamilies.body,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights[3],
  },
  'Link 2': {
    color: colours.Primary,
    fontSize: typeSizes[2],
    fontFamily: fontFamilies.body,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights[2],
  }
};

export default {
  colours,
  typeStyles,
  spacing,
};