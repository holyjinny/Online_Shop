import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [hello, setHello] = useState('')

  axios.get("/api/hello")
  .then(response => setHello(response.data))
  .catch(error => console.log(error))

  return (
    <div className="App">
      <h2>백엔드에서 가져온 정보 : {hello}</h2>
    </div>
  )
}

export default App
