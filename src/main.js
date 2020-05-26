import * as React from 'react';
import { render, TextStyles, Page, Artboard } from 'react-sketchapp';

import { Section, Surfaces } from './components/Layout';
import { TypeSpecimen } from './components/Type';
import { Palette } from './components/Colours';

import designSystem, { Shadows } from './designSystem';
import { Buttons, Inputs } from './components/Controls';

const Document = ({ designSystem }) => (
  <Page name="🎨 Styles">
    <Artboard style={{ width: 1440, height: 2880 }} name="Styles">

      <Section title="Colours">
        <Palette colors={designSystem.colours} />
      </Section>

      <Section title="Surfaces">
        <Surfaces shadows={Shadows} />
      </Section>

      <Section title="Type Styles">
        {Object.keys(designSystem.typeStyles).map((name) => (
          <TypeSpecimen key={name} name={name} style={TextStyles.get(name)} />
        ))}
      </Section>

      <Section title="Controls">
        <Buttons />
        <Inputs />
      </Section>

    </Artboard>
  </Page>
)

export default () => {

  TextStyles.create(designSystem.typeStyles, {
    clearExistingStyles: true,
  });

  render(<Document designSystem={designSystem} />, context.document.currentPage());
}