import { useState, useEffect } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useQuranData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check if data exists in AsyncStorage
        const storedData = await AsyncStorage.getItem('surahData');
        if (storedData) {
          setData(JSON.parse(storedData));
        } else {
          // Fetch from API if not found locally
          const response = await axios.get('https://api.alquran.cloud/v1/surah');
          
          setData(response.data.data);
        
          // Save fetched data to AsyncStorage
          await AsyncStorage.setItem('surahData', JSON.stringify(response.data.data));
        }
      } catch (err) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export default useQuranData;
