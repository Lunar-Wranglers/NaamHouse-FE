import { useAsyncStorage } from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { Card } from 'react-native-elements'

export default function HomeScreen ({ navigation }) {
  return(
    <View>
      Howdy
    </View>
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