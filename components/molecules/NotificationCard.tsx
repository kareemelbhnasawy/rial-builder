import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

interface NotificationCardProps {
  type: 'success' | 'error' | 'warning';
  message: string;
}

const NotificationCard: React.FC<NotificationCardProps> = ({
  type,
  message,
}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.iconContainer, styles[`${type}Icon`]]}>
        {type === 'success' && (
          <View style={styles.checkmark}>
            <View style={styles.checkmarkStem} />
            <View style={styles.checkmarkKick} />
          </View>
        )}
      </View>
      <Text style={[styles.message, styles[`${type}Text`]]}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: scale(8),
  },
  iconContainer: {
    width: scale(20),
    height: scale(20),
    borderRadius: scale(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  successIcon: {
    backgroundColor: '#288608',
  },
  errorIcon: {
    backgroundColor: '#DC2626',
  },
  warningIcon: {
    backgroundColor: '#F59E0B',
  },
  checkmark: {
    width: scale(12),
    height: scale(12),
    position: 'relative',
  },
  checkmarkStem: {
    position: 'absolute',
    left: scale(6),
    top: scale(3),
    width: scale(2),
    height: scale(6),
    backgroundColor: '#FFFFFF',
    borderRadius: scale(1),
    transform: [{ rotate: '45deg' }],
  },
  checkmarkKick: {
    position: 'absolute',
    left: scale(2),
    top: scale(6),
    width: scale(2),
    height: scale(3),
    backgroundColor: '#FFFFFF',
    borderRadius: scale(1),
    transform: [{ rotate: '-45deg' }],
  },
  message: {
    fontFamily: 'Merriweather',
    fontSize: scale(15),
    fontWeight: '700',
    lineHeight: scale(22),
    flex: 1,
  },
  successText: {
    color: '#288608',
  },
  errorText: {
    color: '#DC2626',
  },
  warningText: {
    color: '#F59E0B',
  },
});

export default NotificationCard;
