import {useState, useEffect} from 'react'
import DoctorCard from '../components/DoctorCard';

const DoctorListing = () => {

  const [doctors, setDoctors] = useState([]);
  const [search, setSearch] = useState("");
  const [specialization, setSpecialization] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const doctorData = [
      {
        id: 1,
        name: "Dr Arun Tiwari",
        specialization: "Cardiologist",
        experience: "10 years",
        rating: 4.0,
        image: "https://randomuser.me/api/portraits/men/32.jpg"
      },
       {
        id: 2,
        name: "Dr Kashish Singh",
        specialization: "Dermatologist",
        experience: "12 years",
        rating: 4.6,
    image: "https://randomuser.me/api/portraits/women/44.jpg"
      },
       {
        id: 3,
        name: "Dr Vivek Aggarwal",
        specialization: "Neurologist",
        experience: "09 years",
        rating: 4.7,
    image: "https://randomuser.me/api/portraits/men/75.jpg"
      }
    ];

    setTimeout(() => {
      setDoctors(doctorData);
      setLoading(false);

    }, 1000);

  }, []);

   

  const filteredDoctors = doctors.filter((doctor) => {

    const matchesSearch =
     doctor.name.toLowerCase().includes(search.toLowerCase()) ||
     doctor.specialization.toLowerCase().includes(search.toLowerCase());

     const matchesSpecialization =
     specialization === "All" || doctor.specialization === specialization;

     return matchesSearch && matchesSpecialization;
 } );

 if (loading) {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin h-16 w-16 border-4 border-blue-500 border-t-transparent rounded-full"></div>
    </div>
  );
}

  return (
    <div className='p-10 bg-slate-200 '>
       <h1 className='text-3xl font-bold mb-6 text-black-500 border-b-[1px] border-gray-400 pb-2'>
        Available <span className='text-blue-500'>Doctors</span>
       </h1>

       <div className='flex gap-5 items-center'>
         <input type="text" placeholder="Search doctors..." className="border p-2  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500  rounded mb-8  w-full" 
       value={search} onChange={(e) => setSearch(e.target.value)} />

       <select className='border p-2 rounded mb-8'
        value={specialization} onChange={(e) => setSpecialization(e.target.value)}
       >
       <option value="All">All</option>
       <option value="Cardiologist">Cardiologist</option>
       <option value="Dermatologist">Dermatologist</option>
       <option value="Neurologist">Neurologist</option>
       </select>

       </div>

      

       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
     {filteredDoctors.map((doctor) => (
  <DoctorCard key={doctor.id} doctor={doctor} />
))}

       </div>
    </div>
  );
};

export default DoctorListing;