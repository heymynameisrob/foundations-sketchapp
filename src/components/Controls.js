import React from 'react';
import { View, Text, makeSymbol } from 'react-sketchapp';
import { ButtonStyles, InputStyles } from '../designSystem';

const PrimaryButton = () => (
  <View name="Primary Button" style={ButtonStyles.primary.container}>
    <Text style={ButtonStyles.primary.label}>Button</Text>
  </View>
);

const SecondaryButton = () => (
  <View name="Secondary Button" style={ButtonStyles.secondary.container}>
    <Text style={ButtonStyles.secondary.label}>Button</Text>
  </View>
);

// Create Sketch symbol
const PrimaryButtonSymbol = makeSymbol(PrimaryButton);
const SecondaryButtonSymbol = makeSymbol(SecondaryButton);

export const Buttons = () => (
  <View name="Buttons" style={{ flexDirection: 'row', justifyContent: 'space-between', width: 220 }}>
    <PrimaryButtonSymbol />
    <SecondaryButtonSymbol />
  </View>
);

const TextInput = () => (
  <View name="TextField" style={InputStyles.text.container}>
    <Text style={InputStyles.text.label}>Text Field</Text>
  </View>
);

const TextInputSymbol = makeSymbol(TextInput);

export const Inputs = () => (
  <View name="Inputs" style={{ flexDirection: 'row', justifyContent: 'space-between', width: 640, marginTop: 48 }}>
    <TextInputSymbol />
  </View>
);
