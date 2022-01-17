import { useState } from 'react'
import './App.css'
function App() {
  const [job, setJob] = useState({})
  return (
    <div className="App">
      <h1>JOB DASHBOARD</h1>

      <div className="login">
        <form className="newt">
          <h3>LOGIN HERE</h3>
          <input type="text" placeholder="enetr name" />
          <br />
          <br />
          <input type="text" placeholder="enter password" />
          <br />
          <br />
          <button
            onClick={() => {
              fetch('http://loaclhost:4500/jobs')
                .then((res) => res.json())
                .then((res) => {
                  setJob(res)
                })
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default App
