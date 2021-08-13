import Layout from "../../components/Layout/Layout"
import {login} from '../../services/admin'
import { useState } from 'react';
import {useHistory } from 'react-router-dom';


const  SignIn = (props) => {
  const history = useHistory();
  const {setAdmin} = props;

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };


  const logMe = async (e) => {
    e.preventDefault();
    const signAdmin = async () => {
      const admin = await login(formData)
      setAdmin(admin);
      setTimeout(() => {
        history.push('/projects');

      },250);
    }
    signAdmin()
  }

  return (
    <Layout>

    <div className="login-container">
        <h3 className="login-header">login</h3>
      <form onSubmit={logMe}>
        <label>
          Email:
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className='sign-in-button'>Submit</button>
        
 
      </form>
    </div>
    </Layout>

  )
}
export default SignIn