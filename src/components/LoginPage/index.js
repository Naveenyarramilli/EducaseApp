import {useState} from 'react'
import {useHistory} from 'react-router-dom'

import {
  Heading,
  Paragraph,
  Container,
  Main,
  Button,
  Fieldset,
  Legend,
} from './styledComponents'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const history = useHistory()
  const data = JSON.parse(localStorage.getItem('popx_user'))

  const handleSubmit = () => {
    if (
      !email ||
      !password ||
      data.email !== email ||
      data.password !== password
    ) {
      setError(
        'Please fill all required fields or check the email and password are corrected or not.',
      )
      return
    }
    setError('')
    history.push('./profile')
  }

  return (
    <Container>
      <Main>
        <Heading>Signin to your PopX account</Heading>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </Paragraph>
        <Fieldset>
          <Legend>Email Address: </Legend>
          <input
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </Fieldset>
        <Fieldset>
          <Legend>Password: </Legend>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </Fieldset>
        {error && <p style={{color: 'red'}}>{error}</p>}

        <Button onClick={handleSubmit}>Login</Button>
      </Main>
    </Container>
  )
}
export default LoginPage
