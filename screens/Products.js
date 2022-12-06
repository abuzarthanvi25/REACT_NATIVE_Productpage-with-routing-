import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  RefreshControl,
  ScrollView,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import axios from 'axios';
import styles from '../styles/styles';

export default function Products({navigation}) {
  const [products, setProducts] = useState([]);
  const [refresh, setRefresh] = useState(false);

  let getProducts = () => {
    axios.get('https://fakestoreapi.com/products').then(res => {
      setProducts([...res.data]);
      console.log(res);
    });
    // fetch('https://fakestoreapi.com/products')
    //   .then(response => response.json())
    //   .then(data => setProducts([...data]));
  };

  let handleRefresh = () => {
    setRefresh(true);
    getProducts();
    setTimeout(() => {
      setRefresh(false);
      ToastAndroid.show('Refreshed Successfully', 2000);
    }, 1500);
  };

  useEffect(() => {
    getProducts();
    // products ? console.log(products) : null;
  }, []);

  const searchProducts = searchQuery => {
    let arr = products.filter(e =>
      e.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    setProducts([...arr]);
    if (searchQuery.length === 0) {
      getProducts();
    }
  };
  return (
    <>
      <ImageBackground
        blurRadius={0.5}
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC79Yy4bMqUkPW3pAI42XkwqaGS9OhXuVUYAPLIBbxvKS54qgAYJKQAi4j_43awDobtuk&usqp=CAU',
        }}
        style={styles.wrapper}>
        {/* <Text style={styles.heading}>Products</Text> */}
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Search products"
            placeholderTextColor={'#E9C2BE'}
            style={styles.searchBar}
            onChangeText={e => searchProducts(e)}
          />
        </View>
        <ScrollView
          refreshControl={
            <RefreshControl
              colors={['#FF4335']}
              onRefresh={handleRefresh}
              refreshing={refresh}
            />
          }
          style={styles.container}>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {products && products.length > 0 ? (
              products.map(x => (
                <View
                  key={x.id}
                  style={{
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                  }}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('Product Details', {
                        ...x,
                      })
                    }
                    style={styles.productContainer}>
                    <Text style={styles.category}>
                      {x.category.toUpperCase()}
                    </Text>
                    <Image
                      resizeMode="contain"
                      style={styles.image}
                      source={{uri: x.image}}
                    />
                    <Text style={styles.title}>
                      {x.title.slice(0, 20) +
                        (x.title.length > 20 ? '...' : '')}
                    </Text>
                    <Text style={styles.price}>${x.price}</Text>
                    <View style={styles.ratingContainer}>
                      <Text style={styles.ratings}>
                        Rating: {x.rating.rate}
                      </Text>
                      <Text style={styles.quantityAvailable}>
                        Quantity Available: {x.rating.count}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              ))
            ) : (
              <ActivityIndicator size={90} />
            )}
          </View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
            }}></View>
        </ScrollView>
        {/* <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer> */}
      </ImageBackground>
    </>
  );
}
