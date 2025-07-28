import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { scale, verticalScale } from 'react-native-size-matters';

interface TransactionItemProps {
  type: 'income' | 'expense' | 'expense-pending' | 'card';
  title: string;
  description: string;
  amount: string;
  date: string;
  isPending?: boolean;
}

const getIcon = (type: string) => {
  switch (type) {
    case 'income':
      return (
        <Svg
          width={scale(20)}
          height={scale(20)}
          viewBox="0 0 20 20"
          fill="none"
        >
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.375 13.4911L14.375 7.5C14.375 7.15482 14.6548 6.875 15 6.875C15.3452 6.875 15.625 7.15482 15.625 7.5L15.625 15C15.625 15.3452 15.3452 15.625 15 15.625L7.5 15.625C7.15482 15.625 6.875 15.3452 6.875 15C6.875 14.6548 7.15482 14.375 7.5 14.375L13.4911 14.375L4.55806 5.44194C4.31398 5.19786 4.31398 4.80213 4.55806 4.55806C4.80214 4.31398 5.19786 4.31398 5.44194 4.55806L14.375 13.4911Z"
            fill="#288608"
          />
        </Svg>
      );
    case 'expense-pending':
      return (
        <Svg
          width={scale(20)}
          height={scale(20)}
          viewBox="0 0 20 20"
          fill="none"
        >
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.75527 8.05876C3.82734 4.05777 7.93987 1.6834 11.9409 2.75546C13.2595 3.1088 14.4031 3.79342 15.304 4.69601C15.304 4.69593 15.3041 4.69608 15.304 4.69601L16.8878 6.2798V3.62967C16.8878 3.28449 17.1677 3.00467 17.5128 3.00467C17.858 3.00467 18.1378 3.28449 18.1378 3.62967V7.79017C18.1378 8.13535 17.858 8.41517 17.5128 8.41517H13.3523C13.0072 8.41517 12.7273 8.13535 12.7273 7.79017C12.7273 7.44499 13.0072 7.16517 13.3523 7.16517H16.0054L14.42 5.57969C13.6701 4.82841 12.7182 4.25784 11.6173 3.96287C8.28317 3.06949 4.85607 5.04813 3.96268 8.38229C3.87334 8.7157 3.53063 8.91357 3.19722 8.82423C2.8638 8.73489 2.66594 8.39218 2.75527 8.05876ZM16.8022 11.1756C17.1356 11.2649 17.3335 11.6076 17.2442 11.941C16.1721 15.942 12.0596 18.3164 8.05858 17.2444C6.73994 16.891 5.59643 16.2064 4.69548 15.3039L3.11182 13.7192V16.3702C3.11182 16.7153 2.83199 16.9952 2.48682 16.9952C2.14164 16.9952 1.86182 16.7153 1.86182 16.3702V12.2096C1.86182 11.8644 2.14164 11.5846 2.48682 11.5846L6.64735 11.5846C6.99253 11.5846 7.27235 11.8644 7.27235 12.2096C7.27235 12.5548 6.99253 12.8346 6.64735 12.8346L3.99501 12.8346L5.57965 14.4203C6.32952 15.1716 7.28129 15.742 8.3821 16.0369C11.7163 16.9303 15.1434 14.9517 16.0368 11.6175C16.1261 11.2841 16.4688 11.0862 16.8022 11.1756Z"
            fill="#842999"
          />
        </Svg>
      );
    case 'card':
      return (
        <Svg
          width={scale(20)}
          height={scale(20)}
          viewBox="0 0 20 20"
          fill="none"
        >
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.25 5.625C1.25 4.24429 2.36929 3.125 3.75 3.125H16.25C17.6307 3.125 18.75 4.24429 18.75 5.625V14.375C18.75 15.7557 17.6307 16.875 16.25 16.875H3.75C2.36929 16.875 1.25 15.7557 1.25 14.375V5.625ZM2.5 8.125V14.375C2.5 15.0654 3.05964 15.625 3.75 15.625H16.25C16.9404 15.625 17.5 15.0654 17.5 14.375V8.125H2.5ZM17.5 6.25H2.5V5.625C2.5 4.93464 3.05964 4.375 3.75 4.375H16.25C16.9404 4.375 17.5 4.93464 17.5 5.625V6.25ZM3.75 11.875C3.75 11.5298 4.02982 11.25 4.375 11.25H9.375C9.72018 11.25 10 11.5298 10 11.875C10 12.2202 9.72018 12.5 9.375 12.5H4.375C4.02982 12.5 3.75 12.2202 3.75 11.875ZM3.75 13.75C3.75 13.4048 4.02982 13.125 4.375 13.125H6.875C7.22018 13.125 7.5 13.4048 7.5 13.75C7.5 14.0952 7.22018 14.375 6.875 14.375H4.375C4.02982 14.375 3.75 14.0952 3.75 13.75Z"
            fill="#2D7780"
          />
        </Svg>
      );
    default:
      return null;
  }
};

const getBackgroundColor = (type: string) => {
  switch (type) {
    case 'income':
      return '#F2FBEF';
    case 'expense-pending':
      return '#FAF4FB';
    case 'card':
      return '#F3FBFC';
    default:
      return '#F2FBEF';
  }
};

const getAmountColor = (type: string) => {
  if (type === 'income') return '#288608';
  return '#1D2433';
};

const TransactionItem: React.FC<TransactionItemProps> = ({
  type,
  title,
  description,
  amount,
  date,
  isPending = false,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <View
          style={[
            styles.iconContainer,
            { backgroundColor: getBackgroundColor(type) },
          ]}
        >
          {getIcon(type)}
        </View>
        <View style={styles.textContainer}>
          <View style={styles.titleRow}>
            <Text style={styles.title}>{title}</Text>
            {isPending && (
              <View style={styles.pendingBadge}>
                <Text style={styles.pendingText}>Pending</Text>
              </View>
            )}
          </View>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
      <View style={styles.rightSection}>
        <Text style={[styles.amount, { color: getAmountColor(type) }]}>
          {amount}
        </Text>
        <Text style={styles.date}>{date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#FFF',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(12),
    width: scale(228),
    height: scale(56),
  },
  iconContainer: {
    width: scale(36),
    height: scale(36),
    borderRadius: scale(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    paddingBottom: verticalScale(1),
    gap: verticalScale(1),
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(4),
  },
  title: {
    fontFamily: 'Inter',
    fontSize: scale(13),
    fontWeight: '600',
    lineHeight: scale(18),
    color: '#1D2433',
  },
  pendingBadge: {
    paddingVertical: verticalScale(2),
    paddingHorizontal: scale(4),
    borderRadius: scale(4),
    backgroundColor: '#F6F7F9',
  },
  pendingText: {
    fontFamily: 'Inter',
    fontSize: scale(10),
    fontWeight: '500',
    lineHeight: scale(10),
    letterSpacing: scale(-0.2),
    color: 'rgba(29, 36, 51, 0.8)',
    textTransform: 'capitalize',
  },
  description: {
    fontFamily: 'Inter',
    fontSize: scale(13),
    fontWeight: '400',
    lineHeight: scale(18),
    color: '#71757F',
  },
  rightSection: {
    flex: 1,
    height: scale(56),
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  amount: {
    fontFamily: 'Inter',
    fontSize: scale(13),
    fontWeight: '500',
    lineHeight: scale(18),
    textAlign: 'right',
  },
  date: {
    fontFamily: 'Inter',
    fontSize: scale(13),
    fontWeight: '400',
    lineHeight: scale(18),
    color: '#71757F',
    textAlign: 'right',
  },
});

export default TransactionItem;
