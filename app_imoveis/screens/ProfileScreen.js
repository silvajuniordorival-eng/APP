import React from 'react';
import { StyleSheet, Text, View } from 'react-native'; 

export default function ProfileScreen() {
  return (
    <View style={styles.centerScreen}>
      <Text style={styles.screenTitle}> Perfil de Dorival </Text>
      <Text style={styles.screenSubtitle}> Gerencie suas informações aqui.</Text>
    </View> 
  );
}

const styles = StyleSheet.create({ 
  centerScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F9FA', 
  },
  screenSubtitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1A1A1A',
  },
  screenTitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 8,
  },
});
