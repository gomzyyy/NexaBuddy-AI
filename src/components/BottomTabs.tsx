import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {deviceWidth, Theme} from '../utils/Constants';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/MaterialIcons';

const currentTheme = Theme[0];

const BottomTabs = () => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <View>
          <Icon1 name="profile" size={20} />
        </View>
        <Text>Dashboard</Text>
      </View>
      <View style={styles.icon}>
        <View>
          <Icon2 name="settings" size={20} />
        </View>
        <Text>Settings</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    height: 60,
    width: deviceWidth,
    backgroundColor: currentTheme.bgColor,
    flexDirection:"row",
    marginHorizontal:4
  },
  icon: {
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
});

export default BottomTabs;
