import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { scale, verticalScale } from 'react-native-size-matters';

interface ApprovalItemProps {
  title: string;
  id: string;
  date: string;
  user: string;
  onPress?: () => void;
}

const ChevronRightIcon: React.FC = () => (
  <Svg width={scale(24)} height={scale(24)} viewBox="0 0 24 24" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.5303 11.4697C15.8232 11.7626 15.8232 12.2374 15.5303 12.5303L9.03033 19.0303C8.73744 19.3232 8.26256 19.3232 7.96967 19.0303C7.67678 18.7374 7.67678 18.2626 7.96967 17.9697L13.9393 12L7.96967 6.03033C7.67678 5.73744 7.67678 5.26256 7.96967 4.96967C8.26256 4.67678 8.73744 4.67678 9.03033 4.96967L15.5303 11.4697Z"
      fill="#D3D5D9"
    />
  </Svg>
);

const ApprovalItem: React.FC<ApprovalItemProps> = ({
  title,
  id,
  date,
  user,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.content}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.id}>{id}</Text>
          <Text style={styles.dateUser}>
            {date} by {user}
          </Text>
        </View>
      </View>
      <ChevronRightIcon />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: verticalScale(16),
    paddingHorizontal: scale(20),
    borderRadius: scale(12),
    borderWidth: 1,
    borderColor: '#E6E7EA',
    backgroundColor: '#FFF',
    shadowColor: '#DCDCDC',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.7,
    shadowRadius: 1,
    elevation: 1,
  },
  content: {
    flex: 1,
    gap: verticalScale(2),
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(4),
  },
  title: {
    fontFamily: 'Inter',
    fontSize: scale(15),
    fontWeight: '600',
    lineHeight: scale(22),
    color: '#1D2433',
  },
  details: {
    gap: verticalScale(4),
  },
  id: {
    fontFamily: 'Inter',
    fontSize: scale(12),
    fontWeight: '500',
    lineHeight: scale(16),
    color: '#71757F',
  },
  dateUser: {
    fontFamily: 'Inter',
    fontSize: scale(12),
    fontWeight: '500',
    lineHeight: scale(16),
    color: '#71757F',
  },
});

export default ApprovalItem;
