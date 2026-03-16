import {useLocation} from "react-router-dom";



const AppointmentSuccess = () => {

  const location = useLocation();
const {doctorName, date, time} = location.state;
  return (
       <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          Appointment Booked Successfully 🎉
        </h1>
        <p className="text-gray-600">
          Your doctor will contact you soon.
        </p>
          <p className="mt-4 text-gray-700">
  Doctor: <span className="font-semibold">{doctorName}</span>
</p>

<p className="text-gray-700">
  Date: <span className="font-semibold">{date}</span>
</p>

<p className="text-gray-700">
  Time: <span className="font-semibold">{time}</span>
</p>
      </div>
    
    </div>
  )
}

export default AppointmentSuccess;