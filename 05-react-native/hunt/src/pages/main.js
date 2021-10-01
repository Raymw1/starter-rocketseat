import React, {Component} from 'react';
import api from '../services/api';

import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import HeaderStyle from '../config/HeaderStyle';

export default class Main extends Component {
  static navigationOptions = HeaderStyle;

  state = {
    productInfo: {},
    products: [],
    page: 1,
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async (page = 1) => {
    try {
      const response = await api.get(`/products?page=${page}`);
      const {docs, ...productInfo} = response.data;
      this.setState({
        products: [...this.state.products, ...docs],
        productInfo,
        page,
      });
    } catch (error) {
      console.error(error);
    }
  };

  loadMore = () => {
    const {page, productInfo} = this.state;
    if (page === productInfo.pages) {
      return;
    }
    const pageNumber = page + 1;
    this.loadProducts(pageNumber);
  };

  renderItem = ({item}) => (
    <View style={styles.productContainer}>
      <Text style={styles.productTitle}>{item.title}</Text>
      <Text style={styles.productDescription}>{item.description}</Text>
      <TouchableOpacity style={styles.productButton} onPress={() => {}}>
        <Text style={styles.productButtonText}>Access</Text>
      </TouchableOpacity>
    </View>
  );

  render() {
    const {products} = this.state;
    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.list}
          data={products}
          keyExtractor={product => product._id}
          renderItem={this.renderItem}
          onEndReached={this.loadMore}
          onEndReachedThreshold={0.1}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Use full screen
    backgroundColor: '#FAFAFA',
  },
  list: {
    padding: 20,
  },
  productContainer: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    padding: 20,
    marginBottom: 20,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  productDescription: {
    fontSize: 16,
    color: '#999',
    marginTop: 5,
    lineHeight: 24,
  },
  productButton: {
    height: 42,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#DA552F',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  productButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#DA552F',
  },
});
