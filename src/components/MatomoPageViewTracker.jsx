import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const MatomoPageViewTracker = () => {
    const location = useLocation();

    useEffect(() => {
        const pushPageView = () => {
            const url = window.location.href;
            const title = document.title;

            window._mtm = window._mtm || [];
            window._mtm.push({
                event: 'mtm.PageView',
                url: url,
                documentTitle: title,
            });
        };

        // If Matomo Tag Manager has not loaded yet, wait until it does
        const checkMatomoReady = () => {
            if (window.MatomoTagManager?.dataLayer) {
                pushPageView();
            } else {
                setTimeout(checkMatomoReady, 100);
            }
        };

        checkMatomoReady();
    }, [location]);

    return null;
};

export default MatomoPageViewTracker;
