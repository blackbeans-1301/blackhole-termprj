/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSongCategory = /* GraphQL */ `
  query GetSongCategory($id: ID!) {
    getSongCategory(id: $id) {
      id
      name
      songs {
        items {
          id
          imageUri
          title
          songUri
          listened
          searchString
          lyrics
          averageScore
          ratedTime
          createdAt
          updatedAt
          songCategorySongsId
          albumSongsId
          artistSongsId
          playListSongsId
          countrySongsId
        }
        nextToken
      }
      imageUri
      createdAt
      updatedAt
      albumIncludedSongCategoriesId
      userFavoriteCategoriesId
    }
  }
`
export const listSongCategories = /* GraphQL */ `
  query ListSongCategories(
    $filter: ModelSongCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSongCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        songs {
          nextToken
        }
        imageUri
        createdAt
        updatedAt
        albumIncludedSongCategoriesId
        userFavoriteCategoriesId
      }
      nextToken
    }
  }
`
export const getAlbumCategory = /* GraphQL */ `
  query GetAlbumCategory($id: ID!) {
    getAlbumCategory(id: $id) {
      id
      title
      albums {
        items {
          id
          name
          creator
          numberOfLikes
          imageUri
          artistHeadline
          createdAt
          updatedAt
          albumCategoryAlbumsId
          songAlbumsId
          artistAlbumsId
          userFavoriteAlbumsId
        }
        nextToken
      }
      createdAt
      updatedAt
      albumAlbumCategoriesId
    }
  }
`
export const listAlbumCategories = /* GraphQL */ `
  query ListAlbumCategories(
    $filter: ModelAlbumCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAlbumCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        albums {
          items {
            id
            name
            artistHeadline
            numberOfLikes
            creator
            imageUri
          }
          nextToken
        }
        createdAt
        updatedAt
        albumAlbumCategoriesId
      }
      nextToken
    }
  }
`
export const getAlbum = /* GraphQL */ `
  query GetAlbum($id: ID!) {
    getAlbum(id: $id) {
      id
      name
      creator
      numberOfLikes
      imageUri
      artistHeadline
      songs {
        items {
          id
          imageUri
          title
          songUri
          listened
          lyrics
          averageScore
          ratedTime
          artist {
            id
            name
          }
        }
        nextToken
      }
    }
  }
`
export const listAlbums = /* GraphQL */ `
  query ListAlbums(
    $filter: ModelAlbumFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAlbums(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        creator
        numberOfLikes
        imageUri
        artistHeadline
        albumCategories {
          nextToken
        }
        songs {
          nextToken
        }
        artists {
          nextToken
        }
        includedSongCategories {
          nextToken
        }
        createdAt
        updatedAt
        albumCategoryAlbumsId
        songAlbumsId
        artistAlbumsId
        userFavoriteAlbumsId
      }
      nextToken
    }
  }
`
export const getUserSongsFavorite = /* GraphQL */ `
  query GetUserSongsFavorite($id: ID!) {
    getUserSongsFavorite(id: $id) {
      id
      song {
        id
        imageUri
        title
        songUri
        listened
        searchString
        lyrics
        averageScore
        ratedTime
        artist {
          id
          name
          imageUri
          description
          searchString
          createdAt
          updatedAt
          albumArtistsId
          userFavoriteArtistsId
        }
        category {
          id
          name
          imageUri
          createdAt
          updatedAt
          albumIncludedSongCategoriesId
          userFavoriteCategoriesId
        }
        country {
          id
          name
          imageUri
          createdAt
          updatedAt
          userFavoriteCountriesId
        }
        albums {
          nextToken
        }
        userFavorites {
          nextToken
        }
        createdAt
        updatedAt
        songCategorySongsId
        albumSongsId
        artistSongsId
        playListSongsId
        countrySongsId
      }
      user {
        id
        avatarUri
        isChosenCategories
        isAdmin
        playLists {
          nextToken
        }
        favoriteCategories {
          nextToken
        }
        favoriteSongs {
          nextToken
        }
        favoriteAlbums {
          nextToken
        }
        favoriteArtists {
          nextToken
        }
        favoriteCountries {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      songUserFavoritesId
      userFavoriteSongsId
    }
  }
`
export const listUserSongsFavorites = /* GraphQL */ `
  query ListUserSongsFavorites(
    $filter: ModelUserSongsFavoriteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserSongsFavorites(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        song {
          id
          imageUri
          title
          songUri
          listened
          searchString
          lyrics
          averageScore
          ratedTime
          createdAt
          updatedAt
          songCategorySongsId
          albumSongsId
          artistSongsId
          playListSongsId
          countrySongsId
        }
        user {
          id
          avatarUri
          isChosenCategories
          isAdmin
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        songUserFavoritesId
        userFavoriteSongsId
      }
      nextToken
    }
  }
`
export const getSong = /* GraphQL */ `
  query GetSong($id: ID!) {
    getSong(id: $id) {
      id
      imageUri
      title
      songUri
      listened
      searchString
      lyrics
      averageScore
      ratedTime
      artist {
        id
        name
        imageUri
        description
        searchString
        songs {
          nextToken
        }
        albums {
          nextToken
        }
        createdAt
        updatedAt
        albumArtistsId
        userFavoriteArtistsId
      }
      category {
        id
        name
        songs {
          nextToken
        }
        imageUri
        createdAt
        updatedAt
        albumIncludedSongCategoriesId
        userFavoriteCategoriesId
      }
      country {
        id
        name
        imageUri
        songs {
          nextToken
        }
        createdAt
        updatedAt
        userFavoriteCountriesId
      }
      albums {
        items {
          id
          name
          creator
          numberOfLikes
          imageUri
          artistHeadline
          createdAt
          updatedAt
          albumCategoryAlbumsId
          songAlbumsId
          artistAlbumsId
          userFavoriteAlbumsId
        }
        nextToken
      }
      userFavorites {
        items {
          id
          createdAt
          updatedAt
          songUserFavoritesId
          userFavoriteSongsId
        }
        nextToken
      }
      createdAt
      updatedAt
      songCategorySongsId
      albumSongsId
      artistSongsId
      playListSongsId
      countrySongsId
    }
  }
`
export const listSongs = /* GraphQL */ `
  query ListSongs(
    $filter: ModelSongFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSongs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        imageUri
        title
        songUri
        listened
        searchString
        lyrics
        averageScore
        ratedTime
        artist {
          name
        }
      }
      nextToken
    }
  }
`
export const getArtist = /* GraphQL */ `
  query GetArtist($id: ID!) {
    getArtist(id: $id) {
      id
      name
      imageUri
      description
      searchString
      songs {
        items {
          id
          imageUri
          title
          songUri
          listened
          searchString
          lyrics
          averageScore
          ratedTime
          createdAt
          updatedAt
          songCategorySongsId
          albumSongsId
          artistSongsId
          playListSongsId
          countrySongsId
        }
        nextToken
      }
      albums {
        items {
          id
          name
          creator
          numberOfLikes
          imageUri
          artistHeadline
          createdAt
          updatedAt
          albumCategoryAlbumsId
          songAlbumsId
          artistAlbumsId
          userFavoriteAlbumsId
        }
        nextToken
      }
      createdAt
      updatedAt
      albumArtistsId
      userFavoriteArtistsId
    }
  }
`
export const listArtists = /* GraphQL */ `
  query ListArtists(
    $filter: ModelArtistFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArtists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        imageUri
        description
        searchString
        songs {
          nextToken
        }
        albums {
          nextToken
        }
        createdAt
        updatedAt
        albumArtistsId
        userFavoriteArtistsId
      }
      nextToken
    }
  }
`

