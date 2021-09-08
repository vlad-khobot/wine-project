import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../'
import { dataFromBackend } from '../../dummyData'

interface DataProps {
  url_1: string
  name: string
  image: string
  price: number
  wine_type: string
  grapes: string
  region: string
  wine_style: string
  Body: string
  Acidity: string
  Tannins: string
  Sweetness: string
}

export interface appState {
  data: DataProps[]
  showModal: boolean
  expFirst: boolean
  searchResult: DataProps[]
  searching: boolean
  loading: boolean
}

const initialState: appState = {
  data: dataFromBackend,
  showModal: false,
  expFirst: true,
  searchResult: [],
  searching: false,
  loading: false,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,

  reducers: {
    incrementByAmount: (state, action: PayloadAction<number>) => {
      return state
    },
    switchSort: (state) => {
      state.expFirst = !state.expFirst
    },
    sortData: (state) => {
      if (!state.searching) {
        const currentData = state.data
        if (state.expFirst) {
          state.data = currentData.slice().sort(function (a, b) {
            return a.price - b.price
          })
        } else {
          state.data = currentData.slice().sort(function (a, b) {
            return b.price - a.price
          })
        }
      } else {
        const currentData = state.searchResult
        if (state.expFirst) {
          state.searchResult = currentData.slice().sort(function (a, b) {
            return a.price - b.price
          })
        } else {
          state.searchResult = currentData.slice().sort(function (a, b) {
            return b.price - a.price
          })
        }
      }
    },
    removeData: (state) => {
      if (state.searching) state.searchResult = []
      else state.data = []
    },
    setData: (state, action: PayloadAction<{ data: DataProps[] }>) => {
      if (state.searching) state.searchResult = action.payload.data
      else state.data = action.payload.data
    },
    pushData: (state, action: PayloadAction<{ data: DataProps }>) => {
      state.data.push(action.payload.data)
    },
    searchData: (state, action: PayloadAction<{ inputData: string }>) => {
      const inputData = action.payload.inputData
      state.searching = inputData ? true : false
      state.searchResult = state.data.filter((item) =>
        Object.keys(item).some((k) => {
          if (k === 'region') {
            const country = item[k as keyof DataProps]
              .toString()
              .slice(0, item[k as keyof DataProps].toString().indexOf('/') - 1)
              .toLowerCase()
            const region = item[k as keyof DataProps]
              .toString()
              .slice(item[k as keyof DataProps].toString().indexOf('/') + 2)
              .toLowerCase()
            if (
              country.startsWith(inputData.toLowerCase()) ||
              region.startsWith(inputData.toLowerCase())
            )
              return item[k as keyof DataProps].toString().toLowerCase()
          }
          return item[k as keyof DataProps]
            .toString()
            .toLowerCase()
            .startsWith(inputData.toLowerCase())
        })
      )
    },
    offSearching: (state) => {
      state.searching = false
    },
    setLoading: (state) => {
      state.loading = true
    },
    removeLoading: (state) => {
      state.loading = false
    },
    showModal: (state) => {
      state.showModal = true
    },
    hideModal: (state) => {
      state.showModal = false
    },
  },
})

export const {
  incrementByAmount,
  sortData,
  switchSort,
  removeData,
  setData,
  searchData,
  offSearching,
  setLoading,
  removeLoading,
  showModal,
  hideModal,
  pushData,
} = appSlice.actions

export const selectState = (state: RootState) => state.app

export default appSlice.reducer
