
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './scenes/navbar'
import Services from './scenes/services'
import Extra from './scenes/extra'
import Questions from './scenes/questions'
import Counter from './scenes/counter';
import Footer from './scenes/footer';
import ScrollToTop from 'react-scroll-to-top';
import { FaArrowUp } from "react-icons/fa";


function App() {

  return (
    <>
    <div className='app container'>
      <Navbar />
      <ScrollToTop className='flex justify-center items-center bg-black' smooth component={<FaArrowUp className='w-6 h-6' />}/>
      <Services />
      <Extra />
      <Counter />
      <Questions />
      <Footer />
    </div>
   
    </>
  )
}

export default App
