import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

interface ActionButtonsProps {
  primaryButtonText: string;
  secondaryButtonText: string;
  onPrimaryPress?: () => void;
  onSecondaryPress?: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({
  primaryButtonText,
  secondaryButtonText,
  onPrimaryPress,
  onSecondaryPress,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.primaryButton} onPress={onPrimaryPress}>
        <Text style={styles.primaryButtonText}>{primaryButtonText}</Text>
        <View style={styles.arrowIcon}>
          <View style={styles.arrowStem} />
          <View style={styles.arrowHead} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.secondaryButton}
        onPress={onSecondaryPress}
      >
        <Text style={styles.secondaryButtonText}>{secondaryButtonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: verticalScale(16),
    padding: verticalScale(24),
    paddingHorizontal: scale(16),
    borderTopWidth: 1,
    borderTopColor: '#E6E7EA',
    backgroundColor: '#FFFFFF',
  },
  primaryButton: {
    flexDirection: 'row',
    padding: verticalScale(16),
    paddingHorizontal: scale(20),
    justifyContent: 'center',
    alignItems: 'center',
    gap: scale(6),
    borderRadius: scale(8),
    backgroundColor: '#3F8FE2',
  },
  primaryButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: scale(14),
    fontWeight: '700',
    lineHeight: scale(16),
    letterSpacing: scale(0.28),
  },
  arrowIcon: {
    width: scale(16),
    height: scale(16),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  arrowStem: {
    width: scale(8),
    height: scale(2),
    backgroundColor: '#FFFFFF',
    borderRadius: scale(1),
    position: 'absolute',
  },
  arrowHead: {
    width: scale(6),
    height: scale(6),
    borderTopWidth: scale(2),
    borderRightWidth: scale(2),
    borderColor: '#FFFFFF',
    transform: [{ rotate: '45deg' }],
    position: 'absolute',
    right: scale(2),
  },
  secondaryButton: {
    flexDirection: 'row',
    padding: verticalScale(16),
    paddingHorizontal: scale(20),
    justifyContent: 'center',
    alignItems: 'center',
    gap: scale(6),
    borderRadius: scale(8),
    borderWidth: 1,
    borderColor: '#E6E7EA',
    backgroundColor: '#FFFFFF',
    shadowColor: '#DCDCDC',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.7,
    shadowRadius: 1,
    elevation: 1,
  },
  secondaryButtonText: {
    color: '#1D2433',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: scale(14),
    fontWeight: '700',
    lineHeight: scale(16),
    letterSpacing: scale(0.28),
  },
});

export default ActionButtons;
