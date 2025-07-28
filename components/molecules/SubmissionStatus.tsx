import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

interface SubmissionStatusProps {
  title: string;
  date: string;
  user: string;
  transactionId: string;
  status: 'success' | 'pending' | 'failed';
}

const SubmissionStatus: React.FC<SubmissionStatusProps> = ({
  title,
  date,
  user,
  transactionId,
  status,
}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.statusIcon, styles[`${status}Status`]]}>
        {status === 'success' && (
          <View style={styles.checkmark}>
            <View style={styles.checkmarkStem} />
            <View style={styles.checkmarkKick} />
          </View>
        )}
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.metadataContainer}>
          <View style={styles.metadataItem}>
            <View style={styles.calendarIcon} />
            <Text style={styles.metadataText}>{date}</Text>
          </View>
          <Text style={styles.dot}>·</Text>
          <View style={styles.metadataItem}>
            <View style={styles.userIcon} />
            <Text style={styles.metadataText}>{user}</Text>
          </View>
          <Text style={styles.dot}>·</Text>
          <View style={styles.metadataItem}>
            <View style={styles.documentIcon} />
            <Text style={styles.metadataText}>{transactionId}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: verticalScale(16),
    paddingHorizontal: scale(20),
    gap: scale(12),
    borderRadius: scale(12),
    borderWidth: 1,
    borderColor: '#E6E7EA',
    backgroundColor: '#FFFFFF',
  },
  statusIcon: {
    width: scale(32),
    height: scale(32),
    borderRadius: scale(16),
    justifyContent: 'center',
    alignItems: 'center',
  },
  successStatus: {
    backgroundColor: '#288608',
  },
  pendingStatus: {
    backgroundColor: '#F59E0B',
  },
  failedStatus: {
    backgroundColor: '#DC2626',
  },
  checkmark: {
    width: scale(16),
    height: scale(16),
    position: 'relative',
  },
  checkmarkStem: {
    position: 'absolute',
    left: scale(8),
    top: scale(4),
    width: scale(2),
    height: scale(8),
    backgroundColor: '#FFFFFF',
    borderRadius: scale(1),
    transform: [{ rotate: '45deg' }],
  },
  checkmarkKick: {
    position: 'absolute',
    left: scale(3),
    top: scale(8),
    width: scale(2),
    height: scale(4),
    backgroundColor: '#FFFFFF',
    borderRadius: scale(1),
    transform: [{ rotate: '-45deg' }],
  },
  content: {
    flex: 1,
    paddingVertical: verticalScale(5),
    gap: verticalScale(4),
  },
  title: {
    color: '#1D2433',
    fontFamily: 'Inter',
    fontSize: scale(15),
    fontWeight: '700',
    lineHeight: scale(22),
  },
  metadataContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: scale(8),
  },
  metadataItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(4),
  },
  calendarIcon: {
    width: scale(12),
    height: scale(12),
    backgroundColor: '#71757F',
    borderRadius: scale(2),
  },
  userIcon: {
    width: scale(12),
    height: scale(12),
    backgroundColor: '#71757F',
    borderRadius: scale(6),
  },
  documentIcon: {
    width: scale(12),
    height: scale(12),
    backgroundColor: '#71757F',
    borderRadius: scale(2),
  },
  metadataText: {
    color: '#71757F',
    fontFamily: 'Inter',
    fontSize: scale(12),
    fontWeight: '400',
    lineHeight: scale(16),
  },
  dot: {
    color: '#71757F',
    fontFamily: 'Inter',
    fontSize: scale(12),
    fontWeight: '400',
    lineHeight: scale(16),
  },
});

export default SubmissionStatus;
