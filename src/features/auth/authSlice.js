import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, token: null, role: null, lang: "en" },
  reducers: {
    setCredentials: (state, action) => {
      const { user, accessToken, role } = action.payload;
      state.user = user;
      state.token = accessToken;
      state.role = role;
    },
    resetCredentials: (state, action) => {
      state.user = null;
      state.token = null;
      state.role = null;
    },
    setLanguage: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { setCredentials, resetCredentials, setLanguage } =
  authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
export const selectCurrentRole = (state) => state.auth.role;
export const selectLang = (state) => state.auth.lang;

// export const getPlanningList = () => (dispatch) => {
//   axios
//     .get("http://sfws01.syncronik.com:8085/auth/get-users/", {
//       headers: {
//         Authorization: `token 1a0544b238b81eedb48b43e574ce86a48b85c4b6`,
//         token: "1a0544b238b81eedb48b43e574ce86a48b85c4b6",
//       },
//     })
//     .then((response) => {
//       if (response.status === 200) {
//         console.log("rta");
//         console.log(response);
//       }
//     })
//     .catch((err) => console.log("error", err));
// };
