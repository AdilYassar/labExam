import React from 'react';
import { View, Text, ActivityIndicator, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import useQuranData from './useQuranData';
import { Ionicons } from '@expo/vector-icons'; // Using Ionicons for icons

const QuranScreen = () => {
  const { data, loading, error } = useQuranData();

  if (loading) return <ActivityIndicator size="large" />;
  if (error) return <Text>Error: {error}</Text>;

  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <Ionicons name="menu" size={28} color="#6A0DAD" />
        <Text style={styles.appTitle}>Quran App</Text>
        <Ionicons name="search" size={28} color="#6A0DAD" />
      </View>

      {/* User Greeting */}
      <View style={styles.greeting}>
        <Text style={styles.welcomeText}>Asslamualaikum</Text>
        <Text style={styles.userName}>Sir akhzar Nazir</Text>
      </View>

      {/* Last Read Card */}
      <View style={styles.lastReadCard}>
        <Text style={styles.lastReadTitle}>Last Read</Text>
        <View style={styles.cardContent}>
          <Ionicons name="book-outline" size={24} color="#fff" />
          <View>
            <Text style={styles.surahTitle}>Al-Fatiah</Text>
            <Text style={styles.ayahText}>Ayah No: 1</Text>
          </View>
          <Image
            source={{ uri: 'https://image-url-placeholder.com/quran-icon.png' }} // Replace with actual image
            style={styles.quranImage}
          />
        </View>
      </View>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        <Text style={styles.activeTab}>Surah</Text>
        <Text style={styles.tab}>Para</Text>
        <Text style={styles.tab}>Page</Text>
        <Text style={styles.tab}>Hijb</Text>
      </View>

      {/* Surah List */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.number.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item}>
            <View style={styles.iconContainer}>
              <Ionicons name="star-outline" size={24} color="#6A0DAD" />
              <Text style={styles.itemNumber}>{item.number}</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.subtitle}>{item.englishName} - {item.numberOfAyahs} VERSES</Text>
            </View>
            <Text style={styles.arabicText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <Ionicons name="home-outline" size={28} color="#6A0DAD" />
        <View style={styles.middleNavButton}>
          <Ionicons name="book-outline" size={28} color="#fff" />
        </View>
        <Ionicons name="settings-outline" size={28} color="#6A0DAD" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  appTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#6A0DAD',
  },
  greeting: {
    paddingVertical: 10,
  },
  welcomeText: {
    fontSize: 16,
    color: '#666',
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  lastReadCard: {
    backgroundColor: '#6A0DAD',
    borderRadius: 10,
    padding: 15,
    marginVertical: 15,
  },
  lastReadTitle: {
    color: '#fff',
    marginBottom: 10,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  surahTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  ayahText: {
    color: '#fff',
    fontSize: 14,
  },
  quranImage: {
    width: 50,
    height: 50,
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  activeTab: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6A0DAD',
  },
  tab: {
    fontSize: 16,
    color: '#666',
  },
  item: {
    flexDirection: 'row',
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemNumber: {
    marginLeft: 5,
    color: '#6A0DAD',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
  arabicText: {
    fontSize: 18,
    color: '#6A0DAD',
    fontWeight: 'bold',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eaeaea',
  },
  middleNavButton: {
    backgroundColor: '#6A0DAD',
    padding: 15,
    borderRadius: 50,
  },
});

export default QuranScreen;
