import React, {useState} from 'react'

import PercentagesSlider from 'react-percentages-slider'
import 'react-percentages-slider/dist/index.css'

const App = () => {
  const [example, setExample] = useState([
    { text: "Item 1", color:"#e9c46a", percentage: 28 },
    { text: "Item 2", color: "#e76f51", percentage: 39 },
    { text: "Item 3", color:"#2a9d8f", percentage: 25 },
    { text: "Item 4", color:"#2a7c9d", percentage: 17 }])

  return <PercentagesSlider divisions={example} setDivisions={setExample}/>
}

export default App
