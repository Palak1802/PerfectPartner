import {createSlice} from '@reduxjs/toolkit';

const initialState: UserReducerProps = {
  userDetails: undefined,
  token: undefined,
};
const userSlice = createSlice({
  name: 'userReducer',
  initialState: initialState,
  reducers: {
    loginSuccess: (state, action) => {
      return {
        ...state,
        token: action?.payload,
      };
    },
    logout: state => {
      return {
        ...state,
        userDetails: undefined,
        token: undefined,
      };
    },
  },
  extraReducers: builder => {
    // builder.addCase(fetchUserProfile.fulfilled, (state, action) => {
    //   return {
    //     ...state,
    //     userProfileDetails: action.payload,
    //   };
    // });
  },
});

export const {loginSuccess, logout} = userSlice.actions;

export default userSlice.reducer;
