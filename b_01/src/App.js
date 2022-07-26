import Header from './components/Header';
import Footer from './components/Footer';
import HomePages from './pages/HomePages';
function App() {
  return (
    <div className="wrapper-content">
      <Header />
      <HomePages />
      <div className="spacing"></div>
      <Footer />
    </div>
  );
}

export default App;
