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
  userId: '',
  setUserId: (userId: string) => {

  },
  currentSong: {},
  setCurrentSong: () => { },
  isAlbumAdded: false,
  sleepTimer: null,
  setSleepTimer: (timer: Date) => { },
  createdTimer: false,
  setCreatedTimer: (timerState: boolean) => {

  }
}

export const AppContext = React.createContext(context)