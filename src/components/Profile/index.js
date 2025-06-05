import {
  AccountSettings,
  Paragraph,
  Name,
  Gmail,
  UserImage,
  PhotoImage,
} from './styledComponents'
import './index.css'

const Profile = () => {
  const data = JSON.parse(localStorage.getItem('popx_user'))

  return (
    <div className="container">
      <div className="header">
        <AccountSettings>Account Settings</AccountSettings>
        <div className="section-1">
          <UserImage>
            <PhotoImage> </PhotoImage>
          </UserImage>

          <div className="section-2">
            <Name>{data.fullName}</Name>
            <Gmail>{data.email}</Gmail>
          </div>
        </div>
        <Paragraph>
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </Paragraph>
      </div>
    </div>
  )
}
export default Profile
