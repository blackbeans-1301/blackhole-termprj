import React, { useContext, useState } from "react"
import { Text, Image, View, TouchableWithoutFeedback } from "react-native"
import styles from "./styles"
import { Song } from "../../types"
import { AppContext } from "../../AppContext"
import TrackPlayer from "react-native-track-player"
import { useNavigation } from "@react-navigation/native"

export default function LikedSongItem(props) {
  const data = props.data
  const { song, index, addAlbumToTrackList, isAlbumAdded } = props
  const { setSongId, songsOfAlbum, hasTrack, setHasTrackState } =
    useContext(AppContext)

  const likedSongImg =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPwAAADICAMAAAD7nnzuAAAA81BMVEUtMUL/QFZA/7AtMUP////JMkMvM0QpLT8ABSgSGDEeIzdLTlzU1djw8PEbIDZKTVmWl52dnqSlpqzcNkkACAvQNEU9Cg4AFx9OEBUoM0Qz2JQAIi5B/7SzLT0WABg78KY35J28HjgAQCgAAAAFnmsWYkI1DRIbKzp8HScUAA8TUjcOAACUIy+8Lj7rO0+GICpE/7ocdlAvvoIlGjIijmEHMh8BHRApJzoXABsfgll7fYZqbXghCAtuGSEdJDE4BQYrAAAqrHXGx8peYWy3uL2Ji5MIESw8P08THCYlCQxXWmZJEhkbcU0ilmYAUjakKTcACRk5nH/vAAAGYElEQVR4nO3dbVviOBQGYJaWBKuwCILKILJW1oGqg4gjqDOzosCK67r//9dsX3ixFtqGnqYpnOfLXNeYNrlNE1qa1kRiSaQ1yjLj0kTdYMggHvFMeJrdim+yNBCejvs78U1/mwbBD2U5E9/IGYkGwKfl3XQ2rknn5e2AeIV5S0EiZTcYn0A84pk3RTzijVCFQrct9EDh6Xj3KXZ6KHy2L+9sgbcu5ID1/H3/7ha8dSEHbsxnY2fH2R7xiGdKDPDUvW1rjadPuZHbz9caP8zIrmdeHPFKOs3595R91nFuP+eGVwayPOCtH7qecnPE52U5L9YQ4Yeno35/JNa1D8cxT7NZsezrPdt7RUg8ry9GRMTT+5zrJxRYBMWPNxa/0Yc9tyAe8cybIh7xcQ3iEc+8KeIRH9cgHvHMmyIe8XEN4hHPvCniEW+Lc0GAFFW44+mdY0HAfkT528sUCt62L+nsayGSXJYOeeP1w96+K+ns22/R5IA/3lEM8YhHPOIRj3jEI34t8VR7eXhR1T2eUbUHvU4SPf7sR6FYPP9CeGb/olgsRHBuvwBfTBl45gpWj7R/lEoVRcGnNhdvHfbMFaweSZzD/qs+8x5xxhf0Ol+FwitbnL7vc8HTD0v8eOKV/M4dH/1yPLn78OAJT3xaljND5mpWyVI8HQ8+PO3BEz/MyP0sczWrxKXn78fR9Dwd3bHXslIEHPO2ikONiLM9tyAe8a5BPOLZa0A84l2LIR7x3IJ4xLsG8Yhnr8Ev/sdlofDOGZ+KZkGSo5i/7+2JNMuSkt4l5nUK9L295x0bidDramOS6jUljsLkcwnX9kaIJ4e26HjjpsXh50yBuqurqp12bZJ2R9XsfkOu2Uuo3XkJ4tj14eSmxcL6QsWTn78ObHktlUqvB47sma2RyK1200u2Kh/SKndutNtp55olOmV7iWRvVsJRn5GSs849hz4M/JcLX7fPzcbosO/tSiVpj85rf9dx5u6oWcJZZFqCqT6h8NWbduuzy8K12jddvYR0rbqUqMYYT7Seo0s/9G2zSki1eexSoqeRuOKpVl8KM3H1bre+/LdjlPhHpfHES+pbzRWfrDSb7gWSyTdVEgI/XRPiszGqelqredBcu93Ice1U9Y23MpcC4snP6Wogn/i3WtkL75njcu3Nb32T5s2fQYDET3vg4shXY27KZQh8ufyvP/yfk3/nh38Y+CN/+JMaEP70D8QjHvGIRzziEY94xCMe8YhHPOIRj3jEIx7xiEe8C/790sy7oHirdZch4c9TZr6JiX8omq0rhoU3d19E/ObhC0U9hXMx8S9m64qFcPCMNyqh8DWf+FBvVM5vUVtHgEcKahsG31b91RfqLerZ72A667unqJ7A4E/+81cfp5UZ1sTn2ZhuEwLf7PqtTyg86Z4sX2zkNydd//UJhSfaW0B85VQlwuH9TUCJRMNzwZG7vdlgqy98/M+/Sn5iNIZU3RejedjrVcJWX+h4/SPPuRJ4QazFpdXV+95YpMhaX+h4ppDqVWs1e+uqGvABhsjxCaKu1veVpue7r7wSPX7FcW+N92ARAL/SuJ+O90ARAW/0PSseoN8FwSeI9shmf9QgHtYSA5/wWnxuT6Wugbx3RRA807gHGe9GRMEzzPkQ87wVYfBG3/s622lB9btIeP1s58pH31ceA5/bzCIQ3te4N6/joCIS3se4hxvvRoTCe/Y92DxvRSy8xzVe8Os4e6DwUG97I2pv+TOEPbi5zgwQXrl/gjoAGsvGfaUOONeZgcErOVkewH3eL350Fna8GwHC52U5D/Z5v3DOh53nrQAd9qNczv1dBiwhVee4b/Ua8C/dgJrwFAXMrsdxjVe5UgF3P41gH3WTfB73IYx3I2LiP437MMa7EUHxtms8wOs4e0TF62c7j5O+b7WBz21mERY/u49XaYYx15kRGG+N+7DGuxGB8eacH9I8b0VkfII0Oh2gcxslu+DKS2h8InF9DbMfutu/c+oFxzvfELZS6La86NX6guOhMsrIzxuLp6PxgmNoQ/A6f8H/bQx+URCPeOZNEY/4uCYKvMTrz9l4JQK8RLc5/SEjr0SAVwaLTjWjCOJ5T3hjuBscgRIJnophx486xCOeKYjX8Vka12wFxj+Pfo9rRs/B8MOMHOfsKFIAvCQNcjEOpcHwSpwzMayMX4sgfkH+B5huBY73OuEhAAAAAElFTkSuQmCC"

  const navigation = useNavigation()
  console.log(data)

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        if (data != undefined) {
          navigation.navigate("DownloadedSongsScreen", {})
        } else {
          navigation.navigate("LikedSongScreen", {
            type: "liked",
            id: undefined,
          })
        }
      }}
    >
      <View style={styles.container}>
        <Image
          source={{ uri: data == undefined ? likedSongImg : data.imageUrl }}
          style={styles.image}
        ></Image>
        <View style={styles.rightContainer}>
          <Text style={styles.title}>
            {data == undefined ? `Liked songs` : `Downloaded songs`}
          </Text>
          <Text style={styles.artist}>Playlist • You</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}
