import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar as RNStatusBar,
  ViewStyle,
} from 'react-native';

interface PageProps {
  children: React.ReactNode;
  backgroundColor?: string;
  barStyle?: 'light-content' | 'dark-content';
  statusBarBg?: string;
  style?: ViewStyle;
}

const Page: React.FC<PageProps> = ({
  children,
  backgroundColor = '#0E0F11',
  barStyle = 'light-content',
  statusBarBg = '#0E0F11',
  style,
}) => (
  <SafeAreaView style={[styles.container, { backgroundColor }]}>
    {barStyle && statusBarBg && (
      <RNStatusBar barStyle={barStyle} backgroundColor={statusBarBg} />
    )}
    <View style={[styles.content, style]}>{children}</View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});

export default Page;
