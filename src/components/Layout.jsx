import React from 'react';
import { Container } from 'react-bootstrap';
import { Header } from '.';
import Sidebar from './Sidebar';
import './Layout.css';

const Layout = ({ children }) =>
  <Container>
       <div class ="container"> 
    <Header/>

      
    <Sidebar />
    <main>
      {children}
    </main>
    </div>
  </Container>
;

export default Layout;
