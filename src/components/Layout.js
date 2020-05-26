import React from 'react';
import { Text, View } from 'react-sketchapp';

export const Surfaces = ({ shadows }) => (
  <View name="Surfaces" style={{ flexDirection: 'row', justifyContent: 'space-between', width: 400 }}>
    <View style={{ width: 100 }}>
      <View style={{ ...shadows.flat, width: 100, height: 100, marginBottom: 8, borderRadius: 4 }} name="Flat" />
      <Label>Flat</Label>
    </View>
    <View style={{ width: 100 }}>
      <View style={{ ...shadows.raised, width: 100, height: 100, marginBottom: 8, borderRadius: 4 }} name="Raised" />
      <Label>Raised</Label>
    </View>
    <View style={{ width: 100 }}>
      <View style={{ ...shadows.float, width: 100, height: 100, marginBottom: 8, borderRadius: 4 }} name="Float" />
      <Label>Floating</Label>
    </View>
  </View>
);

export const Label = ({ bold, gutter, children }) => (
  <Text
    style={{
      color: '#333',
      fontWeight: bold ? 'bold' : 'normal',
      fontSize: 16,
      lineHeight: 24,
      marginBottom: gutter ? 48 : 0
    }}
  >
    {children}
  </Text>
);

export const SectionTitle = ({ gutter, children }) => (
  <Text
    style={{
      color: '#888',
      textTransform: 'uppercase',
      letterSpacing: 2,
      fontWeight: 'bold',
      fontSize: 16,
      lineHeight: 24,
      marginBottom: 48
    }}
  >
    {children}
  </Text>
);


export const Section = ({ title, children }) => (
  <View style={{ marginTop: 96, marginLeft: 96, flexDirection: 'column' }} name={title}>
    <SectionTitle>{title}</SectionTitle>
    <View name={'Elements'}>{children}</View>
  </View>
);