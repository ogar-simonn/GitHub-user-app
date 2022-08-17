import React from  "react"
import styled from  "styled-components"
const Login = () => {
  return <Wrapper>
    <div className="container">
    <h1>Login Github user</h1>
    <button className="btn">Login</button>
    </div>
  </Wrapper>
}

const Wrapper = styled.section`
min-height: 100vh;
display: grid;
place-items: center;
.container {
  width: 90vw;
  min-width: 600px;
  text-align: center;
}
`

export default Login;