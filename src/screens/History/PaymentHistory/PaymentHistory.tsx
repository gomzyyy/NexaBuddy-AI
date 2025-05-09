import {View, StyleSheet, FlatList, Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import Header from '../../../components/Header';
import {useAnalytics, useHaptics, useTheme} from '../../../hooks';
import EmptyListMessage from '../../../components/EmptyListMessage';
import Tab from './components/Tab';
import SearchBar from './components/SearchBar';

const PaymentHistory = () => {
  const {currentTheme} = useTheme();
  const {owner} = useAnalytics();
  const [paymentsOnScreen, setPaymentsOnScreen] = useState<number>(20);

  const handlePaymentsOnScreenIncrement = () => {};

  const paymentHistory = [...owner.history.payments]
    .reverse()
    .slice(0, paymentsOnScreen);

  return (
    <View style={{flex: 1, backgroundColor: currentTheme.baseColor}}>
      <Header
        name="Payments History"
        backButtom={true}
        titleColor={currentTheme.header.textColor}
      />
      <View style={styles.contentContainer}>
        <View style={{flex: 1}}>
          <View style={styles.searchBarContainer}>
            <SearchBar
              textColor={currentTheme.header.textColor}
              enable={paymentHistory.length !== 0}
            />
          </View>
          {paymentHistory.length !== 0 ? (
            <FlatList
              data={paymentHistory}
              keyExtractor={s => s._id}
              nestedScrollEnabled
              renderItem={({item, index}) => (
                <Tab i={item} lastIndex={index === paymentHistory.length-1} />
              )}
              style={{flex: 1}}
              showsVerticalScrollIndicator={false}
            />
          ) : (
            <View style={{flex: 1}}>
              <EmptyListMessage
                textColor={currentTheme.header.textColor}
                title="No Payment History yet!"
              />
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {paddingVertical: 20},
  contentContainer: {flex: 1, paddingHorizontal: 16},
});

export default PaymentHistory;
