import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import List from './components/List';

function App() {
  // const [apiInfo ,updateApiInfo] = useState({})
  // const url = `https://samples.openweathermap.org/data/2.5/forecast?id=524901&appid=53c11976204e6cfd8fb802db342e8f88`

  // useEffect(() => {
  //   fetch(url)
  //   .then( response => response.text())
  //   .then(function(text) {
  //     updateApiInfo(text)
  //   })
  
  // }, [url]);
  return (
    <div className="App">
      <h1 >
        Helloo
      </h1>
      <Button />
      <List />
    </div>
  );
}

export default App;
