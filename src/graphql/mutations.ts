/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSongCategory = /* GraphQL */ `
  mutation CreateSongCategory(
    $input: CreateSongCategoryInput!
    $condition: ModelSongCategoryConditionInput
  ) {
    createSongCategory(input: $input, condition: $condition) {
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
export const updateSongCategory = /* GraphQL */ `
  mutation UpdateSongCategory(
    $input: UpdateSongCategoryInput!
    $condition: ModelSongCategoryConditionInput
  ) {
    updateSongCategory(input: $input, condition: $condition) {
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
export const deleteSongCategory = /* GraphQL */ `
  mutation DeleteSongCategory(
    $input: DeleteSongCategoryInput!
    $condition: ModelSongCategoryConditionInput
  ) {
    deleteSongCategory(input: $input, condition: $condition) {
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
export const createAlbumCategory = /* GraphQL */ `
  mutation CreateAlbumCategory(
    $input: CreateAlbumCategoryInput!
    $condition: ModelAlbumCategoryConditionInput
  ) {
    createAlbumCategory(input: $input, condition: $condition) {
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
export const updateAlbumCategory = /* GraphQL */ `
  mutation UpdateAlbumCategory(
    $input: UpdateAlbumCategoryInput!
    $condition: ModelAlbumCategoryConditionInput
  ) {
    updateAlbumCategory(input: $input, condition: $condition) {
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
export const deleteAlbumCategory = /* GraphQL */ `
  mutation DeleteAlbumCategory(
    $input: DeleteAlbumCategoryInput!
    $condition: ModelAlbumCategoryConditionInput
  ) {
    deleteAlbumCategory(input: $input, condition: $condition) {
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
export const createAlbum = /* GraphQL */ `
  mutation CreateAlbum(
    $input: CreateAlbumInput!
    $condition: ModelAlbumConditionInput
  ) {
    createAlbum(input: $input, condition: $condition) {
      id
      name
      creator
      numberOfLikes
      imageUri
      artistHeadline
      albumCategories {
        items {
          id
          title
          createdAt
          updatedAt
          albumAlbumCategoriesId
        }
        nextToken
      }
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
      artists {
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
      includedSongCategories {
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
      createdAt
      updatedAt
      albumCategoryAlbumsId
      songAlbumsId
      artistAlbumsId
      userFavoriteAlbumsId
    }
  }
`
export const updateAlbum = /* GraphQL */ `
  mutation UpdateAlbum(
    $input: UpdateAlbumInput!
    $condition: ModelAlbumConditionInput
  ) {
    updateAlbum(input: $input, condition: $condition) {
      id
      name
      creator
      numberOfLikes
      imageUri
      artistHeadline
      albumCategories {
        items {
          id
          title
          createdAt
          updatedAt
          albumAlbumCategoriesId
        }
        nextToken
      }
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
      artists {
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
      includedSongCategories {
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
      createdAt
      updatedAt
      albumCategoryAlbumsId
      songAlbumsId
      artistAlbumsId
      userFavoriteAlbumsId
    }
  }
`
export const deleteAlbum = /* GraphQL */ `
  mutation DeleteAlbum(
    $input: DeleteAlbumInput!
    $condition: ModelAlbumConditionInput
  ) {
    deleteAlbum(input: $input, condition: $condition) {
      id
      name
      creator
      numberOfLikes
      imageUri
      artistHeadline
      albumCategories {
        items {
          id
          title
          createdAt
          updatedAt
          albumAlbumCategoriesId
        }
        nextToken
      }
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
      artists {
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
      includedSongCategories {
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
      createdAt
      updatedAt
      albumCategoryAlbumsId
      songAlbumsId
      artistAlbumsId
      userFavoriteAlbumsId
    }
  }
`
export const createUserSongsFavorite = /* GraphQL */ `
  mutation CreateUserSongsFavorite(
    $input: CreateUserSongsFavoriteInput!
    $condition: ModelUserSongsFavoriteConditionInput
  ) {
    createUserSongsFavorite(input: $input, condition: $condition) {
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
export const updateUserSongsFavorite = /* GraphQL */ `
  mutation UpdateUserSongsFavorite(
    $input: UpdateUserSongsFavoriteInput!
    $condition: ModelUserSongsFavoriteConditionInput
  ) {
    updateUserSongsFavorite(input: $input, condition: $condition) {
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
export const deleteUserSongsFavorite = /* GraphQL */ `
  mutation DeleteUserSongsFavorite(
    $input: DeleteUserSongsFavoriteInput!
    $condition: ModelUserSongsFavoriteConditionInput
  ) {
    deleteUserSongsFavorite(input: $input, condition: $condition) {
      id
    }
  }
`
export const createSong = /* GraphQL */ `
  mutation CreateSong(
    $input: CreateSongInput!
    $condition: ModelSongConditionInput
  ) {
    createSong(input: $input, condition: $condition) {
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
export const updateSong = /* GraphQL */ `
  mutation UpdateSong(
    $input: UpdateSongInput!
    $condition: ModelSongConditionInput
  ) {
    updateSong(input: $input, condition: $condition) {
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
export const deleteSong = /* GraphQL */ `
  mutation DeleteSong(
    $input: DeleteSongInput!
    $condition: ModelSongConditionInput
  ) {
    deleteSong(input: $input, condition: $condition) {
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
export const createArtist = /* GraphQL */ `
  mutation CreateArtist(
    $input: CreateArtistInput!
    $condition: ModelArtistConditionInput
  ) {
    createArtist(input: $input, condition: $condition) {
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
export const updateArtist = /* GraphQL */ `
  mutation UpdateArtist(
    $input: UpdateArtistInput!
    $condition: ModelArtistConditionInput
  ) {
    updateArtist(input: $input, condition: $condition) {
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
export const deleteArtist = /* GraphQL */ `
  mutation DeleteArtist(
    $input: DeleteArtistInput!
    $condition: ModelArtistConditionInput
  ) {
    deleteArtist(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createPlayList = /* GraphQL */ `
  mutation CreatePlayList(
    $input: CreatePlayListInput!
    $condition: ModelPlayListConditionInput
  ) {
    createPlayList(input: $input, condition: $condition) {
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
export const updatePlayList = /* GraphQL */ `
  mutation UpdatePlayList(
    $input: UpdatePlayListInput!
    $condition: ModelPlayListConditionInput
  ) {
    updatePlayList(input: $input, condition: $condition) {
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
export const deletePlayList = /* GraphQL */ `
  mutation DeletePlayList(
    $input: DeletePlayListInput!
    $condition: ModelPlayListConditionInput
  ) {
    deletePlayList(input: $input, condition: $condition) {
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
export const createCountry = /* GraphQL */ `
  mutation CreateCountry(
    $input: CreateCountryInput!
    $condition: ModelCountryConditionInput
  ) {
    createCountry(input: $input, condition: $condition) {
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
export const updateCountry = /* GraphQL */ `
  mutation UpdateCountry(
    $input: UpdateCountryInput!
    $condition: ModelCountryConditionInput
  ) {
    updateCountry(input: $input, condition: $condition) {
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
export const deleteCountry = /* GraphQL */ `
  mutation DeleteCountry(
    $input: DeleteCountryInput!
    $condition: ModelCountryConditionInput
  ) {
    deleteCountry(input: $input, condition: $condition) {
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
