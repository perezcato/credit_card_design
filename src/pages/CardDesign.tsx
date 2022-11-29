import React, {useState, useContext} from 'react';
import ToggleContext from "../store/toggle-context"
import {CreditCard} from "../components/CreditCard"
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

  const ctx = useContext(ToggleContext);

  const [background, setBackground] = useState(ctx)

  return (
    <div className="relative h-screen w-screen bg-gray-200 flex items-center justify-center">
      <CreditCard background={background}/>
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