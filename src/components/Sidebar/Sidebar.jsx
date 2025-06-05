import React from 'react';
import SubscribeBox from './SubscribeBox';
import RelatedSearches from './RelatedSearches';
import RecentlyViewed from './RecentlyViewed';

const Sidebar = () => {
    return (
        <aside className="lg:w-1/3 space-y-8">
            <SubscribeBox />
            <RelatedSearches />
            {/* <RecentlyViewed /> */}
        </aside>
    );
}

export default Sidebar;
