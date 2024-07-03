import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

// Pages Core Import
import Main_es from './modules/core/pages/es_MX/Welcome';
import Main_en from './modules/core/pages/en_EN/Welcome';
import ErrorPage from './modules/core/pages/es_MX/ErrorPage';




const App = () => {
  const navigate = useNavigate();
  const [userLanguage ] = useState(navigator.language);

  useEffect(() => {
    let path = '/';
    const preferredLanguage = userLanguage;

    if (preferredLanguage.includes('es')) {
      path = '/es';
    } else if (preferredLanguage.includes('en')) {
      path = '/en';
    }

    // Introduce un retraso de 2 segundos antes de redirigir
    setTimeout(() => navigate(path, { replace: true }), 2000);
  }, []); // Dependencias vacías para que solo se ejecute una vez al montar

  return (
    <>
      <Routes>
        <Route path='/*' element={<ErrorPage />} />
        <Route path="/es" element={<Main_es />} />
        <Route path="/en" element={<Main_en />} />
      </Routes>
    </>
  );
};

export default App;