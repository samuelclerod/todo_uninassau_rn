import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './home.styles'
import { Header } from '../../components/Header/header.component'

export const Home = (props) => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  )
}
