import React from 'react'
import Home from './pages/Home/Home'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'


const routes=(
   <Router>
     <Routes>
       <Route path="/" element={<Signup/>}></Route>
       <Route path="/dashboard" element={<Home/>}></Route>
       <Route path="/login" element={<Login/>}></Route>
       <Route path="/signup" element={<Signup/>}></Route>
     </Routes>
   </Router>
);

const App = () => {
  return (
    <div>
      {routes}
    </div>
  )
}

export default App