import {Link} from 'react-router-dom'
import {
  Container,
  Main,
  Heading,
  Paragraph,
  CreateAccountBtn,
  Registered,
} from './styledComponents'

const LandingPage = () => (
  <Container>
    <Main>
      <Heading>Welcome to PopX</Heading>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </Paragraph>
      <Link to="/signUp">
        <CreateAccountBtn>Create Account</CreateAccountBtn>
      </Link>
      <Link to="/login">
        <Registered>Already Registered? Login</Registered>
      </Link>
    </Main>
  </Container>
)
export default LandingPage
