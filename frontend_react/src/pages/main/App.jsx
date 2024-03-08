import React from 'react';
import Layout from '../../components/layout/Layout';
import ContactPage from '../contact_us';
import Home from '../home';

function App() {
  return (
    <Layout>
      <Home/>
      <ContactPage />
    </Layout>
  )
}
export default App
