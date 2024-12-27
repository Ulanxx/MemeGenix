import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Web3Provider } from './providers/Web3Provider';
import { LanguageProvider } from './i18n/context';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { CreateTokenPage } from './pages/CreateTokenPage';

export default function App() {
  return (
    <LanguageProvider>
      <Web3Provider>
        <Router>
          <div className="min-h-screen bg-gray-50">
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/create/*" element={<CreateTokenPage />} />
            </Routes>
          </div>
        </Router>
      </Web3Provider>
    </LanguageProvider>
  );
}