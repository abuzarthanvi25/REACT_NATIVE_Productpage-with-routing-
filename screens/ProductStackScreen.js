import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Products from './Products';
import ProductDetails from './ProductDetails';

const ProductStack = createNativeStackNavigator();

export default function ProductStackScreen() {
  return (
    <>
      <ProductStack.Navigator>
        <ProductStack.Screen
          options={{
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#FF6A53',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          name="Products"
          component={Products}
        />
        <ProductStack.Screen
          name="Product Details"
          component={ProductDetails}
        />
      </ProductStack.Navigator>
    </>
  );
}
