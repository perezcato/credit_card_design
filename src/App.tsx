import React,{useState} from 'react';
import CardDesigns from "./pages/CardDesign" 
import master from "./assets/images/master.jpg";
import MasterCard from "./components/MasterCard"
import ToggleContext from './store/toggle-context';



function App() {
  const [image, setImage] = useState(master)
  let background:string = image


  return (
    <ToggleContext.Provider value={background}>
    <div className="App">
      <CardDesigns />
    </div>
    </ToggleContext.Provider>
  );
}

export default App;
