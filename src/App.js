import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import About from './pages/About';
import Form from './pages/Form';
import Awards from './pages/Awards';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Images from './pages/Images';
import Header from './pages/HeaderPage';
import Hire from './pages/Hire';
import Services from './pages/Services';
import Projects from './pages/Projects';
import News from './pages/News';

// import { FirebaseCMSApp } from "@firecms/core";


// import { collections } from './Cms';
// import { db } from './Firebase';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/form" element={<Form />} />
          <Route path="/about" element={<About />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/images" element={<Images />} />
          <Route path="/header" element={<Header />} />
          <Route path="/hire" element={<Hire />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
