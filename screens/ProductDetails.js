import React from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import styles from '../styles/styles';

export default function ProductDetails({route, navigation}) {
  //   console.log(route.params.e.title);
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
              padding: 20,
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
              style={{width: 250, height: 250}}
              source={{uri: route.params.image}}
            />
            <View>
              <Text
                style={{
                  fontSize: 26,
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
                fontSize: 35,
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
                {route.params.description.slice(0, 300) +
                  (route.params.description.length > 300 ? '...' : '')}
              </Text>
            </View>
            <View style={styles.ratingContainer}>
              <Text style={[styles.ratings, {marginLeft: 10}]}>
                Rating: {route.params.rating.rate}
              </Text>
              <Text style={[styles.quantityAvailable, {marginLeft: 10}]}>
                Quantity Available: {route.params.rating.count}
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </>
  );
}
