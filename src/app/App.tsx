import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/header/Header'
import Login from './auth/Login'

function App() {

  return (
    <div className="App">
        <Router>
            <Header />
            <Routes>
                <Route 
                    path="/login" 
                    element={<Login />} 
                />
            </Routes>
        </Router>
    </div>
  )
}

export default App
