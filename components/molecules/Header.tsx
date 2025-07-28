import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

interface HeaderProps {
  title: string;
  onClose?: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, onClose }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <View style={styles.closeIcon}>
          <View style={[styles.closeLine, styles.closeLine1]} />
          <View style={[styles.closeLine, styles.closeLine2]} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: verticalScale(56),
    paddingHorizontal: scale(16),
    paddingVertical: verticalScale(16),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0E0F11',
    position: 'relative',
  },
  title: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: scale(11),
    fontWeight: '700',
    lineHeight: scale(14.3),
    letterSpacing: scale(0.11),
    textTransform: 'uppercase',
  },
  closeButton: {
    position: 'absolute',
    right: scale(16),
    top: verticalScale(16),
    width: scale(24),
    height: scale(24),
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeIcon: {
    width: scale(24),
    height: scale(24),
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeLine: {
    position: 'absolute',
    width: scale(16),
    height: scale(2),
    backgroundColor: '#FFFFFF',
    borderRadius: scale(1),
  },
  closeLine1: {
    transform: [{ rotate: '45deg' }],
  },
  closeLine2: {
    transform: [{ rotate: '-45deg' }],
  },
});

export default Header;
