import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './login';
import Index from './index';
import Main from './main';
import Logout from './logout';
import Cart from './cart';

const Tab = createBottomTabNavigator();

function Dashboard() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Main" component={Main} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Logout" component={Logout} />
    </Tab.Navigator>
  );
}

export default Dashboard;
