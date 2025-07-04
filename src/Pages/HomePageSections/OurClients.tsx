import { useState, useEffect } from "react";
import axios from "axios";
import { url } from "../../url";
import { Link } from "react-router-dom";
import { FaArrowTrendUp } from "react-icons/fa6";
const OurClients = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${url}/api/clients/`) // replace with your actual API domain if hosted
      .then((res: any) => {
        setClients(res.data);
        console.log("clients", res);
        setLoading(false);
      })
      .catch((err: any) => {
        console.error("Failed to fetch services:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-[#160644] relative flex flex-col overflow-clip h-fit not-md:py-5 md:h-[90vh] w-screen justify-end">
      <div className="w-[70vw] h-[70vw] rounded-full bg-[#588CCA] opacity-90 absolute -right-[15vw] bottom-[10vw]"></div>
      <div className="w-[90%] mx-auto z-50 bg-white rounded-t-lg flex flex-col items-center justify-center py-3 md:py-12">
        <h1 className="text-2xl md:text-7xl text-white text-shadow-lg/100 font-bold opacity-0.6">
          Our Clients
        </h1>
        <div className="text-center">
          <h4>Take a Look at our clients</h4>
          <p className="text-[#F89236] font-bold ">
            We did a great job with these companies. You can be next to work
            with!
          </p>
        </div>
        {loading && <p>Loading Clients...</p>}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-x-3 gap-y-2 w-[90%] py-3 md:py-12 mx-auto">
            {clients?.map((client:any,index)=>(
                <div key={index} className="relative shadow-md shadow-black z-10 w-[100%] flex flex-col items-center justify-center group h-[20vh] bg-white rounded-md overflow-clip">
                    <div className="inset-0 group-hover:bg-black/40 absolute h-[100%] w-[100%] -translate-y-[100%] group-hover:translate-y-0 duration-200 ease-in"></div>
                    <img src={client?.company_logo}  className="w-[100%] h-[100%]" alt="" />
                    <h1 className="text-gray-200 absolute z-20 -translate-y-[500%] group-hover:translate-y-0 ease-in-out duration-200 font-bold text-shadow-2xs">{client?.company_name}</h1>
                </div>
            ))}
        </div>
        <div>
            <p className="text-gray-800 font-bold">Be Smart Let us do our Job.</p>
            <Link to='/contact' className="bg-[#588CCA] rounded-full flex hover:bg-[#588CCA]/60 transition flex-row items-center justify-center py-2 px-4">
                <p className="text-white font-bold">Try us Out</p>
                <FaArrowTrendUp size={15} color="white" className="flex-end justify-end" />
            </Link>
        </div>
      </div>
    </div>
  );
};

export default OurClients;
