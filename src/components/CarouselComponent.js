import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

const CarouselComponent = () => {
 return (
    <Swiper showsButtons={true} loop={true}>
      <View style={styles.slide1}>
        <Text style={styles.text}>Slide 1</Text>
      </View>
      <View style={styles.slide2}>
        <Text style={styles.text}>Slide 2</Text>
      </View>
      <View style={styles.slide3}>
        <Text style={styles.text}>Slide 3</Text>
      </View>
    </Swiper>
 );
};

const styles = StyleSheet.create({
 slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
 },
 slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
 },
 slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
 },
 text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
 },
});

export default CarouselComponent;
