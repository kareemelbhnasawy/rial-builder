import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import QuickActionButton from '../molecules/QuickActionButton';

interface QuickActionsProps {
  onTransferPress?: () => void;
  onPaymentPress?: () => void;
  onStatementPress?: () => void;
  onCertificatePress?: () => void;
}

const QuickActions: React.FC<QuickActionsProps> = ({
  onTransferPress,
  onPaymentPress,
  onStatementPress,
  onCertificatePress,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quick actions</Text>
      <View style={styles.actionsContainer}>
        <QuickActionButton
          type="transfer"
          label="Transfer"
          onPress={onTransferPress}
        />
        <QuickActionButton
          type="payment"
          label="Payment"
          onPress={onPaymentPress}
        />
        <QuickActionButton
          type="statement"
          label="Statement"
          onPress={onStatementPress}
        />
        <QuickActionButton
          type="certificate"
          label="Certificate"
          onPress={onCertificatePress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: verticalScale(16),
  },
  title: {
    fontFamily: 'Merriweather',
    fontSize: scale(20),
    fontWeight: '700',
    lineHeight: scale(30),
    letterSpacing: scale(-0.4),
    color: '#1D2433',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: scale(16),
  },
});

export default QuickActions;
