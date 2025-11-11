import React, { useState } from 'react';
import { View, Text} from 'react';
import {Button, TextInput, StyleSheet } from 'react-native';



export default function App() {

  const [nom, setNom] = useState('');
  const [nomAffiche, affiche] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.titre}>APP</Text>
      <TextInput placeholder="Nom : " value={nom} onChangeText={texte => setNom(texte)}/>
      <Button title="change name" onPress={() => affiche(nom)} />

      <Text>new name : {nomAffiche} </Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 20,
  }
});
