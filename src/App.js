import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Plans from './components/Product/Product';
import Profile from './components/Profile/Profile';
import { createContext, useState } from 'react';

export const mycontext = createContext(null);

function App() {
  const [cartcount, setCartCount] = useState(0);
  return (
    <mycontext.Provider value ={{cartcount,setCartCount}}>
      <div className="App">
      <Header/>
      <Profile/>
      <Plans/>
      <Footer/>
    </div>
    </mycontext.Provider>
    
  );
}

export default App;
