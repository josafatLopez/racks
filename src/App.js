import Header from "./components/Header";
import Rack from "./components/racks/Rack";
import Room from "./components/racks/Room";
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Room />} />
        <Route path="/:room/:rackNum" element={<Rack />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
