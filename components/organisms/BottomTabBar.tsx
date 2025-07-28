import React from 'react';
import { View, StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import TabItem from '../molecules/TabItem';

interface BottomTabBarProps {
  activeTab: string;
  onTabPress: (tabName: string) => void;
}

const BottomTabBar: React.FC<BottomTabBarProps> = ({
  activeTab,
  onTabPress,
}) => {
  const tabs = [
    { name: 'home' as const, label: 'Home' },
    { name: 'products' as const, label: 'Products' },
    { name: 'transfers' as const, label: 'Transfers' },
    { name: 'payments' as const, label: 'Payments' },
    { name: 'investments' as const, label: 'Investments' },
  ];

  return (
    <View style={styles.container}>
      {tabs.map(tab => (
        <TabItem
          key={tab.name}
          name={tab.name}
          label={tab.label}
          isActive={activeTab === tab.name}
          onPress={() => onTabPress(tab.name)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingVertical: verticalScale(12),
    paddingHorizontal: scale(5),
    borderTopWidth: 1,
    borderTopColor: '#EEEFF2',
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.16,
    shadowRadius: 12,
    elevation: 8,
  },
});

export default BottomTabBar;
