import React from 'react';
import { TouchableWithoutFeedback, Keyboard, View, ScrollView, StyleSheet } from 'react-native';

interface KeyboardDismissWrapperProps {
  children: React.ReactNode;
  scrollable?: boolean;
}

export const KeyboardDismissWrapper: React.FC<KeyboardDismissWrapperProps> = ({ children, scrollable = false }) => {
  const Container = scrollable ? ScrollView : View;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Container style={styles.container}>
        {children}
      </Container>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});