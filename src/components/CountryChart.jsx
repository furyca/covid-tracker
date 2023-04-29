import React, { useEffect } from 'react'
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts'
import { getCountries, getLocal, getGlobal } from "../redux/covidSlice";
import { useDispatch, useSelector } from "react-redux";

const CountryChart = () => {
  const {countries, confirmed, recovered, deaths, active} = useSelector(state => state.covidSlice)
  const chartData = [
    {
      confirmed: confirmed,
      recovered: recovered,
      deaths: deaths,
      active: active
    }
  ] 
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCountries())
  },[dispatch])

  const handleChange = e => {
    e.target.value === 'global' ? dispatch(getGlobal()) : dispatch(getLocal(e.target.value))
  }

  return (
    <div>
        <select onChange={e => handleChange(e)}>
          <option value="global">Global</option>
          {countries?.map((country, index) => (
            <option key={index} value={country.Slug}>{country.Country}</option> 
          ))}
        </select>
        <BarChart width={1280} height={400} data={chartData}>
          <CartesianGrid strokeDasharray="10 10" />
          <XAxis dataKey="Confirmed" />
          <YAxis />
          <Bar dataKey="confirmed" fill="rgb(104, 151, 208)"/>
          <Bar dataKey="recovered" fill="rgb(103, 205, 103)"/>
          <Bar dataKey="deaths" fill="rgb(209, 105, 105)"/>
          <Bar dataKey="active" fill="rgb(201, 179, 109)"/>
        </BarChart>
    </div>
  )
}

export default CountryChart

