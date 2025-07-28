import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Header from '../components/molecules/Header';
import NotificationCard from '../components/molecules/NotificationCard';
import TransferDetails from '../components/organisms/TransferDetails';
import SubmissionStatus from '../components/molecules/SubmissionStatus';
import ActionButtons from '../components/organisms/ActionButtons';
import Page from '../components/organisms/Page';

const transferData = {
  accountFrom: {
    name: 'Current account for local transfers',
    number: '11 2314 4531 3452 9023 6950',
    balance: '238,000,534.00 SAR',
  },
  accountTo: {
    name: 'Jason Green',
    number: '23 3290 3902 4423 2309 8942',
    bank: 'Samba Financial Group',
  },
  amount: {
    integer: '12,005',
    fractional: '.18',
    currency: 'SAR',
  },
  fee: '0.00 SAR',
  total: '12,055.18 SAR',
};

interface LocalTransferScreenProps {
  navigation: any;
}

const LocalTransferScreen: React.FC<LocalTransferScreenProps> = ({
  navigation,
}) => {
  const handleGoToDashboard = () => {
    console.log('Go to dashboard pressed');
  };

  const handleMakeAnotherPayment = () => {
    console.log('Make another payment pressed');
  };

  const handleClose = () => {
    console.log('Close pressed');
  };

  const handleNavigateToInma = () => {
    navigation.navigate('InmaTransfer');
  };

  const handleNavigateToOwn = () => {
    navigation.navigate('OwnTransfer');
  };

  return (
    <Page
      backgroundColor="#0E0F11"
      barStyle="light-content"
      statusBarBg="#0E0F11"
    >
      <View style={styles.screen}>
        <Header title="Local transfer" onClose={handleClose} />

        <ScrollView
          style={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.contentContainer}>
            <View style={styles.content}>
              <View style={styles.topSection}>
                <View style={styles.notificationSection}>
                  <NotificationCard type="success" message="Pending approval" />
                  <Text style={styles.mainHeading}>
                    Local transfer has been ordered.
                  </Text>
                </View>

                <TransferDetails transferData={transferData} />

                <SubmissionStatus
                  title="Submisson"
                  date="31/10/2023"
                  user="Ahmed Abdullah"
                  transactionId="456789127"
                  status="success"
                />

                {/* Navigation buttons to test */}
                <View style={styles.navigationButtons}>
                  <TouchableOpacity
                    style={styles.navigationButton}
                    onPress={handleNavigateToInma}
                  >
                    <Text style={styles.navigationButtonText}>
                      Go to Inma Transfer →
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.navigationButton}
                    onPress={handleNavigateToOwn}
                  >
                    <Text style={styles.navigationButtonText}>
                      Go to Own Transfer →
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>

        <ActionButtons
          primaryButtonText="Go to dashboard"
          secondaryButtonText="Make another payment"
          onPrimaryPress={handleGoToDashboard}
          onSecondaryPress={handleMakeAnotherPayment}
        />
      </View>
    </Page>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E0F11',
  },
  screen: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContainer: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
  content: {
    padding: 24,
    paddingHorizontal: 16,
    paddingBottom: 40,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
  },
  topSection: {
    gap: 24,
  },
  notificationSection: {
    gap: 16,
  },
  mainHeading: {
    color: '#1D2433',
    fontFamily: 'Inter',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 30,
    width: '100%',
  },
  navigationButton: {
    backgroundColor: '#E6E7EA',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  navigationButtonText: {
    color: '#1D2433',
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default LocalTransferScreen;
