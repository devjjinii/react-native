import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions, ActivityIndicator ,StyleSheet, ScrollView } from 'react-native';
import * as Location from 'expo-location';
import { Fontisto } from '@expo/vector-icons';

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const key = "";
// console.log(SCREEN_WIDTH);
// console.log(height);

const icons = {
  Clouds: "cloudy",
  Clear: "day-sunny",
  Atmosphere: "cloudy-gusts",
  Snow: "snow",
  Rain: "rains",
  Drizzle: "rain",
  Thunderstorm: "lightning",
}

export default function App() {
  const [city, setCity] = useState("Loading...");
  const [days, setDays] = useState([]);
  // const [location, setLocation] = useState();
  const [ok, setOk] = useState(true);
  const getWeather = async() => {
     const {granted} = await Location.requestForegroundPermissionsAsync();
    //  console.log(permission);
    if(!granted) {
      setOk(false);
    }

    const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync({accuracy:5});
    // console.log(location);
    const location = await Location.reverseGeocodeAsync({latitude, longitude}, {useGoogleMaps:false});
    // console.log(location);
    setCity(location[0].city);
    const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts&appid=${key}&units=metric`)
    const json = await response.json();
    // console.log(json.daily);
    setDays(json.daily);
  }

  useEffect(() => {
    getWeather();
  }, [])


  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>{city}</Text>
      </View>
        <ScrollView
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false} // 하단 인디케이터 제거
          contentContainerStyle={styles.weather}>
          
           {days.length === 0 ? 
           ( <View style={{...styles.day, alignItems: "center"}}>
             <ActivityIndicator color="white" size="large" style={{marginTop: 10}}/>
            </View> ) : (
              days.map((day, index) => 
              <View style={styles.day}>
                <View style={{
                  flexDirection: "row", 
                  alignItems: "center",
                  width: "100%",
                  justifyContent: "space-between"}}>
                  <Text style={styles.temp}>{parseFloat(day.temp.day).toFixed(1)}</Text>
                  <Fontisto name={icons[day.weather[0].main]} size={68} color="white" />
                </View>

                <Text style={styles.description}>{day.weather[0].main}</Text>
                <Text style={styles.tinyText}>{day.weather[0].description}</Text>
              </View>))}

        </ScrollView>
    </View> // Flex Container
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fce953",
  },
  city: {
    flex: 1.2,
    justifyContent: "center",
    alignItems: "center",
  },
  cityName: {
    fontSize: 58,
    fontWeight: "500",
    color: "white",
  },
  weather: {},
  day: {
    width: SCREEN_WIDTH,
    alignItems: "flex-start",
    paddingHorizontal: 20,
  },
  temp: {
    marginTop: 50,
    fontWeight: "600",
    fontSize: 100,
    color: "white",
  },
  description: {
    marginTop: -10,
    fontSize: 30,
    color: "white",
    fontWeight: "500",
  },
  tinyText: {
    marginTop: -5,
    fontSize: 25,
    color: "white",
    fontWeight: "500",
  },
});