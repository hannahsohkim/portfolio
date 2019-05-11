import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import Contact from './components/Contact';
import styled from 'styled-components'
import Projects from './components/Projects';
import Life from './components/Life';
import Footer from './components/Footer';
import Header from './components/Header';

const Wrapper = styled.div`
  text-align: center;
  margin-left: 100px;
  margin-right: 100px;

`

const PortfolioRouter = () => (
  <Router>
    <Wrapper>
      <Header />
      <Route exact path="/" component={App} >
        <Route path="/projects" component={Projects} />
        <Route path="/life" component={Life} />
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
      </Route>
      <br />
      <br />
      <br />
      <Footer />
    </Wrapper>
    </Router>
  )

export default PortfolioRouter;