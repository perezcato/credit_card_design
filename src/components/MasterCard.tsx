import React from 'react';
import master from "../assets/images/master.jpg";
import pin from "../assets/images/pin.png";
import masterlogo from "../assets/images/masterlogo.png";

export default function MasterCard() {
 
  return (
   


    <div 
    className="bg-opacity-70 bg-slate-900 fixed left-0 h-screen inset-0 overflow-hidden right-0 top-0 w-full z-50
    x-transition:enter=transition ease-out duration-100 x-transition:enter-start= opacity-0 scale-90
    x-transition:enter-end= opacity-100 scale-100 x-transition:leave=transition ease-in duration-100
    x-transition:leave-start=opacity-100 scale-100 x-transition:leave-end=opacity-0 scale-90">

   
        <div className="grid h-screen items-center max-w-lg mx-auto px-4 py-20 relative">
          <div className=" flex h-full bg-white overflow-y-hidden max-h-full relative rounded-3xl">
           <div className="w-6/12 h-full" style={{backgroundImage: `url(${master})`}}>
            <img className="p-10" src={pin} alt="" />
           </div>

           <div className="w-6/12 h-full justify-center">
            <div className="w-full h-full flex flex-col justify-between">
                <div className="-rotate-90 m-10 w-full">
                    <p className="text-xs text-gray-500">JOHN DOE DOE</p>
                    <p>1234 5678 4526 9999</p>
                </div>
                <img className="absolute bottom-0 right-0 h-16 w-16 m-10" src={masterlogo} alt="" />
            </div>
           </div>

          </div>
        </div>
      </div>
  );
}
