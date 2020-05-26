import tokens from '../tokens.json';

const getLineHeight = (type, size) => {
  if (type == 'heading') {
    let lineHeight = size * 1.25;
    return Math.ceil(lineHeight / 2) * 2;
  } else {
    let lineHeight = size * 1.5;
    return Math.ceil(lineHeight / 2) * 2;
  }
}

export const Shadows = {
  "flat": {
    backgroundColor: tokens.colours.Base
  },
  "raised": {
    backgroundColor: tokens.colours.Base,
    shadowColor: tokens.colours.Text100,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.16,
    shadowRadius: 4,
    shadowSpread: 0
  },
  "float": {
    backgroundColor: tokens.colours.Base,
    shadowColor: tokens.colours.Text100,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.16,
    shadowRadius: tokens.spacing['sm'],
    shadowSpread: 0
  }
}

const typeStyles = {
  'Headline 1': {
    color: tokens.colours.Text100,
    fontSize: tokens.typeSizes[7],
    fontFamily: tokens.fontFamilies.heading,
    fontWeight: tokens.fontWeights.bold,
    lineHeight: getLineHeight('heading', tokens.typeSizes[7]),
  },
  'Headline 2': {
    color: tokens.colours.Text100,
    fontSize: tokens.typeSizes[6],
    fontFamily: tokens.fontFamilies.heading,
    fontWeight: tokens.fontWeights.bold,
    lineHeight: getLineHeight('heading', tokens.typeSizes[6]),
  },
  'Headline 3': {
    color: tokens.colours.Text100,
    fontSize: tokens.typeSizes[5],
    fontFamily: tokens.fontFamilies.heading,
    fontWeight: tokens.fontWeights.bold,
    lineHeight: getLineHeight('heading', tokens.typeSizes[5]),
  },
  'Title': {
    color: tokens.colours.Text100,
    fontSize: tokens.typeSizes[4],
    fontFamily: tokens.fontFamilies.heading,
    fontWeight: tokens.fontWeights.bold,
    lineHeight: getLineHeight('heading', tokens.typeSizes[4]),
  },
  'Subtitle': {
    color: tokens.colours.Text100,
    fontSize: tokens.typeSizes[3],
    fontFamily: tokens.fontFamilies.heading,
    fontWeight: tokens.fontWeights.bold,
    lineHeight: getLineHeight('heading', tokens.typeSizes[3]),
  },
  'Overline': {
    color: tokens.colours.Text25,
    fontSize: tokens.typeSizes[2],
    fontFamily: tokens.fontFamilies.heading,
    fontWeight: tokens.fontWeights.bold,
    textTransform: 'uppercase',
    letterSpacing: 2,
    lineHeight: getLineHeight('heading', tokens.typeSizes[2]),
  },
  'Body 1': {
    color: tokens.colours.Text50,
    fontSize: tokens.typeSizes[3],
    fontFamily: tokens.fontFamilies.body,
    fontWeight: tokens.fontWeights.regular,
    lineHeight: getLineHeight('body', tokens.typeSizes[3]),
  },
  'Body 2': {
    color: tokens.colours.Text50,
    fontSize: tokens.typeSizes[2],
    fontFamily: tokens.fontFamilies.body,
    fontWeight: tokens.fontWeights.regular,
    lineHeight: getLineHeight('body', tokens.typeSizes[2]),
  },
  'Small': {
    color: tokens.colours.Text50,
    fontSize: tokens.typeSizes[1],
    fontFamily: tokens.fontFamilies.body,
    fontWeight: tokens.fontWeights.regular,
    lineHeight: getLineHeight('heading', tokens.typeSizes[1]),
  },
  'Tiny': {
    color: tokens.colours.Text50,
    fontSize: tokens.typeSizes[0],
    fontFamily: tokens.fontFamilies.body,
    fontWeight: tokens.fontWeights.regular,
    lineHeight: getLineHeight('heading', tokens.typeSizes[0]),
  },
  'Link 1': {
    color: tokens.colours.Primary,
    fontSize: tokens.typeSizes[3],
    fontFamily: tokens.fontFamilies.body,
    fontWeight: tokens.fontWeights.bold,
    textDecoration: 'underline',
    lineHeight: getLineHeight('heading', tokens.typeSizes[3]),
  },
  'Link 2': {
    color: tokens.colours.Primary,
    fontSize: tokens.typeSizes[2],
    fontFamily: tokens.fontFamilies.body,
    fontWeight: tokens.fontWeights.bold,
    textDecoration: 'underline',
    lineHeight: getLineHeight('heading', tokens.typeSizes[2]),
  }
};

export const ButtonStyles = {
  "primary": {
    "container": {
      maxWidth: 200,
      paddingVertical: tokens.spacing['base'],
      borderRadius: tokens.shape['borderRadius'],
      justifyContent: 'center',
      alignItems: 'center',
      ...Shadows.raised,
      shadowColor: tokens.colours.Primary,
      backgroundColor: tokens.colours.Primary,
    },
    "label": {
      color: tokens.colours.Base,
      fontFamily: tokens.fontFamilies.heading,
      fontWeight: tokens.fontWeights['bold'],
      fontSize: tokens.typeSizes[3],
      lineHeight: tokens.typeSizes[3],
      paddingHorizontal: tokens.spacing['base'],
      textAlign: 'center'
    }
  },
  "secondary": {
    "container": {
      maxWidth: 200,
      paddingVertical: tokens.spacing['base'],
      borderRadius: tokens.shape['borderRadius'],
      backgroundColor: tokens.colours.Muted,
      justifyContent: 'center',
      alignItems: 'center'
    },
    "label": {
      color: tokens.colours.Primary,
      fontFamily: tokens.fontFamilies.heading,
      fontWeight: tokens.fontWeights['bold'],
      fontSize: tokens.typeSizes[3],
      lineHeight: tokens.typeSizes[3],
      paddingHorizontal: tokens.spacing['base'],
      textAlign: 'center'
    }
  }
}

export const InputStyles = {
  "text": {
    "container": {
      width: 320,
      padding: tokens.spacing['base'],
      borderRadius: tokens.shape['borderRadius'],
      backgroundColor: tokens.colours.Muted,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      flexFlow: 'row'
    },
    "label": {
      color: tokens.colours.Text50,
      fontFamily: tokens.fontFamilies.heading,
      fontWeight: tokens.fontWeights['body'],
      fontSize: tokens.typeSizes[2],
      lineHeight: tokens.typeSizes[2],
    }
  }
}

export default {
  ...tokens,
  typeStyles,
  ButtonStyles,
  InputStyles,
  Shadows
};
