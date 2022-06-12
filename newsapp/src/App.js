import React from 'react'
import {
  BrowserRouter as Router, 
  Routes,
  Route
} from 'react-router-dom'
import NNavbar from './component/NNavbar'
import News from './component/News'

let pageSize= 5;
const App = () => {
  return(
      <>
    <Router>
    <NNavbar />
      <Routes>
        <Route path="/" element={<News pageSize={pageSize} country="in" category="business" />}/>
      </Routes>
      <Routes>
        <Route path="/sports" element={<News pageSize={pageSize} country="in" category="sports" />}/>
      </Routes>
      <Routes>
        <Route  path="/business" element={<News pageSize={pageSize} country="in" category="business" />}/>
      </Routes>
      <Routes>
        <Route path="/entertainment" element={<News pageSize={pageSize} country="in" category="entertainment" />}/>
      </Routes>
      <Routes>
        <Route path="/health" element={<News pageSize={pageSize} country="in" category="health" />}/>
      </Routes>
      <Routes>
        <Route path="/sports" element={<News pageSize={pageSize} country="in" category="sports" />}/>
      </Routes>
      <Routes>
        <Route path="/technology" element={<News pageSize={pageSize} country="in" category="technology" />}/>
      </Routes>
      <Routes>
        <Route path="/science" element={<News pageSize={pageSize} country="in" category="science" />}/>
      </Routes>
      <Routes>
        <Route path="/general" element={<News pageSize={pageSize} country="in" category="general" />}/>
      </Routes>
    </Router>
    </>
  )
}

export default App;