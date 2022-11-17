import React from "react"

export type Song = {

}

const context = {
  hasTrack: false,
  setHasTrackState: (isPlaying: boolean) => {

  },
  songId: '',
  setSongId: (id: string) => {

  },
  songsOfAlbum: [],
  setSongsOfAlbum: (songsId: string[]) => {

  },
  hasUser: '',
  setUser: (userId: string) => {

  },
  currentSong: {},
  setCurrentSong: () => { },
  isAlbumAdded: false,
}

export const AppContext = React.createContext(context)