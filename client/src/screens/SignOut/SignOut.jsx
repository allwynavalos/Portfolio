import { useEffect } from 'react'
import {logout} from '../../services/admin'
import { useHistory } from 'react-router-dom'

const SignOut = (props) => {
  const { setAdmin } = props
  const history = useHistory()

  useEffect(() => {
    const signOutAdmin = async () => {
      await SignOut()
      setAdmin(null)
      history.push('/')
    }
    signOutAdmin()
  }, [history, setAdmin])

  return ''
}

export default SignOut