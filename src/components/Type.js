import React from 'react';
import { Text, View } from 'react-sketchapp';
import { Label } from './Layout';

export const TypeSpecimen = ({ name, style }) => (
  <View name={`TypeSpecimen-${name}`} style={{ flexDirection: 'column', marginBottom: 24 }}>
    <Text
      style={{
        ...style,
      }}
    >
      {name}
    </Text>
    <View style={{ width: 100 }}>
      <Label>{`${style.fontSize} / ${style.lineHeight}`} px</Label>
    </View>
  </View>
);