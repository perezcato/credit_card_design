import React from 'react';


interface Props {
  onClick: () => void,
  background: string,
  name: string
}



const BackgroundPicker = (props: Props) => {
  return (
    <div onClick={props.onClick}
         className="md:hover:bg-gray-800 hover:border hover:border-gray-700 cursor-pointer w-full bg-gray-500 text-center rounded-lg p-6">
      <div className="w-20 h-20 rounded-lg overflow-hidden mx-auto">
        <img className="w-full object-cover object-center h-full " src={props.background} alt=""/>
      </div>

      <p className=" pt-2 text-white">{props.name}</p>
    </div>
  );
};

export default BackgroundPicker;