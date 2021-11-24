import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BrasilApi from '../pages/BrasilApi';
import ViaCep from '../pages/ViaCep';
import Error404 from '../pages/Error404';

const RouteList = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<BrasilApi />} />
      <Route path="/viacep" element={<ViaCep />} />
      <Route path="/viacep" element={<ViaCep />} />
      <Route path="/*" element={<Error404 />} />
    </Routes>
  </BrowserRouter>
);

export default RouteList;