/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSongCategory = /* GraphQL */ `
  subscription OnCreateSongCategory(
    $filter: ModelSubscriptionSongCategoryFilterInput
  ) {
    onCreateSongCategory(filter: $filter) {
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
          userFavoriteSongsId
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
`;
export const onUpdateSongCategory = /* GraphQL */ `
  subscription OnUpdateSongCategory(
    $filter: ModelSubscriptionSongCategoryFilterInput
  ) {
    onUpdateSongCategory(filter: $filter) {
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
          userFavoriteSongsId
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
`;
export const onDeleteSongCategory = /* GraphQL */ `
  subscription OnDeleteSongCategory(
    $filter: ModelSubscriptionSongCategoryFilterInput
  ) {
    onDeleteSongCategory(filter: $filter) {
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
          userFavoriteSongsId
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
`;
export const onCreateAlbumCategory = /* GraphQL */ `
  subscription OnCreateAlbumCategory(
    $filter: ModelSubscriptionAlbumCategoryFilterInput
  ) {
    onCreateAlbumCategory(filter: $filter) {
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
`;
export const onUpdateAlbumCategory = /* GraphQL */ `
  subscription OnUpdateAlbumCategory(
    $filter: ModelSubscriptionAlbumCategoryFilterInput
  ) {
    onUpdateAlbumCategory(filter: $filter) {
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
`;
export const onDeleteAlbumCategory = /* GraphQL */ `
  subscription OnDeleteAlbumCategory(
    $filter: ModelSubscriptionAlbumCategoryFilterInput
  ) {
    onDeleteAlbumCategory(filter: $filter) {
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
`;
export const onCreateAlbum = /* GraphQL */ `
  subscription OnCreateAlbum($filter: ModelSubscriptionAlbumFilterInput) {
    onCreateAlbum(filter: $filter) {
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
          userFavoriteSongsId
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
`;
export const onUpdateAlbum = /* GraphQL */ `
  subscription OnUpdateAlbum($filter: ModelSubscriptionAlbumFilterInput) {
    onUpdateAlbum(filter: $filter) {
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
          userFavoriteSongsId
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
`;
export const onDeleteAlbum = /* GraphQL */ `
  subscription OnDeleteAlbum($filter: ModelSubscriptionAlbumFilterInput) {
    onDeleteAlbum(filter: $filter) {
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
          userFavoriteSongsId
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
`;
export const onCreateSong = /* GraphQL */ `
  subscription OnCreateSong($filter: ModelSubscriptionSongFilterInput) {
    onCreateSong(filter: $filter) {
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
      createdAt
      updatedAt
      songCategorySongsId
      albumSongsId
      artistSongsId
      userFavoriteSongsId
      playListSongsId
      countrySongsId
    }
  }
`;
export const onUpdateSong = /* GraphQL */ `
  subscription OnUpdateSong($filter: ModelSubscriptionSongFilterInput) {
    onUpdateSong(filter: $filter) {
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
      createdAt
      updatedAt
      songCategorySongsId
      albumSongsId
      artistSongsId
      userFavoriteSongsId
      playListSongsId
      countrySongsId
    }
  }
`;
export const onDeleteSong = /* GraphQL */ `
  subscription OnDeleteSong($filter: ModelSubscriptionSongFilterInput) {
    onDeleteSong(filter: $filter) {
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
      createdAt
      updatedAt
      songCategorySongsId
      albumSongsId
      artistSongsId
      userFavoriteSongsId
      playListSongsId
      countrySongsId
    }
  }
`;
export const onCreateArtist = /* GraphQL */ `
  subscription OnCreateArtist($filter: ModelSubscriptionArtistFilterInput) {
    onCreateArtist(filter: $filter) {
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
          userFavoriteSongsId
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
`;
export const onUpdateArtist = /* GraphQL */ `
  subscription OnUpdateArtist($filter: ModelSubscriptionArtistFilterInput) {
    onUpdateArtist(filter: $filter) {
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
          userFavoriteSongsId
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
`;
export const onDeleteArtist = /* GraphQL */ `
  subscription OnDeleteArtist($filter: ModelSubscriptionArtistFilterInput) {
    onDeleteArtist(filter: $filter) {
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
          userFavoriteSongsId
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
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
          userFavoriteSongsId
          playListSongsId
          countrySongsId
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
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
          userFavoriteSongsId
          playListSongsId
          countrySongsId
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
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
          userFavoriteSongsId
          playListSongsId
          countrySongsId
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
`;
export const onCreatePlayList = /* GraphQL */ `
  subscription OnCreatePlayList($filter: ModelSubscriptionPlayListFilterInput) {
    onCreatePlayList(filter: $filter) {
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
          userFavoriteSongsId
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
`;
export const onUpdatePlayList = /* GraphQL */ `
  subscription OnUpdatePlayList($filter: ModelSubscriptionPlayListFilterInput) {
    onUpdatePlayList(filter: $filter) {
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
          userFavoriteSongsId
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
`;
export const onDeletePlayList = /* GraphQL */ `
  subscription OnDeletePlayList($filter: ModelSubscriptionPlayListFilterInput) {
    onDeletePlayList(filter: $filter) {
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
          userFavoriteSongsId
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
`;
export const onCreateCountry = /* GraphQL */ `
  subscription OnCreateCountry($filter: ModelSubscriptionCountryFilterInput) {
    onCreateCountry(filter: $filter) {
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
          userFavoriteSongsId
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
`;
export const onUpdateCountry = /* GraphQL */ `
  subscription OnUpdateCountry($filter: ModelSubscriptionCountryFilterInput) {
    onUpdateCountry(filter: $filter) {
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
          userFavoriteSongsId
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
`;
export const onDeleteCountry = /* GraphQL */ `
  subscription OnDeleteCountry($filter: ModelSubscriptionCountryFilterInput) {
    onDeleteCountry(filter: $filter) {
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
          userFavoriteSongsId
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
`;
