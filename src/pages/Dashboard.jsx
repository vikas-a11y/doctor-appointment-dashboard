import {useNavigate} from 'react-router-dom';

const Dashboard = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn"); // Remove the login status from localStorage
    navigate("/"); // Redirect to the login page
  }
  return (
    <div className='min-h-screen p-2 bg-gray-100'>
      <div className='flex justify-between items-center mb-10 border-b-[1px] border-gray-200 pb-3 p-5'>
          <h1 className='font-bold text-3xl text-black-500 pl-10'>Doctor Consultation <span className='text-blue-500'>Dashboard</span></h1>
          <button
          onClick={handleLogout} className='bg-red-500 text-white p-3 pl-5 pr-5 font-semibold rounded-lg mr-10'>Logout </button>

      </div>

      <div className='bg-white p-8 rounded-lg shadow-md  w-[50%] m-auto text-center mt-28'>
         <h2 className='text-2xl font-bold text-blue-500 border-b-[1px] border-gray-200 pb-2 mb-3'>Find Doctors</h2>
         <p className='text-gray-600'>Book an appointment with a qualified doctor</p>
         <button onClick={() => navigate("/doctors")} className='bg-gradient-to-r from-blue-500 to-blue-700 text-white p-3 mt-5 rounded-lg'>View Doctors</button>
       
      </div>
    </div>
  )
}

export default Dashboard;