// userSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  id: string | null;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
}

const initialState: UserState = {
  id: null,
  username: "",
  email: "",
  firstName: "",
  lastName: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      const { id, username, email, firstName, lastName } = action.payload;

      // Update the properties of the state object
      state.id = id;
      state.username = username;
      state.email = email;
      state.firstName = firstName;
      state.lastName = lastName;

      // Saving the state to localStorage
      const userData = JSON.stringify(state);
      localStorage.setItem("UserState", userData);
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
