import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

interface AccountInfo {
  name: string;
  number: string;
  bank?: string;
  balance?: string;
}

interface TransferData {
  accountFrom: AccountInfo;
  accountTo: AccountInfo;
  amount: {
    integer: string;
    fractional: string;
    currency: string;
  };
  debitAmount?: {
    integer: string;
    fractional: string;
    currency: string;
  };
  fee: string;
  exchangeRate?: string;
  exchangeRateDescription?: string;
  total: string;
}

interface TransferDetailsProps {
  transferData: TransferData;
}

const TransferDetails: React.FC<TransferDetailsProps> = ({ transferData }) => {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.label}>Account From</Text>
        <View style={styles.accountInfo}>
          <Text style={styles.accountName}>
            {transferData.accountFrom.name}
            {transferData.accountFrom.balance &&
              ` (${transferData.accountFrom.balance})`}
          </Text>
          <Text style={styles.accountNumber}>
            {transferData.accountFrom.number}
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>To</Text>
        <View style={styles.accountInfo}>
          <Text style={styles.accountName}>{transferData.accountTo.name}</Text>
          <Text style={styles.accountNumber}>
            {transferData.accountTo.number}
          </Text>
          {transferData.accountTo.bank && (
            <Text style={styles.accountNumber}>
              {transferData.accountTo.bank}
            </Text>
          )}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Transfer amount</Text>
        <View style={styles.amountContainer}>
          <View style={styles.amountGroup}>
            <Text style={styles.amountInteger}>
              {transferData.amount.integer}
            </Text>
            <Text style={styles.amountFractional}>
              {transferData.amount.fractional}
            </Text>
          </View>
          <Text style={styles.currency}>{transferData.amount.currency}</Text>
        </View>
      </View>

      {transferData.debitAmount && (
        <View style={styles.section}>
          <Text style={styles.label}>Debit amount</Text>
          <View style={styles.amountContainer}>
            <View style={styles.amountGroup}>
              <Text style={styles.amountInteger}>
                {transferData.debitAmount.integer}
              </Text>
              <Text style={styles.amountFractional}>
                {transferData.debitAmount.fractional}
              </Text>
            </View>
            <Text style={styles.currency}>
              {transferData.debitAmount.currency}
            </Text>
          </View>
        </View>
      )}

      <View style={styles.section}>
        <Text style={styles.label}>Transfer fee</Text>
        <Text style={styles.feeText}>{transferData.fee}</Text>
      </View>

      {transferData.exchangeRate && (
        <View style={styles.exchangeRateSection}>
          <Text style={styles.label}>Exchange rate</Text>
          <Text style={styles.exchangeRateText}>
            {transferData.exchangeRate}
          </Text>
          {transferData.exchangeRateDescription && (
            <Text style={styles.exchangeRateDescription}>
              {transferData.exchangeRateDescription}
            </Text>
          )}
        </View>
      )}

      <View style={styles.section}>
        <Text style={styles.label}>Your total</Text>
        <Text style={styles.totalText}>{transferData.total}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: verticalScale(16),
  },
  section: {
    gap: verticalScale(4),
  },
  label: {
    color: '#71757F',
    fontFamily: 'Inter',
    fontSize: scale(14),
    fontWeight: '400',
    lineHeight: scale(20),
  },
  accountInfo: {
    gap: verticalScale(4),
  },
  accountName: {
    color: '#1D2433',
    fontFamily: 'Inter',
    fontSize: scale(14),
    fontWeight: '700',
    lineHeight: scale(20),
  },
  accountNumber: {
    color: '#1D2433',
    fontFamily: 'Inter',
    fontSize: scale(14),
    fontWeight: '400',
    lineHeight: scale(20),
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
    color: '#1D2433',
    fontFamily: 'Inter',
    fontSize: scale(20),
    fontWeight: '700',
    lineHeight: scale(30),
  },
  amountFractional: {
    color: '#1D2433',
    fontFamily: 'Inter',
    fontSize: scale(16),
    fontWeight: '700',
    lineHeight: scale(24),
  },
  currency: {
    color: '#1D2433',
    fontFamily: 'Inter',
    fontSize: scale(20),
    fontWeight: '700',
    lineHeight: scale(30),
  },
  feeText: {
    color: '#1D2433',
    fontFamily: 'Inter',
    fontSize: scale(14),
    fontWeight: '400',
    lineHeight: scale(20),
  },
  totalText: {
    color: '#1D2433',
    fontFamily: 'Inter',
    fontSize: scale(14),
    fontWeight: '400',
    lineHeight: scale(20),
  },
  exchangeRateSection: {
    gap: verticalScale(4),
    minHeight: verticalScale(88),
  },
  exchangeRateText: {
    color: '#1D2433',
    fontFamily: 'Inter',
    fontSize: scale(14),
    fontWeight: '400',
    lineHeight: scale(20),
  },
  exchangeRateDescription: {
    color: 'rgba(29, 36, 51, 0.8)',
    fontFamily: 'Inter',
    fontSize: scale(12),
    fontWeight: '400',
    lineHeight: scale(16),
    flex: 1,
  },
});

export default TransferDetails;
