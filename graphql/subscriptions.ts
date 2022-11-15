/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
export const onCreateSong = /* GraphQL */ `
  subscription OnCreateSong($filter: ModelSubscriptionSongFilterInput) {
    onCreateSong(filter: $filter) {
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
export const onUpdateSong = /* GraphQL */ `
  subscription OnUpdateSong($filter: ModelSubscriptionSongFilterInput) {
    onUpdateSong(filter: $filter) {
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
export const onDeleteSong = /* GraphQL */ `
  subscription OnDeleteSong($filter: ModelSubscriptionSongFilterInput) {
    onDeleteSong(filter: $filter) {
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
export const onCreateArtist = /* GraphQL */ `
  subscription OnCreateArtist($filter: ModelSubscriptionArtistFilterInput) {
    onCreateArtist(filter: $filter) {
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
export const onUpdateArtist = /* GraphQL */ `
  subscription OnUpdateArtist($filter: ModelSubscriptionArtistFilterInput) {
    onUpdateArtist(filter: $filter) {
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
export const onDeleteArtist = /* GraphQL */ `
  subscription OnDeleteArtist($filter: ModelSubscriptionArtistFilterInput) {
    onDeleteArtist(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreatePlayList = /* GraphQL */ `
  subscription OnCreatePlayList($filter: ModelSubscriptionPlayListFilterInput) {
    onCreatePlayList(filter: $filter) {
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
export const onUpdatePlayList = /* GraphQL */ `
  subscription OnUpdatePlayList($filter: ModelSubscriptionPlayListFilterInput) {
    onUpdatePlayList(filter: $filter) {
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
export const onDeletePlayList = /* GraphQL */ `
  subscription OnDeletePlayList($filter: ModelSubscriptionPlayListFilterInput) {
    onDeletePlayList(filter: $filter) {
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
