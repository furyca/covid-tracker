import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getGlobal = createAsyncThunk('getGlobal' , async () => {
    const res = await fetch('https://api.covid19api.com/world/total')
    return await res.json();
})

export const getLocal = createAsyncThunk('getLocal' , async (country) => {
    const res = await fetch(`https://api.covid19api.com/live/country/${country}`)
    return await res.json();
})

export const getCountries = createAsyncThunk('getCountries' , async () => {
    const res = await fetch('https://api.covid19api.com/countries')
    return await res.json();
})

export const covidSlice = createSlice({
    name: 'covidData',
    initialState:{
        //loadingStatus: 'idle',
        countries: [],
        confirmed: 0,
        recovered: 0,
        deaths: 0,
        active: 0,
        lastDate: '',
    },
    reducers: {
    },
    extraReducers: {
        [getGlobal.fulfilled]: (state, action) => {
            //state.loadingStatus = "succeeded"
            state.confirmed = action.payload.TotalConfirmed
            state.recovered = action.payload.TotalRecovered
            state.deaths = action.payload.TotalDeaths
            state.active = state.confirmed-(state.recovered+state.deaths)
        },
        [getGlobal.rejected]: (state, action) => {
            //
        },
        [getCountries.fulfilled]: (state, action) => {
            //state.loadingStatus = "succeeded"
            state.countries = action.payload;
            state.countries.sort((a,b) => (a.Country > b.Country) ? 1 : ((b.Country > a.Country) ? -1 : 0))
        },
        [getCountries.rejected]: (state, action) => {
            //
        },
        [getLocal.fulfilled]: (state, action) => {
            state.confirmed = action.payload?.at(-1)?.Confirmed
            state.recovered = action.payload?.at(-1)?.Recovered
            state.deaths = action.payload?.at(-1)?.Deaths
            state.active = action.payload?.at(-1)?.Active
            state.lastDate = action.payload?.at(-1)?.Date
        },
        [getLocal.rejected]: (state, action) => {
            //
        },
      },
})

export default covidSlice.reducer;