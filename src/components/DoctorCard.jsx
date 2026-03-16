import {useNavigate} from 'react-router-dom';


const DoctorCard = ({ doctor }) => {

    const navigate = useNavigate();
  return (
   

        <div className='bg-white p-5 rounded-xl shadow hover:shadow-lg transition text-center'>
            <img src={doctor.image} alt={doctor.name} className='w-30 h-30 m-auto  object-cover rounded-full mb-4'/>
            <h2 className='text-xl font-semibold text-blue-500'>{doctor.name}</h2>
            <p className='text-gray-600'>{doctor.specialization}</p>
            <p className='text-gray-600'>Experience: {doctor.experience}</p>
               <p className="text-yellow-500 font-medium mt-1">
       {"⭐".repeat(Math.round(doctor.rating))} ({doctor.rating})
      </p>

       <button 
                onClick={() => navigate(`/doctor/${doctor.id}`)}
                className="w-full mt-3 bg-gradient-to-r from-blue-500 to-blue-900 text-white p-2 rounded font-semibold uppercase">
                View Profile
              </button>

            <button onClick={() => navigate("/appointment", {state: {doctor}})} className='w-full mt-3 bg-gradient-to-r from-blue-500 to-blue-900 font-semibold uppercase  text-white p-2 rounded'>
              Book Appointment
            </button>

           

        </div>
    
       
  
  );
};

export default DoctorCard;