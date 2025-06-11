import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_NAME = 'MUEF'; // Default site name

const routeTitles = [
    { pattern: /^\/$/, title: 'Bilatzailea' },
    { pattern: /^\/login$/, title: 'Login' },
    { pattern: /^\/register$/, title: 'Register' },
    { pattern: /^\/txat$/, title: 'Txat' },
    { pattern: /^\/bilatzailea$/, title: 'Bilatzailea' },
    { pattern: /^\/nire-iragarkiak$/, title: 'Nire Iragarkiak' },
    { pattern: /^\/nire-iragarkiak\/argitaratu$/, title: 'Argitaratu Iragarkia' },
    { pattern: /^\/properties\/.+$/, title: 'Iragarkiaren Xehetasunak' },
    { pattern: /.*/, title: SITE_NAME }, // fallback
];

export function useDocumentTitle() {
    const location = useLocation();

    useEffect(() => {
        const match = routeTitles.find(rt => rt.pattern.test(location.pathname));
        document.title = `${match ? match.title : SITE_NAME} · ${SITE_NAME}`;
    }, [location]);
}
