import React, { useState } from "react";
import { wasteInfo } from "../Data";
const WasteInfo = () => {    
  const [active, setActive] = useState(false)
  const showDesc= index =>{
      if(active === index){
        return setActive(null)
      }
      setActive(index)
  }
  return (
    <div className="mt-14">
    <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
        <div
            className="hidden lg:block lg:w-1/2 bg-cover"
            style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80')`,
            }}
        ></div>{" "}
        <div className="w-full p-4 my-5 lg:w-1/2">
            <div className="">
            <h2 className="text-2xl font-semibold text-gray-700 text-center p">
                Know your Waste?
            </h2>
            <p className="text-lg text-gray-600 text-center">
                Check and Know your treasured trash
            </p>
            </div>
            <div className="py-3">
                {wasteInfo.map((item, index) => (
                <div key={index} className="">
                    <button className={` w-full p-1 cursor-pointer border-gray-300 my-2 border-2 rounded-2xl`}
                        onClick={() => showDesc(index)} >
                        <div className="flex justify-between item-center w-full" >
                        <h5 className={`text-xl m-3 font-semibold text-${item.color} dark:text-light`}>
                        {item.name}                            
                        </h5>
                        <i className={`p-4 w-12 fa-solid  group-hover:text-white text-${item.color} duration-500`}></i>
                        </div>
                    </button>
                    <div className={`p-3 ${active === index ? "block" : "hidden"}`}>
                        <p className={`text-justify text-lg font-medium text-${item.color}`}>{item.desc}</p>
                        {/* <ul>
                            {item.types.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul> */}
                    </div>
                </div> ))}             
            </div>
            <div className="pt-3">
                <a href="./location">
                    <button className="bg-blue-700 text-white font-bold py-4 px-4 w-full hover:bg-blue-500 rounded-2xl">Continue</button>
                </a>
            </div>                
        </div>
    </div>
    </div>
  );
};

export default WasteInfo;

// ${active === index ? 'text-teal-400' : "text-white" }