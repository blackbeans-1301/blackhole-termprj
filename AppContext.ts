import React from "react"

const context = {
  songId: '',
  setSongId: (id: string) => {

  },
  songsOfAlbum: [],
  setSongsOfAlbum: (songsId: string[]) => {

  },
  hasUser: '',
  setUser: (userId: string) => {

  }
}

export const AppContext = React.createContext(context)