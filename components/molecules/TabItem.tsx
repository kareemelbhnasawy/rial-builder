import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import TabIcon from '../atoms/TabIcon';

interface TabItemProps {
  name: 'home' | 'products' | 'transfers' | 'payments' | 'investments';
  label: string;
  isActive?: boolean;
  onPress: () => void;
}

const TabItem: React.FC<TabItemProps> = ({
  name,
  label,
  isActive = false,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <TabIcon name={name} isActive={isActive} />
      <Text style={[styles.label, isActive && styles.activeLabel]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: verticalScale(4),
    gap: verticalScale(4),
  },
  label: {
    fontFamily: 'Inter',
    fontSize: scale(12),
    fontWeight: '400',
    lineHeight: scale(16),
    color: '#71757F',
    textAlign: 'center',
    maxWidth: scale(70),
  },
  activeLabel: {
    color: '#1D2433',
    fontWeight: '600',
  },
});

export default TabItem;
