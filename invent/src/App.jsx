import { Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import DashboardAdmin from './pages/dashboard_admin';
import DashboardUser from './pages/dashboard_user';


function App() {

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<DashboardAdmin />} />
      <Route path="/user" element={<DashboardUser />} />
    </Routes>
  )
}

export default App
