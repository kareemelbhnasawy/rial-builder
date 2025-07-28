import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import PayrollStatCard from '../molecules/PayrollStatCard';
import PayrollStatsButton from '../molecules/PayrollStatsButton';

interface PayrollStatisticsProps {
  onStatsButtonPress?: () => void;
}

const PayrollStatistics: React.FC<PayrollStatisticsProps> = ({
  onStatsButtonPress,
}) => {
  const payrollData = {
    period: 'Last month - March 2023',
    totalAmount: {
      integer: '14,200,500',
      fractional: '.32',
      currency: 'SAR',
    },
    stats: [
      { label: 'Executed payrolls', value: '6 files' },
      { label: 'Canceled payrolls', value: '1 file' },
      { label: 'Under execution', value: '4 files' },
      { label: 'Under approval', value: '5 files' },
    ],
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.heading}>Payroll statistics</Text>
        <PayrollStatCard
          period={payrollData.period}
          totalAmount={payrollData.totalAmount}
          stats={payrollData.stats}
        />
        <PayrollStatsButton onPress={onStatsButtonPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: verticalScale(16),
  },
  section: {
    gap: verticalScale(16),
  },
  heading: {
    fontFamily: 'Merriweather',
    fontSize: scale(20),
    fontWeight: '700',
    lineHeight: scale(30),
    letterSpacing: scale(-0.4),
    color: '#1D2433',
  },
});

export default PayrollStatistics;
