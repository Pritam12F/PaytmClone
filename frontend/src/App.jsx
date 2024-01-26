import {Routes, Route} from 'react-router-dom'

function App() {

  return <Routes>
    <Route path='/signup' element={<div>sign up</div>}></Route>
    <Route path='/signin' element={<div>sign in</div>}></Route>
    <Route path='/dashboard' element={<div>dashboard</div>}></Route>
  </Routes>
}

export default App
