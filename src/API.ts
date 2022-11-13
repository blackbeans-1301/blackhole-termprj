/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateAlbumCategoryInput = {
  id?: string | null,
  title: string,
  albumAlbumCategoriesId?: string | null,
};

export type ModelAlbumCategoryConditionInput = {
  title?: ModelStringInput | null,
  and?: Array< ModelAlbumCategoryConditionInput | null > | null,
  or?: Array< ModelAlbumCategoryConditionInput | null > | null,
  not?: ModelAlbumCategoryConditionInput | null,
  albumAlbumCategoriesId?: ModelIDInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type AlbumCategory = {
  __typename: "AlbumCategory",
  id: string,
  title: string,
  albums?: ModelAlbumConnection | null,
  createdAt: string,
  updatedAt: string,
  albumAlbumCategoriesId?: string | null,
};

export type ModelAlbumConnection = {
  __typename: "ModelAlbumConnection",
  items:  Array<Album | null >,
  nextToken?: string | null,
};

export type Album = {
  __typename: "Album",
  id: string,
  name: string,
  creator: string,
  numberOfLikes: number,
  imageUri: string,
  artistHeadline: string,
  albumCategories?: ModelAlbumCategoryConnection | null,
  songs?: ModelSongConnection | null,
  createdAt: string,
  updatedAt: string,
  albumCategoryAlbumsId?: string | null,
  songAlbumsId?: string | null,
};

export type ModelAlbumCategoryConnection = {
  __typename: "ModelAlbumCategoryConnection",
  items:  Array<AlbumCategory | null >,
  nextToken?: string | null,
};

export type ModelSongConnection = {
  __typename: "ModelSongConnection",
  items:  Array<Song | null >,
  nextToken?: string | null,
};

export type Song = {
  __typename: "Song",
  id: string,
  imageUri: string,
  title: string,
  songUri: string,
  lyrics?: string | null,
  artist?: Artist | null,
  albums?: ModelAlbumConnection | null,
  createdAt: string,
  updatedAt: string,
  albumSongsId?: string | null,
  artistSongsId?: string | null,
  playListSongsId?: string | null,
};

export type Artist = {
  __typename: "Artist",
  id: string,
  name: string,
  songs?: ModelSongConnection | null,
  imageUri: string,
  description: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateAlbumCategoryInput = {
  id: string,
  title?: string | null,
  albumAlbumCategoriesId?: string | null,
};

export type DeleteAlbumCategoryInput = {
  id: string,
};

export type CreateAlbumInput = {
  id?: string | null,
  name: string,
  creator: string,
  numberOfLikes: number,
  imageUri: string,
  artistHeadline: string,
  albumCategoryAlbumsId?: string | null,
  songAlbumsId?: string | null,
};

export type ModelAlbumConditionInput = {
  name?: ModelStringInput | null,
  creator?: ModelStringInput | null,
  numberOfLikes?: ModelIntInput | null,
  imageUri?: ModelStringInput | null,
  artistHeadline?: ModelStringInput | null,
  and?: Array< ModelAlbumConditionInput | null > | null,
  or?: Array< ModelAlbumConditionInput | null > | null,
  not?: ModelAlbumConditionInput | null,
  albumCategoryAlbumsId?: ModelIDInput | null,
  songAlbumsId?: ModelIDInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateAlbumInput = {
  id: string,
  name?: string | null,
  creator?: string | null,
  numberOfLikes?: number | null,
  imageUri?: string | null,
  artistHeadline?: string | null,
  albumCategoryAlbumsId?: string | null,
  songAlbumsId?: string | null,
};

export type DeleteAlbumInput = {
  id: string,
};

export type CreateSongInput = {
  id?: string | null,
  imageUri: string,
  title: string,
  songUri: string,
  lyrics?: string | null,
  albumSongsId?: string | null,
  artistSongsId?: string | null,
  playListSongsId?: string | null,
};

export type ModelSongConditionInput = {
  imageUri?: ModelStringInput | null,
  title?: ModelStringInput | null,
  songUri?: ModelStringInput | null,
  lyrics?: ModelStringInput | null,
  and?: Array< ModelSongConditionInput | null > | null,
  or?: Array< ModelSongConditionInput | null > | null,
  not?: ModelSongConditionInput | null,
  albumSongsId?: ModelIDInput | null,
  artistSongsId?: ModelIDInput | null,
  playListSongsId?: ModelIDInput | null,
};

export type UpdateSongInput = {
  id: string,
  imageUri?: string | null,
  title?: string | null,
  songUri?: string | null,
  lyrics?: string | null,
  albumSongsId?: string | null,
  artistSongsId?: string | null,
  playListSongsId?: string | null,
};

export type DeleteSongInput = {
  id: string,
};

export type CreateArtistInput = {
  id?: string | null,
  name: string,
  imageUri: string,
  description: string,
};

export type ModelArtistConditionInput = {
  name?: ModelStringInput | null,
  imageUri?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelArtistConditionInput | null > | null,
  or?: Array< ModelArtistConditionInput | null > | null,
  not?: ModelArtistConditionInput | null,
};

export type UpdateArtistInput = {
  id: string,
  name?: string | null,
  imageUri?: string | null,
  description?: string | null,
};

export type DeleteArtistInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  avatarUri?: string | null,
  isAdmin: boolean,
};

export type ModelUserConditionInput = {
  avatarUri?: ModelStringInput | null,
  isAdmin?: ModelBooleanInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type User = {
  __typename: "User",
  id: string,
  avatarUri?: string | null,
  isAdmin: boolean,
  playLists?: ModelPlayListConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelPlayListConnection = {
  __typename: "ModelPlayListConnection",
  items:  Array<PlayList | null >,
  nextToken?: string | null,
};

export type PlayList = {
  __typename: "PlayList",
  id: string,
  title: string,
  songs?: ModelSongConnection | null,
  imageUri: string,
  createdAt: string,
  updatedAt: string,
  userPlayListsId?: string | null,
};

export type UpdateUserInput = {
  id: string,
  avatarUri?: string | null,
  isAdmin?: boolean | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreatePlayListInput = {
  id?: string | null,
  title: string,
  imageUri: string,
  userPlayListsId?: string | null,
};

export type ModelPlayListConditionInput = {
  title?: ModelStringInput | null,
  imageUri?: ModelStringInput | null,
  and?: Array< ModelPlayListConditionInput | null > | null,
  or?: Array< ModelPlayListConditionInput | null > | null,
  not?: ModelPlayListConditionInput | null,
  userPlayListsId?: ModelIDInput | null,
};

export type UpdatePlayListInput = {
  id: string,
  title?: string | null,
  imageUri?: string | null,
  userPlayListsId?: string | null,
};

export type DeletePlayListInput = {
  id: string,
};

export type ModelAlbumCategoryFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  and?: Array< ModelAlbumCategoryFilterInput | null > | null,
  or?: Array< ModelAlbumCategoryFilterInput | null > | null,
  not?: ModelAlbumCategoryFilterInput | null,
  albumAlbumCategoriesId?: ModelIDInput | null,
};

export type ModelAlbumFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  creator?: ModelStringInput | null,
  numberOfLikes?: ModelIntInput | null,
  imageUri?: ModelStringInput | null,
  artistHeadline?: ModelStringInput | null,
  and?: Array< ModelAlbumFilterInput | null > | null,
  or?: Array< ModelAlbumFilterInput | null > | null,
  not?: ModelAlbumFilterInput | null,
  albumCategoryAlbumsId?: ModelIDInput | null,
  songAlbumsId?: ModelIDInput | null,
};

export type ModelSongFilterInput = {
  id?: ModelIDInput | null,
  imageUri?: ModelStringInput | null,
  title?: ModelStringInput | null,
  songUri?: ModelStringInput | null,
  lyrics?: ModelStringInput | null,
  and?: Array< ModelSongFilterInput | null > | null,
  or?: Array< ModelSongFilterInput | null > | null,
  not?: ModelSongFilterInput | null,
  albumSongsId?: ModelIDInput | null,
  artistSongsId?: ModelIDInput | null,
  playListSongsId?: ModelIDInput | null,
};

export type ModelArtistFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  imageUri?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelArtistFilterInput | null > | null,
  or?: Array< ModelArtistFilterInput | null > | null,
  not?: ModelArtistFilterInput | null,
};

export type ModelArtistConnection = {
  __typename: "ModelArtistConnection",
  items:  Array<Artist | null >,
  nextToken?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  avatarUri?: ModelStringInput | null,
  isAdmin?: ModelBooleanInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelPlayListFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  imageUri?: ModelStringInput | null,
  and?: Array< ModelPlayListFilterInput | null > | null,
  or?: Array< ModelPlayListFilterInput | null > | null,
  not?: ModelPlayListFilterInput | null,
  userPlayListsId?: ModelIDInput | null,
};

export type ModelSubscriptionAlbumCategoryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAlbumCategoryFilterInput | null > | null,
  or?: Array< ModelSubscriptionAlbumCategoryFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionAlbumFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  creator?: ModelSubscriptionStringInput | null,
  numberOfLikes?: ModelSubscriptionIntInput | null,
  imageUri?: ModelSubscriptionStringInput | null,
  artistHeadline?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAlbumFilterInput | null > | null,
  or?: Array< ModelSubscriptionAlbumFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionSongFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  imageUri?: ModelSubscriptionStringInput | null,
  title?: ModelSubscriptionStringInput | null,
  songUri?: ModelSubscriptionStringInput | null,
  lyrics?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSongFilterInput | null > | null,
  or?: Array< ModelSubscriptionSongFilterInput | null > | null,
};

export type ModelSubscriptionArtistFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  imageUri?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionArtistFilterInput | null > | null,
  or?: Array< ModelSubscriptionArtistFilterInput | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  avatarUri?: ModelSubscriptionStringInput | null,
  isAdmin?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionPlayListFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  imageUri?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPlayListFilterInput | null > | null,
  or?: Array< ModelSubscriptionPlayListFilterInput | null > | null,
};

