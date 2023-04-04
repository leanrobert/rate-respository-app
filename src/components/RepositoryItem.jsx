import React from 'react'
import { Image, Text, View } from 'react-native'

const styles = {
  container: {
    padding: 20,
    backgroundColor: 'white'
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  flexContainer2: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#0366d6',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    overflow: 'hidden',
  },
  flexContainer3: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.flexContainer}>
        <View style={{ paddingRight: 20 }}>
          <Image source={{ uri: item.ownerAvatarUrl }} style={styles.image} />
        </View>
        <View>
          <Text style={{ fontWeight: 'bold' }}>{item.fullName}</Text>
          <Text>{item.description}</Text>
          <View style={{ flexWrap: 'wrap', marginVertical: 10}} >
          <Text style={styles.label}>{item.language}</Text>
          </View>
        </View>
      </View>
      <View style={styles.flexContainer2}>
        <View style={styles.flexContainer3}>
          <Text style={{ fontWeight: 'bold' }}>{(item.stargazersCount / 1000).toFixed(1)}k</Text>
          <Text>Stars</Text>
        </View>
        <View style={styles.flexContainer3}>
          <Text style={{ fontWeight: 'bold' }}>{(item.forksCount / 1000).toFixed(1)}k</Text>
          <Text>Forks</Text>
        </View>
        <View style={styles.flexContainer3}>
          <Text style={{ fontWeight: 'bold' }}>{item.reviewCount}</Text>
          <Text>Reviews</Text>
        </View>
        <View style={styles.flexContainer3}>
          <Text style={{ fontWeight: 'bold' }}>{item.ratingAverage}</Text>
          <Text>Rating</Text>
        </View>
      </View>
    </View>
  )
}

export default RepositoryItem