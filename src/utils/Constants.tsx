import {Dimensions} from 'react-native';
import {AppTheme} from '../../types';
import {AppThemeName} from '../../enums';

export const deviceHeight = Dimensions.get('window').height;
export const deviceWidth = Dimensions.get('window').width;
export const defaultProfileImage = `https://res.cloudinary.com/dgki5gnzf/image/upload/v1739970302/no-profile_jfwlyo.jpgno-profile_jfwlyo`;

export const dashboardHeaderTabs = [
  {name: 'This Month', data: {amount: '18273'}},
  {name: 'Today', data: {amount: '1297'}},
];
export const customerHeaderTabs = [
  {name: 'This Month', data: {amount: '18273'}},
  {name: 'Today', data: {amount: '1297'}},
];

export const Theme: AppTheme[] = [
 
  {
    name: AppThemeName.RED,
    baseColor: '#d60000',
    fadeColor: 'rgba(214, 0, 0,0.1)',
    tabColor: '#ff6666',
    borderColor: '#fff',
    textColor: '#000',
    contrastColor: '#fff',
    bgColor: '#ffe6e6',
    textAlt: '#000',
    bottomTabBg:'rgba(214, 0, 0,0.4)',
    modal: {
      title: '#000',
      inputbg: '#fff',
      inputBorder: '#d60000',
      inputText: '#000',
      pickerbg: '#ffe6e6',
      pickerText: '#000',
      saveBtnbg: '#d60000',
      saveBtnText: '#fff',
    },
    toggleBtn: {
      bgActive: '#ff6666',
      bgInactive: '#fff',
      textActive: '#fff',
      textInactive: '#000',
    },
    tab: {
      label: '#d60000',
      bg: '#fff',
      value: '#d60000',
      btnBg: '#d60000',
      btnText: '#fff',
      icon: '#d60000',
      text: '#fff',
    },
    header: {textColor: '#fff'},
  },
 
  {
    name: AppThemeName.GREEN,
    baseColor: '#075e54',
    fadeColor: 'rgba(7, 94, 84,0.1)',
    tabColor: 'rgba(7, 94, 84,0.6)',
    borderColor: '#000000',
    textColor: '#000',
    contrastColor: '#fff',
    bgColor: '#e6ffe6',
    textAlt: '#000',
    bottomTabBg:'rgba(7, 94, 84,0.4)',
    modal: {
      title: '#000',
      inputbg: '#fff',
      inputBorder: '#075e54',
      inputText: '#000',
      pickerbg: 'rgba(7, 94, 84,0.2)',
      pickerText: '#075e54',
      saveBtnbg: '#9ec378',
      saveBtnText: '#fff',
    },
    toggleBtn: {
      bgActive: 'rgba(7, 94, 84,0.6)',
      bgInactive: '#fff',
      textActive: '#000',
      textInactive: '#000',
    },
    tab: {
      label: '#075e54',
      bg: '#fff',
      value: '#9ec378',
      btnBg: '#9ec378',
      btnText: '#fff',
      icon: '#9ec378',
      text: '#fff',
    },
    header: {textColor: '#fff'},
  },
  {
    name: AppThemeName.BLUE,
    baseColor: '#007bff',
    fadeColor: 'rgba(0, 123, 255,0.1)',
    tabColor: '#66b2ff',
    borderColor: '#fff',
    textColor: '#000',
    contrastColor: '#fff',
    bgColor: '#e6f2ff',
    textAlt: '#000',
    bottomTabBg:'rgba(0, 123, 255,0.4)',
    modal: {
      title: '#000',
      inputbg: '#fff',
      inputBorder: '#007bff',
      inputText: '#000',
      pickerbg: '#e6f2ff',
      pickerText: '#000',
      saveBtnbg: '#007bff',
      saveBtnText: '#fff',
    },
    toggleBtn: {
      bgActive: '#66b2ff',
      bgInactive: '#fff',
      textActive: '#fff',
      textInactive: '#000',
    },
    tab: {
      label: '#007bff',
      bg: '#fff',
      value: '#007bff',
      btnBg: '#007bff',
      btnText: '#000',
      icon: '#007bff',
      text: '#fff',
    },
    header: {textColor: '#fff'},
  },

];
export const colors = {
  danger: 'rgb(255,0,0)',
  dangerFade: 'rgba(255,0,0,0.2)',
  oliveGreen:'rgb(158, 195, 120)',
  oliveGreenFade:'rgba(158, 195, 120,0.2)',
  iconBlack: 'rgb(0,0,0)',
  link: '#007bff',
};
