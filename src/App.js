import { Routes, Route } from 'react-router-dom';
import Home from './componentes/Home';
import Login from './componentes/Login';
import { ProtectedRoute } from './componentes/ProtectectRoute';
import Register from './componentes/Register';
import { AuthProvider } from './context/AuthContext';



function App() {
  return (
    <div className='bg-slate-300 h-screen text-white flex'>
      <AuthProvider>
        <Routes>
          <Route path="/" element={
            <ProtectedRoute><Home /></ProtectedRoute>}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/Register" element={<Register />}></Route>
        </Routes>
      </AuthProvider>
    </div>

  )
}

export default App;