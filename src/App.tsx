import './App.css'
import Listing from "./components/Listing/Listing.tsx";
import {data} from "./data.js"

function App() {
  return (
    <Listing items={data}/>
  )
}

export default App