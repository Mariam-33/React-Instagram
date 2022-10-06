import axios from 'axios'
const URL = process.env.REACT_APP_API_URL
export const apiConnection = (method, datapoint, setFunction, setError) => {
  const response = axios({
    method,
    url: URL + datapoint
  })
  response.then(
    (res) => {
      setFunction(res.data)
    }
  ).catch(
    (err) => {
      setError(err.message)
    }
  )
}
