import axios from "axios"

const base = process.env.NODE_ENV === "production" ? "https://git.heroku.com/ollie-avalos.git" : "http://localhost:3000"

const api = axios.create({
  baseURL: base
})

export default api