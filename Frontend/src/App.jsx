import { useState } from 'react'
import './App.css'
import { FrontPage } from './pages/frontpage/frontpage.page'
import { Routes, Route } from 'react-router-dom'
import { ErrorPage } from './pages/errorPage/error.page'
import { Navbar } from './components/navbar/navbar.component'
import { Layout } from './components/layout/layout.component'
import { LoginModal } from './components/loginModal/loginModal'
import { ToastContainer } from "react-toastify";
import { Footer } from './components/footer/footer'
import { LiftsPage } from './pages/liftsPage/liftsPage'
import { FilterProvider } from './components/providers/filter'
import { LiftDetailsPage } from './pages/liftDetails/liftDetailsPage'
import { HowItWorksModal } from './components/howItWorksModal/howItWorksModal.jsx'
import { BookingPage } from './pages/bookingPage/bookingPage.jsx'

function App() {


  return (

    <>
      <FilterProvider>
        <Navbar />
        <LoginModal />
        <HowItWorksModal />
        <Layout>
          <Routes>
            <Route path="/" element={<FrontPage />} />
            <Route path="/lift" element={<LiftsPage />} />
            <Route path="/lift/:liftId" element={<LiftDetailsPage />} />
            <Route path="/lift/book/:liftId" element={<BookingPage />} />


            <Route path="/*" element={<ErrorPage />} />
          </Routes>

        </Layout>
        <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
        <Footer />
      </FilterProvider>
    </>
  )
}

export default App
