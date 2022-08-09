import { Platform } from 'react-native';
import * as Device from 'expo-device';

export const hasNotch = true
export const isIphone = Device.osName === 'ios';
export const isAndroid = Device.osName === 'android';