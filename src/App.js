import { useEffect } from "react";
import CountryChart from "./components/CountryChart";
import GlobalInfo from "./components/GlobalInfo";
import Header from "./components/Header";
import { useDispatch, useSelector } from "react-redux";
import { getGlobal, getLocal } from "./redux/covidSlice";

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getGlobal())
  },[dispatch])
  
  return (
    <div >
      <Header />
      <GlobalInfo />
      <CountryChart />
    </div>
  );
}

export default App;
