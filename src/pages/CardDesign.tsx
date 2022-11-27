import React,{useState} from 'react';
import image from "../assets/images/master.jpg"
import other from "../assets/images/other.png"

import master from "../assets/images/master.jpg";
import pin from "../assets/images/pin.png";
import masterlogo from "../assets/images/masterlogo.png";
import gren from "../assets/images/greenish.png";
import yel from "../assets/images/yel.png";
import Madison from "../assets/images/madison.png"
import mad from "../assets/images/mad.png"
import gustavo from "../assets/images/gustavo.png"
import gust from "../assets/images/gust.png"
import bay from "../assets/images/bay.png"
import bayy from "../assets/images/bayy.png"
import pollard from "../assets/images/Pollard.png"
import pol from "../assets/images/pol.png"
import brett from "../assets/images/brett.png"
import bret from "../assets/images/bret.png"



export default function CardDesign() {

  const [background, setBackground] = useState(master)
 
    return (
        <div className=" md:w-11/12 2xl:w-4/5 m-auto flex">

          <div className="w-full flex h-screen items-center max-w-lg mx-auto px-4 py-20 relative">
          <div className="border md:w-2/3 2xl:w-4/5 flex h-3/4 bg-white overflow-y-hidden max-h-full relative rounded-3xl">
           <div className="w-6/12 h-full" style={{backgroundImage: `url(${background})`}}>
            <img className="p-10 " src={pin} alt="" />
           </div>

           <div className="w-6/12 h-full justify-center">
            <div className="w-full h-full flex flex-col justify-between">
                <div className="-rotate-90 mx-10  my-16 w-full">
                    <p className="text-xs text-gray-500">JOHN DOE DOE</p>
                    <p>1234 5678 4526 9999</p>
                </div>
                <img className="absolute bottom-0 right-0 h-16 w-14 m-6" src={masterlogo} alt="" />
            </div>
           </div>

          </div>
          <div className="mt-auto p-5 h-2/5">
           
          </div>
        </div>

        <div className="w-full p-10 bg-gray-800 md:p-20">
            <h3 className="py-4 text-white text-xl font-bold">Select card design</h3>
            <p className="pb-14 text-lg text-gray-300">Play around with our card choices</p>
            <div className="w-full md:w-3/6 flex flex-col lg:grid gap-4 lg:grid-cols-1 xl:grid-cols-2 ">
            <div onClick={()=>setBackground(yel)} className="md:hover:bg-gray-800 hover:border hover:border-gray-700 cursor-pointer w-full bg-gray-500 text-center rounded-lg"> 
                  <img className="mt-6 w-20 h-3/6 mx-auto rounded-lg" src={yel} alt="" />  
                  <p className=" pt-2 text-white">Kadri</p>
                </div>
                <div onClick={()=>setBackground(gren)} className="md:hover:bg-gray-800 hover:border hover:border-gray-700 cursor-pointer w-full bg-gray-500 text-center rounded-lg"> 
                  <img className="mt-6 w-20 h-3/6  mx-auto rounded-lg" src={gren} alt="" />  
                  <p className=" pt-2 text-white">Fox</p>
                </div>
                
                <div onClick={()=>setBackground(master)} className="md:hover:bg-gray-800 hover:border hover:border-gray-700 cursor-pointer w-full bg-gray-500 text-center rounded-lg"> 
                  <img className="mt-6 w-20 h-3/6 mx-auto rounded-lg" src={image} alt="" />  
                  <p className=" pt-2 text-white">Tuipa</p>
                </div>
                <div onClick={()=>setBackground(mad)} className="md:hover:bg-gray-800 hover:border hover:border-gray-700 cursor-pointer w-full bg-gray-500 text-center rounded-lg"> 
                  <img className="mt-6 w-20 h-3/6  mx-auto rounded-lg" src={Madison} alt="" />  
                  <p className=" pt-2 text-white">Madison</p>
                </div>
             
                <div onClick={()=>setBackground(gust)} className="md:hover:bg-gray-800 hover:border hover:border-gray-700 cursor-pointer w-full bg-gray-500 text-center rounded-lg"> 
                  <img className="mt-6 w-20 h-3/6  mx-auto rounded-lg" src={gustavo} alt="" />  
                  <p className=" pt-2 text-white">Gustavo</p>
                </div>

                <div onClick={()=>setBackground(bayy)} className="md:hover:bg-gray-800 hover:border hover:border-gray-700 cursor-pointer w-full bg-gray-500 text-center rounded-lg"> 
                  <img className="mt-6 w-20 h-3/6  mx-auto rounded-lg" src={bay} alt="" />  
                  <p className=" pt-2 text-white">Bay</p>
                </div>

                 <div onClick={()=>setBackground(pol)} className="md:hover:bg-gray-800 hover:border hover:border-gray-700 cursor-pointer w-full bg-gray-500 text-center rounded-lg"> 
                  <img className="mt-6 w-20 h-3/6 mx-auto rounded-lg" src={pollard} alt="" />  
                  <p className=" pt-2 text-white">Pollard</p>
                </div>
                <div onClick={()=>setBackground(bret)} className="md:hover:bg-gray-800 hover:border hover:border-gray-700 cursor-pointer w-full bg-gray-500 text-center rounded-lg"> 
                  <img className="mt-6 w-20 h-3/6  mx-auto rounded-lg" src={brett} alt="" />  
                  <p className=" pt-2 text-white">Brett</p>
                </div>
             
             

             
            </div>
        </div>
        </div>
    )
}  