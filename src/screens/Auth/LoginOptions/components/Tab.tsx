import {
  Text,
  StyleSheet,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Customer, Shopkeeper} from '../../../../../types';
import Icon from 'react-native-vector-icons/AntDesign';
import {navigate} from '../../../../utils/nagivationUtils';
import useTheme from '../../../../hooks/useTheme';
import LongPressEnabled from '../../../../customComponents/LongPressEnabled';
import SlideUpContainer from '../../../../components/SlideUpContainer';
import PopupContainer from '../../../../components/PopUp';
import TabLongPressOptions from '../../../Dashboard/components/TabLongPressOptions';
const EditCustomer = React.lazy(()=>import("../../../../components/EditCustomer"))

type TabProps = {
  i: Shopkeeper;
  lastIndex?: boolean;
  handleOpenLongPressOptions?: (customer: Customer) => void;
  dummy?: boolean;
};

const Tab: React.FC<TabProps> = ({
  i,
  lastIndex = false,
  dummy = false,
}): React.JSX.Element => {
  const {currentTheme} = useTheme();
  const [openTabOptions, setOpenTabOptions] = useState<boolean>(false);
  const [openEditCustomer, setOpenEditCustomer] = useState<boolean>(false);

  const handleOpenLongPressOptions = () => {
    setOpenTabOptions(true);
  };
  const handleCloseLongPressOptions = () => setOpenTabOptions(false);
  const handleOpenEditCustomer = () => {
    setOpenTabOptions(false);
    setOpenEditCustomer(true);
  };
  const handleCloseEditCustomer = () => setOpenEditCustomer(false);
  const handleLongPressCancelAction=()=>{}

  return (
    <LongPressEnabled longPressCanceledAction={handleLongPressCancelAction} longPressAction={handleOpenLongPressOptions} dummy={dummy} >
      <View
        style={[
          styles.container,
          {
            marginBottom: lastIndex ? 70 : 6,
            backgroundColor: currentTheme?.tab.bg,
          },
        ]}>
        <Text style={[styles.shopkeeperName, {color: currentTheme?.tab.label}]}>
          {i.name}
        </Text>
        <Icon name="right" color={currentTheme?.tab.icon} size={22} />
      </View>
    </LongPressEnabled>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 14,
    paddingVertical: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 8,
  },
  shopkeeperName: {
    fontSize: 20,
    fontWeight: '400',
  },
});

export default Tab;
