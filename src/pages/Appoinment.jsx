import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { useLocation} from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "../styles/calendar.css";

const Appoinment = () => {

    const navigate = useNavigate();

    const [name,setName] = useState("");
    const [date,setDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState("");

    const timeSlots =[
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "12:00 PM",
      "02:00 PM",
      "04:00 PM",
      "05:00 PM",
      "06:00 PM"
    ]

    const location = useLocation();
    const doctor = location.state?.doctor;

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!selectedTime){
          alert("Please select a time slot");
          return;
        }

        alert(`Appointment Booked Successfully\nDoctor : ${doctor.name}\nDate : ${date.toDateString()}\nTime : ${selectedTime}`);
        navigate('/appointment-success', {
          state: {
            doctorName: doctor.name,
            date: date.toDateString(),
            time: selectedTime
          }
        }


        );
    };
  return (

    <div className=' p-5 bg-white h-screen'>
      <div className='flex gap-5 border bg-blue-50 backdrop-blur-md shadow-xl  rounded-lg p-8'>
      <div className='w-[33%]'>
           <Calendar  className="custom-calendar" onChange= {setDate } value={date}/>
      </div>
      <form onSubmit ={handleSubmit} className=" p-6 w-[63%] ml-auto bg-white rounded-lg shadow-md">

        <h2 className='text-2xl font-semibold mb-4 text-center border-b-[1px] border-gray-400 pb-2'>Book Appointment</h2>
        
        <div className='flex gap-5 items-center bg-blue-50 rounded-xl px-4 py-3 mb-4' >
          <div className=''>
              <img src={doctor.image}   alt={doctor.name}  className="w-32 h-32 rounded-full"/>
          </div>
          <div>
             <h3 className="text-gray-600 mb-2 text-center text-2xl">
        <span className="font-semibold">{doctor?.name}</span>
            </h3>
              <p className="text-gray-500 font-medium text-lg">{doctor.specialization}</p>
          </div>
          
           
        </div>
       

        <input type="text" placeholder='Enter Your Name' className='w-full h-10 border rounded px-3 mb-4'
        value={name}
        onChange={(e) => setName(e.target.value)} />

      

        <button type="submit" className='w-full bg-gradient-to-r from-blue-500 to-blue-900 font-semibold uppercase  text-white p-2 rounded'>
         Confirm Appointment
        </button>
     
      {/* time slot */}

      <div className='mt-5 border-t-[1px] border-gray-400 pt-5'>
       <h3 className='text-xl font-semibold mb-4'>Available Time Slots</h3>
         <div className='grid grid-cols-4 gap-2'>
           {timeSlots.map((slot) => (
            <button type="button" key={slot} onClick={() => setSelectedTime(slot)}
              className={` p-2 rounded-lg cursor-pointer font-medium
              ${
                selectedTime === slot
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
              }`}

              >
            {slot}
            </button>
           )

           )}
         </div>
      </div>

      </form>

         </div>

    </div>
  )
}

export default Appoinment;