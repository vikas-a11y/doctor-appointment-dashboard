import {BrowserRouter , Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import DoctorListing from './pages/DoctorListing';
import Appoinment from './pages/Appoinment';
import AppointmentSuccess from './pages/AppointmentSuccess';
import ProtectedRoute from './routes/ProtectedRoute';
import DoctorDetails from './pages/DoctorDetails';
import './App.css'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />

        <Route
          path= '/dashboard'
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path= '/doctors'
          element={
            <ProtectedRoute>
              <DoctorListing />
            </ProtectedRoute>
          }
        />

        <Route
          path= '/appointment'
          element={
            <ProtectedRoute>
              <Appoinment />
            </ProtectedRoute>
          }
        />
         <Route
          path='/doctor/:id'
          element={
            <DoctorDetails />
          }
         />

         <Route path="/appointment-success" element={<AppointmentSuccess />} />

      </Routes>
      
    </BrowserRouter>
  )
}

export default App;
