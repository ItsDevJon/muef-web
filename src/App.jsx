import { Routes, Route } from 'react-router-dom'
import { MyOffers } from './pages/MyOffers'
import ChatPage from './pages/ChatPage.jsx'
import HomePage from './pages/HomePage'
import Layout from './components/Layout'

import './index.css'
import PropertyDetailsPage from './pages/PropertyDetailsPage'
import {PropertyProvider} from "./context/PropertyContext.jsx";

function App() {
    return (
        <PropertyProvider>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="bilatzailea" element={<HomePage />} />
                    <Route path='/properties/:id' element={<PropertyDetailsPage />} />
                    <Route path="nire-iragarkiak" element={<MyOffers />} />
                    <Route path="txat" element={<ChatPage />} />
                    <Route path="*" element={<HomePage />} />
                </Route>
            </Routes>
        </PropertyProvider>
    )
}

export default App
