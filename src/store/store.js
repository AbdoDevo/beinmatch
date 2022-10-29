import { configureStore, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export interface MatchState {
  matchsList: []
}

const initialState: MatchState = {
  matchsList: []
}

export const matchsSlice = createSlice({
  name: 'matchs',
  initialState,
  reducers: {
    setMatchs: (state, action: PayloadAction<any>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.matchsList = action.payload
    },
    decrement: (state) => {
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
    },
  },
})

// Action creators are generated for each case reducer function
export const { setMatchs, decrement, incrementByAmount } = matchsSlice.actions

export default matchsSlice.reducer
export const store = configureStore({
  reducer: matchsSlice.reducer,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch