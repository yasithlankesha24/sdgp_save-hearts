import logo from './logo.svg';
import './App.scss';
import {NavigationBar} from "./components/NavigationBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import 'bootstrap/dist/css/bootstrap.min.css';
import {ContactUsPage} from "./pages/ContactUsPage";
import {ReserveTimePage} from "./pages/ReserveTimePage";

function App() {
  return (
      <div className="App">
        <NavigationBar/>
        <BrowserRouter>
          <Routes>
            <Route path={'/'} element={<HomePage/>}/>
              <Route path={'/contact-us'} element={<ContactUsPage/>}/>
              <Route path={'/reserve-time'} element={<ReserveTimePage/>}/>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
