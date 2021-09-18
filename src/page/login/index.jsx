import './index.scss'
import CoverImg from '../../asset/page/login/cover.jpg'

const Login = () => {
  return (
    <div id='login'>
      <div className='show'>
        <img src={CoverImg} alt="登录界面封面" />
      </div>
      <div id='login-form'>
        <div className='content'>
          <div className='title'>
            <h2>Welcome Use Blog</h2>
            <span>使用账号登录该网站</span>
          </div>
          <div className='form'>
            <form>
              <div>
                <label>UserName</label>
                <input type='text' placeholder='UserName/Email' />
              </div>
              <div>
                <label>Password</label>
                <input type='password' />
              </div>
              <div className='submit'>
                <input type='submit' value='Login Up' />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login