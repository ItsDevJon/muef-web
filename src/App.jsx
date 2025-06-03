import { Routes, Route } from 'react-router-dom'
import { Navigation } from './components/Navigation'
import { Search } from './pages/Search'
import { MyOffers } from './pages/MyOffers'
import { Chat } from './pages/Chat'

import 'bulma/css/bulma.min.css';
import './main.css'

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Navigation />}>
                    <Route path='bilatzailea' element={<Search />} />
                    <Route path='nire-iragarkiak' element={<MyOffers />} />
                    <Route path='txat' element={<Chat />} />
                </Route>
            </Routes>
        </>
    )
}

export default App
