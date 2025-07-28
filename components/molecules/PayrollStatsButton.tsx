import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { scale, verticalScale } from 'react-native-size-matters';

interface PayrollStatsButtonProps {
  onPress?: () => void;
}

const TrendingUpIcon: React.FC = () => (
  <Svg width={scale(20)} height={scale(20)} viewBox="0 0 21 20" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.1829 5.22326C13.3066 4.901 13.6681 4.74005 13.9903 4.86375L18.9414 6.76428C19.2636 6.88798 19.4246 7.2495 19.3009 7.57175L17.4004 12.5228C17.2767 12.8451 16.9151 13.006 16.5929 12.8823C16.2706 12.7586 16.1097 12.3971 16.2334 12.0748L17.5932 8.53245L16.6878 8.93558C14.6434 9.84578 13.0863 11.3964 12.1459 13.2469C12.0552 13.4253 11.8845 13.5495 11.6868 13.5809C11.4891 13.6123 11.2883 13.5472 11.1467 13.4056L8 10.2589L2.81694 15.4419C2.57286 15.686 2.17714 15.686 1.93306 15.4419C1.68898 15.1979 1.68898 14.8021 1.93306 14.558L7.55806 8.93305C7.67527 8.81584 7.83424 8.74999 8 8.74999C8.16576 8.74999 8.32473 8.81584 8.44194 8.93305L11.4469 11.938C12.5308 10.1705 14.1426 8.70048 16.1793 7.79364L17.0848 7.39052L13.5424 6.03072C13.2201 5.90702 13.0592 5.54551 13.1829 5.22326Z"
      fill="#1D2433"
      fillOpacity={0.65}
    />
  </Svg>
);

const PayrollStatsButton: React.FC<PayrollStatsButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.label}>Payroll statistics</Text>
      <TrendingUpIcon />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: scale(8),
    paddingVertical: verticalScale(18),
    paddingHorizontal: scale(24),
    borderRadius: scale(12),
    borderWidth: 1,
    borderColor: '#E6E7EA',
    backgroundColor: 'linear-gradient(180deg, #FFF 48.44%, #F5F4F4 100%)',
    shadowColor: '#DCDCDC',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.7,
    shadowRadius: 1,
    elevation: 1,
  },
  label: {
    fontFamily: 'Inter',
    fontSize: scale(16),
    fontWeight: '600',
    lineHeight: scale(20),
    letterSpacing: scale(0.32),
    color: '#1D2433',
    textAlign: 'center',
  },
});

export default PayrollStatsButton;
