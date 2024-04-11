import React from 'react'
import {View, Text, StyleSheet, Dimensions} from 'react-native'

const RepositoryItems = (props) => (
  <View style={styles.container}>
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>id: {props.repo.id}</Text>
      <Text style={styles.itemText}>FullName: {props.repo.fullName}</Text>
      <Text style={styles.itemText}>Description: {props.repo.description}</Text>
      <Text style={styles.itemText}>Language: {props.repo.language}</Text>
      <Text style={styles.itemText}>Stars: {props.repo.stargazersCount}</Text>
      <Text style={styles.itemText}>Forks: {props.repo.forksCount}</Text>
      <Text style={styles.itemText}>Review: {props.repo.reviewCount}</Text>
      <Text style={styles.itemText}>Rating: {props.repo.rating}</Text>
    </View>
  </View>
)

const {width} = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    backgroundColor: '#f0f0f0',
    padding: 16,
    borderRadius: 4,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    marginVertical: 8,
    width: width * 0.9, 
  },
  itemText: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
})

export default RepositoryItems