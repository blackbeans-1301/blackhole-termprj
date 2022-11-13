/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
            imageUri
            artistHeadline
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
          artist {
            name
            id
          }
        }
        nextToken
      }
      createdAt
      updatedAt
      albumCategoryAlbumsId
      songAlbumsId
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
        createdAt
        updatedAt
        albumCategoryAlbumsId
        songAlbumsId
      }
      nextToken
    }
  }
`

export const getSongToPlay = /* GraphQL */ `
query GetSong($id: ID!) {
  getSong(id: $id) {
    id
    imageUri
    title
    songUri
    lyrics
    artist {
      name
    }
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
        lyrics
        artist {
          id
          name
          imageUri
          description
          createdAt
          updatedAt
        }
        albums {
          nextToken
        }
        createdAt
        updatedAt
        albumSongsId
        artistSongsId
        playListSongsId
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
        songs {
          nextToken
        }
        imageUri
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
        isAdmin
        playLists {
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
        songs {
          nextToken
        }
        imageUri
        createdAt
        updatedAt
        userPlayListsId
      }
      nextToken
    }
  }
`