export type CreateAlbumCategoryMutationVariables = {
  input: CreateAlbumCategoryInput,
  condition?: ModelAlbumCategoryConditionInput | null,
};

export type CreateAlbumCategoryMutation = {
  createAlbumCategory?:  {
    __typename: "AlbumCategory",
    id: string,
    title: string,
    albums?:  {
      __typename: "ModelAlbumConnection",
      items:  Array< {
        __typename: "Album",
        id: string,
        name: string,
        creator: string,
        numberOfLikes: number,
        imageUri: string,
        artistHeadline: string,
        createdAt: string,
        updatedAt: string,
        albumCategoryAlbumsId?: string | null,
        songAlbumsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    albumAlbumCategoriesId?: string | null,
  } | null,
};

export type UpdateAlbumCategoryMutationVariables = {
  input: UpdateAlbumCategoryInput,
  condition?: ModelAlbumCategoryConditionInput | null,
};

export type UpdateAlbumCategoryMutation = {
  updateAlbumCategory?:  {
    __typename: "AlbumCategory",
    id: string,
    title: string,
    albums?:  {
      __typename: "ModelAlbumConnection",
      items:  Array< {
        __typename: "Album",
        id: string,
        name: string,
        creator: string,
        numberOfLikes: number,
        imageUri: string,
        artistHeadline: string,
        createdAt: string,
        updatedAt: string,
        albumCategoryAlbumsId?: string | null,
        songAlbumsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    albumAlbumCategoriesId?: string | null,
  } | null,
};

export type DeleteAlbumCategoryMutationVariables = {
  input: DeleteAlbumCategoryInput,
  condition?: ModelAlbumCategoryConditionInput | null,
};

export type DeleteAlbumCategoryMutation = {
  deleteAlbumCategory?:  {
    __typename: "AlbumCategory",
    id: string,
    title: string,
    albums?:  {
      __typename: "ModelAlbumConnection",
      items:  Array< {
        __typename: "Album",
        id: string,
        name: string,
        creator: string,
        numberOfLikes: number,
        imageUri: string,
        artistHeadline: string,
        createdAt: string,
        updatedAt: string,
        albumCategoryAlbumsId?: string | null,
        songAlbumsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    albumAlbumCategoriesId?: string | null,
  } | null,
};

export type CreateAlbumMutationVariables = {
  input: CreateAlbumInput,
  condition?: ModelAlbumConditionInput | null,
};

export type CreateAlbumMutation = {
  createAlbum?:  {
    __typename: "Album",
    id: string,
    name: string,
    creator: string,
    numberOfLikes: number,
    imageUri: string,
    artistHeadline: string,
    albumCategories?:  {
      __typename: "ModelAlbumCategoryConnection",
      items:  Array< {
        __typename: "AlbumCategory",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
        albumAlbumCategoriesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        imageUri: string,
        title: string,
        songUri: string,
        lyrics?: string | null,
        createdAt: string,
        updatedAt: string,
        albumSongsId?: string | null,
        artistSongsId?: string | null,
        playListSongsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    albumCategoryAlbumsId?: string | null,
    songAlbumsId?: string | null,
  } | null,
};

export type UpdateAlbumMutationVariables = {
  input: UpdateAlbumInput,
  condition?: ModelAlbumConditionInput | null,
};

export type UpdateAlbumMutation = {
  updateAlbum?:  {
    __typename: "Album",
    id: string,
    name: string,
    creator: string,
    numberOfLikes: number,
    imageUri: string,
    artistHeadline: string,
    albumCategories?:  {
      __typename: "ModelAlbumCategoryConnection",
      items:  Array< {
        __typename: "AlbumCategory",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
        albumAlbumCategoriesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        imageUri: string,
        title: string,
        songUri: string,
        lyrics?: string | null,
        createdAt: string,
        updatedAt: string,
        albumSongsId?: string | null,
        artistSongsId?: string | null,
        playListSongsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    albumCategoryAlbumsId?: string | null,
    songAlbumsId?: string | null,
  } | null,
};

export type DeleteAlbumMutationVariables = {
  input: DeleteAlbumInput,
  condition?: ModelAlbumConditionInput | null,
};

export type DeleteAlbumMutation = {
  deleteAlbum?:  {
    __typename: "Album",
    id: string,
    name: string,
    creator: string,
    numberOfLikes: number,
    imageUri: string,
    artistHeadline: string,
    albumCategories?:  {
      __typename: "ModelAlbumCategoryConnection",
      items:  Array< {
        __typename: "AlbumCategory",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
        albumAlbumCategoriesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        imageUri: string,
        title: string,
        songUri: string,
        lyrics?: string | null,
        createdAt: string,
        updatedAt: string,
        albumSongsId?: string | null,
        artistSongsId?: string | null,
        playListSongsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    albumCategoryAlbumsId?: string | null,
    songAlbumsId?: string | null,
  } | null,
};

export type CreateSongMutationVariables = {
  input: CreateSongInput,
  condition?: ModelSongConditionInput | null,
};

export type CreateSongMutation = {
  createSong?:  {
    __typename: "Song",
    id: string,
    imageUri: string,
    title: string,
    songUri: string,
    lyrics?: string | null,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      imageUri: string,
      description: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    albums?:  {
      __typename: "ModelAlbumConnection",
      items:  Array< {
        __typename: "Album",
        id: string,
        name: string,
        creator: string,
        numberOfLikes: number,
        imageUri: string,
        artistHeadline: string,
        createdAt: string,
        updatedAt: string,
        albumCategoryAlbumsId?: string | null,
        songAlbumsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    albumSongsId?: string | null,
    artistSongsId?: string | null,
    playListSongsId?: string | null,
  } | null,
};

export type UpdateSongMutationVariables = {
  input: UpdateSongInput,
  condition?: ModelSongConditionInput | null,
};

export type UpdateSongMutation = {
  updateSong?:  {
    __typename: "Song",
    id: string,
    imageUri: string,
    title: string,
    songUri: string,
    lyrics?: string | null,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      imageUri: string,
      description: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    albums?:  {
      __typename: "ModelAlbumConnection",
      items:  Array< {
        __typename: "Album",
        id: string,
        name: string,
        creator: string,
        numberOfLikes: number,
        imageUri: string,
        artistHeadline: string,
        createdAt: string,
        updatedAt: string,
        albumCategoryAlbumsId?: string | null,
        songAlbumsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    albumSongsId?: string | null,
    artistSongsId?: string | null,
    playListSongsId?: string | null,
  } | null,
};

export type DeleteSongMutationVariables = {
  input: DeleteSongInput,
  condition?: ModelSongConditionInput | null,
};

export type DeleteSongMutation = {
  deleteSong?:  {
    __typename: "Song",
    id: string,
    imageUri: string,
    title: string,
    songUri: string,
    lyrics?: string | null,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      imageUri: string,
      description: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    albums?:  {
      __typename: "ModelAlbumConnection",
      items:  Array< {
        __typename: "Album",
        id: string,
        name: string,
        creator: string,
        numberOfLikes: number,
        imageUri: string,
        artistHeadline: string,
        createdAt: string,
        updatedAt: string,
        albumCategoryAlbumsId?: string | null,
        songAlbumsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    albumSongsId?: string | null,
    artistSongsId?: string | null,
    playListSongsId?: string | null,
  } | null,
};

export type CreateArtistMutationVariables = {
  input: CreateArtistInput,
  condition?: ModelArtistConditionInput | null,
};

export type CreateArtistMutation = {
  createArtist?:  {
    __typename: "Artist",
    id: string,
    name: string,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        imageUri: string,
        title: string,
        songUri: string,
        lyrics?: string | null,
        createdAt: string,
        updatedAt: string,
        albumSongsId?: string | null,
        artistSongsId?: string | null,
        playListSongsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    imageUri: string,
    description: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateArtistMutationVariables = {
  input: UpdateArtistInput,
  condition?: ModelArtistConditionInput | null,
};

export type UpdateArtistMutation = {
  updateArtist?:  {
    __typename: "Artist",
    id: string,
    name: string,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        imageUri: string,
        title: string,
        songUri: string,
        lyrics?: string | null,
        createdAt: string,
        updatedAt: string,
        albumSongsId?: string | null,
        artistSongsId?: string | null,
        playListSongsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    imageUri: string,
    description: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteArtistMutationVariables = {
  input: DeleteArtistInput,
  condition?: ModelArtistConditionInput | null,
};

export type DeleteArtistMutation = {
  deleteArtist?:  {
    __typename: "Artist",
    id: string,
    name: string,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        imageUri: string,
        title: string,
        songUri: string,
        lyrics?: string | null,
        createdAt: string,
        updatedAt: string,
        albumSongsId?: string | null,
        artistSongsId?: string | null,
        playListSongsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    imageUri: string,
    description: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    avatarUri?: string | null,
    isAdmin: boolean,
    playLists?:  {
      __typename: "ModelPlayListConnection",
      items:  Array< {
        __typename: "PlayList",
        id: string,
        title: string,
        imageUri: string,
        createdAt: string,
        updatedAt: string,
        userPlayListsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    avatarUri?: string | null,
    isAdmin: boolean,
    playLists?:  {
      __typename: "ModelPlayListConnection",
      items:  Array< {
        __typename: "PlayList",
        id: string,
        title: string,
        imageUri: string,
        createdAt: string,
        updatedAt: string,
        userPlayListsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    avatarUri?: string | null,
    isAdmin: boolean,
    playLists?:  {
      __typename: "ModelPlayListConnection",
      items:  Array< {
        __typename: "PlayList",
        id: string,
        title: string,
        imageUri: string,
        createdAt: string,
        updatedAt: string,
        userPlayListsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePlayListMutationVariables = {
  input: CreatePlayListInput,
  condition?: ModelPlayListConditionInput | null,
};

export type CreatePlayListMutation = {
  createPlayList?:  {
    __typename: "PlayList",
    id: string,
    title: string,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        imageUri: string,
        title: string,
        songUri: string,
        lyrics?: string | null,
        createdAt: string,
        updatedAt: string,
        albumSongsId?: string | null,
        artistSongsId?: string | null,
        playListSongsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    imageUri: string,
    createdAt: string,
    updatedAt: string,
    userPlayListsId?: string | null,
  } | null,
};

export type UpdatePlayListMutationVariables = {
  input: UpdatePlayListInput,
  condition?: ModelPlayListConditionInput | null,
};

export type UpdatePlayListMutation = {
  updatePlayList?:  {
    __typename: "PlayList",
    id: string,
    title: string,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        imageUri: string,
        title: string,
        songUri: string,
        lyrics?: string | null,
        createdAt: string,
        updatedAt: string,
        albumSongsId?: string | null,
        artistSongsId?: string | null,
        playListSongsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    imageUri: string,
    createdAt: string,
    updatedAt: string,
    userPlayListsId?: string | null,
  } | null,
};

export type DeletePlayListMutationVariables = {
  input: DeletePlayListInput,
  condition?: ModelPlayListConditionInput | null,
};

export type DeletePlayListMutation = {
  deletePlayList?:  {
    __typename: "PlayList",
    id: string,
    title: string,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        imageUri: string,
        title: string,
        songUri: string,
        lyrics?: string | null,
        createdAt: string,
        updatedAt: string,
        albumSongsId?: string | null,
        artistSongsId?: string | null,
        playListSongsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    imageUri: string,
    createdAt: string,
    updatedAt: string,
    userPlayListsId?: string | null,
  } | null,
};

export type GetAlbumCategoryQueryVariables = {
  id: string,
};

export type GetAlbumCategoryQuery = {
  getAlbumCategory?:  {
    __typename: "AlbumCategory",
    id: string,
    title: string,
    albums?:  {
      __typename: "ModelAlbumConnection",
      items:  Array< {
        __typename: "Album",
        id: string,
        name: string,
        creator: string,
        numberOfLikes: number,
        imageUri: string,
        artistHeadline: string,
        createdAt: string,
        updatedAt: string,
        albumCategoryAlbumsId?: string | null,
        songAlbumsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    albumAlbumCategoriesId?: string | null,
  } | null,
};

export type ListAlbumCategoriesQueryVariables = {
  filter?: ModelAlbumCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAlbumCategoriesQuery = {
  listAlbumCategories?:  {
    __typename: "ModelAlbumCategoryConnection",
    items:  Array< {
      __typename: "AlbumCategory",
      id: string,
      title: string,
      albums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      albumAlbumCategoriesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAlbumQueryVariables = {
  id: string,
};

export type GetAlbumQuery = {
  getAlbum?:  {
    __typename: "Album",
    id: string,
    name: string,
    creator: string,
    numberOfLikes: number,
    imageUri: string,
    artistHeadline: string,
    albumCategories?:  {
      __typename: "ModelAlbumCategoryConnection",
      items:  Array< {
        __typename: "AlbumCategory",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
        albumAlbumCategoriesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        imageUri: string,
        title: string,
        songUri: string,
        lyrics?: string | null,
        createdAt: string,
        updatedAt: string,
        albumSongsId?: string | null,
        artistSongsId?: string | null,
        playListSongsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    albumCategoryAlbumsId?: string | null,
    songAlbumsId?: string | null,
  } | null,
};

export type ListAlbumsQueryVariables = {
  filter?: ModelAlbumFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAlbumsQuery = {
  listAlbums?:  {
    __typename: "ModelAlbumConnection",
    items:  Array< {
      __typename: "Album",
      id: string,
      name: string,
      creator: string,
      numberOfLikes: number,
      imageUri: string,
      artistHeadline: string,
      albumCategories?:  {
        __typename: "ModelAlbumCategoryConnection",
        nextToken?: string | null,
      } | null,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      albumCategoryAlbumsId?: string | null,
      songAlbumsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSongQueryVariables = {
  id: string,
};

export type GetSongQuery = {
  getSong?:  {
    __typename: "Song",
    id: string,
    imageUri: string,
    title: string,
    songUri: string,
    lyrics?: string | null,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      imageUri: string,
      description: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    albums?:  {
      __typename: "ModelAlbumConnection",
      items:  Array< {
        __typename: "Album",
        id: string,
        name: string,
        creator: string,
        numberOfLikes: number,
        imageUri: string,
        artistHeadline: string,
        createdAt: string,
        updatedAt: string,
        albumCategoryAlbumsId?: string | null,
        songAlbumsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    albumSongsId?: string | null,
    artistSongsId?: string | null,
    playListSongsId?: string | null,
  } | null,
};

export type ListSongsQueryVariables = {
  filter?: ModelSongFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSongsQuery = {
  listSongs?:  {
    __typename: "ModelSongConnection",
    items:  Array< {
      __typename: "Song",
      id: string,
      imageUri: string,
      title: string,
      songUri: string,
      lyrics?: string | null,
      artist?:  {
        __typename: "Artist",
        id: string,
        name: string,
        imageUri: string,
        description: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      albums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      albumSongsId?: string | null,
      artistSongsId?: string | null,
      playListSongsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetArtistQueryVariables = {
  id: string,
};

export type GetArtistQuery = {
  getArtist?:  {
    __typename: "Artist",
    id: string,
    name: string,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        imageUri: string,
        title: string,
        songUri: string,
        lyrics?: string | null,
        createdAt: string,
        updatedAt: string,
        albumSongsId?: string | null,
        artistSongsId?: string | null,
        playListSongsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    imageUri: string,
    description: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListArtistsQueryVariables = {
  filter?: ModelArtistFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListArtistsQuery = {
  listArtists?:  {
    __typename: "ModelArtistConnection",
    items:  Array< {
      __typename: "Artist",
      id: string,
      name: string,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      imageUri: string,
      description: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    avatarUri?: string | null,
    isAdmin: boolean,
    playLists?:  {
      __typename: "ModelPlayListConnection",
      items:  Array< {
        __typename: "PlayList",
        id: string,
        title: string,
        imageUri: string,
        createdAt: string,
        updatedAt: string,
        userPlayListsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      avatarUri?: string | null,
      isAdmin: boolean,
      playLists?:  {
        __typename: "ModelPlayListConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPlayListQueryVariables = {
  id: string,
};

export type GetPlayListQuery = {
  getPlayList?:  {
    __typename: "PlayList",
    id: string,
    title: string,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        imageUri: string,
        title: string,
        songUri: string,
        lyrics?: string | null,
        createdAt: string,
        updatedAt: string,
        albumSongsId?: string | null,
        artistSongsId?: string | null,
        playListSongsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    imageUri: string,
    createdAt: string,
    updatedAt: string,
    userPlayListsId?: string | null,
  } | null,
};

export type ListPlayListsQueryVariables = {
  filter?: ModelPlayListFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPlayListsQuery = {
  listPlayLists?:  {
    __typename: "ModelPlayListConnection",
    items:  Array< {
      __typename: "PlayList",
      id: string,
      title: string,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      imageUri: string,
      createdAt: string,
      updatedAt: string,
      userPlayListsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateAlbumCategorySubscriptionVariables = {
  filter?: ModelSubscriptionAlbumCategoryFilterInput | null,
};

export type OnCreateAlbumCategorySubscription = {
  onCreateAlbumCategory?:  {
    __typename: "AlbumCategory",
    id: string,
    title: string,
    albums?:  {
      __typename: "ModelAlbumConnection",
      items:  Array< {
        __typename: "Album",
        id: string,
        name: string,
        creator: string,
        numberOfLikes: number,
        imageUri: string,
        artistHeadline: string,
        createdAt: string,
        updatedAt: string,
        albumCategoryAlbumsId?: string | null,
        songAlbumsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    albumAlbumCategoriesId?: string | null,
  } | null,
};

export type OnUpdateAlbumCategorySubscriptionVariables = {
  filter?: ModelSubscriptionAlbumCategoryFilterInput | null,
};

export type OnUpdateAlbumCategorySubscription = {
  onUpdateAlbumCategory?:  {
    __typename: "AlbumCategory",
    id: string,
    title: string,
    albums?:  {
      __typename: "ModelAlbumConnection",
      items:  Array< {
        __typename: "Album",
        id: string,
        name: string,
        creator: string,
        numberOfLikes: number,
        imageUri: string,
        artistHeadline: string,
        createdAt: string,
        updatedAt: string,
        albumCategoryAlbumsId?: string | null,
        songAlbumsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    albumAlbumCategoriesId?: string | null,
  } | null,
};

export type OnDeleteAlbumCategorySubscriptionVariables = {
  filter?: ModelSubscriptionAlbumCategoryFilterInput | null,
};

export type OnDeleteAlbumCategorySubscription = {
  onDeleteAlbumCategory?:  {
    __typename: "AlbumCategory",
    id: string,
    title: string,
    albums?:  {
      __typename: "ModelAlbumConnection",
      items:  Array< {
        __typename: "Album",
        id: string,
        name: string,
        creator: string,
        numberOfLikes: number,
        imageUri: string,
        artistHeadline: string,
        createdAt: string,
        updatedAt: string,
        albumCategoryAlbumsId?: string | null,
        songAlbumsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    albumAlbumCategoriesId?: string | null,
  } | null,
};

export type OnCreateAlbumSubscriptionVariables = {
  filter?: ModelSubscriptionAlbumFilterInput | null,
};

export type OnCreateAlbumSubscription = {
  onCreateAlbum?:  {
    __typename: "Album",
    id: string,
    name: string,
    creator: string,
    numberOfLikes: number,
    imageUri: string,
    artistHeadline: string,
    albumCategories?:  {
      __typename: "ModelAlbumCategoryConnection",
      items:  Array< {
        __typename: "AlbumCategory",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
        albumAlbumCategoriesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        imageUri: string,
        title: string,
        songUri: string,
        lyrics?: string | null,
        createdAt: string,
        updatedAt: string,
        albumSongsId?: string | null,
        artistSongsId?: string | null,
        playListSongsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    albumCategoryAlbumsId?: string | null,
    songAlbumsId?: string | null,
  } | null,
};

export type OnUpdateAlbumSubscriptionVariables = {
  filter?: ModelSubscriptionAlbumFilterInput | null,
};

export type OnUpdateAlbumSubscription = {
  onUpdateAlbum?:  {
    __typename: "Album",
    id: string,
    name: string,
    creator: string,
    numberOfLikes: number,
    imageUri: string,
    artistHeadline: string,
    albumCategories?:  {
      __typename: "ModelAlbumCategoryConnection",
      items:  Array< {
        __typename: "AlbumCategory",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
        albumAlbumCategoriesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        imageUri: string,
        title: string,
        songUri: string,
        lyrics?: string | null,
        createdAt: string,
        updatedAt: string,
        albumSongsId?: string | null,
        artistSongsId?: string | null,
        playListSongsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    albumCategoryAlbumsId?: string | null,
    songAlbumsId?: string | null,
  } | null,
};

export type OnDeleteAlbumSubscriptionVariables = {
  filter?: ModelSubscriptionAlbumFilterInput | null,
};

export type OnDeleteAlbumSubscription = {
  onDeleteAlbum?:  {
    __typename: "Album",
    id: string,
    name: string,
    creator: string,
    numberOfLikes: number,
    imageUri: string,
    artistHeadline: string,
    albumCategories?:  {
      __typename: "ModelAlbumCategoryConnection",
      items:  Array< {
        __typename: "AlbumCategory",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
        albumAlbumCategoriesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        imageUri: string,
        title: string,
        songUri: string,
        lyrics?: string | null,
        createdAt: string,
        updatedAt: string,
        albumSongsId?: string | null,
        artistSongsId?: string | null,
        playListSongsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    albumCategoryAlbumsId?: string | null,
    songAlbumsId?: string | null,
  } | null,
};

export type OnCreateSongSubscriptionVariables = {
  filter?: ModelSubscriptionSongFilterInput | null,
};

export type OnCreateSongSubscription = {
  onCreateSong?:  {
    __typename: "Song",
    id: string,
    imageUri: string,
    title: string,
    songUri: string,
    lyrics?: string | null,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      imageUri: string,
      description: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    albums?:  {
      __typename: "ModelAlbumConnection",
      items:  Array< {
        __typename: "Album",
        id: string,
        name: string,
        creator: string,
        numberOfLikes: number,
        imageUri: string,
        artistHeadline: string,
        createdAt: string,
        updatedAt: string,
        albumCategoryAlbumsId?: string | null,
        songAlbumsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    albumSongsId?: string | null,
    artistSongsId?: string | null,
    playListSongsId?: string | null,
  } | null,
};

export type OnUpdateSongSubscriptionVariables = {
  filter?: ModelSubscriptionSongFilterInput | null,
};

export type OnUpdateSongSubscription = {
  onUpdateSong?:  {
    __typename: "Song",
    id: string,
    imageUri: string,
    title: string,
    songUri: string,
    lyrics?: string | null,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      imageUri: string,
      description: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    albums?:  {
      __typename: "ModelAlbumConnection",
      items:  Array< {
        __typename: "Album",
        id: string,
        name: string,
        creator: string,
        numberOfLikes: number,
        imageUri: string,
        artistHeadline: string,
        createdAt: string,
        updatedAt: string,
        albumCategoryAlbumsId?: string | null,
        songAlbumsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    albumSongsId?: string | null,
    artistSongsId?: string | null,
    playListSongsId?: string | null,
  } | null,
};

export type OnDeleteSongSubscriptionVariables = {
  filter?: ModelSubscriptionSongFilterInput | null,
};

export type OnDeleteSongSubscription = {
  onDeleteSong?:  {
    __typename: "Song",
    id: string,
    imageUri: string,
    title: string,
    songUri: string,
    lyrics?: string | null,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      imageUri: string,
      description: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    albums?:  {
      __typename: "ModelAlbumConnection",
      items:  Array< {
        __typename: "Album",
        id: string,
        name: string,
        creator: string,
        numberOfLikes: number,
        imageUri: string,
        artistHeadline: string,
        createdAt: string,
        updatedAt: string,
        albumCategoryAlbumsId?: string | null,
        songAlbumsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    albumSongsId?: string | null,
    artistSongsId?: string | null,
    playListSongsId?: string | null,
  } | null,
};

export type OnCreateArtistSubscriptionVariables = {
  filter?: ModelSubscriptionArtistFilterInput | null,
};

export type OnCreateArtistSubscription = {
  onCreateArtist?:  {
    __typename: "Artist",
    id: string,
    name: string,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        imageUri: string,
        title: string,
        songUri: string,
        lyrics?: string | null,
        createdAt: string,
        updatedAt: string,
        albumSongsId?: string | null,
        artistSongsId?: string | null,
        playListSongsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    imageUri: string,
    description: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateArtistSubscriptionVariables = {
  filter?: ModelSubscriptionArtistFilterInput | null,
};

export type OnUpdateArtistSubscription = {
  onUpdateArtist?:  {
    __typename: "Artist",
    id: string,
    name: string,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        imageUri: string,
        title: string,
        songUri: string,
        lyrics?: string | null,
        createdAt: string,
        updatedAt: string,
        albumSongsId?: string | null,
        artistSongsId?: string | null,
        playListSongsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    imageUri: string,
    description: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteArtistSubscriptionVariables = {
  filter?: ModelSubscriptionArtistFilterInput | null,
};

export type OnDeleteArtistSubscription = {
  onDeleteArtist?:  {
    __typename: "Artist",
    id: string,
    name: string,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        imageUri: string,
        title: string,
        songUri: string,
        lyrics?: string | null,
        createdAt: string,
        updatedAt: string,
        albumSongsId?: string | null,
        artistSongsId?: string | null,
        playListSongsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    imageUri: string,
    description: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    avatarUri?: string | null,
    isAdmin: boolean,
    playLists?:  {
      __typename: "ModelPlayListConnection",
      items:  Array< {
        __typename: "PlayList",
        id: string,
        title: string,
        imageUri: string,
        createdAt: string,
        updatedAt: string,
        userPlayListsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    avatarUri?: string | null,
    isAdmin: boolean,
    playLists?:  {
      __typename: "ModelPlayListConnection",
      items:  Array< {
        __typename: "PlayList",
        id: string,
        title: string,
        imageUri: string,
        createdAt: string,
        updatedAt: string,
        userPlayListsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    avatarUri?: string | null,
    isAdmin: boolean,
    playLists?:  {
      __typename: "ModelPlayListConnection",
      items:  Array< {
        __typename: "PlayList",
        id: string,
        title: string,
        imageUri: string,
        createdAt: string,
        updatedAt: string,
        userPlayListsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePlayListSubscriptionVariables = {
  filter?: ModelSubscriptionPlayListFilterInput | null,
};

export type OnCreatePlayListSubscription = {
  onCreatePlayList?:  {
    __typename: "PlayList",
    id: string,
    title: string,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        imageUri: string,
        title: string,
        songUri: string,
        lyrics?: string | null,
        createdAt: string,
        updatedAt: string,
        albumSongsId?: string | null,
        artistSongsId?: string | null,
        playListSongsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    imageUri: string,
    createdAt: string,
    updatedAt: string,
    userPlayListsId?: string | null,
  } | null,
};

export type OnUpdatePlayListSubscriptionVariables = {
  filter?: ModelSubscriptionPlayListFilterInput | null,
};

export type OnUpdatePlayListSubscription = {
  onUpdatePlayList?:  {
    __typename: "PlayList",
    id: string,
    title: string,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        imageUri: string,
        title: string,
        songUri: string,
        lyrics?: string | null,
        createdAt: string,
        updatedAt: string,
        albumSongsId?: string | null,
        artistSongsId?: string | null,
        playListSongsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    imageUri: string,
    createdAt: string,
    updatedAt: string,
    userPlayListsId?: string | null,
  } | null,
};

export type OnDeletePlayListSubscriptionVariables = {
  filter?: ModelSubscriptionPlayListFilterInput | null,
};

export type OnDeletePlayListSubscription = {
  onDeletePlayList?:  {
    __typename: "PlayList",
    id: string,
    title: string,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        imageUri: string,
        title: string,
        songUri: string,
        lyrics?: string | null,
        createdAt: string,
        updatedAt: string,
        albumSongsId?: string | null,
        artistSongsId?: string | null,
        playListSongsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    imageUri: string,
    createdAt: string,
    updatedAt: string,
    userPlayListsId?: string | null,
  } | null,
};
