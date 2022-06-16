import React from 'react';
import { View, FlatList, Text } from 'react-native';

interface MenuItem {
  name: string;
  icon: string;
  component: string;
}

const menuItems = [
  {
    name: 'Animation 101',
    icon: 'paw',
    component: 'Animation101Screen'
  }
]

const Homescreen = () => {

  const renderMenuItem = ( menuItem: MenuItem ) => {
    return (
      <View>
        <Text>{menuItem.name} - {menuItem.icon}</Text>
      </View>
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList 
        data={ menuItems }
        renderItem={ ({ item }) => renderMenuItem( item ) }
        keyExtractor={ (item) => item.name }
      />
    </View>
  )
}

export default Homescreen;