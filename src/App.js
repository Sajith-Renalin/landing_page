import './App.css';
import Page from "./Components/Page";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlessingPlans from './Components/Blessingplans';

function App() {
  return (
    <Router>
        <Routes>
        <Route path="/landing_page" element={<Page />} />
          <Route path="/blessing-plans" element={<BlessingPlans />} />
        </Routes>
    </Router>
  );
}

export default App;
