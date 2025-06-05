import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  opacity: 1;
`
export const Main = styled.div`
  width: 375px;
  background: #f7f8f9 0% 0% no-repeat padding-box;
  padding: 20px 40px;
`

export const Heading = styled.h1`
  width: 200px;
  height: 69px;
  text-align: left;
  font: normal normal medium 28px/36px Rubik;
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
  margin-top: 20px;
`

export const Button = styled.button`
  width: 100%;
  height: 46px;
  background: #cbcbcb 0% 0% no-repeat padding-box;
  color: #ffffff;
  border-radius: 6px;
  opacity: 1;
  margin-top: 20px;
  cursor: pointer;

  border: none;
`
export const Fieldset = styled.fieldset`
  height: 40px;
  border: 1px solid #cbcbcb;
  border-radius: 6px;
  opacity: 1;
`

export const Legend = styled.legend`
  padding-right: 10px;
  padding-left: 5px;
  font-weight: bold;
`
