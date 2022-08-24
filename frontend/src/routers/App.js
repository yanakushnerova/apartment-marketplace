import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import ApartmentsPage from '../components/ApartmentsPage'

import NotFoundPage from '../components/NotFoundPage'

const App = () => (
  <Router>
    <div>
      <Routes>
        <Route path='/' element={<ApartmentsPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  </Router>
)

export default App
