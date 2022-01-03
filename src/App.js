import { BrowserRouter, Routes, Route } from "react-router-dom"
import Portfolio from "./routes/Portfolio" 
import WorkDetail from "./routes/WorkDetail"
import Work from './routes/Work'
import Blog from "./routes/Blog"
import './scss/main.scss'
import Contact from "./routes/Contact"

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Portfolio /> } />
          <Route path="/work" element={ <Work /> } /> 
          <Route path="/work-detail" element={ <WorkDetail /> } />
          <Route path="/blog" element={ <Blog /> } /> 
          <Route path="/contact" element={ <Contact /> } />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
