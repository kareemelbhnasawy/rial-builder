import React from 'react';
import { Alert } from 'react-native';
import PaymentsTemplate from '../components/templates/PaymentsTemplate';

const PaymentsScreen: React.FC = () => {
  const handleStatsPress = () => {
    Alert.alert(
      'Payroll Statistics',
      'Navigate to detailed payroll statistics',
    );
  };

  return <PaymentsTemplate onStatsPress={handleStatsPress} />;
};

export default PaymentsScreen;
