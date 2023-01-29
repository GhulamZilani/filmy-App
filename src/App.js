import Header from "./components/Header";
import Card from "./components/Card";
import AddMovie from './components/AddMovie'
import {Route,Routes} from 'react-router-dom'
import Details from "./components/Details";
import { createContext, useEffect, useState } from "react";
import Login from './components/Login'
import Signup from './components/Signup'


const AppState = createContext();
function App() {

  const [login, setLogin] = useState(false);
  const [userName,setUserName] = useState("");


  return (
    <AppState.Provider value={{login, userName,setLogin,setUserName}}>
      <div className="App relative">
        <Header/>
        <Routes>
          <Route path="/" element={<Card/>}/>
          <Route path="/addmovie" element={<AddMovie/>}/>
          <Route path="/details/:id" element={<Details/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
      </div>
    </AppState.Provider>
    
  );
}

export default App;
export {AppState}
