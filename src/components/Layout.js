import React from 'react';
import { Text, View } from 'react-sketchapp';

export const Badge = ({ children, filled = false }) => (
  <View
    style={{
      borderRadius: 4,
      backgroundColor: filled ? '#333' : 'transparent',
      paddingLeft: 8,
      paddingRight: 8,
      borderWidth: 1,
      borderColor: '#333',
    }}
  >
    <Text
      style={{
        color: filled ? '#fff' : '#333',
      }}
    >
      {children}
    </Text>
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