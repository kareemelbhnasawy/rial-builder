import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import TransactionItem from '../molecules/TransactionItem';

interface Transaction {
  id: string;
  type: 'income' | 'expense' | 'expense-pending' | 'card';
  title: string;
  description: string;
  amount: string;
  date: string;
  isPending?: boolean;
}

interface TransactionHistoryProps {
  transactions: Transaction[];
  onTransactionPress?: (transaction: Transaction) => void;
  onSeeAllPress?: () => void;
}

const TransactionHistory: React.FC<TransactionHistoryProps> = ({
  transactions,
  onTransactionPress,
  onSeeAllPress,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Transaction history</Text>
        <TouchableOpacity onPress={onSeeAllPress}>
          <Text style={styles.seeAllText}>See all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listContainer}>
        {transactions.map(transaction => (
          <TouchableOpacity
            key={transaction.id}
            onPress={() => onTransactionPress?.(transaction)}
          >
            <TransactionItem
              type={transaction.type}
              title={transaction.title}
              description={transaction.description}
              amount={transaction.amount}
              date={transaction.date}
              isPending={transaction.isPending}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: verticalScale(16),
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
  seeAllText: {
    fontFamily: 'Inter',
    fontSize: scale(14),
    fontWeight: '500',
    lineHeight: scale(20),
    color: '#3388E0',
  },
  listContainer: {
    gap: verticalScale(16),
  },
});

export default TransactionHistory;