export const artistFinder = /* GraphQL */ `
  query ListArtists(
    $filter: ModelArtistFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArtists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        imageUri
        description
        searchString
      }
      nextToken
    }
  }
`


export const listUserLikedSong = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      favoriteSongs {
        items {
          id
          song {
            id
            imageUri
            title
            songUri
            listened
            lyrics
            averageScore
            ratedTime
            artist {
              name
            }
          }
        }
      }
    }
  }
`

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      avatarUri
      isChosenCategories
      isAdmin
      playLists {
        items {
          id
          title
          imageUri
          createdAt
          updatedAt
          userPlayListsId
        }
        nextToken
      }
      favoriteCategories {
        items {
          id
          name
          imageUri
          createdAt
          updatedAt
          albumIncludedSongCategoriesId
          userFavoriteCategoriesId
        }
        nextToken
      }
      favoriteSongs {
        items {
          id
          createdAt
          updatedAt
          songUserFavoritesId
          userFavoriteSongsId
        }
        nextToken
      }
      favoriteAlbums {
        items {
          id
          name
          creator
          numberOfLikes
          imageUri
          artistHeadline
          createdAt
          updatedAt
          albumCategoryAlbumsId
          songAlbumsId
          artistAlbumsId
          userFavoriteAlbumsId
        }
        nextToken
      }
      favoriteArtists {
        items {
          id
          name
          imageUri
          description
          searchString
          createdAt
          updatedAt
          albumArtistsId
          userFavoriteArtistsId
        }
        nextToken
      }
      favoriteCountries {
        items {
          id
          name
          imageUri
          createdAt
          updatedAt
          userFavoriteCountriesId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`

