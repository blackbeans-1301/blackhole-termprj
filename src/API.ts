/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateSongCategoryInput = {
  id?: string | null,
  name: string,
  imageUri?: string | null,
  albumIncludedSongCategoriesId?: string | null,
  userFavoriteCategoriesId?: string | null,
};

export type ModelSongCategoryConditionInput = {
  name?: ModelStringInput | null,
  imageUri?: ModelStringInput | null,
  and?: Array< ModelSongCategoryConditionInput | null > | null,
  or?: Array< ModelSongCategoryConditionInput | null > | null,
  not?: ModelSongCategoryConditionInput | null,
  albumIncludedSongCategoriesId?: ModelIDInput | null,
  userFavoriteCategoriesId?: ModelIDInput | null,
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

export type SongCategory = {
  __typename: "SongCategory",
  id: string,
  name: string,
  songs?: ModelSongConnection | null,
  imageUri?: string | null,
  createdAt: string,
  updatedAt: string,
  albumIncludedSongCategoriesId?: string | null,
  userFavoriteCategoriesId?: string | null,
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
  listened?: number | null,
  searchString?: string | null,
  lyrics?: string | null,
  averageScore?: number | null,
  ratedTime?: number | null,
  artist?: Artist | null,
  category?: SongCategory | null,
  country?: Country | null,
  albums?: ModelAlbumConnection | null,
  createdAt: string,
  updatedAt: string,
  songCategorySongsId?: string | null,
  albumSongsId?: string | null,
  artistSongsId?: string | null,
  userFavoriteSongsId?: string | null,
  playListSongsId?: string | null,
  countrySongsId?: string | null,
};

export type Artist = {
  __typename: "Artist",
  id: string,
  name: string,
  imageUri: string,
  description: string,
  searchString: string,
  songs?: ModelSongConnection | null,
  albums?: ModelAlbumConnection | null,
  createdAt: string,
  updatedAt: string,
  albumArtistsId?: string | null,
  userFavoriteArtistsId?: string | null,
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
  artists?: ModelArtistConnection | null,
  includedSongCategories?: ModelSongCategoryConnection | null,
  createdAt: string,
  updatedAt: string,
  albumCategoryAlbumsId?: string | null,
  songAlbumsId?: string | null,
  artistAlbumsId?: string | null,
  userFavoriteAlbumsId?: string | null,
};

export type ModelAlbumCategoryConnection = {
  __typename: "ModelAlbumCategoryConnection",
  items:  Array<AlbumCategory | null >,
  nextToken?: string | null,
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

export type ModelArtistConnection = {
  __typename: "ModelArtistConnection",
  items:  Array<Artist | null >,
  nextToken?: string | null,
};

export type ModelSongCategoryConnection = {
  __typename: "ModelSongCategoryConnection",
  items:  Array<SongCategory | null >,
  nextToken?: string | null,
};

export type Country = {
  __typename: "Country",
  id: string,
  name: string,
  imageUri: string,
  songs?: ModelSongConnection | null,
  createdAt: string,
  updatedAt: string,
  userFavoriteCountriesId?: string | null,
};

export type UpdateSongCategoryInput = {
  id: string,
  name?: string | null,
  imageUri?: string | null,
  albumIncludedSongCategoriesId?: string | null,
  userFavoriteCategoriesId?: string | null,
};

export type DeleteSongCategoryInput = {
  id: string,
};

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
  artistAlbumsId?: string | null,
  userFavoriteAlbumsId?: string | null,
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
  artistAlbumsId?: ModelIDInput | null,
  userFavoriteAlbumsId?: ModelIDInput | null,
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
  artistAlbumsId?: string | null,
  userFavoriteAlbumsId?: string | null,
};

export type DeleteAlbumInput = {
  id: string,
};

export type CreateSongInput = {
  id?: string | null,
  imageUri: string,
  title: string,
  songUri: string,
  listened?: number | null,
  searchString?: string | null,
  lyrics?: string | null,
  averageScore?: number | null,
  ratedTime?: number | null,
  songCategorySongsId?: string | null,
  albumSongsId?: string | null,
  artistSongsId?: string | null,
  userFavoriteSongsId?: string | null,
  playListSongsId?: string | null,
  countrySongsId?: string | null,
};

export type ModelSongConditionInput = {
  imageUri?: ModelStringInput | null,
  title?: ModelStringInput | null,
  songUri?: ModelStringInput | null,
  listened?: ModelIntInput | null,
  searchString?: ModelStringInput | null,
  lyrics?: ModelStringInput | null,
  averageScore?: ModelFloatInput | null,
  ratedTime?: ModelIntInput | null,
  and?: Array< ModelSongConditionInput | null > | null,
  or?: Array< ModelSongConditionInput | null > | null,
  not?: ModelSongConditionInput | null,
  songCategorySongsId?: ModelIDInput | null,
  albumSongsId?: ModelIDInput | null,
  artistSongsId?: ModelIDInput | null,
  userFavoriteSongsId?: ModelIDInput | null,
  playListSongsId?: ModelIDInput | null,
  countrySongsId?: ModelIDInput | null,
};

export type ModelFloatInput = {
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

export type UpdateSongInput = {
  id: string,
  imageUri?: string | null,
  title?: string | null,
  songUri?: string | null,
  listened?: number | null,
  searchString?: string | null,
  lyrics?: string | null,
  averageScore?: number | null,
  ratedTime?: number | null,
  songCategorySongsId?: string | null,
  albumSongsId?: string | null,
  artistSongsId?: string | null,
  userFavoriteSongsId?: string | null,
  playListSongsId?: string | null,
  countrySongsId?: string | null,
};

export type DeleteSongInput = {
  id: string,
};

export type CreateArtistInput = {
  id?: string | null,
  name: string,
  imageUri: string,
  description: string,
  searchString: string,
  albumArtistsId?: string | null,
  userFavoriteArtistsId?: string | null,
};

export type ModelArtistConditionInput = {
  name?: ModelStringInput | null,
  imageUri?: ModelStringInput | null,
  description?: ModelStringInput | null,
  searchString?: ModelStringInput | null,
  and?: Array< ModelArtistConditionInput | null > | null,
  or?: Array< ModelArtistConditionInput | null > | null,
  not?: ModelArtistConditionInput | null,
  albumArtistsId?: ModelIDInput | null,
  userFavoriteArtistsId?: ModelIDInput | null,
};

export type UpdateArtistInput = {
  id: string,
  name?: string | null,
  imageUri?: string | null,
  description?: string | null,
  searchString?: string | null,
  albumArtistsId?: string | null,
  userFavoriteArtistsId?: string | null,
};

export type DeleteArtistInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  avatarUri?: string | null,
  isChosenCategories: boolean,
  isAdmin: boolean,
};

export type ModelUserConditionInput = {
  avatarUri?: ModelStringInput | null,
  isChosenCategories?: ModelBooleanInput | null,
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
  isChosenCategories: boolean,
  isAdmin: boolean,
  playLists?: ModelPlayListConnection | null,
  favoriteCategories?: ModelSongCategoryConnection | null,
  favoriteSongs?: ModelSongConnection | null,
  favoriteAlbums?: ModelAlbumConnection | null,
  favoriteArtists?: ModelArtistConnection | null,
  favoriteCountries?: ModelCountryConnection | null,
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
  imageUri: string,
  songs?: ModelSongConnection | null,
  createdBy?: User | null,
  createdAt: string,
  updatedAt: string,
  userPlayListsId?: string | null,
};

export type ModelCountryConnection = {
  __typename: "ModelCountryConnection",
  items:  Array<Country | null >,
  nextToken?: string | null,
};

export type UpdateUserInput = {
  id: string,
  avatarUri?: string | null,
  isChosenCategories?: boolean | null,
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

export type CreateCountryInput = {
  id?: string | null,
  name: string,
  imageUri: string,
  userFavoriteCountriesId?: string | null,
};

export type ModelCountryConditionInput = {
  name?: ModelStringInput | null,
  imageUri?: ModelStringInput | null,
  and?: Array< ModelCountryConditionInput | null > | null,
  or?: Array< ModelCountryConditionInput | null > | null,
  not?: ModelCountryConditionInput | null,
  userFavoriteCountriesId?: ModelIDInput | null,
};

export type UpdateCountryInput = {
  id: string,
  name?: string | null,
  imageUri?: string | null,
  userFavoriteCountriesId?: string | null,
};

export type DeleteCountryInput = {
  id: string,
};

export type ModelSongCategoryFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  imageUri?: ModelStringInput | null,
  and?: Array< ModelSongCategoryFilterInput | null > | null,
  or?: Array< ModelSongCategoryFilterInput | null > | null,
  not?: ModelSongCategoryFilterInput | null,
  albumIncludedSongCategoriesId?: ModelIDInput | null,
  userFavoriteCategoriesId?: ModelIDInput | null,
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
  artistAlbumsId?: ModelIDInput | null,
  userFavoriteAlbumsId?: ModelIDInput | null,
};

export type ModelSongFilterInput = {
  id?: ModelIDInput | null,
  imageUri?: ModelStringInput | null,
  title?: ModelStringInput | null,
  songUri?: ModelStringInput | null,
  listened?: ModelIntInput | null,
  searchString?: ModelStringInput | null,
  lyrics?: ModelStringInput | null,
  averageScore?: ModelFloatInput | null,
  ratedTime?: ModelIntInput | null,
  and?: Array< ModelSongFilterInput | null > | null,
  or?: Array< ModelSongFilterInput | null > | null,
  not?: ModelSongFilterInput | null,
  songCategorySongsId?: ModelIDInput | null,
  albumSongsId?: ModelIDInput | null,
  artistSongsId?: ModelIDInput | null,
  userFavoriteSongsId?: ModelIDInput | null,
  playListSongsId?: ModelIDInput | null,
  countrySongsId?: ModelIDInput | null,
};

export type ModelArtistFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  imageUri?: ModelStringInput | null,
  description?: ModelStringInput | null,
  searchString?: ModelStringInput | null,
  and?: Array< ModelArtistFilterInput | null > | null,
  or?: Array< ModelArtistFilterInput | null > | null,
  not?: ModelArtistFilterInput | null,
  albumArtistsId?: ModelIDInput | null,
  userFavoriteArtistsId?: ModelIDInput | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  avatarUri?: ModelStringInput | null,
  isChosenCategories?: ModelBooleanInput | null,
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

export type ModelCountryFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  imageUri?: ModelStringInput | null,
  and?: Array< ModelCountryFilterInput | null > | null,
  or?: Array< ModelCountryFilterInput | null > | null,
  not?: ModelCountryFilterInput | null,
  userFavoriteCountriesId?: ModelIDInput | null,
};

export type ModelSubscriptionSongCategoryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  imageUri?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSongCategoryFilterInput | null > | null,
  or?: Array< ModelSubscriptionSongCategoryFilterInput | null > | null,
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

export type ModelSubscriptionAlbumCategoryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAlbumCategoryFilterInput | null > | null,
  or?: Array< ModelSubscriptionAlbumCategoryFilterInput | null > | null,
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
  listened?: ModelSubscriptionIntInput | null,
  searchString?: ModelSubscriptionStringInput | null,
  lyrics?: ModelSubscriptionStringInput | null,
  averageScore?: ModelSubscriptionFloatInput | null,
  ratedTime?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionSongFilterInput | null > | null,
  or?: Array< ModelSubscriptionSongFilterInput | null > | null,
};

export type ModelSubscriptionFloatInput = {
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

export type ModelSubscriptionArtistFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  imageUri?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  searchString?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionArtistFilterInput | null > | null,
  or?: Array< ModelSubscriptionArtistFilterInput | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  avatarUri?: ModelSubscriptionStringInput | null,
  isChosenCategories?: ModelSubscriptionBooleanInput | null,
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

export type ModelSubscriptionCountryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  imageUri?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCountryFilterInput | null > | null,
  or?: Array< ModelSubscriptionCountryFilterInput | null > | null,
};

export type CreateSongCategoryMutationVariables = {
  input: CreateSongCategoryInput,
  condition?: ModelSongCategoryConditionInput | null,
};

export type CreateSongCategoryMutation = {
  createSongCategory?:  {
    __typename: "SongCategory",
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
        listened?: number | null,
        searchString?: string | null,
        lyrics?: string | null,
        averageScore?: number | null,
        ratedTime?: number | null,
        createdAt: string,
        updatedAt: string,
        songCategorySongsId?: string | null,
        albumSongsId?: string | null,
        artistSongsId?: string | null,
        userFavoriteSongsId?: string | null,
        playListSongsId?: string | null,
        countrySongsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    imageUri?: string | null,
    createdAt: string,
    updatedAt: string,
    albumIncludedSongCategoriesId?: string | null,
    userFavoriteCategoriesId?: string | null,
  } | null,
};

export type UpdateSongCategoryMutationVariables = {
  input: UpdateSongCategoryInput,
  condition?: ModelSongCategoryConditionInput | null,
};

export type UpdateSongCategoryMutation = {
  updateSongCategory?:  {
    __typename: "SongCategory",
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
        listened?: number | null,
        searchString?: string | null,
        lyrics?: string | null,
        averageScore?: number | null,
        ratedTime?: number | null,
        createdAt: string,
        updatedAt: string,
        songCategorySongsId?: string | null,
        albumSongsId?: string | null,
        artistSongsId?: string | null,
        userFavoriteSongsId?: string | null,
        playListSongsId?: string | null,
        countrySongsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    imageUri?: string | null,
    createdAt: string,
    updatedAt: string,
    albumIncludedSongCategoriesId?: string | null,
    userFavoriteCategoriesId?: string | null,
  } | null,
};

export type DeleteSongCategoryMutationVariables = {
  input: DeleteSongCategoryInput,
  condition?: ModelSongCategoryConditionInput | null,
};

