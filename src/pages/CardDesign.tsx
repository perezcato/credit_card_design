import React, {useState} from 'react';
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
import BackgroundPicker from '../components/background-picker';

const backgrounds = [
  {
    background: yel,
    name: 'kadri',
  },
  {
    background: gren,
    name: 'Fox',
  },
  {
    background: master,
    name: 'Tuipa',
  },
  {
    background: mad,
    name: 'Madison',
  },
  {
    background: gust,
    name: 'Gustavo',
  },
  {
    background: bayy,
    name: 'Bay',
  },
  {
    background: pol,
    name: 'Pollard',
  },
  {
    background: bret,
    name: 'Brett',
  }
]


export default function CardDesign() {

  const [background, setBackground] = useState(master)

  return (
    <div className="relative h-screen w-screen bg-gray-200 flex items-center justify-center">
      <div className="w-full flex h-[650px] bg-white shadow-md max-w-sm rounded-3xl overflow-hidden relative">
        <div className="w-6/12 h-full bg-no-repeat bg-cover bg-center" style={{backgroundImage: `url(${background})`}}>
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

      <div className="absolute right-10 w-[500px] space-y-10 px-12 py-10 bg-gray-800">
        <div>
          <h3 className=" text-white text-xl font-bold">Select card design</h3>
          <p className="text-lg text-gray-300">Play around with our card choices</p>
        </div>

        <div className="w-full flex flex-col lg:grid gap-6 lg:grid-cols-1 xl:grid-cols-2 ">
          {
            backgrounds.map((background, i) => (
              <BackgroundPicker key={i} background={background.background} name={background.name}
                                onClick={() => setBackground(background.background)}/>))
          }
        </div>
      </div>
    </div>
  )
}  