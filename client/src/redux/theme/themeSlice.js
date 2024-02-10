import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    theme: 'light',
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
		// Funcion que cambia el estado de dark a light o viceversa constituye la funcion que modifica dicho state global
        toggleTheme: (state) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
      },
        }
});

export const {toggleTheme} = themeSlice.actions;

export default themeSlice.reducer;