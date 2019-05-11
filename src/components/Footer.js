import React from 'react';
import styled from 'styled-components';

const Icon = styled.i`
  color: grey;
  &:hover {
    text-shadow: 1px 1px 1px #ccc;
  }
`

const Footer = () => {
  return (
    <div>
      <a href="mailto:hannahsohkim@gmail.com" target="_blank" rel="noopener noreferrer">
        <Icon className="fa fa-envelope fa-fw fa-3x" />
      </a>
      <a href="http://www.linkedin.com/in/hannah-sohyoung-kim" target="_blank" rel="noopener noreferrer">
        <Icon className="fab fa-linkedin fa-fw fa-3x" />
      </a>
      <a href="https://github.com/hannahsohkim" target="_blank" rel="noopener noreferrer">
        <Icon className="fab fa-github fa-fw fa-3x" />
      </a>
      <a href="https://medium.com/@hannahsohkim" target="_blank" rel="noopener noreferrer">
        <Icon className="fab fa-medium fa-fw fa-3x" />
      </a>
      <br />
      <p>© 2019 Hannah Kim</p>
      <br/>
    </div>
  )
}

export default Footer;
