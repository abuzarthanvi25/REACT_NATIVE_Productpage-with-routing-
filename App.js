import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Products from './screens/Products';
import ProductDetails from './screens/ProductDetails';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: '#FF6A53',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          name="Products"
          component={Products}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: 'black',
              borderBottomRightRadius: 40,
              borderBottomLeftRadius: 40,
            },
            headerTintColor: '#FF6A53',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          name="Product Details"
          component={ProductDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
