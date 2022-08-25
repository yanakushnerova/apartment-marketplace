import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Header from '../components/Header'
import ApartmentsPage from '../components/ApartmentsPage'
import NotFoundPage from '../components/NotFoundPage'
import ApartmentPage from '../components/ApartmentPage'

const App = () => (
  <Router>
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<ApartmentsPage />} />
        <Route path='/apartments/:id' element={<ApartmentPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  </Router>
)

export default App
