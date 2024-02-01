import SideNav from "./components/SideNav.tsx";
import Header from "./components/Header.tsx";
import Resume from "./pages/Resume.tsx";
import DataContextProvider from "./contexts/dataContext.tsx";
import Vendas from "./pages/Vendas.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Venda from "./pages/Venda.tsx";

function App() {
  return (
    <DataContextProvider>
      <BrowserRouter>
        <div className="container">
          <SideNav />
          <main>
            <Header />
            <Routes>
              <Route path="/" element={<Resume />} />
              <Route path="/vendas" element={<Vendas />} />
              <Route path="/vendas/:id" element={<Venda />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </DataContextProvider>
  );
}

export default App;
