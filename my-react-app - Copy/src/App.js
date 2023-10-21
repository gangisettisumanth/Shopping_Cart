
import { createContext, useState } from 'react';
import './App.css';
// import TodoComponent from './Todolist/TodoComponent';



import NavigationStack from './Router/NavigationStack';

export const Logininfo=createContext()

function App() {

  const [login,setLogin] = useState(false)

  const loginUser=()=>{
    setLogin(true)
  }

  return (
  <>
    <Logininfo.Provider value={{ login: login, loginUser: loginUser }}>

      <NavigationStack/>
    </Logininfo.Provider>
{/* 
    <TodoComponent/> */}
  </>
  );
}

export default App;
