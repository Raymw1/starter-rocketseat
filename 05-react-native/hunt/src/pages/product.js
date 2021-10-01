import React from 'react';
import WebView from 'react-native-webview';

import HeaderStyle from '../config/HeaderStyle';

const Product = ({navigation}) => (
  <WebView source={{uri: navigation.state.params.product.url}} />
);

Product.navigationOptions = ({navigation}) => ({
  ...HeaderStyle,
  title: navigation.state.params.product.title,
});

export default Product;
