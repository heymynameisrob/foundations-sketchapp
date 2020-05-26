import * as React from 'react';
import { View, Text } from 'react-sketchapp';
import { Badge, Label } from './Layout';

const SWATCH_WIDTH = 100;

export const Swatch = ({ color, name }) => (
  <View name={name} style={{ marginBottom: 48, marginRight: 48 }}>
    <View
      style={{
        width: SWATCH_WIDTH,
        height: SWATCH_WIDTH,
        backgroundColor: color,
        borderRadius: 4,
        marginBottom: 8,
      }}
    />
    <Label bold>{name}</Label>
    <Label>{color}</Label>
  </View>
);

export const Palette = ({ colors }) => (
  <View
    style={{
      width: (SWATCH_WIDTH + 48) * 4,
      flexWrap: 'wrap',
      flexDirection: 'row',
    }}
  >
    {Object.keys(colors).map((name) => (
      <Swatch key={name} color={colors[name]} name={name} />
    ))}
  </View>
);