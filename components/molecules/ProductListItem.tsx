import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import ArrowIcon from '../atoms/ArrowIcon';

interface ProductListItemProps {
  title: string;
  onPress: () => void;
}

const ProductListItem: React.FC<ProductListItemProps> = ({
  title,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
      <ArrowIcon size={24} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: verticalScale(20),
    paddingHorizontal: scale(8),
    borderBottomWidth: 1,
    borderBottomColor: '#E6E7EA',
    backgroundColor: '#FFF',
  },
  title: {
    flex: 1,
    fontFamily: 'Inter',
    fontSize: scale(18),
    fontWeight: '600',
    lineHeight: scale(28),
    letterSpacing: scale(-0.36),
    color: '#1D2433',
  },
});

export default ProductListItem;
