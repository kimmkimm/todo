import React, {ComponentProps} from 'react';
import {KeyboardAvoidingView, Platform, StyleSheet} from 'react-native';

type KeyboardViewProps = ComponentProps<typeof KeyboardAvoidingView>;

const defaultKeyboardAvoidingViewBehavior = Platform.select({
  ios: 'padding',
  android: undefined,
} as const);

export const KeyboardView: React.FC<KeyboardViewProps> = ({
  children,
  behavior = defaultKeyboardAvoidingViewBehavior,
  style,
  ...props
}) => {
  return (
    <KeyboardAvoidingView behavior={behavior} style={StyleSheet.flatten([styles.container, style])} {...props}>
      {children}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});