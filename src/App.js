import './App.css';
import Header from './components/ui/Header';
import Main from './components/layout/Main/Main';
import Products from './components/shop/Products';
import { useSelector } from 'react-redux';
import About from './components/layout/about/About';
import Testimonials from './components/layout/about/Testimonials';
import Footer from './components/layout/footer/Footer';

function App() {
  const {items} = useSelector(state=> state.ui)
  const topItems = items.filter(item=> item.price < 150)
  return (
    <>
    <Header />
    <Main />
    <Products header="Our Collection" items={items}/>
    <Products header="Top Sellers" items={topItems}/>
    <About />
    <Testimonials />
    <Footer />
    </>
  );
}

export default App;
