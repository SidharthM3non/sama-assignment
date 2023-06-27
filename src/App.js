import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderBar from './components/dashboard/HeaderBar';
import Trainings from './components/Trainings/trainings';
import Highlights from './components/Highlights/highlights';
import Cases from './components/Cases/cases';

function App() {
  return (
    <BrowserRouter>
      <HeaderBar />
      <Routes>
        <Route path="/" element={<Cases />} />
        <Route path="/trainings" element={<Trainings />} />
        <Route path="/highlights" element={<Highlights />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
