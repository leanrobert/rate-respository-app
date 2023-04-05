import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import * as Linking from 'expo-linking';

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

const RepositoryItem = ({ item, button }) => {
  const handlePress = () => {
    Linking.openURL(item.url)
  }

  return (
    <View style={styles.container} >
      <View style={styles.flexContainer}>
        <View style={{ paddingRight: 20 }}>
          <Image source={{ uri: item.ownerAvatarUrl }} style={styles.image} />
        </View>
        <View>
          <Text style={{ fontWeight: 'bold' }} testID="fullname">{item.fullName}</Text>
          <Text testID="description">{item.description}</Text>
          <View style={{ flexWrap: 'wrap', marginVertical: 10}} >
            <Text style={styles.label} testID="language">{item.language}</Text>
          </View>
        </View>
      </View>
      <View style={styles.flexContainer2}>
        <View style={styles.flexContainer3}>
          <Text style={{ fontWeight: 'bold' }} testID="stargazerscount">{item.stargazersCount > 1000 ? `${(item.stargazersCount / 1000).toFixed(1)}k` : item.stargazersCount}</Text>
          <Text>Stars</Text>
        </View>
        <View style={styles.flexContainer3}>
          <Text style={{ fontWeight: 'bold' }} testID="forkcount">{item.forksCount > 1000 ? `${(item.forksCount / 1000).toFixed(1)}k` : item.forksCount}</Text>
          <Text>Forks</Text>
        </View>
        <View style={styles.flexContainer3}>
          <Text style={{ fontWeight: 'bold' }} testID="reviewcount">{item.reviewCount}</Text>
          <Text>Reviews</Text>
        </View>
        <View style={styles.flexContainer3}>
          <Text style={{ fontWeight: 'bold' }} testID="ratingavg">{item.ratingAverage}</Text>
          <Text>Rating</Text>
        </View>
      </View>
      {button &&
        <Pressable onPress={handlePress}>
          <View style={{ backgroundColor: '#0366d6', borderRadius: 5, padding: 10, marginTop: 15}} >
            <Text style={{ color: 'white', textAlign: 'center', fontSize: 18, fontWeight: 'bold'}}>Open in Github</Text>
          </View>
        </Pressable>
      }
      {item.reviews?.edges && item.reviews.edges.map(review => (
        <View key={review.node.id} style={styles.flexContainer}>
          <View>
            <View style={{ height: 50, width: 50, backgroundColor: 'white', borderColor: '#0366d6', borderWidth: 2, borderStyle: 'solid', borderRadius: 50, margin: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: '#0366d6'}}>{review.node.rating}</Text>
            </View>
          </View>
          <View style={{ margin: 10 }}>
            <Text style={{ fontWeight: 'bold', marginBottom: 2}}>{review.node.user.username}</Text>
            <Text style={{ color: 'gray'}}>{review.node.createdAt}</Text>
            <Text style={{ flexWrap: 'wrap'}}>{review.node.text}</Text>
          </View>
        </View>
      ))}
    </View>
  )
}

export default RepositoryItem