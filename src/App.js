import Head from "./components/head/head"
import Home from "./components/articlecomps/home/home";
import Contacts from "./components/articlecomps/contacts/contacts";
import {Routes, Route} from 'react-router-dom';
import Hiking from "./components/articlecomps/hiking/hiking";
import Faq from "./components/articlecomps/faq/faq";

export default function App() {
  return (
      <div className="App">
        <Head/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/hiking" element={<Hiking/>}/>
              <Route path="/faq" element={<Faq/>}/>
              <Route path="/contacts" element={<Contacts/>}/>
          </Routes>
      </div>
  );
}