export type DeleteSongCategoryMutation = {
  deleteSongCategory?:  {
    __typename: "SongCategory",
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
        listened?: number | null,
        searchString?: string | null,
        lyrics?: string | null,
        averageScore?: number | null,
        ratedTime?: number | null,
        createdAt: string,
        updatedAt: string,
        songCategorySongsId?: string | null,
        albumSongsId?: string | null,
        artistSongsId?: string | null,
        userFavoriteSongsId?: string | null,
        playListSongsId?: string | null,
        countrySongsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    imageUri?: string | null,
    createdAt: string,
    updatedAt: string,
    albumIncludedSongCategoriesId?: string | null,
    userFavoriteCategoriesId?: string | null,
  } | null,
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
        artistAlbumsId?: string | null,
        userFavoriteAlbumsId?: string | null,
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
        artistAlbumsId?: string | null,
        userFavoriteAlbumsId?: string | null,
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
        artistAlbumsId?: string | null,
        userFavoriteAlbumsId?: string | null,
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
        listened?: number | null,
        searchString?: string | null,
        lyrics?: string | null,
        averageScore?: number | null,
        ratedTime?: number | null,
        createdAt: string,
        updatedAt: string,
        songCategorySongsId?: string | null,
        albumSongsId?: string | null,
        artistSongsId?: string | null,
        userFavoriteSongsId?: string | null,
        playListSongsId?: string | null,
        countrySongsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    artists?:  {
      __typename: "ModelArtistConnection",
      items:  Array< {
        __typename: "Artist",
        id: string,
        name: string,
        imageUri: string,
        description: string,
        searchString: string,
        createdAt: string,
        updatedAt: string,
        albumArtistsId?: string | null,
        userFavoriteArtistsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    includedSongCategories?:  {
      __typename: "ModelSongCategoryConnection",
      items:  Array< {
        __typename: "SongCategory",
        id: string,
        name: string,
        imageUri?: string | null,
        createdAt: string,
        updatedAt: string,
        albumIncludedSongCategoriesId?: string | null,
        userFavoriteCategoriesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    albumCategoryAlbumsId?: string | null,
    songAlbumsId?: string | null,
    artistAlbumsId?: string | null,
    userFavoriteAlbumsId?: string | null,
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
        listened?: number | null,
        searchString?: string | null,
        lyrics?: string | null,
        averageScore?: number | null,
        ratedTime?: number | null,
        createdAt: string,
        updatedAt: string,
        songCategorySongsId?: string | null,
        albumSongsId?: string | null,
        artistSongsId?: string | null,
        userFavoriteSongsId?: string | null,
        playListSongsId?: string | null,
        countrySongsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    artists?:  {
      __typename: "ModelArtistConnection",
      items:  Array< {
        __typename: "Artist",
        id: string,
        name: string,
        imageUri: string,
        description: string,
        searchString: string,
        createdAt: string,
        updatedAt: string,
        albumArtistsId?: string | null,
        userFavoriteArtistsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    includedSongCategories?:  {
      __typename: "ModelSongCategoryConnection",
      items:  Array< {
        __typename: "SongCategory",
        id: string,
        name: string,
        imageUri?: string | null,
        createdAt: string,
        updatedAt: string,
        albumIncludedSongCategoriesId?: string | null,
        userFavoriteCategoriesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    albumCategoryAlbumsId?: string | null,
    songAlbumsId?: string | null,
    artistAlbumsId?: string | null,
    userFavoriteAlbumsId?: string | null,
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
        listened?: number | null,
        searchString?: string | null,
        lyrics?: string | null,
        averageScore?: number | null,
        ratedTime?: number | null,
        createdAt: string,
        updatedAt: string,
        songCategorySongsId?: string | null,
        albumSongsId?: string | null,
        artistSongsId?: string | null,
        userFavoriteSongsId?: string | null,
        playListSongsId?: string | null,
        countrySongsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    artists?:  {
      __typename: "ModelArtistConnection",
      items:  Array< {
        __typename: "Artist",
        id: string,
        name: string,
        imageUri: string,
        description: string,
        searchString: string,
        createdAt: string,
        updatedAt: string,
        albumArtistsId?: string | null,
        userFavoriteArtistsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    includedSongCategories?:  {
      __typename: "ModelSongCategoryConnection",
      items:  Array< {
        __typename: "SongCategory",
        id: string,
        name: string,
        imageUri?: string | null,
        createdAt: string,
        updatedAt: string,
        albumIncludedSongCategoriesId?: string | null,
        userFavoriteCategoriesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    albumCategoryAlbumsId?: string | null,
    songAlbumsId?: string | null,
    artistAlbumsId?: string | null,
    userFavoriteAlbumsId?: string | null,
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
    listened?: number | null,
    searchString?: string | null,
    lyrics?: string | null,
    averageScore?: number | null,
    ratedTime?: number | null,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      imageUri: string,
      description: string,
      searchString: string,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      albums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      albumArtistsId?: string | null,
      userFavoriteArtistsId?: string | null,
    } | null,
    category?:  {
      __typename: "SongCategory",
      id: string,
      name: string,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      imageUri?: string | null,
      createdAt: string,
      updatedAt: string,
      albumIncludedSongCategoriesId?: string | null,
      userFavoriteCategoriesId?: string | null,
    } | null,
    country?:  {
      __typename: "Country",
      id: string,
      name: string,
      imageUri: string,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userFavoriteCountriesId?: string | null,
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
        artistAlbumsId?: string | null,
        userFavoriteAlbumsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    songCategorySongsId?: string | null,
    albumSongsId?: string | null,
    artistSongsId?: string | null,
    userFavoriteSongsId?: string | null,
    playListSongsId?: string | null,
    countrySongsId?: string | null,
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
    listened?: number | null,
    searchString?: string | null,
    lyrics?: string | null,
    averageScore?: number | null,
    ratedTime?: number | null,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      imageUri: string,
      description: string,
      searchString: string,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      albums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      albumArtistsId?: string | null,
      userFavoriteArtistsId?: string | null,
    } | null,
    category?:  {
      __typename: "SongCategory",
      id: string,
      name: string,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      imageUri?: string | null,
      createdAt: string,
      updatedAt: string,
      albumIncludedSongCategoriesId?: string | null,
      userFavoriteCategoriesId?: string | null,
    } | null,
    country?:  {
      __typename: "Country",
      id: string,
      name: string,
      imageUri: string,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userFavoriteCountriesId?: string | null,
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
        artistAlbumsId?: string | null,
        userFavoriteAlbumsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    songCategorySongsId?: string | null,
    albumSongsId?: string | null,
    artistSongsId?: string | null,
    userFavoriteSongsId?: string | null,
    playListSongsId?: string | null,
    countrySongsId?: string | null,
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
    listened?: number | null,
    searchString?: string | null,
    lyrics?: string | null,
    averageScore?: number | null,
    ratedTime?: number | null,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      imageUri: string,
      description: string,
      searchString: string,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      albums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      albumArtistsId?: string | null,
      userFavoriteArtistsId?: string | null,
    } | null,
    category?:  {
      __typename: "SongCategory",
      id: string,
      name: string,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      imageUri?: string | null,
      createdAt: string,
      updatedAt: string,
      albumIncludedSongCategoriesId?: string | null,
      userFavoriteCategoriesId?: string | null,
    } | null,
    country?:  {
      __typename: "Country",
      id: string,
      name: string,
      imageUri: string,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userFavoriteCountriesId?: string | null,
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
        artistAlbumsId?: string | null,
        userFavoriteAlbumsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    songCategorySongsId?: string | null,
    albumSongsId?: string | null,
    artistSongsId?: string | null,
    userFavoriteSongsId?: string | null,
    playListSongsId?: string | null,
    countrySongsId?: string | null,
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
    imageUri: string,
    description: string,
    searchString: string,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        imageUri: string,
        title: string,
        songUri: string,
        listened?: number | null,
        searchString?: string | null,
        lyrics?: string | null,
        averageScore?: number | null,
        ratedTime?: number | null,
        createdAt: string,
        updatedAt: string,
        songCategorySongsId?: string | null,
        albumSongsId?: string | null,
        artistSongsId?: string | null,
        userFavoriteSongsId?: string | null,
        playListSongsId?: string | null,
        countrySongsId?: string | null,
      } | null >,
      nextToken?: string | null,
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
        artistAlbumsId?: string | null,
        userFavoriteAlbumsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    albumArtistsId?: string | null,
    userFavoriteArtistsId?: string | null,
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
    imageUri: string,
    description: string,
    searchString: string,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        imageUri: string,
        title: string,
        songUri: string,
        listened?: number | null,
        searchString?: string | null,
        lyrics?: string | null,
        averageScore?: number | null,
        ratedTime?: number | null,
        createdAt: string,
        updatedAt: string,
        songCategorySongsId?: string | null,
        albumSongsId?: string | null,
        artistSongsId?: string | null,
        userFavoriteSongsId?: string | null,
        playListSongsId?: string | null,
        countrySongsId?: string | null,
      } | null >,
      nextToken?: string | null,
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
        artistAlbumsId?: string | null,
        userFavoriteAlbumsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    albumArtistsId?: string | null,
    userFavoriteArtistsId?: string | null,
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
    imageUri: string,
    description: string,
    searchString: string,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        imageUri: string,
        title: string,
        songUri: string,
        listened?: number | null,
        searchString?: string | null,
        lyrics?: string | null,
        averageScore?: number | null,
        ratedTime?: number | null,
        createdAt: string,
        updatedAt: string,
        songCategorySongsId?: string | null,
        albumSongsId?: string | null,
        artistSongsId?: string | null,
        userFavoriteSongsId?: string | null,
        playListSongsId?: string | null,
        countrySongsId?: string | null,
      } | null >,
      nextToken?: string | null,
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
        artistAlbumsId?: string | null,
        userFavoriteAlbumsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    albumArtistsId?: string | null,
    userFavoriteArtistsId?: string | null,
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
    isChosenCategories: boolean,
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
    favoriteCategories?:  {
      __typename: "ModelSongCategoryConnection",
      items:  Array< {
        __typename: "SongCategory",
        id: string,
        name: string,
        imageUri?: string | null,
        createdAt: string,
        updatedAt: string,
        albumIncludedSongCategoriesId?: string | null,
        userFavoriteCategoriesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    favoriteSongs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        imageUri: string,
        title: string,
        songUri: string,
        listened?: number | null,
        searchString?: string | null,
        lyrics?: string | null,
        averageScore?: number | null,
        ratedTime?: number | null,
        createdAt: string,
        updatedAt: string,
        songCategorySongsId?: string | null,
        albumSongsId?: string | null,
        artistSongsId?: string | null,
        userFavoriteSongsId?: string | null,
        playListSongsId?: string | null,
        countrySongsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    favoriteAlbums?:  {
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
        artistAlbumsId?: string | null,
        userFavoriteAlbumsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    favoriteArtists?:  {
      __typename: "ModelArtistConnection",
      items:  Array< {
        __typename: "Artist",
        id: string,
        name: string,
        imageUri: string,
        description: string,
        searchString: string,
        createdAt: string,
        updatedAt: string,
        albumArtistsId?: string | null,
        userFavoriteArtistsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    favoriteCountries?:  {
      __typename: "ModelCountryConnection",
      items:  Array< {
        __typename: "Country",
        id: string,
        name: string,
        imageUri: string,
        createdAt: string,
        updatedAt: string,
        userFavoriteCountriesId?: string | null,
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
    isChosenCategories: boolean,
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
    favoriteCategories?:  {
      __typename: "ModelSongCategoryConnection",
      items:  Array< {
        __typename: "SongCategory",
        id: string,
        name: string,
        imageUri?: string | null,
        createdAt: string,
        updatedAt: string,
        albumIncludedSongCategoriesId?: string | null,
        userFavoriteCategoriesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    favoriteSongs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        imageUri: string,
        title: string,
        songUri: string,
        listened?: number | null,
        searchString?: string | null,
        lyrics?: string | null,
        averageScore?: number | null,
        ratedTime?: number | null,
        createdAt: string,
        updatedAt: string,
        songCategorySongsId?: string | null,
        albumSongsId?: string | null,
        artistSongsId?: string | null,
        userFavoriteSongsId?: string | null,
        playListSongsId?: string | null,
        countrySongsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    favoriteAlbums?:  {
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
        artistAlbumsId?: string | null,
        userFavoriteAlbumsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    favoriteArtists?:  {
      __typename: "ModelArtistConnection",
      items:  Array< {
        __typename: "Artist",
        id: string,
        name: string,
        imageUri: string,
        description: string,
        searchString: string,
        createdAt: string,
        updatedAt: string,
        albumArtistsId?: string | null,
        userFavoriteArtistsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    favoriteCountries?:  {
      __typename: "ModelCountryConnection",
      items:  Array< {
        __typename: "Country",
        id: string,
        name: string,
        imageUri: string,
        createdAt: string,
        updatedAt: string,
        userFavoriteCountriesId?: string | null,
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
    isChosenCategories: boolean,
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
    favoriteCategories?:  {
      __typename: "ModelSongCategoryConnection",
      items:  Array< {
        __typename: "SongCategory",
        id: string,
        name: string,
        imageUri?: string | null,
        createdAt: string,
        updatedAt: string,
        albumIncludedSongCategoriesId?: string | null,
        userFavoriteCategoriesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    favoriteSongs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        imageUri: string,
        title: string,
        songUri: string,
        listened?: number | null,
        searchString?: string | null,
        lyrics?: string | null,
        averageScore?: number | null,
        ratedTime?: number | null,
        createdAt: string,
        updatedAt: string,
        songCategorySongsId?: string | null,
        albumSongsId?: string | null,
        artistSongsId?: string | null,
        userFavoriteSongsId?: string | null,
        playListSongsId?: string | null,
        countrySongsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    favoriteAlbums?:  {
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
        artistAlbumsId?: string | null,
        userFavoriteAlbumsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    favoriteArtists?:  {
      __typename: "ModelArtistConnection",
      items:  Array< {
        __typename: "Artist",
        id: string,
        name: string,
        imageUri: string,
        description: string,
        searchString: string,
        createdAt: string,
        updatedAt: string,
        albumArtistsId?: string | null,
        userFavoriteArtistsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    favoriteCountries?:  {
      __typename: "ModelCountryConnection",
      items:  Array< {
        __typename: "Country",
        id: string,
        name: string,
        imageUri: string,
        createdAt: string,
        updatedAt: string,
        userFavoriteCountriesId?: string | null,
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
    imageUri: string,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        imageUri: string,
        title: string,
        songUri: string,
        listened?: number | null,
        searchString?: string | null,
        lyrics?: string | null,
        averageScore?: number | null,
        ratedTime?: number | null,
        createdAt: string,
        updatedAt: string,
        songCategorySongsId?: string | null,
        albumSongsId?: string | null,
        artistSongsId?: string | null,
        userFavoriteSongsId?: string | null,
        playListSongsId?: string | null,
        countrySongsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdBy?:  {
      __typename: "User",
      id: string,
      avatarUri?: string | null,
      isChosenCategories: boolean,
      isAdmin: boolean,
      playLists?:  {
        __typename: "ModelPlayListConnection",
        nextToken?: string | null,
      } | null,
      favoriteCategories?:  {
        __typename: "ModelSongCategoryConnection",
        nextToken?: string | null,
      } | null,
      favoriteSongs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      favoriteAlbums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
      } | null,
      favoriteArtists?:  {
        __typename: "ModelArtistConnection",
        nextToken?: string | null,
      } | null,
      favoriteCountries?:  {
        __typename: "ModelCountryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
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
    imageUri: string,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        imageUri: string,
        title: string,
        songUri: string,
        listened?: number | null,
        searchString?: string | null,
        lyrics?: string | null,
        averageScore?: number | null,
        ratedTime?: number | null,
        createdAt: string,
        updatedAt: string,
        songCategorySongsId?: string | null,
        albumSongsId?: string | null,
        artistSongsId?: string | null,
        userFavoriteSongsId?: string | null,
        playListSongsId?: string | null,
        countrySongsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdBy?:  {
      __typename: "User",
      id: string,
      avatarUri?: string | null,
      isChosenCategories: boolean,
      isAdmin: boolean,
      playLists?:  {
        __typename: "ModelPlayListConnection",
        nextToken?: string | null,
      } | null,
      favoriteCategories?:  {
        __typename: "ModelSongCategoryConnection",
        nextToken?: string | null,
      } | null,
      favoriteSongs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      favoriteAlbums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
      } | null,
      favoriteArtists?:  {
        __typename: "ModelArtistConnection",
        nextToken?: string | null,
      } | null,
      favoriteCountries?:  {
        __typename: "ModelCountryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
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
    imageUri: string,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        imageUri: string,
        title: string,
        songUri: string,
        listened?: number | null,
        searchString?: string | null,
        lyrics?: string | null,
        averageScore?: number | null,
        ratedTime?: number | null,
        createdAt: string,
        updatedAt: string,
        songCategorySongsId?: string | null,
        albumSongsId?: string | null,
        artistSongsId?: string | null,
        userFavoriteSongsId?: string | null,
        playListSongsId?: string | null,
        countrySongsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdBy?:  {
      __typename: "User",
      id: string,
      avatarUri?: string | null,
      isChosenCategories: boolean,
      isAdmin: boolean,
      playLists?:  {
        __typename: "ModelPlayListConnection",
        nextToken?: string | null,
      } | null,
      favoriteCategories?:  {
        __typename: "ModelSongCategoryConnection",
        nextToken?: string | null,
      } | null,
      favoriteSongs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      favoriteAlbums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
      } | null,
      favoriteArtists?:  {
        __typename: "ModelArtistConnection",
        nextToken?: string | null,
      } | null,
      favoriteCountries?:  {
        __typename: "ModelCountryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userPlayListsId?: string | null,
  } | null,
};

export type CreateCountryMutationVariables = {
  input: CreateCountryInput,
  condition?: ModelCountryConditionInput | null,
};

export type CreateCountryMutation = {
  createCountry?:  {
    __typename: "Country",
    id: string,
    name: string,
    imageUri: string,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        imageUri: string,
        title: string,
        songUri: string,
        listened?: number | null,
        searchString?: string | null,
        lyrics?: string | null,
        averageScore?: number | null,
        ratedTime?: number | null,
        createdAt: string,
        updatedAt: string,
        songCategorySongsId?: string | null,
        albumSongsId?: string | null,
        artistSongsId?: string | null,
        userFavoriteSongsId?: string | null,
        playListSongsId?: string | null,
        countrySongsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userFavoriteCountriesId?: string | null,
  } | null,
};

export type UpdateCountryMutationVariables = {
  input: UpdateCountryInput,
  condition?: ModelCountryConditionInput | null,
};

export type UpdateCountryMutation = {
  updateCountry?:  {
    __typename: "Country",
    id: string,
    name: string,
    imageUri: string,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        imageUri: string,
        title: string,
        songUri: string,
        listened?: number | null,
        searchString?: string | null,
        lyrics?: string | null,
        averageScore?: number | null,
        ratedTime?: number | null,
        createdAt: string,
        updatedAt: string,
        songCategorySongsId?: string | null,
        albumSongsId?: string | null,
        artistSongsId?: string | null,
        userFavoriteSongsId?: string | null,
        playListSongsId?: string | null,
        countrySongsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userFavoriteCountriesId?: string | null,
  } | null,
};

export type DeleteCountryMutationVariables = {
  input: DeleteCountryInput,
  condition?: ModelCountryConditionInput | null,
};

export type DeleteCountryMutation = {
  deleteCountry?:  {
    __typename: "Country",
    id: string,
    name: string,
    imageUri: string,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        imageUri: string,
        title: string,
        songUri: string,
        listened?: number | null,
        searchString?: string | null,
        lyrics?: string | null,
        averageScore?: number | null,
        ratedTime?: number | null,
        createdAt: string,
        updatedAt: string,
        songCategorySongsId?: string | null,
        albumSongsId?: string | null,
        artistSongsId?: string | null,
        userFavoriteSongsId?: string | null,
        playListSongsId?: string | null,
        countrySongsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userFavoriteCountriesId?: string | null,
  } | null,
};

export type GetSongCategoryQueryVariables = {
  id: string,
};

export type GetSongCategoryQuery = {
  getSongCategory?:  {
    __typename: "SongCategory",
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
        listened?: number | null,
        searchString?: string | null,
        lyrics?: string | null,
        averageScore?: number | null,
        ratedTime?: number | null,
        createdAt: string,
        updatedAt: string,
        songCategorySongsId?: string | null,
        albumSongsId?: string | null,
        artistSongsId?: string | null,
        userFavoriteSongsId?: string | null,
        playListSongsId?: string | null,
        countrySongsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    imageUri?: string | null,
    createdAt: string,
    updatedAt: string,
    albumIncludedSongCategoriesId?: string | null,
    userFavoriteCategoriesId?: string | null,
  } | null,
};

export type ListSongCategoriesQueryVariables = {
  filter?: ModelSongCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSongCategoriesQuery = {
  listSongCategories?:  {
    __typename: "ModelSongCategoryConnection",
    items:  Array< {
      __typename: "SongCategory",
      id: string,
      name: string,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      imageUri?: string | null,
      createdAt: string,
      updatedAt: string,
      albumIncludedSongCategoriesId?: string | null,
      userFavoriteCategoriesId?: string | null,
    } | null >,
    nextToken?: string | null,
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
        artistAlbumsId?: string | null,
        userFavoriteAlbumsId?: string | null,
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
        listened?: number | null,
        searchString?: string | null,
        lyrics?: string | null,
        averageScore?: number | null,
        ratedTime?: number | null,
        createdAt: string,
        updatedAt: string,
        songCategorySongsId?: string | null,
        albumSongsId?: string | null,
        artistSongsId?: string | null,
        userFavoriteSongsId?: string | null,
        playListSongsId?: string | null,
        countrySongsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    artists?:  {
      __typename: "ModelArtistConnection",
      items:  Array< {
        __typename: "Artist",
        id: string,
        name: string,
        imageUri: string,
        description: string,
        searchString: string,
        createdAt: string,
        updatedAt: string,
        albumArtistsId?: string | null,
        userFavoriteArtistsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    includedSongCategories?:  {
      __typename: "ModelSongCategoryConnection",
      items:  Array< {
        __typename: "SongCategory",
        id: string,
        name: string,
        imageUri?: string | null,
        createdAt: string,
        updatedAt: string,
        albumIncludedSongCategoriesId?: string | null,
        userFavoriteCategoriesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    albumCategoryAlbumsId?: string | null,
    songAlbumsId?: string | null,
    artistAlbumsId?: string | null,
    userFavoriteAlbumsId?: string | null,
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
      artists?:  {
        __typename: "ModelArtistConnection",
        nextToken?: string | null,
      } | null,
      includedSongCategories?:  {
        __typename: "ModelSongCategoryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      albumCategoryAlbumsId?: string | null,
      songAlbumsId?: string | null,
      artistAlbumsId?: string | null,
      userFavoriteAlbumsId?: string | null,
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
    listened?: number | null,
    searchString?: string | null,
    lyrics?: string | null,
    averageScore?: number | null,
    ratedTime?: number | null,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      imageUri: string,
      description: string,
      searchString: string,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      albums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      albumArtistsId?: string | null,
      userFavoriteArtistsId?: string | null,
    } | null,
    category?:  {
      __typename: "SongCategory",
      id: string,
      name: string,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      imageUri?: string | null,
      createdAt: string,
      updatedAt: string,
      albumIncludedSongCategoriesId?: string | null,
      userFavoriteCategoriesId?: string | null,
    } | null,
    country?:  {
      __typename: "Country",
      id: string,
      name: string,
      imageUri: string,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userFavoriteCountriesId?: string | null,
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
        artistAlbumsId?: string | null,
        userFavoriteAlbumsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    songCategorySongsId?: string | null,
    albumSongsId?: string | null,
    artistSongsId?: string | null,
    userFavoriteSongsId?: string | null,
    playListSongsId?: string | null,
    countrySongsId?: string | null,
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
      listened?: number | null,
      searchString?: string | null,
      lyrics?: string | null,
      averageScore?: number | null,
      ratedTime?: number | null,
      artist?:  {
        __typename: "Artist",
        id: string,
        name: string,
        imageUri: string,
        description: string,
        searchString: string,
        createdAt: string,
        updatedAt: string,
        albumArtistsId?: string | null,
        userFavoriteArtistsId?: string | null,
      } | null,
      category?:  {
        __typename: "SongCategory",
        id: string,
        name: string,
        imageUri?: string | null,
        createdAt: string,
        updatedAt: string,
        albumIncludedSongCategoriesId?: string | null,
        userFavoriteCategoriesId?: string | null,
      } | null,
      country?:  {
        __typename: "Country",
        id: string,
        name: string,
        imageUri: string,
        createdAt: string,
        updatedAt: string,
        userFavoriteCountriesId?: string | null,
      } | null,
      albums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      songCategorySongsId?: string | null,
      albumSongsId?: string | null,
      artistSongsId?: string | null,
      userFavoriteSongsId?: string | null,
      playListSongsId?: string | null,
      countrySongsId?: string | null,
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
    imageUri: string,
    description: string,
    searchString: string,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        imageUri: string,
        title: string,
        songUri: string,
        listened?: number | null,
        searchString?: string | null,
        lyrics?: string | null,
        averageScore?: number | null,
        ratedTime?: number | null,
        createdAt: string,
        updatedAt: string,
        songCategorySongsId?: string | null,
        albumSongsId?: string | null,
        artistSongsId?: string | null,
        userFavoriteSongsId?: string | null,
        playListSongsId?: string | null,
        countrySongsId?: string | null,
      } | null >,
      nextToken?: string | null,
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
        artistAlbumsId?: string | null,
        userFavoriteAlbumsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    albumArtistsId?: string | null,
    userFavoriteArtistsId?: string | null,
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
      imageUri: string,
      description: string,
      searchString: string,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      albums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      albumArtistsId?: string | null,
      userFavoriteArtistsId?: string | null,
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
    isChosenCategories: boolean,
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
    favoriteCategories?:  {
      __typename: "ModelSongCategoryConnection",
      items:  Array< {
        __typename: "SongCategory",
        id: string,
        name: string,
        imageUri?: string | null,
        createdAt: string,
        updatedAt: string,
        albumIncludedSongCategoriesId?: string | null,
        userFavoriteCategoriesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    favoriteSongs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        imageUri: string,
        title: string,
        songUri: string,
        listened?: number | null,
        searchString?: string | null,
        lyrics?: string | null,
        averageScore?: number | null,
        ratedTime?: number | null,
        createdAt: string,
        updatedAt: string,
        songCategorySongsId?: string | null,
        albumSongsId?: string | null,
        artistSongsId?: string | null,
        userFavoriteSongsId?: string | null,
        playListSongsId?: string | null,
        countrySongsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    favoriteAlbums?:  {
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
        artistAlbumsId?: string | null,
        userFavoriteAlbumsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    favoriteArtists?:  {
      __typename: "ModelArtistConnection",
      items:  Array< {
        __typename: "Artist",
        id: string,
        name: string,
        imageUri: string,
        description: string,
        searchString: string,
        createdAt: string,
        updatedAt: string,
        albumArtistsId?: string | null,
        userFavoriteArtistsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    favoriteCountries?:  {
      __typename: "ModelCountryConnection",
      items:  Array< {
        __typename: "Country",
        id: string,
        name: string,
        imageUri: string,
        createdAt: string,
        updatedAt: string,
        userFavoriteCountriesId?: string | null,
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
      isChosenCategories: boolean,
      isAdmin: boolean,
      playLists?:  {
        __typename: "ModelPlayListConnection",
        nextToken?: string | null,
      } | null,
      favoriteCategories?:  {
        __typename: "ModelSongCategoryConnection",
        nextToken?: string | null,
      } | null,
      favoriteSongs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      favoriteAlbums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
      } | null,
      favoriteArtists?:  {
        __typename: "ModelArtistConnection",
        nextToken?: string | null,
      } | null,
      favoriteCountries?:  {
        __typename: "ModelCountryConnection",
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
    imageUri: string,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        imageUri: string,
        title: string,
        songUri: string,
        listened?: number | null,
        searchString?: string | null,
        lyrics?: string | null,
        averageScore?: number | null,
        ratedTime?: number | null,
        createdAt: string,
        updatedAt: string,
        songCategorySongsId?: string | null,
        albumSongsId?: string | null,
        artistSongsId?: string | null,
        userFavoriteSongsId?: string | null,
        playListSongsId?: string | null,
        countrySongsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdBy?:  {
      __typename: "User",
      id: string,
      avatarUri?: string | null,
      isChosenCategories: boolean,
      isAdmin: boolean,
      playLists?:  {
        __typename: "ModelPlayListConnection",
        nextToken?: string | null,
      } | null,
      favoriteCategories?:  {
        __typename: "ModelSongCategoryConnection",
        nextToken?: string | null,
      } | null,
      favoriteSongs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      favoriteAlbums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
      } | null,
      favoriteArtists?:  {
        __typename: "ModelArtistConnection",
        nextToken?: string | null,
      } | null,
      favoriteCountries?:  {
        __typename: "ModelCountryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
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
      imageUri: string,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      createdBy?:  {
        __typename: "User",
        id: string,
        avatarUri?: string | null,
        isChosenCategories: boolean,
        isAdmin: boolean,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      userPlayListsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCountryQueryVariables = {
  id: string,
};

export type GetCountryQuery = {
  getCountry?:  {
    __typename: "Country",
    id: string,
    name: string,
    imageUri: string,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        imageUri: string,
        title: string,
        songUri: string,
        listened?: number | null,
        searchString?: string | null,
        lyrics?: string | null,
        averageScore?: number | null,
        ratedTime?: number | null,
        createdAt: string,
        updatedAt: string,
        songCategorySongsId?: string | null,
        albumSongsId?: string | null,
        artistSongsId?: string | null,
        userFavoriteSongsId?: string | null,
        playListSongsId?: string | null,
        countrySongsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userFavoriteCountriesId?: string | null,
  } | null,
};

export type ListCountriesQueryVariables = {
  filter?: ModelCountryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCountriesQuery = {
  listCountries?:  {
    __typename: "ModelCountryConnection",
    items:  Array< {
      __typename: "Country",
      id: string,
      name: string,
      imageUri: string,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userFavoriteCountriesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateSongCategorySubscriptionVariables = {
  filter?: ModelSubscriptionSongCategoryFilterInput | null,
};

export type OnCreateSongCategorySubscription = {
  onCreateSongCategory?:  {
    __typename: "SongCategory",
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
        listened?: number | null,
        searchString?: string | null,
        lyrics?: string | null,
        averageScore?: number | null,
        ratedTime?: number | null,
        createdAt: string,
        updatedAt: string,
        songCategorySongsId?: string | null,
        albumSongsId?: string | null,
        artistSongsId?: string | null,
        userFavoriteSongsId?: string | null,
        playListSongsId?: string | null,
        countrySongsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    imageUri?: string | null,
    createdAt: string,
    updatedAt: string,
    albumIncludedSongCategoriesId?: string | null,
    userFavoriteCategoriesId?: string | null,
  } | null,
};

export type OnUpdateSongCategorySubscriptionVariables = {
  filter?: ModelSubscriptionSongCategoryFilterInput | null,
};

export type OnUpdateSongCategorySubscription = {
  onUpdateSongCategory?:  {
    __typename: "SongCategory",
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
        listened?: number | null,
        searchString?: string | null,
        lyrics?: string | null,
        averageScore?: number | null,
        ratedTime?: number | null,
        createdAt: string,
        updatedAt: string,
        songCategorySongsId?: string | null,
        albumSongsId?: string | null,
        artistSongsId?: string | null,
        userFavoriteSongsId?: string | null,
        playListSongsId?: string | null,
        countrySongsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    imageUri?: string | null,
    createdAt: string,
    updatedAt: string,
    albumIncludedSongCategoriesId?: string | null,
    userFavoriteCategoriesId?: string | null,
  } | null,
};

export type OnDeleteSongCategorySubscriptionVariables = {
  filter?: ModelSubscriptionSongCategoryFilterInput | null,
};

export type OnDeleteSongCategorySubscription = {
  onDeleteSongCategory?:  {
    __typename: "SongCategory",
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
        listened?: number | null,
        searchString?: string | null,
        lyrics?: string | null,
        averageScore?: number | null,
        ratedTime?: number | null,
        createdAt: string,
        updatedAt: string,
        songCategorySongsId?: string | null,
        albumSongsId?: string | null,
        artistSongsId?: string | null,
        userFavoriteSongsId?: string | null,
        playListSongsId?: string | null,
        countrySongsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    imageUri?: string | null,
    createdAt: string,
    updatedAt: string,
    albumIncludedSongCategoriesId?: string | null,
    userFavoriteCategoriesId?: string | null,
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
        artistAlbumsId?: string | null,
        userFavoriteAlbumsId?: string | null,
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
        artistAlbumsId?: string | null,
        userFavoriteAlbumsId?: string | null,
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
        artistAlbumsId?: string | null,
        userFavoriteAlbumsId?: string | null,
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
        listened?: number | null,
        searchString?: string | null,
        lyrics?: string | null,
        averageScore?: number | null,
        ratedTime?: number | null,
        createdAt: string,
        updatedAt: string,
        songCategorySongsId?: string | null,
        albumSongsId?: string | null,
        artistSongsId?: string | null,
        userFavoriteSongsId?: string | null,
        playListSongsId?: string | null,
        countrySongsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    artists?:  {
      __typename: "ModelArtistConnection",
      items:  Array< {
        __typename: "Artist",
        id: string,
        name: string,
        imageUri: string,
        description: string,
        searchString: string,
        createdAt: string,
        updatedAt: string,
        albumArtistsId?: string | null,
        userFavoriteArtistsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    includedSongCategories?:  {
      __typename: "ModelSongCategoryConnection",
      items:  Array< {
        __typename: "SongCategory",
        id: string,
        name: string,
        imageUri?: string | null,
        createdAt: string,
        updatedAt: string,
        albumIncludedSongCategoriesId?: string | null,
        userFavoriteCategoriesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    albumCategoryAlbumsId?: string | null,
    songAlbumsId?: string | null,
    artistAlbumsId?: string | null,
    userFavoriteAlbumsId?: string | null,
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
        listened?: number | null,
        searchString?: string | null,
        lyrics?: string | null,
        averageScore?: number | null,
        ratedTime?: number | null,
        createdAt: string,
        updatedAt: string,
        songCategorySongsId?: string | null,
        albumSongsId?: string | null,
        artistSongsId?: string | null,
        userFavoriteSongsId?: string | null,
        playListSongsId?: string | null,
        countrySongsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    artists?:  {
      __typename: "ModelArtistConnection",
      items:  Array< {
        __typename: "Artist",
        id: string,
        name: string,
        imageUri: string,
        description: string,
        searchString: string,
        createdAt: string,
        updatedAt: string,
        albumArtistsId?: string | null,
        userFavoriteArtistsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    includedSongCategories?:  {
      __typename: "ModelSongCategoryConnection",
      items:  Array< {
        __typename: "SongCategory",
        id: string,
        name: string,
        imageUri?: string | null,
        createdAt: string,
        updatedAt: string,
        albumIncludedSongCategoriesId?: string | null,
        userFavoriteCategoriesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    albumCategoryAlbumsId?: string | null,
    songAlbumsId?: string | null,
    artistAlbumsId?: string | null,
    userFavoriteAlbumsId?: string | null,
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
        listened?: number | null,
        searchString?: string | null,
        lyrics?: string | null,
        averageScore?: number | null,
        ratedTime?: number | null,
        createdAt: string,
        updatedAt: string,
        songCategorySongsId?: string | null,
        albumSongsId?: string | null,
        artistSongsId?: string | null,
        userFavoriteSongsId?: string | null,
        playListSongsId?: string | null,
        countrySongsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    artists?:  {
      __typename: "ModelArtistConnection",
      items:  Array< {
        __typename: "Artist",
        id: string,
        name: string,
        imageUri: string,
        description: string,
        searchString: string,
        createdAt: string,
        updatedAt: string,
        albumArtistsId?: string | null,
        userFavoriteArtistsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    includedSongCategories?:  {
      __typename: "ModelSongCategoryConnection",
      items:  Array< {
        __typename: "SongCategory",
        id: string,
        name: string,
        imageUri?: string | null,
        createdAt: string,
        updatedAt: string,
        albumIncludedSongCategoriesId?: string | null,
        userFavoriteCategoriesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    albumCategoryAlbumsId?: string | null,
    songAlbumsId?: string | null,
    artistAlbumsId?: string | null,
    userFavoriteAlbumsId?: string | null,
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
    listened?: number | null,
    searchString?: string | null,
    lyrics?: string | null,
    averageScore?: number | null,
    ratedTime?: number | null,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      imageUri: string,
      description: string,
      searchString: string,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      albums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      albumArtistsId?: string | null,
      userFavoriteArtistsId?: string | null,
    } | null,
    category?:  {
      __typename: "SongCategory",
      id: string,
      name: string,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      imageUri?: string | null,
      createdAt: string,
      updatedAt: string,
      albumIncludedSongCategoriesId?: string | null,
      userFavoriteCategoriesId?: string | null,
    } | null,
    country?:  {
      __typename: "Country",
      id: string,
      name: string,
      imageUri: string,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userFavoriteCountriesId?: string | null,
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
        artistAlbumsId?: string | null,
        userFavoriteAlbumsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    songCategorySongsId?: string | null,
    albumSongsId?: string | null,
    artistSongsId?: string | null,
    userFavoriteSongsId?: string | null,
    playListSongsId?: string | null,
    countrySongsId?: string | null,
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
    listened?: number | null,
    searchString?: string | null,
    lyrics?: string | null,
    averageScore?: number | null,
    ratedTime?: number | null,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      imageUri: string,
      description: string,
      searchString: string,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      albums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      albumArtistsId?: string | null,
      userFavoriteArtistsId?: string | null,
    } | null,
    category?:  {
      __typename: "SongCategory",
      id: string,
      name: string,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      imageUri?: string | null,
      createdAt: string,
      updatedAt: string,
      albumIncludedSongCategoriesId?: string | null,
      userFavoriteCategoriesId?: string | null,
    } | null,
    country?:  {
      __typename: "Country",
      id: string,
      name: string,
      imageUri: string,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userFavoriteCountriesId?: string | null,
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
        artistAlbumsId?: string | null,
        userFavoriteAlbumsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    songCategorySongsId?: string | null,
    albumSongsId?: string | null,
    artistSongsId?: string | null,
    userFavoriteSongsId?: string | null,
    playListSongsId?: string | null,
    countrySongsId?: string | null,
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
    listened?: number | null,
    searchString?: string | null,
    lyrics?: string | null,
    averageScore?: number | null,
    ratedTime?: number | null,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      imageUri: string,
      description: string,
      searchString: string,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      albums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      albumArtistsId?: string | null,
      userFavoriteArtistsId?: string | null,
    } | null,
    category?:  {
      __typename: "SongCategory",
      id: string,
      name: string,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      imageUri?: string | null,
      createdAt: string,
      updatedAt: string,
      albumIncludedSongCategoriesId?: string | null,
      userFavoriteCategoriesId?: string | null,
    } | null,
    country?:  {
      __typename: "Country",
      id: string,
      name: string,
      imageUri: string,
      songs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userFavoriteCountriesId?: string | null,
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
        artistAlbumsId?: string | null,
        userFavoriteAlbumsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    songCategorySongsId?: string | null,
    albumSongsId?: string | null,
    artistSongsId?: string | null,
    userFavoriteSongsId?: string | null,
    playListSongsId?: string | null,
    countrySongsId?: string | null,
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
    imageUri: string,
    description: string,
    searchString: string,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        imageUri: string,
        title: string,
        songUri: string,
        listened?: number | null,
        searchString?: string | null,
        lyrics?: string | null,
        averageScore?: number | null,
        ratedTime?: number | null,
        createdAt: string,
        updatedAt: string,
        songCategorySongsId?: string | null,
        albumSongsId?: string | null,
        artistSongsId?: string | null,
        userFavoriteSongsId?: string | null,
        playListSongsId?: string | null,
        countrySongsId?: string | null,
      } | null >,
      nextToken?: string | null,
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
        artistAlbumsId?: string | null,
        userFavoriteAlbumsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    albumArtistsId?: string | null,
    userFavoriteArtistsId?: string | null,
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
    imageUri: string,
    description: string,
    searchString: string,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        imageUri: string,
        title: string,
        songUri: string,
        listened?: number | null,
        searchString?: string | null,
        lyrics?: string | null,
        averageScore?: number | null,
        ratedTime?: number | null,
        createdAt: string,
        updatedAt: string,
        songCategorySongsId?: string | null,
        albumSongsId?: string | null,
        artistSongsId?: string | null,
        userFavoriteSongsId?: string | null,
        playListSongsId?: string | null,
        countrySongsId?: string | null,
      } | null >,
      nextToken?: string | null,
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
        artistAlbumsId?: string | null,
        userFavoriteAlbumsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    albumArtistsId?: string | null,
    userFavoriteArtistsId?: string | null,
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
    imageUri: string,
    description: string,
    searchString: string,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        imageUri: string,
        title: string,
        songUri: string,
        listened?: number | null,
        searchString?: string | null,
        lyrics?: string | null,
        averageScore?: number | null,
        ratedTime?: number | null,
        createdAt: string,
        updatedAt: string,
        songCategorySongsId?: string | null,
        albumSongsId?: string | null,
        artistSongsId?: string | null,
        userFavoriteSongsId?: string | null,
        playListSongsId?: string | null,
        countrySongsId?: string | null,
      } | null >,
      nextToken?: string | null,
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
        artistAlbumsId?: string | null,
        userFavoriteAlbumsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    albumArtistsId?: string | null,
    userFavoriteArtistsId?: string | null,
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
    isChosenCategories: boolean,
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
    favoriteCategories?:  {
      __typename: "ModelSongCategoryConnection",
      items:  Array< {
        __typename: "SongCategory",
        id: string,
        name: string,
        imageUri?: string | null,
        createdAt: string,
        updatedAt: string,
        albumIncludedSongCategoriesId?: string | null,
        userFavoriteCategoriesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    favoriteSongs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        imageUri: string,
        title: string,
        songUri: string,
        listened?: number | null,
        searchString?: string | null,
        lyrics?: string | null,
        averageScore?: number | null,
        ratedTime?: number | null,
        createdAt: string,
        updatedAt: string,
        songCategorySongsId?: string | null,
        albumSongsId?: string | null,
        artistSongsId?: string | null,
        userFavoriteSongsId?: string | null,
        playListSongsId?: string | null,
        countrySongsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    favoriteAlbums?:  {
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
        artistAlbumsId?: string | null,
        userFavoriteAlbumsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    favoriteArtists?:  {
      __typename: "ModelArtistConnection",
      items:  Array< {
        __typename: "Artist",
        id: string,
        name: string,
        imageUri: string,
        description: string,
        searchString: string,
        createdAt: string,
        updatedAt: string,
        albumArtistsId?: string | null,
        userFavoriteArtistsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    favoriteCountries?:  {
      __typename: "ModelCountryConnection",
      items:  Array< {
        __typename: "Country",
        id: string,
        name: string,
        imageUri: string,
        createdAt: string,
        updatedAt: string,
        userFavoriteCountriesId?: string | null,
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
    isChosenCategories: boolean,
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
    favoriteCategories?:  {
      __typename: "ModelSongCategoryConnection",
      items:  Array< {
        __typename: "SongCategory",
        id: string,
        name: string,
        imageUri?: string | null,
        createdAt: string,
        updatedAt: string,
        albumIncludedSongCategoriesId?: string | null,
        userFavoriteCategoriesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    favoriteSongs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        imageUri: string,
        title: string,
        songUri: string,
        listened?: number | null,
        searchString?: string | null,
        lyrics?: string | null,
        averageScore?: number | null,
        ratedTime?: number | null,
        createdAt: string,
        updatedAt: string,
        songCategorySongsId?: string | null,
        albumSongsId?: string | null,
        artistSongsId?: string | null,
        userFavoriteSongsId?: string | null,
        playListSongsId?: string | null,
        countrySongsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    favoriteAlbums?:  {
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
        artistAlbumsId?: string | null,
        userFavoriteAlbumsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    favoriteArtists?:  {
      __typename: "ModelArtistConnection",
      items:  Array< {
        __typename: "Artist",
        id: string,
        name: string,
        imageUri: string,
        description: string,
        searchString: string,
        createdAt: string,
        updatedAt: string,
        albumArtistsId?: string | null,
        userFavoriteArtistsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    favoriteCountries?:  {
      __typename: "ModelCountryConnection",
      items:  Array< {
        __typename: "Country",
        id: string,
        name: string,
        imageUri: string,
        createdAt: string,
        updatedAt: string,
        userFavoriteCountriesId?: string | null,
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
    isChosenCategories: boolean,
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
    favoriteCategories?:  {
      __typename: "ModelSongCategoryConnection",
      items:  Array< {
        __typename: "SongCategory",
        id: string,
        name: string,
        imageUri?: string | null,
        createdAt: string,
        updatedAt: string,
        albumIncludedSongCategoriesId?: string | null,
        userFavoriteCategoriesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    favoriteSongs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        imageUri: string,
        title: string,
        songUri: string,
        listened?: number | null,
        searchString?: string | null,
        lyrics?: string | null,
        averageScore?: number | null,
        ratedTime?: number | null,
        createdAt: string,
        updatedAt: string,
        songCategorySongsId?: string | null,
        albumSongsId?: string | null,
        artistSongsId?: string | null,
        userFavoriteSongsId?: string | null,
        playListSongsId?: string | null,
        countrySongsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    favoriteAlbums?:  {
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
        artistAlbumsId?: string | null,
        userFavoriteAlbumsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    favoriteArtists?:  {
      __typename: "ModelArtistConnection",
      items:  Array< {
        __typename: "Artist",
        id: string,
        name: string,
        imageUri: string,
        description: string,
        searchString: string,
        createdAt: string,
        updatedAt: string,
        albumArtistsId?: string | null,
        userFavoriteArtistsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    favoriteCountries?:  {
      __typename: "ModelCountryConnection",
      items:  Array< {
        __typename: "Country",
        id: string,
        name: string,
        imageUri: string,
        createdAt: string,
        updatedAt: string,
        userFavoriteCountriesId?: string | null,
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
    imageUri: string,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        imageUri: string,
        title: string,
        songUri: string,
        listened?: number | null,
        searchString?: string | null,
        lyrics?: string | null,
        averageScore?: number | null,
        ratedTime?: number | null,
        createdAt: string,
        updatedAt: string,
        songCategorySongsId?: string | null,
        albumSongsId?: string | null,
        artistSongsId?: string | null,
        userFavoriteSongsId?: string | null,
        playListSongsId?: string | null,
        countrySongsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdBy?:  {
      __typename: "User",
      id: string,
      avatarUri?: string | null,
      isChosenCategories: boolean,
      isAdmin: boolean,
      playLists?:  {
        __typename: "ModelPlayListConnection",
        nextToken?: string | null,
      } | null,
      favoriteCategories?:  {
        __typename: "ModelSongCategoryConnection",
        nextToken?: string | null,
      } | null,
      favoriteSongs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      favoriteAlbums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
      } | null,
      favoriteArtists?:  {
        __typename: "ModelArtistConnection",
        nextToken?: string | null,
      } | null,
      favoriteCountries?:  {
        __typename: "ModelCountryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
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
    imageUri: string,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        imageUri: string,
        title: string,
        songUri: string,
        listened?: number | null,
        searchString?: string | null,
        lyrics?: string | null,
        averageScore?: number | null,
        ratedTime?: number | null,
        createdAt: string,
        updatedAt: string,
        songCategorySongsId?: string | null,
        albumSongsId?: string | null,
        artistSongsId?: string | null,
        userFavoriteSongsId?: string | null,
        playListSongsId?: string | null,
        countrySongsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdBy?:  {
      __typename: "User",
      id: string,
      avatarUri?: string | null,
      isChosenCategories: boolean,
      isAdmin: boolean,
      playLists?:  {
        __typename: "ModelPlayListConnection",
        nextToken?: string | null,
      } | null,
      favoriteCategories?:  {
        __typename: "ModelSongCategoryConnection",
        nextToken?: string | null,
      } | null,
      favoriteSongs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      favoriteAlbums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
      } | null,
      favoriteArtists?:  {
        __typename: "ModelArtistConnection",
        nextToken?: string | null,
      } | null,
      favoriteCountries?:  {
        __typename: "ModelCountryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
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
    imageUri: string,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        imageUri: string,
        title: string,
        songUri: string,
        listened?: number | null,
        searchString?: string | null,
        lyrics?: string | null,
        averageScore?: number | null,
        ratedTime?: number | null,
        createdAt: string,
        updatedAt: string,
        songCategorySongsId?: string | null,
        albumSongsId?: string | null,
        artistSongsId?: string | null,
        userFavoriteSongsId?: string | null,
        playListSongsId?: string | null,
        countrySongsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdBy?:  {
      __typename: "User",
      id: string,
      avatarUri?: string | null,
      isChosenCategories: boolean,
      isAdmin: boolean,
      playLists?:  {
        __typename: "ModelPlayListConnection",
        nextToken?: string | null,
      } | null,
      favoriteCategories?:  {
        __typename: "ModelSongCategoryConnection",
        nextToken?: string | null,
      } | null,
      favoriteSongs?:  {
        __typename: "ModelSongConnection",
        nextToken?: string | null,
      } | null,
      favoriteAlbums?:  {
        __typename: "ModelAlbumConnection",
        nextToken?: string | null,
      } | null,
      favoriteArtists?:  {
        __typename: "ModelArtistConnection",
        nextToken?: string | null,
      } | null,
      favoriteCountries?:  {
        __typename: "ModelCountryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userPlayListsId?: string | null,
  } | null,
};

export type OnCreateCountrySubscriptionVariables = {
  filter?: ModelSubscriptionCountryFilterInput | null,
};

export type OnCreateCountrySubscription = {
  onCreateCountry?:  {
    __typename: "Country",
    id: string,
    name: string,
    imageUri: string,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        imageUri: string,
        title: string,
        songUri: string,
        listened?: number | null,
        searchString?: string | null,
        lyrics?: string | null,
        averageScore?: number | null,
        ratedTime?: number | null,
        createdAt: string,
        updatedAt: string,
        songCategorySongsId?: string | null,
        albumSongsId?: string | null,
        artistSongsId?: string | null,
        userFavoriteSongsId?: string | null,
        playListSongsId?: string | null,
        countrySongsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userFavoriteCountriesId?: string | null,
  } | null,
};

export type OnUpdateCountrySubscriptionVariables = {
  filter?: ModelSubscriptionCountryFilterInput | null,
};

export type OnUpdateCountrySubscription = {
  onUpdateCountry?:  {
    __typename: "Country",
    id: string,
    name: string,
    imageUri: string,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        imageUri: string,
        title: string,
        songUri: string,
        listened?: number | null,
        searchString?: string | null,
        lyrics?: string | null,
        averageScore?: number | null,
        ratedTime?: number | null,
        createdAt: string,
        updatedAt: string,
        songCategorySongsId?: string | null,
        albumSongsId?: string | null,
        artistSongsId?: string | null,
        userFavoriteSongsId?: string | null,
        playListSongsId?: string | null,
        countrySongsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userFavoriteCountriesId?: string | null,
  } | null,
};

export type OnDeleteCountrySubscriptionVariables = {
  filter?: ModelSubscriptionCountryFilterInput | null,
};

export type OnDeleteCountrySubscription = {
  onDeleteCountry?:  {
    __typename: "Country",
    id: string,
    name: string,
    imageUri: string,
    songs?:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        imageUri: string,
        title: string,
        songUri: string,
        listened?: number | null,
        searchString?: string | null,
        lyrics?: string | null,
        averageScore?: number | null,
        ratedTime?: number | null,
        createdAt: string,
        updatedAt: string,
        songCategorySongsId?: string | null,
        albumSongsId?: string | null,
        artistSongsId?: string | null,
        userFavoriteSongsId?: string | null,
        playListSongsId?: string | null,
        countrySongsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userFavoriteCountriesId?: string | null,
  } | null,
};
