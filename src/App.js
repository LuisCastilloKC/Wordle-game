import { useEffect, useState } from "react";

const API_URL = ' https://api.frontendexpert.io/api/fe/wordle-words';

function App() {
  const [solution, setSolution] = useState('')
  
  useEffect(()=>{
    const fetchWord = async () => {
      const response = await fetch(API_URL)
      const words = await response.json();
      const randomWord = words[Math.floor(Math.random() * words.length)];
      setSolution(randomWord);
    };
    fetchWord()
  }, [])

  return (
    <div className="App">
      {solution}
    </div>
  );
}

export default App;
