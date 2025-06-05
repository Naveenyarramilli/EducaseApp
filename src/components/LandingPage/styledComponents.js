import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
`
export const Main = styled.div`
  width: 375px;
  height: 100vh;
  background-color: #f7f8f9;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 20px;
`

export const Heading = styled.h1`
  width: 231px;
  height: 33px;
  /* UI Properties */
  text-align: left;
  font: normal normal medium 28px/17px Rubik;
  letter-spacing: 0px;
  color: #1d2226;
  opacity: 1;
`
export const Paragraph = styled.p`
  width: 232px;
  height: 48px;
  /* UI Properties */
  text-align: left;
  font: normal normal normal 18px/26px Rubik;
  letter-spacing: 0px;
  color: #1d2226;
  opacity: 0.6;
`
export const CreateAccountBtn = styled.button`
  width: 100%;
  height: 46px;
  background: #6c25ff 0% 0% no-repeat padding-box;
  border-radius: 6px;
  opacity: 1;
  margin-top: 20px;
`
export const Registered = styled.button`
  width: 100%;
  height: 46px;
  background: #6c25ff4b 0% 0% no-repeat padding-box;
  opacity: 1;
  margin: 10px 0px;
  color: #1d2226;
`
