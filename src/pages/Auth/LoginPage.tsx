import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '@/stores/authStore'
import { login } from '@/api/auth'
import useApi from '@/hook/useApi'
import AuthLayout from '@/layouts/AuthLayout'
import AuthButton from '@/components/Auth/AuthButton'
import AuthCard from '@/components/Auth/AuthCard'
import AuthInput from '@/components/Auth/AuthInput'
import AuthTitle from '@/components/Auth/AuthTitle'
import AuthForm from '@/components/Auth/AuthForm'
import AuthFooterLink from '@/components/Auth/AuthFooterLink'

export default function LoginPage() {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const { execute, loading, error } = useApi(login)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const result = await execute({
        email: form.email,
        password: form.password,
      })

      useAuthStore.getState().setAuth({
        accessToken: result.accessToken,
        refreshToken: result.refreshToken,
        user: result.user,
      })

      alert('Login successful.')
      navigate('/')
    } catch (err) {
      console.log(err)
      alert('Login failed.')
    }
  }

  return (
    <AuthLayout>
      <AuthCard>
        <AuthTitle title='LOGIN' subtitle='Welcome PingPong' />

        <AuthForm onSubmit={handleLogin}>
          <AuthInput
            name='email'
            placeholder='email'
            type='email'
            value={form.email}
            onChange={handleChange}
          />

          <AuthInput
            name='password'
            placeholder='password'
            type='password'
            value={form.password}
            onChange={handleChange}
          />
          <AuthButton type='submit' disabled={loading}>
            {loading ? 'Start PingPong...' : 'Start PingPong'}
          </AuthButton>
        </AuthForm>
        {error && <p className='text-red-500'>{String(error)}</p>}
        <AuthFooterLink text="Don't have an account?" linkText='Sign up' href='/signup' />
      </AuthCard>
    </AuthLayout>
  )
}
