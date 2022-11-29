import React,{useState} from 'react';
import master from "../assets/images/master.jpg";
import pin from "../assets/images/pin.png";
import masterlogo from "../assets/images/masterlogo.png";
import gren from "../assets/images/greenish.png";
import yel from "../assets/images/yel.png";

export default function MasterCard() {
  const [image, setImage] = useState(master)
 
  return (
   


    <div 
    className="fixed left-0 h-screen inset-0 overflow-hidden right-0 top-0 w-full z-50">

   
        <div className="flex h-screen items-center max-w-lg mx-auto px-4 py-20 relative">
          <div className="border w-2/3 flex h-3/4 bg-white overflow-y-hidden max-h-full relative rounded-3xl">
           <div className="w-6/12 h-full" style={{backgroundImage: `url(${image})`}}>
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
            <img onClick={()=>setImage(master)} className="p-2 w-10 h-10 rounded-full" src={master} alt="" />
            <img onClick={()=>setImage(yel)}  className="p-2 w-10 h-10 rounded-full" src={yel} alt="" />
            <img onClick={()=>setImage(gren)}  className="p-2 w-10 h-10 rounded-full" src={gren} alt="" />
          </div>
        </div>
      </div>
  );
}
