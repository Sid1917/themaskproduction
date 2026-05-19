import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from "./components/layout/Layout";
import HomePage from './pages/HomePage'
import DronePage from './pages/DronePage'
import WeddingPage from './pages/WeddingPage'
import EventsPage from './pages/EventsPage'
import AboutPage from './pages/AboutPage'

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/drone" element={<DronePage />} />
          <Route path="/wedding" element={<WeddingPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
