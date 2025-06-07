import Footer from '../components/HomePage/Footer.jsx';
import HeroHeader from '../components/HomePage/Sidebar/HeroHeader.jsx';
import Pagination from '../components/HomePage/Sidebar/Pagination.jsx';
import PropertyList from '../components/HomePage/Sidebar/PropertyList.jsx';
import SearchBar from '../components/HomePage/Sidebar/SearchBar.jsx';
import Sidebar from '../components/HomePage/Sidebar/Sidebar';

const HomePage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <HeroHeader />
            <SearchBar />
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow flex flex-col lg:flex-row gap-8">
                <div className="lg:w-2/3">
                    <PropertyList />
                    <Pagination />
                </div>
                <Sidebar />
            </main>
            <Footer />
        </div>
    );
}

export default HomePage;