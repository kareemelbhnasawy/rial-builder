import React from 'react';
import HomeTemplate from '../components/templates/HomeTemplate';

const HomeScreen: React.FC = () => {
  const mockBalance = {
    integer: '234,450',
    fractional: '.87',
    currency: 'SAR',
  };

  const mockApprovals = [
    {
      id: 'TRF-000001',
      title: 'International Transfer',
      date: '18 Aug 2024',
      user: 'Mahmoud S.',
    },
    {
      id: 'PAY-000002',
      title: 'Bill Payment',
      date: '17 Aug 2024',
      user: 'Ahmed K.',
    },
  ];

  const mockSadadSummary = {
    billsCount: '3 bills',
    amount: {
      integer: '1,247',
      fractional: '.50',
      currency: 'SAR',
    },
    totalAmount: '3,247.50 SAR',
  };

  const mockTransactions = [
    {
      id: '1',
      type: 'income' as const,
      title: 'Salary',
      description: 'Monthly salary from ABC Corp',
      amount: '+5,000.00 SAR',
      date: '18 Aug',
    },
    {
      id: '2',
      type: 'expense-pending' as const,
      title: 'Transfer',
      description: 'To Ahmed Mohammed',
      amount: '-1,500.00 SAR',
      date: '17 Aug',
      isPending: true,
    },
    {
      id: '3',
      type: 'card' as const,
      title: 'Card payment',
      description: 'Shopping at Mall',
      amount: '-250.00 SAR',
      date: '16 Aug',
    },
  ];

  return (
    <HomeTemplate
      balance={mockBalance}
      approvals={mockApprovals}
      sadadSummary={mockSadadSummary}
      transactions={mockTransactions}
      onBalanceSeeDetails={() => console.log('See balance details')}
      onBalanceCurrencyPress={() => console.log('Currency selector')}
      onTransferPress={() => console.log('Transfer pressed')}
      onPaymentPress={() => console.log('Payment pressed')}
      onStatementPress={() => console.log('Statement pressed')}
      onCertificatePress={() => console.log('Certificate pressed')}
      onApprovalPress={approval => console.log('Approval pressed:', approval)}
      onTransactionPress={transaction =>
        console.log('Transaction pressed:', transaction)
      }
      onSeeAllTransactionsPress={() => console.log('See all transactions')}
    />
  );
};

export default HomeScreen;
