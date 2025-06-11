import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Layout from './components/Layout'

import { AuthProvider } from "./context/AuthProvider.jsx";
import { PropertyProvider } from "./context/PropertyContext.jsx";

import './index.css'
import MyPropertiesPage from './pages/MyPropertiesPage.jsx'
import ChatPage from './pages/ChatPage.jsx'
import HomePage from './pages/HomePage'
import LoginPage from "./pages/LoginPage.jsx";
import PropertyDetailsPage from './pages/PropertyDetailsPage'
import RegisterPage from "./pages/RegisterPage.jsx";
import NewPropertyPage from "./pages/NewPropertyPage.jsx";
import {useEffect} from "react";
import MatomoPageViewTracker from "./components/MatomoPageViewTracker.jsx";
import {useDocumentTitle} from "./hooks/useDocumentTitle.jsx";


function App() {
    useDocumentTitle();

    useEffect(() => {

        const host = window.location.hostname;
        const matomoHost = `http://${host}:8080`;

        const _mtm = window._mtm = window._mtm || [];
        _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
        const d = document, g = d.createElement('script'), s = d.getElementsByTagName('script')[0];
        g.async=true; g.src=`${matomoHost}/js/container_cFXAUFVF.js`; s.parentNode.insertBefore(g,s);
    }, [])

    return (
        <AuthProvider>
            <PropertyProvider>
                <MatomoPageViewTracker />
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<HomePage />} />
                        <Route path="/bilatzailea" element={<HomePage />} />
                        <Route path='/properties/:id' element={<PropertyDetailsPage />} />
                        <Route path="/nire-iragarkiak" element={<ProtectedRoute element={<MyPropertiesPage />} /> } />
                        <Route path="/txat" element={<ProtectedRoute element={<ChatPage />} /> } />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="/nire-iragarkiak/argitaratu" element={<ProtectedRoute element={<NewPropertyPage />} /> } />
                        <Route path="*" element={<HomePage />} />
                    </Route>
                </Routes>
            </PropertyProvider>
        </AuthProvider>
    )
}

export default App
