
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './Components/CoffeeCard/CoffeeCard';


function App() {

  const coffees = useLoaderData();


  return (
    <>

      <h1 className='text-6xl text-purple-600'>Hot cold Cofffeee:{coffees.length}</h1>

      {
        coffees.map( coffee => <CoffeeCard
          key={coffee._id}
          coffee={coffee}
        ></CoffeeCard> )
      }


    </>
  )
}

export default App
