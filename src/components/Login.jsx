import Face from '../assets/fb_icon_325x325.png'
import PE from '../assets/f.png'
import React from 'react'


const Login = () => {
  return (
    <div className='logo'>
      <img src={PE} alt="" />
        <div className='inp'>
          <input type="email"  placeholder='E-mail ou nome do usuario'/>
            <input type="password" placeholder='Passoword"'/>
        </div>

          <div className='stybtn'>
            <button>ENTRAR</button>
          </div>
            <div className='alinstybyn'>
              <button className='uncl'> FACEBOOK </button>
              <button className='uncl2'>GOOGLE</button>
            </div>
    </div>
  )
}

export default Login