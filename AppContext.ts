import React from "react"

const context = {
  songId: '',
  setSongId: (id: string) => {

  },
  songsOfAlbum: [],
  setSongsOfAlbum: (songsId: string[]) => {

  }
}

export const AppContext = React.createContext(context)