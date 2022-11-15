/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
        }
        nextToken
      }
      createdAt
      updatedAt
      albumAlbumCategoriesId
    }
  }
`;
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
        }
        nextToken
      }
      createdAt
      updatedAt
      albumAlbumCategoriesId
    }
  }
`;
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
        }
        nextToken
      }
      createdAt
      updatedAt
      albumAlbumCategoriesId
    }
  }
`;
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
          lyrics
          createdAt
          updatedAt
          albumSongsId
          artistSongsId
          playListSongsId
        }
        nextToken
      }
      createdAt
      updatedAt
      albumCategoryAlbumsId
      songAlbumsId
    }
  }
`;
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
          lyrics
          createdAt
          updatedAt
          albumSongsId
          artistSongsId
          playListSongsId
        }
        nextToken
      }
      createdAt
      updatedAt
      albumCategoryAlbumsId
      songAlbumsId
    }
  }
`;
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
          lyrics
          createdAt
          updatedAt
          albumSongsId
          artistSongsId
          playListSongsId
        }
        nextToken
      }
      createdAt
      updatedAt
      albumCategoryAlbumsId
      songAlbumsId
    }
  }
`;
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
      lyrics
      artist {
        id
        name
        songs {
          nextToken
        }
        imageUri
        description
        createdAt
        updatedAt
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
        }
        nextToken
      }
      createdAt
      updatedAt
      albumSongsId
      artistSongsId
      playListSongsId
    }
  }
`;
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
      lyrics
      artist {
        id
        name
        songs {
          nextToken
        }
        imageUri
        description
        createdAt
        updatedAt
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
        }
        nextToken
      }
      createdAt
      updatedAt
      albumSongsId
      artistSongsId
      playListSongsId
    }
  }
`;
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
      lyrics
      artist {
        id
        name
        songs {
          nextToken
        }
        imageUri
        description
        createdAt
        updatedAt
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
        }
        nextToken
      }
      createdAt
      updatedAt
      albumSongsId
      artistSongsId
      playListSongsId
    }
  }
`;
export const createArtist = /* GraphQL */ `
  mutation CreateArtist(
    $input: CreateArtistInput!
    $condition: ModelArtistConditionInput
  ) {
    createArtist(input: $input, condition: $condition) {
      id
      name
      songs {
        items {
          id
          imageUri
          title
          songUri
          lyrics
          createdAt
          updatedAt
          albumSongsId
          artistSongsId
          playListSongsId
        }
        nextToken
      }
      imageUri
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateArtist = /* GraphQL */ `
  mutation UpdateArtist(
    $input: UpdateArtistInput!
    $condition: ModelArtistConditionInput
  ) {
    updateArtist(input: $input, condition: $condition) {
      id
      name
      songs {
        items {
          id
          imageUri
          title
          songUri
          lyrics
          createdAt
          updatedAt
          albumSongsId
          artistSongsId
          playListSongsId
        }
        nextToken
      }
      imageUri
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteArtist = /* GraphQL */ `
  mutation DeleteArtist(
    $input: DeleteArtistInput!
    $condition: ModelArtistConditionInput
  ) {
    deleteArtist(input: $input, condition: $condition) {
      id
      name
      songs {
        items {
          id
          imageUri
          title
          songUri
          lyrics
          createdAt
          updatedAt
          albumSongsId
          artistSongsId
          playListSongsId
        }
        nextToken
      }
      imageUri
      description
      createdAt
      updatedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      avatarUri
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
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      avatarUri
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
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      avatarUri
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
      createdAt
      updatedAt
    }
  }
`;
export const createPlayList = /* GraphQL */ `
  mutation CreatePlayList(
    $input: CreatePlayListInput!
    $condition: ModelPlayListConditionInput
  ) {
    createPlayList(input: $input, condition: $condition) {
      id
      title
      songs {
        items {
          id
          imageUri
          title
          songUri
          lyrics
          createdAt
          updatedAt
          albumSongsId
          artistSongsId
          playListSongsId
        }
        nextToken
      }
      imageUri
      createdAt
      updatedAt
      userPlayListsId
    }
  }
`;
export const updatePlayList = /* GraphQL */ `
  mutation UpdatePlayList(
    $input: UpdatePlayListInput!
    $condition: ModelPlayListConditionInput
  ) {
    updatePlayList(input: $input, condition: $condition) {
      id
      title
      songs {
        items {
          id
          imageUri
          title
          songUri
          lyrics
          createdAt
          updatedAt
          albumSongsId
          artistSongsId
          playListSongsId
        }
        nextToken
      }
      imageUri
      createdAt
      updatedAt
      userPlayListsId
    }
  }
`;
export const deletePlayList = /* GraphQL */ `
  mutation DeletePlayList(
    $input: DeletePlayListInput!
    $condition: ModelPlayListConditionInput
  ) {
    deletePlayList(input: $input, condition: $condition) {
      id
      title
      songs {
        items {
          id
          imageUri
          title
          songUri
          lyrics
          createdAt
          updatedAt
          albumSongsId
          artistSongsId
          playListSongsId
        }
        nextToken
      }
      imageUri
      createdAt
      updatedAt
      userPlayListsId
    }
  }
`;
