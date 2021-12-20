import { useAsyncStorage } from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { Card } from 'react-native-elements'
import Carousel from 'react-native-snap-carousel'

export default function HomeScreen ({ navigation }) {
  
  _renderItem = ({item, index}) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>
          { item.title }
        </Text>
      </View>
    )
  }
  
  return(
    <Carousel
      ref={(c) => { this._carousel = c; }}
      data={this.state.entries}
      renderItem={this._renderItem}
      sliderWidth={sliderWidth}
      itemWidth={itemWidth}
    />
  )
}

const styles = StyleSheet.create({
  list: {
    width: '100%'
  },
  cardTitle: {
    textAlign: 'left'
  }
})