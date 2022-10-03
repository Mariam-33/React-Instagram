import axios from 'axios'
const URL = process.env.REACT_APP_API_URL
export const apiConnection = (method, datapoint, setFunction) => {
  const response = axios({ method, url: URL + datapoint })
  response.then(
    (res) => {
      setFunction(res.data)
    }
  ).catch(
    (err) => {
      alert(err)
    }
  )
}
