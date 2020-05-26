import * as React from 'react';
import { render, TextStyles, Page, Artboard } from 'react-sketchapp';

import { Section } from './components/Layout';
import { TypeSpecimen } from './components/Type';
import { Palette } from './components/Colours';

import tokens from './tokens';
import { Buttons } from './components/Controls';

const Document = ({ tokens }) => (
  <Page name="🎨 Styles">
    <Artboard style={{ width: 1440, height: 2880 }} name="Styles">

      <Section title="Colours">
        <Palette colors={tokens.colours} />
      </Section>

      <Section title="Type Styles">
        {Object.keys(tokens.typeStyles).map((name) => (
          <TypeSpecimen key={name} name={name} style={TextStyles.get(name)} />
        ))}
      </Section>

      <Section title="Controls">
        <Buttons />
      </Section>

    </Artboard>
  </Page>
)

export default () => {

  TextStyles.create(tokens.typeStyles, {
    clearExistingStyles: true,
  });

  render(<Document tokens={tokens} />, context.document.currentPage());
}