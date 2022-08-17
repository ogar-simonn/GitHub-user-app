import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components"
const ErrorPage = () => {
  return (
    <Wrapper>
      <div>
        <h1>404</h1>
        <h3>Sorry the page you tried cannot be found</h3>
        <Link to="/" className="btn">
          Back Home
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
min-height: 100vh;
display: grid;
place-items: center;
text-align: cemter;
background: var(--clr-primary-10);
h1 {
  font-size: 10rem;
}
h3 {
  color: var(----clr-primary-10);
  margin-bottom: 1.5rem;
}
`;


export default ErrorPage;
