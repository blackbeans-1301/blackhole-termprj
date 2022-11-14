import React, { useEffect, useState } from "react"
import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native"
import AlbumCategory from "../../components/AlbumCategory"
import { API, graphqlOperation } from "aws-amplify"
import { listAlbumCategories } from "../../src/graphql/queries"
import { SafeAreaProvider } from "react-native-safe-area-context"

export default function HomeScreen() {
  const [categories, setCategories] = useState([])
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    async function fetchAlbumCategories() {
      try {
        const data = await API.graphql(graphqlOperation(listAlbumCategories))
        setCategories(data.data.listAlbumCategories.items)
      } catch (e) {
        console.log(e)
      }
    }

    fetchAlbumCategories()
  }, [])

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={categories}
          renderItem={({ item }) => (
            <AlbumCategory title={item.title} albums={item.albums.items} />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  list: {},
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
})
