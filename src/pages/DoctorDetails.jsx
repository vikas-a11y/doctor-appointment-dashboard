import { useParams } from "react-router-dom";
import {  FiMapPin, FiMessageCircle, FiVideo } from "react-icons/fi";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const DoctorDetails = () => {

  const navigate = useNavigate();

  const { id } = useParams();

  const doctors = [
    {
      id: 1,
      name: "Dr Arun Tiwari",
      specialization: "Cardiologist",
      experience: "10 years",
      rating: 4.8,
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      bio : "Dr. Arun Tiwari is a highly experienced cardiologist with over 10 years of practice. He specializes in treating heart-related conditions and has helped numerous patients achieve better cardiovascular health.",
      about : "Dr. Arun Tiwari is a cardiologist with 10+ years of experience.",
      successRate : "95%",
      recommendPara: "356 patient world recommend this doctor to ther friends and family"
    },
    {
      id: 2,
      name: "Dr Kashish Singh",
      specialization: "Dermatologist",
      experience: "12 years",
      rating: 4.6,
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      bio: "Dr. Kashish Singh is a renowned dermatologist with over 12 years of experience in treating skin-related issues. She is known for her expertise in cosmetic dermatology and has helped numerous patients achieve healthy, glowing skin.",
      about : "Dr. Kashish Singh is a dermatologist with 12+ years of experience.",
      successRate : "90%",
      recommendPara: "400 patient world recommend this doctor to ther friends and family"
    },
    {
      id: 3,
      name: "Dr Vivek Aggarwal",
      specialization: "Neurologist",
      experience: "9 years",
      rating: 4.7,
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      bio: "Dr. Vivek Aggarwal is a distinguished neurologist with 9 years of dedicated practice. He is an expert in diagnosing and treating neurological disorders, including epilepsy, stroke, and migraines. His commitment to patient care has earned him a stellar reputation in the medical community.",
      about : "Dr. Vivek Aggarwal is a neurologist with 9+ years of experience.",
      successRate : "92%",
      recommendPara: "300 patient world recommend this doctor to ther friends and family"
    }
  ];

  const doctor = doctors.find((doc) => doc.id === Number(id));

  return (
    <div className="p-10 flex justify-center rounded-5 bg-blue-100">

      <div className="flex gap-20 bg-white p-8 rounded-xl shadow">
         <div className=" p-8 rounded-xl w-[65%]">

        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-32 h-32 rounded-full mb-4"
        />

        <h1 className="text-2xl font-bold mt-2">{doctor.name}</h1>

        <p className="text-gray-600 mt-2">{doctor.specialization}</p>

        <p className="text-gray-600 mt-2">
          Experience: {doctor.experience}
        </p>

        <p className="text-yellow-500 mt-2">
        {"⭐".repeat(Math.round(doctor.rating))} ({doctor.rating})
        </p>
         <p className="text-gray-500 mt-3 "> <span className="font-semibold text-md text-gray-600">Short Bio :</span>  {doctor.bio}</p>
      </div>

   <div className="w-[30%]">
    <div className="mt-6">
  <span className="font-semibold text-lg text-gray-700">Social Media</span>
  <ul className="flex gap-4 mt-2">
    <li>
      <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
        <FaFacebook size={24} />
      </a>
    </li>
    <li>
      <a href="#" className="text-blue-400 hover:text-blue-600 transition-colors">
        <FaTwitter size={24} />
      </a>
    </li>
    <li>
      <a href="#" className="text-pink-500 hover:text-pink-700 transition-colors">
        <FaInstagram size={24} />
      </a>
    </li>
    <li>
      <a href="#" className="text-blue-700 hover:text-blue-900 transition-colors">
        <FaLinkedin size={24} />
      </a>
    </li>
  </ul>
</div>

         <div className="mt-6 bg-white  shadow rounded-xl">
             <div className="p-4">
              <span className="font-semibold text-black-500  text-xl mb-4 border-b-[1.5px] pb-1 block border-blue-500">About Doctor</span>
              <div className="flex gap-5 mb-4">

                <div className="">
                    <FiMapPin size={22} color="bg-blue-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-md text-gray-600">
                    {doctor.experience} Experience
                  </h3>
                     <p className="text-gray-500 text-sm">{doctor.about}</p>
                </div>
              </div>

              <div className="flex gap-5 mb-4">

                <div className="">
                    <FiMessageCircle size={24} color="bg-blue-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-md text-gray-600">
                    {doctor.successRate} Recommend
                  </h3>
                     <p className="text-gray-500 text-sm">{doctor.recommendPara}</p>
                </div>
              </div>

              <div className="flex gap-5 mb-4">

                <div className="">
                    <FiVideo size={24} color="bg-blue-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-md text-gray-600">
                    Online Consultation
                  </h3>
                     <p className="text-gray-500 text-sm">The consultation is possible on site and online</p>
                </div>
              </div>

                  </div>

              <div className="">
                <button onClick={() => navigate("/appointment", {state: {doctor}})} className="bg-gradient-to-r from-blue-500 to-blue-900 font-semibold text-white px-4 py-3 rounded-xl rounded-t-none w-full">Book an appointment now</button>
              </div>
             
         </div>

      </div>

      </div>

     

    </div>
  );
};

export default DoctorDetails;