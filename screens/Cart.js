import React from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styles from '../styles/styles';
import {remove, removeAll} from '../store/cartSlice';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Toast from 'react-native-toast-message';

export default function Cart({navigation}) {
  const cartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();
  console.log(cartItems);
  const totalPrice = cartItems
    .map(x => x.price)
    .reduce((partialSum, a) => partialSum + a, 0)
    .toFixed(0);
  const showToast = () => {
    Toast.show({
      type: 'error',
      text1: 'REMOVED FROM CART',
    });
  };
  console.log(totalPrice);
  return (
    <>
      <ImageBackground
        blurRadius={0.5}
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdXAD4gvEH1Jk95I6Mzpbuch-xTwyGsNWVfvlabw9ZXlJ9tGQthpyKMXfKz-rbvenbowA&usqp=CAU',
        }}
        style={styles.wrapper}>
        <Toast topOffset={true} visibilityTime={1000} />
        <ScrollView>
          <View>
            {cartItems && cartItems.length > 0 ? (
              cartItems.map((x, i) => (
                <View key={i}>
                  <View
                    key={x.id}
                    style={{
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                      backgroundColor: 'white',
                      marginVertical: 10,
                      marginHorizontal: 12,
                      borderRadius: 20,
                      padding: 5,
                      justifyContent: 'space-around',
                      alignItems: 'center',
                    }}>
                    <View style={{flex: 1}}>
                      <Image
                        resizeMode="contain"
                        style={{height: 90, width: 90, margin: 10}}
                        source={{uri: x.image}}
                      />
                    </View>
                    <View
                      style={{
                        flex: 2,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        flexWrap: 'wrap',
                        marginLeft: 5,
                        padding: 10,
                      }}>
                      <Text
                        style={{
                          fontSize: 16,
                          color: '#222',
                          textAlign: 'left',
                          fontWeight: 'bold',
                        }}>
                        {x.title.slice(0, 50) +
                          (x.title.length > 50 ? '...' : '')}
                      </Text>
                      <Text
                        style={{
                          fontSize: 25,
                          color: '#FF7F20',
                          textAlign: 'left',
                          fontWeight: '900',
                        }}>
                        ${x.price}
                      </Text>
                    </View>
                    <View>
                      <TouchableOpacity
                        onPress={() => {
                          dispatch(remove(x.id));
                          showToast();
                        }}
                        activeOpacity={0.6}
                        style={{
                          // backgroundColor: 'red',
                          paddingRight: 10,
                          borderRadius: 20,
                        }}>
                        <Icon name="delete" size={30} color="#9e4455" />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              ))
            ) : (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 700,
                }}>
                <Text style={{fontSize: 20, color: 'white'}}>
                  NO ITEMS IN CART
                </Text>
              </View>
            )}
          </View>
        </ScrollView>
        {totalPrice && totalPrice > 0 ? (
          <View
            style={{
              backgroundColor: 'red',
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
              paddingHorizontal: 20,
              paddingVertical: 12,
              backgroundColor: '#fff',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 12,
              },
              shadowOpacity: 0.58,
              shadowRadius: 16.0,
              elevation: 24,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#E0E0E0',
                padding: 7,
                borderRadius: 10,
              }}
              onPress={() => dispatch(removeAll())}>
              <View
                style={{
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Text
                  style={{color: '#9e4455', fontSize: 16, fontWeight: 'bold'}}>
                  Remove All
                </Text>
                <Icon
                  name="backspace"
                  size={20}
                  color="#9e4455"
                  style={{marginLeft: 2}}
                />
              </View>
            </TouchableOpacity>
            <Text
              style={{
                color: '#A9A9A9',
                fontSize: 15,
              }}>
              {cartItems.length} Item{cartItems.length > 1 ? 's' : ''} |
            </Text>
            <Text
              style={{
                color: '#4D4D4D',
                fontSize: 25,
                fontWeight: 'bold',
              }}>
              Sub Total: ${totalPrice}
            </Text>
          </View>
        ) : null}
      </ImageBackground>
    </>
  );
}