export const getLikedSongOfUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      favoriteSongs {
        items {
          id
          song {
            id
          }
        }
      }
    }
  }
`

export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        avatarUri
        isChosenCategories
        isAdmin
        playLists {
          nextToken
        }
        favoriteCategories {
          nextToken
        }
        favoriteSongs {
          nextToken
        }
        favoriteAlbums {
          nextToken
        }
        favoriteArtists {
          nextToken
        }
        favoriteCountries {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`
export const getPlayList = /* GraphQL */ `
  query GetPlayList($id: ID!) {
    getPlayList(id: $id) {
      id
      title
      imageUri
      songs {
        items {
          id
          imageUri
          title
          songUri
          listened
          searchString
          lyrics
          averageScore
          ratedTime
          createdAt
          updatedAt
          songCategorySongsId
          albumSongsId
          artistSongsId
          playListSongsId
          countrySongsId
        }
        nextToken
      }
      createdBy {
        id
        avatarUri
        isChosenCategories
        isAdmin
        playLists {
          nextToken
        }
        favoriteCategories {
          nextToken
        }
        favoriteSongs {
          nextToken
        }
        favoriteAlbums {
          nextToken
        }
        favoriteArtists {
          nextToken
        }
        favoriteCountries {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      userPlayListsId
    }
  }
`
export const listPlayLists = /* GraphQL */ `
  query ListPlayLists(
    $filter: ModelPlayListFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayLists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        imageUri
        songs {
          nextToken
        }
        createdBy {
          id
          avatarUri
          isChosenCategories
          isAdmin
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        userPlayListsId
      }
      nextToken
    }
  }
`
export const getCountry = /* GraphQL */ `
  query GetCountry($id: ID!) {
    getCountry(id: $id) {
      id
      name
      imageUri
      songs {
        items {
          id
          imageUri
          title
          songUri
          listened
          searchString
          lyrics
          averageScore
          ratedTime
          createdAt
          updatedAt
          songCategorySongsId
          albumSongsId
          artistSongsId
          playListSongsId
          countrySongsId
        }
        nextToken
      }
      createdAt
      updatedAt
      userFavoriteCountriesId
    }
  }
`
export const listCountries = /* GraphQL */ `
  query ListCountries(
    $filter: ModelCountryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCountries(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        imageUri
        songs {
          nextToken
        }
        createdAt
        updatedAt
        userFavoriteCountriesId
      }
      nextToken
    }
  }
`
