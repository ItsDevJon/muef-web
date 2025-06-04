import Footer from '../components/Footer';
import HeroHeader from '../components/HeroHeader';
import Pagination from '../components/Pagination';
import PropertyList from '../components/PropertyList';
import SearchBar from '../components/SearchBar';
import Sidebar from '../components/Sidebar/Sidebar';

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