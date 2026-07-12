import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from "./components/layout/Layout";
import HomePage from './pages/HomePage'
import DronePage from './pages/DronePage'
import WeddingPage from './pages/WeddingPage'
import EventsPage from './pages/EventsPage'
import AboutPage from './pages/AboutPage'
import StickyLeadBar from './components/shared/StickyLeadBar'

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/wedding" element={<WeddingPage />} />
          <Route path="/drone" element={<DronePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
         <StickyLeadBar /> 
      </Layout>
    </BrowserRouter>
  )
}
