# react-percentages-slider

> A division percentages slider React component

[![NPM](https://img.shields.io/npm/v/react-percentages-slider.svg)](https://www.npmjs.com/package/react-percentages-slider) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![Percentages slider](images/example.png)


## Install

```bash
npm install --save react-percentages-slider
```

## Usage

```jsx
import React, {useState} from 'react'
import PercentagesSlider from 'react-percentages-slider'

const App = () => {
  const [example, setExample] = useState([
    { text: "Item 1", color:"#e9c46a", percentage: 28 },
    { text: "Item 2", color: "#e76f51", percentage: 39 },
    { text: "Item 3", color:"#2a9d8f", percentage: 25 },
    { text: "Item 4", color:"#2a7c9d", percentage: 17 }])

  return <PercentagesSlider divisions={example} setDivisions={setExample}/>
}
```

## License

MIT © [tzinas](https://github.com/tzinas)
