import { Route, Routes, BrowserRouter } from "react-router-dom"
import { Helmet } from "react-helmet" 
import './App.css';
import Inicio from './paginas/Inicio';

function App() {
  return (
    <>
    <BrowserRouter basename='/'>
      <Helmet>
        <title>KapitalizacionPolitik</title>
        <meta name="description" content="KapitalizacionPolitik" />
      </Helmet>
      <Routes>
          <Route path="/" element={<Inicio />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
