import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import FadeMenu from './components/Dropdown';

const  AppLayout=()=>{
  return(
    <>
    <Header/>
    <Body/>
   

    <Footer/>
    </>
  );
};

export default AppLayout;
