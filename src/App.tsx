import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactsPage from './pages/ContactsPage';
import ContactCreatePage from './pages/ContactCreatePage';
import ContactEditPage from './pages/ContactEditPage';
import ChartPage from './pages/ChartPage';
import { Provider } from 'react-redux';
import store from './store/store';
import Sidebar from './components/Sidebar';
import ContactViewPage from './pages/ContactViewPage';
import Contact from './feature/Contact';
import DefaultLayout from './layout/DefaultLayout';
import ContactListPage from './pages/ContactListPage';
const App: React.FC = () => {
  return (
    <Provider store={store}>
      {/* <Dashboard /> */}
      <Router>
        <div className="">
          <Routes >
            <Route element={<DefaultLayout />}>
            <Route path='/' element={<Contact />}/>
            <Route path="chart" element={<ChartPage />} />
            <Route path='list' element={<ContactListPage />} />

            <Route path="contacts" element={<ContactsPage />} >
         
            <Route path=":id/edit" element={<ContactEditPage />} />
            <Route path=":id" element={<ContactViewPage />} /> 
            </Route>
            </Route>
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
