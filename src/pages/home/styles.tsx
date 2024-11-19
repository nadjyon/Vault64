import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput } from 'react-native';

const HomeScreen = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar"
          placeholderTextColor="#666"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>
      <Image source={{ uri: 'https://example.com/image.jpg' }} 
       style={styles.mainImage} />
      <View style={styles.recentlyViewed}>
        <Text style={styles.recentlyViewedTitle}>Visto Recentemente</Text>
        <View style={styles.recentItems}>
          <Image source={{ uri: 'https://example.com/hot-wheels.jpg' }} style={styles.recentItem} />
          <Image source={{ uri: 'https://example.com/mooneyes.jpg' }} style={styles.recentItem} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303437',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 30,
  },
  searchBar: {
    width: '90%',
    backgroundColor: '#FDCF3D',
    borderRadius: 20,
    paddingHorizontal: 16,
    marginTop: 20,
    marginVertical: 16,
  },
  searchInput: {
    paddingVertical: 8,
    fontSize: 16,
    color: '#000', // cor do texto
  },
  mainImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  recentlyViewed: {
    width: '100%',
    marginVertical: 16,
    paddingHorizontal: 16,
  },
  recentlyViewedTitle: {
    color: '#FDCF3D',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  recentItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  recentItem: {
    width: '48%',
    height: 100,
    resizeMode: 'cover',
    borderRadius: 8,
  },
});

export default HomeScreen;