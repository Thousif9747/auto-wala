import React from 'react'
import Header from './components/Header';
import Hero from './components/Hero';
import BookingForm from './components/BookingForm'
import Reviews from './components/Reviews'
import MapSection from './components/MapSection'
import Contact from './components/Contact'
import Features from './components/Features'
import DownloadApp from './components/DownloadApp'
import DriverPartner from './components/DriverPartner'
import LiveTracking from './components/LiveTracking'
import Emergency from './components/Emergency'
import Payment from './components/Payment'
import Profile from './components/Profile'
import Rewards from './components/Rewards'
import DriverPortal from './components/DriverPortal'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<> 
            <Hero />
            <BookingForm />
            <MapSection />
            <Reviews />
            <DownloadApp />
          </>} />
          <Route path="/features" element={
            <>
              <Features />
              <Rewards />
            </>
          }
          />
          <Route path="/contacts" element={
            <>
              <Contact />
              <Emergency />
            </>
          } />
          <Route path="/driver" element={
            <>
              <DriverPartner />
              <DriverPortal />
              <LiveTracking />
            </>
          }/>

          <Route path='/profile' element={
            <>
            <Payment />
            <Profile />
            </>
          }/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
