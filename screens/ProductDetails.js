import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from '../styles/styles';
import {add} from '../store/cartSlice';
import {useDispatch, useSelector} from 'react-redux';
import Toast from 'react-native-toast-message';

export default function ProductDetails({route, navigation}) {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart);
  const showToast = () => {
    Toast.show({
      type: 'info',
      text1: 'ADDED TO CART',
    });
  };
  return (
    <>
      <ImageBackground
        blurRadius={0.5}
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC79Yy4bMqUkPW3pAI42XkwqaGS9OhXuVUYAPLIBbxvKS54qgAYJKQAi4j_43awDobtuk&usqp=CAU',
        }}
        style={styles.wrapper}>
        <View style={{padding: 30}}>
          <View
            key={route.params.id}
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              backgroundColor: 'white',
              justifyContent: 'center',
              flexWrap: 'wrap',
              borderRadius: 30,
              padding: 10,
              height: '100%',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 12,
              },
              shadowOpacity: 0.58,
              shadowRadius: 16.0,

              elevation: 24,
            }}>
            <Image
              resizeMode="contain"
              style={{width: 250, height: 250, margin: 5}}
              source={{uri: route.params.image}}
            />
            <Toast topOffset={true} visibilityTime={1000} />
            <View>
              <Text
                style={{
                  fontSize: 25,
                  color: '#222',
                  fontWeight: 'bold',
                  marginLeft: 10,
                  textAlign: 'center',
                }}>
                {route.params.title}
              </Text>
            </View>
            <Text
              style={{
                fontSize: 33,
                color: '#FF4335',
                fontWeight: 'bold',
                marginLeft: 10,
              }}>
              ${route.params.price}
            </Text>
            <View>
              <Text
                style={{
                  fontSize: 18,
                  color: 'grey',
                  fontWeight: 'bold',
                  margin: 10,
                }}>
                {route.params.description.slice(0, 200) +
                  (route.params.description.length > 200 ? '...' : '')}
              </Text>
            </View>
            <View style={styles.ratingContainer}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: '#FFBA20',
                  textAlign: 'left',
                  marginLeft: 10,
                  fontSize: 15,
                }}>
                Rating: {route.params.rating.rate}
              </Text>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: '#00B54A',
                  textAlign: 'left',
                  marginLeft: 10,
                  fontSize: 15,
                }}>
                Quantity Available: {route.params.rating.count}
              </Text>
            </View>
            <View>
              <TouchableOpacity
                style={{
                  backgroundColor: '#FF4335',
                  paddingHorizontal: 25,
                  paddingVertical: 10,
                  borderRadius: 20,
                  marginTop: 12,
                }}
                onPress={() => {
                  dispatch(add(route.params));
                  // console.log(route.params);
                  console.log(items);
                  showToast();
                }}>
                <Text
                  style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
                  Add To Cart
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </>
  );
}
