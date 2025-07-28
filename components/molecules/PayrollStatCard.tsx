import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

interface PayrollStatCardProps {
  period: string;
  totalAmount: {
    integer: string;
    fractional: string;
    currency: string;
  };
  stats: Array<{
    label: string;
    value: string;
  }>;
}

const PayrollStatCard: React.FC<PayrollStatCardProps> = ({
  period,
  totalAmount,
  stats,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.period}>{period}</Text>

      <View style={styles.amountSection}>
        <Text style={styles.amountLabel}>Total executed amount</Text>
        <View style={styles.amountContainer}>
          <View style={styles.amountGroup}>
            <Text style={styles.amountInteger}>{totalAmount.integer}</Text>
            <Text style={styles.amountFractional}>
              {totalAmount.fractional}
            </Text>
          </View>
          <Text style={styles.currency}>{totalAmount.currency}</Text>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.statsSection}>
        {stats.map((stat, index) => (
          <View key={index} style={styles.statRow}>
            <Text style={styles.statLabel}>{stat.label}</Text>
            <Text style={styles.statValue}>{stat.value}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: verticalScale(24),
    paddingBottom: verticalScale(32),
    borderRadius: scale(12),
    borderWidth: 1,
    borderColor: '#E6E7EA',
    backgroundColor: '#FFF',
    gap: verticalScale(16),
  },
  period: {
    fontFamily: 'Inter',
    fontSize: scale(15),
    fontWeight: '500',
    lineHeight: scale(22),
    color: '#71757F',
  },
  amountSection: {
    gap: verticalScale(4),
  },
  amountLabel: {
    fontFamily: 'Inter',
    fontSize: scale(14),
    fontWeight: '500',
    lineHeight: scale(20),
    color: '#71757F',
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: scale(10),
  },
  amountGroup: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  amountInteger: {
    fontFamily: 'Inter',
    fontSize: scale(24),
    fontWeight: '600',
    lineHeight: scale(34),
    letterSpacing: scale(-0.48),
    color: '#1D2433',
  },
  amountFractional: {
    fontFamily: 'Inter',
    fontSize: scale(18),
    fontWeight: '600',
    lineHeight: scale(28),
    letterSpacing: scale(-0.36),
    color: '#1D2433',
  },
  currency: {
    fontFamily: 'Inter',
    fontSize: scale(24),
    fontWeight: '600',
    lineHeight: scale(34),
    letterSpacing: scale(-0.48),
    color: '#1D2433',
  },
  divider: {
    height: 1,
    backgroundColor: '#D9D9D9',
    opacity: 0.4,
  },
  statsSection: {
    gap: verticalScale(8),
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statLabel: {
    fontFamily: 'Inter',
    fontSize: scale(13),
    fontWeight: '400',
    lineHeight: scale(18),
    color: '#71757F',
  },
  statValue: {
    fontFamily: 'Inter',
    fontSize: scale(14),
    fontWeight: '600',
    lineHeight: scale(18.2),
    color: '#1D2433',
  },
});

export default PayrollStatCard;
