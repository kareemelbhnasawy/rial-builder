import React from 'react';
import { View, StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import ProductListItem from '../molecules/ProductListItem';

interface ProductListProps {
  onItemPress: (item: string) => void;
}

const ProductList: React.FC<ProductListProps> = ({ onItemPress }) => {
  const products = [
    'VAT Statement',
    'Account Statement',
    'Swift MT940 statement',
  ];

  return (
    <View style={styles.container}>
      {products.map((product, index) => (
        <ProductListItem
          key={index}
          title={product}
          onPress={() => onItemPress(product)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: scale(16),
    gap: verticalScale(16),
  },
});

export default ProductList;
