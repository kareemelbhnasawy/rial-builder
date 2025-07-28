import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { scale, verticalScale } from 'react-native-size-matters';
import ProductList from '../organisms/ProductList';
import Page from '../organisms/Page';

interface ProductsTemplateProps {
  onProductPress: (product: string) => void;
}

const StatementIcon: React.FC = () => (
  <Svg width={scale(16)} height={scale(16)} viewBox="0 0 16 16" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 2C8.55116 2 8.17016 2.29608 8.04415 2.70478C8.01557 2.79748 8 2.89646 8 3H11C11 2.89646 10.9844 2.79748 10.9558 2.70478C10.8298 2.29608 10.4488 2 10 2H9ZM7.22467 2.07843C7.55779 1.43795 8.22727 1 9 1H10C10.7727 1 11.4422 1.43795 11.7753 2.07843C11.9252 2.08879 12.0747 2.10017 12.224 2.11256C13.2502 2.19774 14 3.06855 14 4.07214V11C14 12.1046 13.1046 13 12 13H11V13.75C11 14.4404 10.4404 15 9.75 15H3.25C2.55964 15 2 14.4404 2 13.75V6.25C2 5.55964 2.55964 5 3.25 5H5V4.07215C5 3.06855 5.74984 2.19774 6.77603 2.11256C6.9253 2.10017 7.07485 2.08879 7.22467 2.07843ZM7.00468 3.09736C6.956 3.10118 6.90736 3.1051 6.85875 3.10914C6.37682 3.14914 6 3.56243 6 4.07215V5H9.75C10.4404 5 11 5.55964 11 6.25V12H12C12.5523 12 13 11.5523 13 11V4.07214C13 3.56243 12.6232 3.14914 12.1413 3.10914C12.0926 3.1051 12.044 3.10118 11.9953 3.09736C11.9464 3.60396 11.5194 4 11 4H8C7.48056 4 7.05363 3.60396 7.00468 3.09736ZM10 6.25C10 6.11193 9.88807 6 9.75 6H3.25C3.11193 6 3 6.11193 3 6.25V13.75C3 13.8881 3.11193 14 3.25 14H9.75C9.88807 14 10 13.8881 10 13.75V6.25ZM4 8C4 7.72386 4.22386 7.5 4.5 7.5H4.505C4.78114 7.5 5.005 7.72386 5.005 8V8.005C5.005 8.28114 4.78114 8.505 4.505 8.505H4.5C4.22386 8.505 4 8.28114 4 8.005V8ZM5.5 8C5.5 7.72386 5.72386 7.5 6 7.5H8.5C8.77614 7.5 9 7.72386 9 8C9 8.27614 8.77614 8.5 8.5 8.5H6C5.72386 8.5 5.5 8.27614 5.5 8ZM4 10C4 9.72386 4.22386 9.5 4.5 9.5H4.505C4.78114 9.5 5.005 9.72386 5.005 10V10.005C5.005 10.2811 4.78114 10.505 4.505 10.505H4.5C4.22386 10.505 4 10.2811 4 10.005V10ZM5.5 10C5.5 9.72386 5.72386 9.5 6 9.5H8.5C8.77614 9.5 9 9.72386 9 10C9 10.2761 8.77614 10.5 8.5 10.5H6C5.72386 10.5 5.5 10.2761 5.5 10ZM4 12C4 11.7239 4.22386 11.5 4.5 11.5H4.505C4.78114 11.5 5.005 11.7239 5.005 12V12.005C5.005 12.2811 4.78114 12.505 4.505 12.505H4.5C4.22386 12.505 4 12.2811 4 12.005V12ZM5.5 12C5.5 11.7239 5.72386 11.5 6 11.5H8.5C8.77614 11.5 9 11.7239 9 12C9 12.2761 8.77614 12.5 8.5 12.5H6C5.72386 12.5 5.5 12.2761 5.5 12Z"
      fill="white"
    />
  </Svg>
);

const ProductsTemplate: React.FC<ProductsTemplateProps> = ({
  onProductPress,
}) => {
  const filterTabs = [
    'Accounts',
    'Cards',
    'Authenticated request',
    'Statements',
    'POS',
  ];

  return (
    <Page style={styles.container}>
      <View style={styles.content}>
        <View style={styles.topSection}>
          <Text style={styles.title}>Products</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.filterContainer}
          >
            {filterTabs.map((tab, index) => (
              <View
                key={index}
                style={[
                  styles.filterTab,
                  tab === 'Statements' && styles.activeFilterTab,
                ]}
              >
                {tab === 'Statements' && <StatementIcon />}
                <Text
                  style={[
                    styles.filterText,
                    tab === 'Statements' && styles.activeFilterText,
                  ]}
                >
                  {tab}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>

        <View style={styles.statementsSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Request statement</Text>
          </View>
          <ProductList onItemPress={onProductPress} />
        </View>
      </View>
    </Page>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F7F9',
  },
  content: {
    flex: 1,
  },
  topSection: {
    paddingTop: verticalScale(24),
    paddingHorizontal: scale(16),
    paddingBottom: verticalScale(20),
    backgroundColor: '#F6F7F9',
    gap: verticalScale(16),
  },
  title: {
    fontFamily: 'Merriweather',
    fontSize: scale(28),
    fontWeight: '700',
    lineHeight: scale(38),
    letterSpacing: scale(-0.84),
    color: '#1D2433',
  },
  filterContainer: {
    gap: scale(12),
    justifyContent: 'flex-end',
  },
  filterTab: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: verticalScale(12),
    paddingHorizontal: scale(16),
    borderRadius: scale(12),
    borderWidth: 1,
    borderColor: '#FFF',
    backgroundColor: '#FFF',
    gap: scale(4),
  },
  activeFilterTab: {
    backgroundColor: '#0E0F11',
    borderColor: '#0E0F11',
  },
  filterText: {
    fontFamily: 'Inter',
    fontSize: scale(14),
    fontWeight: '400',
    lineHeight: scale(20),
    color: '#1D2433',
    textAlign: 'center',
  },
  activeFilterText: {
    color: '#FFF',
    fontWeight: '600',
  },
  statementsSection: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: scale(16),
    borderTopRightRadius: scale(16),
    paddingBottom: verticalScale(32),
  },
  sectionHeader: {
    paddingVertical: verticalScale(16),
    paddingHorizontal: scale(20),
    gap: verticalScale(24),
  },
  sectionTitle: {
    fontFamily: 'Merriweather',
    fontSize: scale(20),
    fontWeight: '700',
    lineHeight: scale(30),
    letterSpacing: scale(-0.4),
    color: '#1D2433',
  },
});

export default ProductsTemplate;
