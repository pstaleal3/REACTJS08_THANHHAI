import './login.css'
import { Link, useHistory } from "react-router-dom"
import Input from '../../components/shared/Input'
import Button from '../../components/shared/Button'
import { useState } from 'react'
import { validateFormData } from '../../helpers'
import { useDispatch } from 'react-redux'
import { actLoginAsync } from '../../store/auth/actions'

function LoginPage() {
  const history = useHistory()
  const dispatch = useDispatch()
  const [isFormDirty, setIsFormDirty] = useState(true)
  const [formError, setFormError] = useState('')
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    username: {
      value: 'congluc1902',
      error: ''
    },
    password: {
      value: '231313',
      error: ''
    }
  })

  function handleOnChange(evt) {
    const name = evt.target.name
    const value = evt.target.value.trim()
    const error = validateFormData({ value, name })

    setFormData({
      ...formData,
      [name]: {
        value,
        error
      }
    })
    setIsFormDirty(true)
  }

  function checkFormIsValid() {
    if (!isFormDirty) {
      setFormData({
        username: { 
          value: '', 
          error: validateFormData({
            value: '',
            name: 'username'
          }) 
        },
        password: {
          value: '',
          error: validateFormData({
            value: '',
            name: 'password'
          })
        }
      })
      return false
    }

    if (formData.username.error || formData.password.error) {
      return false
    }

    return true
  }

  function handleSubmit(evt) {
    evt.preventDefault()

    const isValid = checkFormIsValid()

    if (!isValid) {
      console.log('Form Error ...')
      return
    }
    const { username, password } = formData
    
    if (loading) {
      return
    }

    setLoading(true)
    setFormError('')


    dispatch(actLoginAsync(username.value, password.value))
      .then(res => {
        if (res.ok) {
          history.push('/')
        } else {
          setFormError(res.error)
          setLoading(false)
        }
      })
  }

  return (
    <main className="login">
      <div className="spacing" />
      <div className="tcl-container">
        <div className="tcl-row">
          <div className="tcl-col-12 tcl-col-sm-6 block-center">
            <h1 className="form-title text-center">Đăng nhập</h1>
            <div className="form-login-register">
              { formError && <p className="form-login__error">{formError}</p> }
              <form autoComplete="off" onSubmit={handleSubmit}>
                <Input 
                  label="Tên đăng nhập" 
                  placeholder="Nhập tên đăng nhập ..."
                  autoComplete="off"
                  value={formData.username.value}
                  error={formData.username.error}
                  name="username"
                  onChange={handleOnChange}
                  isShowError
                />
                <Input 
                  type="password" 
                  label="Mật khẩu" 
                  placeholder="Nhập mật khẩu của bạn ..."
                  autoComplete="new-password"
                  value={formData.password.value}
                  error={formData.password.error}
                  name="password"
                  onChange={handleOnChange}
                  isShowError
                />

                <div className="d-flex tcl-jc-between tcl-ais-center">
                  <Button type="primary" size="large" loading={loading}>Đăng nhập</Button>
                  <Link to="/register">Đăng ký</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="spacing" />
    </main>

  )
}

export default LoginPage