import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { scale, verticalScale } from 'react-native-size-matters';

interface BalanceCardProps {
  balance: {
    integer: string;
    fractional: string;
    currency: string;
  };
  onSeeDetails?: () => void;
  onCurrencyPress?: () => void;
}

const PlusCircleIcon: React.FC = () => (
  <Svg width={scale(20)} height={scale(20)} viewBox="0 0 20 20" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 3.125C6.20304 3.125 3.125 6.20304 3.125 10C3.125 13.797 6.20304 16.875 10 16.875C13.797 16.875 16.875 13.797 16.875 10C16.875 6.20304 13.797 3.125 10 3.125ZM1.875 10C1.875 5.51269 5.51269 1.875 10 1.875C14.4873 1.875 18.125 5.51269 18.125 10C18.125 14.4873 14.4873 18.125 10 18.125C5.51269 18.125 1.875 14.4873 1.875 10ZM10 6.875C10.3452 6.875 10.625 7.15482 10.625 7.5V9.375H12.5C12.8452 9.375 13.125 9.65482 13.125 10C13.125 10.3452 12.8452 10.625 12.5 10.625H10.625V12.5C10.625 12.8452 10.3452 13.125 10 13.125C9.65482 13.125 9.375 12.8452 9.375 12.5V10.625H7.5C7.15482 10.625 6.875 10.3452 6.875 10C6.875 9.65482 7.15482 9.375 7.5 9.375H9.375V7.5C9.375 7.15482 9.65482 6.875 10 6.875Z"
      fill="#3388E0"
    />
  </Svg>
);

const ChevronDownIcon: React.FC = () => (
  <Svg width={scale(20)} height={scale(20)} viewBox="0 0 20 20" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.4418 13.7754C10.1977 14.0195 9.80197 14.0195 9.5579 13.7754L4.14123 8.35877C3.89715 8.11469 3.89715 7.71897 4.14123 7.47489C4.38531 7.23081 4.78104 7.23081 5.02511 7.47489L9.99984 12.4496L14.9746 7.47489C15.2186 7.23081 15.6144 7.23081 15.8584 7.47489C16.1025 7.71897 16.1025 8.11469 15.8584 8.35877L10.4418 13.7754Z"
      fill="#1D2433"
      fillOpacity={0.8}
    />
  </Svg>
);

const BalanceCard: React.FC<BalanceCardProps> = ({
  balance,
  onSeeDetails,
  onCurrencyPress,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.balanceSection}>
        <View style={styles.balanceInfo}>
          <Text style={styles.label}>Total balance</Text>
          <View style={styles.amountContainer}>
            <View style={styles.amountGroup}>
              <Text style={styles.amountInteger}>{balance.integer}</Text>
              <Text style={styles.amountFractional}>{balance.fractional}</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.currencySelector}
          onPress={onCurrencyPress}
        >
          <Text style={styles.currency}>{balance.currency}</Text>
          <ChevronDownIcon />
        </TouchableOpacity>
      </View>

      <View style={styles.divider} />

      <TouchableOpacity style={styles.seeDetailsButton} onPress={onSeeDetails}>
        <Text style={styles.seeDetailsText}>See details</Text>
        <PlusCircleIcon />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: verticalScale(24),
    paddingHorizontal: scale(16),
    backgroundColor: '#FFF',
    borderRadius: scale(16),
    gap: verticalScale(16),
  },
  balanceSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  balanceInfo: {
    flex: 1,
    gap: verticalScale(4),
  },
  label: {
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
  currencySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: verticalScale(14),
    paddingHorizontal: scale(16),
    borderRadius: scale(8),
    borderWidth: 1,
    borderColor: '#E6E7EA',
    backgroundColor: '#FFF',
    gap: scale(8),
    shadowColor: '#DCDCDC',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.7,
    shadowRadius: 1,
    elevation: 1,
  },
  currency: {
    fontFamily: 'Inter',
    fontSize: scale(16),
    fontWeight: '600',
    lineHeight: scale(24),
    color: '#1D2433',
  },
  divider: {
    height: 1,
    backgroundColor: '#E6E7EA',
  },
  seeDetailsButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: verticalScale(4),
    gap: scale(8),
  },
  seeDetailsText: {
    fontFamily: 'Inter',
    fontSize: scale(16),
    fontWeight: '600',
    lineHeight: scale(20),
    letterSpacing: scale(0.32),
    color: '#3388E0',
  },
});

export default BalanceCard;
