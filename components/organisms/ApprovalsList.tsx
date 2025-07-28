import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import ApprovalItem from '../molecules/ApprovalItem';

interface Approval {
  id: string;
  title: string;
  date: string;
  user: string;
}

interface ApprovalsListProps {
  approvals: Approval[];
  onApprovalPress?: (approval: Approval) => void;
}

const ApprovalsList: React.FC<ApprovalsListProps> = ({
  approvals,
  onApprovalPress,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Approvals</Text>
      <View style={styles.listContainer}>
        {approvals.map(approval => (
          <ApprovalItem
            key={approval.id}
            title={approval.title}
            id={approval.id}
            date={approval.date}
            user={approval.user}
            onPress={() => onApprovalPress?.(approval)}
          />
        ))}
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
  listContainer: {
    gap: verticalScale(12),
  },
});

export default ApprovalsList;
