import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {ReactNode} from 'react';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Feather';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {back} from '../utils/nagivationUtils';
import {useAnalytics, useTheme} from '../hooks/index';

type HeaderProps = {
  name?: string;
  showTitle?: boolean;
  titleColor?: string;
  headerBgColor?: string;
  backButtom?: boolean;
  menuButton?: boolean;
  customComponent?: boolean;
  renderItem?: ReactNode;
  customAction?: () => void;
  customComponentActiveOpacity?:
    | 0
    | 0.1
    | 0.2
    | 0.3
    | 0.4
    | 0.5
    | 0.6
    | 0.7
    | 0.8
    | 0.9
    | 1;
  curved?: boolean;
  customTitle?: ReactNode;
};

const Header: React.FC<HeaderProps> = ({
  name = '',
  showTitle = true,
  titleColor = '#000',
  headerBgColor,
  backButtom = false,
  menuButton = false,
  customComponent = false,
  renderItem = <></>,
  customAction = () => {},
  customComponentActiveOpacity = 0.5,
  curved = false,
  customTitle,
}): React.JSX.Element => {
  const {currentTheme} = useTheme();
  const navigation = useNavigation();
  const openMenu = () => navigation.dispatch(DrawerActions.openDrawer());
  const {owner} = useAnalytics();

  return (
    <View
      style={{
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 20,
        backgroundColor: headerBgColor ?? '',
        borderBottomRightRadius: curved ? 10 : 0,
        borderBottomLeftRadius: curved ? 10 : 0,
      }}>
      {!backButtom && menuButton && (
        <Pressable style={styles.leftActionBtn} onPress={openMenu}>
          <Icon2 name="menu" size={24} color={titleColor} />
        </Pressable>
      )}
      {backButtom && !menuButton && (
        <Pressable style={styles.leftActionBtn} onPress={() => back()}>
          <Icon1 name="left" size={24} color={titleColor} />
        </Pressable>
      )}
      {showTitle && (
        <View style={{alignItems: 'center', gap: 4}}>
          {customTitle ? (
            customTitle
          ) : (
            <Text
              style={{
                fontSize: 22,
                fontWeight: 'bold',
                color: titleColor,
              }}>
              {name}
            </Text>
          )}
        </View>
      )}
      {customComponent && (
        <TouchableOpacity
          activeOpacity={customComponentActiveOpacity}
          onPress={customAction}
          style={styles.rightCustomBtn}>
          {renderItem}
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  leftActionBtn: {
    position: 'absolute',
    left: 20,
  },
  rightCustomBtn: {
    position: 'absolute',
    right: 20,
  },
});

export default Header;
