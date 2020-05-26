import React from 'react';
import { View, Text, makeSymbol } from 'react-sketchapp';
import tokens from '../tokens';

export const PrimaryButton = () => (
  <View name="Primary Button" style={
    {
      maxWidth: 200,
      paddingVertical: 16,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: tokens.colours.Primary,
      backgroundColor: tokens.colours.Primary,
      justifyContent: 'center',
      alignItems: 'center'
    }
  }>
    <Text style={{ ...tokens.typeStyles['Link 1'], color: tokens.colours.Base, lineHeight: 18, paddingHorizontal: 16, textAlign: 'center' }}>Button</Text>
  </View>
);

export const SecondaryButton = () => (
  <View name="Secondary Button" style={
    {
      maxWidth: 200,
      paddingVertical: 16,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: tokens.colours.Muted,
      backgroundColor: tokens.colours.Muted,
      justifyContent: 'center',
      alignItems: 'center'
    }
  }>
    <Text style={{ ...tokens.typeStyles['Link 1'], color: tokens.colours.Primary, lineHeight: 18, paddingHorizontal: 16, textAlign: 'center' }}>Button</Text>
  </View>
);

export const OutlineButton = () => (
  <View name="Outline Button" style={
    {
      maxWidth: 200,
      paddingVertical: 16,
      borderRadius: 8,
      backgroundColor: tokens.colours.Base,
      borderWidth: 1,
      borderColor: tokens.colours.Primary,
      justifyContent: 'center',
      alignItems: 'center'
    }
  }>
    <Text style={{ ...tokens.typeStyles['Link 1'], color: tokens.colours.Primary, lineHeight: 18, paddingHorizontal: 16, textAlign: 'center' }}>Button</Text>
  </View>
);

const PrimaryButtonSymbol = makeSymbol(PrimaryButton);
const SecondaryButtonSymbol = makeSymbol(SecondaryButton);
const OutlineButtonSymbol = makeSymbol(OutlineButton);

export const Buttons = () => (
  <View name="Buttons" style={{ flexDirection: 'row', justifyContent: 'space-between', width: 400 }}>
    <PrimaryButtonSymbol />
    <SecondaryButtonSymbol />
    <OutlineButtonSymbol />
  </View>
)
