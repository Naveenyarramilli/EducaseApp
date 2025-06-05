// import {Link} from 'react-router-dom'
// import './index.css'

// const SignUp = () => (
//   <div className="container">
//     <form>
//       <h1 className="heading">
//         Create Your <br />
//         PopX account
//       </h1>
//       {/* Full name */}
//       <fieldset className="custom-fieldset">
//         <legend>
//           Full Name<span className="required">*</span>
//         </legend>
//         <input type="text" placeholder="Full Name" required />
//       </fieldset>
//       {/* Phone number */}
//       <fieldset className="custom-fieldset">
//         <legend>
//           Phone number<span className="required">*</span>
//         </legend>
//         <input type="text" placeholder="Phone number" required />
//       </fieldset>
//       {/* Email address */}
//       <fieldset className="custom-fieldset">
//         <legend>
//           Email address<span className="required">*</span>
//         </legend>
//         <input type="text" placeholder="Email address" required />
//       </fieldset>
//       {/* Password */}
//       <fieldset className="custom-fieldset">
//         <legend>
//           Password<span className="required">*</span>
//         </legend>
//         <input type="text" placeholder="Password" required />
//       </fieldset>
//       {/* Company name */}
//       <fieldset className="custom-fieldset">
//         <legend>Company Name</legend>
//         <input type="text" placeholder="Company Name" />
//       </fieldset>
//       <p>Are you an Agency?*</p>
//       <div>
//         <input type="radio" style={{width: '22px', height: '22px'}} />
//         <span>Yes</span>
//         <input type="radio" style={{width: '22px', height: '22px'}} />
//         <span>No</span>
//       </div>
//       <Link to="/profile">
//         <button type="button">Create Account</button>
//       </Link>
//     </form>
//   </div>
// )
// export default SignUp

import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import './index.css'

const SignUp = () => {
  const history = useHistory()

  // State for each input
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [company, setCompany] = useState('')
  const [isAgency, setIsAgency] = useState(null)
  const [error, setError] = useState('')

  const handleSubmit = () => {
    if (!fullName || !phone || !email || !password || isAgency === null) {
      setError('Please fill all required fields.')
      return
    }
    // Store values
    const userData = {
      fullName,
      email,
      password,
      phone,
      company,
      isAgency,
    }

    // Save in localStorage (optional)
    localStorage.setItem('popx_user', JSON.stringify(userData))
    // All validations passed
    setError('')
    history.push('/profile')
  }

  return (
    <div className="container">
      <form>
        <h1 className="heading">
          Create Your <br />
          PopX account
        </h1>

        <fieldset className="custom-fieldset">
          <legend>
            Full Name<span className="required">*</span>
          </legend>
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={e => setFullName(e.target.value)}
          />
        </fieldset>

        <fieldset className="custom-fieldset">
          <legend>
            Phone number<span className="required">*</span>
          </legend>
          <input
            type="text"
            placeholder="Phone number"
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
        </fieldset>

        <fieldset className="custom-fieldset">
          <legend>
            Email address<span className="required">*</span>
          </legend>
          <input
            type="text"
            placeholder="Email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </fieldset>

        <fieldset className="custom-fieldset">
          <legend>
            Password<span className="required">*</span>
          </legend>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </fieldset>

        <fieldset className="custom-fieldset">
          <legend>Company Name</legend>
          <input
            type="text"
            placeholder="Company Name"
            value={company}
            onChange={e => setCompany(e.target.value)}
          />
        </fieldset>

        <p>
          Are you an Agency?<span className="required">*</span>
        </p>
        <div style={{display: 'flex', gap: '20px', alignItems: 'center'}}>
          <label style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
            <input
              type="radio"
              name="agency"
              style={{width: '22px', height: '22px'}}
              onChange={() => setIsAgency(true)}
            />
            Yes
          </label>
          <label style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
            <input
              type="radio"
              name="agency"
              style={{width: '22px', height: '22px'}}
              onChange={() => setIsAgency(false)}
            />
            No
          </label>
        </div>
        {error && <p style={{color: 'red'}}>{error}</p>}
        <button type="button" onClick={handleSubmit}>
          Create Account
        </button>
      </form>
    </div>
  )
}

export default SignUp
