import './App.css';
import './assets/css/shared.css';
import AdventCalendar from './components/AdventCalendar/AdventCalendar';
import CountdownTimer from './components/CountDownTimer/CountDownTimer';
import { BrowserRouter, Routes, Route, Navigate } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CountdownTimer />} />
        <Route path="/calendar" element={<AdventCalendar />} />
        <Route path="*" element={<Navigate to='/' replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
