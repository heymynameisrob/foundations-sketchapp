import React from 'react';
import { View, Text, makeSymbol } from 'react-sketchapp';
import designSystem from '../designSystem';

export const PrimaryButton = () => (
  <View name="Primary Button" style={
    {
      maxWidth: 200,
      paddingVertical: 16,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: designSystem.colours.Primary,
      backgroundColor: designSystem.colours.Primary,
      justifyContent: 'center',
      alignItems: 'center'
    }
  }>
    <Text style={{ ...designSystem.typeStyles['Link 1'], color: designSystem.colours.Base, lineHeight: 18, paddingHorizontal: 16, textAlign: 'center' }}>Button</Text>
  </View>
);

export const SecondaryButton = () => (
  <View name="Secondary Button" style={
    {
      maxWidth: 200,
      paddingVertical: 16,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: designSystem.colours.Muted,
      backgroundColor: designSystem.colours.Muted,
      justifyContent: 'center',
      alignItems: 'center'
    }
  }>
    <Text style={{ ...designSystem.typeStyles['Link 1'], color: designSystem.colours.Primary, lineHeight: 18, paddingHorizontal: 16, textAlign: 'center' }}>Button</Text>
  </View>
);

export const OutlineButton = () => (
  <View name="Outline Button" style={
    {
      maxWidth: 200,
      paddingVertical: 16,
      borderRadius: 8,
      backgroundColor: designSystem.colours.Base,
      borderWidth: 1,
      borderColor: designSystem.colours.Primary,
      justifyContent: 'center',
      alignItems: 'center'
    }
  }>
    <Text style={{ ...designSystem.typeStyles['Link 1'], color: designSystem.colours.Primary, lineHeight: 18, paddingHorizontal: 16, textAlign: 'center' }}>Button</Text>
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
