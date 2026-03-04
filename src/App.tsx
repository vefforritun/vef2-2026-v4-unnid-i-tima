import './App.css'
import { Routes, Route } from 'react-router'
import { IndexPage } from './pages/IndexPage'
import { NewsPage } from './pages/NewsPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { NewNewsPage } from './pages/NewNewsPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/frettir/:slug" element={<NewsPage />} />
      <Route path="/ny-frett" element={<NewNewsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
