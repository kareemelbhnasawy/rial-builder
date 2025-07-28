import React from 'react';
import { Alert } from 'react-native';
import ProductsTemplate from '../components/templates/ProductsTemplate';

const ProductsScreen: React.FC = () => {
  const handleProductPress = (product: string) => {
    Alert.alert('Product Selected', `You selected: ${product}`);
  };

  return <ProductsTemplate onProductPress={handleProductPress} />;
};

export default ProductsScreen;
