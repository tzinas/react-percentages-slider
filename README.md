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
import PercentagesSlider from 'react-percentages-slider'

const App = () => {
  const [expenses, setExpenses] = useState([
    { text: "House", color:"#e9c46a", percentage: 28 },
    { text: "Car", color: "#e76f51", percentage: 39 },
    { text: "Food", color:"#2a9d8f", percentage: 25 },
    { text: "Entertainment", color:"#2a7c9d", percentage: 17 }])

  return <PercentagesSlider divisions={expenses} setDivisions={setExpenses}/>
}
```

## License

MIT © [tzinas](https://github.com/tzinas)
