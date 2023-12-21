import logoImage from 'assets\\logo.png';
import React from 'react';
import {Dimensions, Image, ImageSourcePropType, ImageStyle, StyleProp, StyleSheet} from 'react-native';

interface Props {
  source?: ImageSourcePropType;
  style?: StyleProp<ImageStyle>;
}

export const Logo: React.FC<Props> = ({source = logoImage, style}) => {
  return <Image source={source} resizeMode="contain" style={[styles.image, style]} />;
};

const {width, height} = Dimensions.get('window');
// 見た目の調整として画面の3分の1をデフォルトサイズとする
const defaultImageSize = Math.min(width, height) * (1 / 3);

const styles = StyleSheet.create({
  image: {
    width: defaultImageSize,
    height: defaultImageSize,
  },
});