import React from 'react';
import pin from "../assets/images/pin.png";
import masterlogo from "../assets/images/masterlogo.png";


export const CreditCard =(props:any) => {
    return(
        <div className="w-full flex h-[650px] bg-white shadow-md max-w-sm rounded-3xl overflow-hidden relative">
        <div className="w-6/12 h-full bg-no-repeat bg-cover bg-center" style={{backgroundImage: `url(${props.background})`}}>
          <img className="p-10 " src={pin}/>
        </div>

        <div className="w-1/2 h-full justify-center">
          <div className="w-full h-full flex flex-col justify-between">
            <div className="-rotate-90 mx-8 my-16 w-full">
              <p className="text-xs text-gray-500">JOHN DOE DOE</p>
              <p>1234 5678 4526 9999</p>
            </div>
            <img className="absolute bottom-0 right-0 h-16 w-14 mx-8 my-8" src={masterlogo} alt=""/>
          </div>
        </div>
      </div>
    )
}