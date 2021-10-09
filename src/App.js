import './App.css';
import Nav from './components/Nav'
import Header from './components/Header'
import Introduction from './components/Introduction'
import Product from './components/Product'
import ProductList from './components/ProductList'
import Story from './components/Story'
import Issue from './components/Issue'
import Video from './components/Video'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
        <Nav/>
        <Header/>
        <Introduction/>
        <Product/>
        <ProductList/>
        <Story/>
        <Issue/>
        <Video/>
        <Footer/>
    </div>
  );
}

export default App;
