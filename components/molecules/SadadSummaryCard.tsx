import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

interface SadadSummaryCardProps {
  billsCount: string;
  amount: {
    integer: string;
    fractional: string;
    currency: string;
  };
  totalAmount: string;
}

const SadadSummaryCard: React.FC<SadadSummaryCardProps> = ({
  billsCount,
  amount,
  totalAmount,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>SADAD summary</Text>
        <View style={styles.billsBadge}>
          <Text style={styles.billsText}>{billsCount}</Text>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.label}>Left to pay this month</Text>
        <View style={styles.amountContainer}>
          <View style={styles.amountGroup}>
            <Text style={styles.amountInteger}>{amount.integer}</Text>
            <Text style={styles.amountFractional}>{amount.fractional}</Text>
          </View>
          <Text style={styles.currency}>{amount.currency}</Text>
        </View>
        <Text style={styles.totalText}>from {totalAmount}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: scale(20),
    paddingHorizontal: scale(16),
    backgroundColor: '#FFF',
    borderRadius: scale(12),
    gap: verticalScale(32),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Merriweather',
    fontSize: scale(20),
    fontWeight: '700',
    lineHeight: scale(30),
    letterSpacing: scale(-0.4),
    color: '#1D2433',
  },
  billsBadge: {
    paddingVertical: verticalScale(0),
    paddingHorizontal: scale(4),
    paddingBottom: verticalScale(2),
    borderRadius: scale(5),
    backgroundColor: '#EEEFF2',
  },
  billsText: {
    fontFamily: 'Merriweather',
    fontSize: scale(15),
    fontWeight: '700',
    lineHeight: scale(22),
    color: '#3F444D',
  },
  content: {
    gap: verticalScale(4),
  },
  label: {
    fontFamily: 'Inter',
    fontSize: scale(14),
    fontWeight: '500',
    lineHeight: scale(20),
    color: '#1D2433',
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: scale(8),
  },
  amountGroup: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  amountInteger: {
    fontFamily: 'Inter',
    fontSize: scale(20),
    fontWeight: '600',
    lineHeight: scale(30),
    color: '#1D2433',
  },
  amountFractional: {
    fontFamily: 'Inter',
    fontSize: scale(16),
    fontWeight: '600',
    lineHeight: scale(24),
    color: '#1D2433',
  },
  currency: {
    fontFamily: 'Inter',
    fontSize: scale(20),
    fontWeight: '600',
    lineHeight: scale(30),
    color: '#1D2433',
  },
  totalText: {
    fontFamily: 'Inter',
    fontSize: scale(14),
    fontWeight: '500',
    lineHeight: scale(20),
    color: '#1D2433',
  },
});

export default SadadSummaryCard;
