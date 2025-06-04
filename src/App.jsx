import { Routes, Route } from 'react-router-dom'
import { MyOffers } from './pages/MyOffers'
import { Chat } from './pages/Chat'
import HomePage from './pages/HomePage'
import Layout from './components/Layout'
import { SearchProvider } from './context/SearchContext'

import './index.css'

function App() {
    return (
        <SearchProvider>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="bilatzailea" element={<HomePage />} />
                    <Route path="nire-iragarkiak" element={<MyOffers />} />
                    <Route path="txat" element={<Chat />} />
                    <Route path="*" element={<HomePage />} />
                </Route>
            </Routes>
        </SearchProvider>
    )
}

export default App
