import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import PayrollStatistics from '../organisms/PayrollStatistics';
import Page from '../organisms/Page';

interface PaymentsTemplateProps {
  onStatsPress?: () => void;
}

const PaymentsTemplate: React.FC<PaymentsTemplateProps> = ({
  onStatsPress,
}) => {
  return (
    <Page style={styles.container}>
      <View style={styles.topSection}>
        <Text style={styles.title}>Payments</Text>
      </View>

      <View style={styles.contentSection}>
        <PayrollStatistics onStatsButtonPress={onStatsPress} />
      </View>
    </Page>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F7F9',
  },
  topSection: {
    paddingTop: verticalScale(24),
    paddingBottom: verticalScale(20),
    paddingHorizontal: scale(16),
    backgroundColor: '#F6F7F9',
  },
  title: {
    fontFamily: 'Merriweather',
    fontSize: scale(28),
    fontWeight: '700',
    lineHeight: scale(38),
    letterSpacing: scale(-0.84),
    color: '#1D2433',
  },
  contentSection: {
    flex: 1,
    paddingTop: verticalScale(24),
    paddingBottom: verticalScale(32),
    paddingHorizontal: scale(16),
    backgroundColor: '#FFF',
    borderTopLeftRadius: scale(16),
    borderTopRightRadius: scale(16),
    gap: verticalScale(40),
    alignItems: 'center',
  },
});

export default PaymentsTemplate;
