import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Cart from './Cart';

const CartStack = createNativeStackNavigator();

export default function CartScreenStack({navigation}) {
  return (
    <>
      <CartStack.Navigator>
        <CartStack.Screen
          options={{
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#FF6A53',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          name="Cart"
          component={Cart}
        />
      </CartStack.Navigator>
    </>
  );
}
