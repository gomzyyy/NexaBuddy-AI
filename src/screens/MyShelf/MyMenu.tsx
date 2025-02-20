import {View, Text, StyleSheet, FlatList, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header';
import Icon from 'react-native-vector-icons/AntDesign';
import {deviceWidth, Theme} from '../../utils/Constants';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store/store';
import Tab from './components/Tab';
const currentTheme = Theme[0];
import {sampleProducts} from '../../../_data/dummy_data';
import SlideUpContainer from '../../components/SlideUpContainer';
import {Product} from '../../../types';
import EditProduct from './components/EditProduct';

const MyMenu = () => {
  const shopkeeper = useSelector((s: RootState) => s.shopkeeper.shopkeeper);
  const [openEditing, setOpenEditing] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | undefined>(
    undefined,
  );

  const handleClickingTab = (product: Product) => {
    setSelectedProduct(product);
    setOpenEditing(true);
  };

  const arr = sampleProducts;
  return (
    <View style={styles.parent}>
      <Header
        name="My Menu"
        backButtom
        customComponent={true}
        renderItem={<Icon name="plus" color={'black'} size={24} />}
      />
      <View style={styles.contentContainer}>
        <ScrollView
          contentContainerStyle={styles.listContainer}
          showsHorizontalScrollIndicator={false}
          nestedScrollEnabled={true}>
          {arr.map((s, i) => (
            <Tab i={s} key={i} onPress={handleClickingTab} />
          ))}
        </ScrollView>
      </View>
      <View style={styles.assistTextContainer}>
        <Text style={styles.assistText}>Click to edit Menu item.</Text>
      </View>
      {selectedProduct && (
        <SlideUpContainer
          open={openEditing}
          close={() => setOpenEditing(false)}>
          <EditProduct product={selectedProduct} />
        </SlideUpContainer>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: currentTheme.bgColor,
  },
  contentContainer: {
    paddingHorizontal: 10,
  },
  listContainer: {
    // alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },
  assistTextContainer: {
    position: 'absolute',
    bottom: 6,
    width: deviceWidth,
    paddingVertical: 20,
  },
  assistText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default MyMenu;
