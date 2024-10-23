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
        <Text style={styles.userName}>Sir akhzar nazir</Text>
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
            source={{ uri: 'data:image/jpeg;base64,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' }} // Replace with actual image
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
              
                <Text style={styles.title}>{item.englishName} </Text>
              <Text style={styles.subtitle}> {item.numberOfAyahs} VERSES</Text>
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
    width: 100,
    height: 100,
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
