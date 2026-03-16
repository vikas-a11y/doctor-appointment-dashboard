import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiMail, FiLock } from "react-icons/fi";

const Login = () => {

    const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        if (email === "admin@gmail.com" && password === "admin123"){
            alert("Login Successful");

            localStorage.setItem("isLoggedIn", true);

            navigate("/dashboard");
        }
        else {

            alert("Invalid Credentials");
        }
    }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100" style={{backgroundImage: "url(/assets/images/login-bg-img.jpg)", backgroundSize: "cover", backgroundPosition: "center"}}>
  <div className="flex items-center w-full h-full m-auto p-8 rounded-2xl 
  bg-white/20 
  backdrop-blur-lg 
  border border-white/30 
  shadow-xl">

      <form   onSubmit={handleLogin} className="bg-white p-6 rounded-xl shadow-lg w-96 m-auto">
        <h2 className="text-3xl font-bold mb-4 text-center text-blue-500 border-b-[1px] border-grey-300 pb-3">
          Login
        </h2>

      <div>
           <div className="relative mb-4">
             <FiMail className="absolute p-2 top-0 bottom-0 h-[40px] w-[40px]  rounded-[5px] text-gray-500 bg-gray-200 border-[1px] border-gray-200 " />
              <input
          type="email"
          placeholder="Enter Email"
          className="w-full text-[14px] h-[40px] focus:outline-none  border rounded border-gray-200 pl-[50px]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
           </div>
           <div className="relative mb-4">
             <FiLock className="absolute p-2 top-0 bottom-0 h-[40px] w-[40px]   rounded-[5px] text-gray-500 bg-gray-200 border-[1px] border-gray-200" />
               <input
          type="password"
          placeholder="Enter Password"
          className="w-full text-[14px] h-[40px] focus:outline-none  border rounded border-gray-200 pl-[50px]"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

           </div>
      </div>
        
   <button 
  type="submit"
  className="w-full bg-gradient-to-r from-blue-500 to-blue-900 font-semibold uppercase  text-white p-2 rounded"
>
  Login
</button>
      </form>
      </div>
    </div>
  );
};

export default Login;