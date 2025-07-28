import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import Page from '../organisms/Page';
import Header from '../molecules/Header';
import BalanceCard from '../molecules/BalanceCard';
import QuickActions from '../organisms/QuickActions';
import ApprovalsList from '../organisms/ApprovalsList';
import SadadSummaryCard from '../molecules/SadadSummaryCard';
import TransactionHistory from '../organisms/TransactionHistory';

interface BalanceData {
  integer: string;
  fractional: string;
  currency: string;
}

interface ApprovalData {
  id: string;
  title: string;
  date: string;
  user: string;
}

interface SadadData {
  billsCount: string;
  amount: BalanceData;
  totalAmount: string;
}

interface TransactionData {
  id: string;
  type: 'income' | 'expense' | 'expense-pending' | 'card';
  title: string;
  description: string;
  amount: string;
  date: string;
  isPending?: boolean;
}

interface HomeTemplateProps {
  balance: BalanceData;
  approvals: ApprovalData[];
  sadadSummary: SadadData;
  transactions: TransactionData[];
  onBalanceSeeDetails?: () => void;
  onBalanceCurrencyPress?: () => void;
  onTransferPress?: () => void;
  onPaymentPress?: () => void;
  onStatementPress?: () => void;
  onCertificatePress?: () => void;
  onApprovalPress?: (approval: ApprovalData) => void;
  onTransactionPress?: (transaction: TransactionData) => void;
  onSeeAllTransactionsPress?: () => void;
}

const HomeTemplate: React.FC<HomeTemplateProps> = ({
  balance,
  approvals,
  sadadSummary,
  transactions,
  onBalanceSeeDetails,
  onBalanceCurrencyPress,
  onTransferPress,
  onPaymentPress,
  onStatementPress,
  onCertificatePress,
  onApprovalPress,
  onTransactionPress,
  onSeeAllTransactionsPress,
}) => {
  return (
    <Page
      backgroundColor="#F6F7F9"
      barStyle="dark-content"
      statusBarBg="#F6F7F9"
    >
      <Header
        greeting="Good morning"
        userName="Kareem"
        onNotificationPress={() => {}}
        onProfilePress={() => {}}
      />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <BalanceCard
          balance={balance}
          onSeeDetails={onBalanceSeeDetails}
          onCurrencyPress={onBalanceCurrencyPress}
        />

        <QuickActions
          onTransferPress={onTransferPress}
          onPaymentPress={onPaymentPress}
          onStatementPress={onStatementPress}
          onCertificatePress={onCertificatePress}
        />

        <ApprovalsList
          approvals={approvals}
          onApprovalPress={onApprovalPress}
        />

        <SadadSummaryCard
          billsCount={sadadSummary.billsCount}
          amount={sadadSummary.amount}
          totalAmount={sadadSummary.totalAmount}
        />

        <TransactionHistory
          transactions={transactions}
          onTransactionPress={onTransactionPress}
          onSeeAllPress={onSeeAllTransactionsPress}
        />

        <View style={styles.bottomSpacing} />
      </ScrollView>
    </Page>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: scale(16),
    gap: verticalScale(24),
  },
  bottomSpacing: {
    height: verticalScale(100),
  },
});

export default HomeTemplate;
