import {
  apiConnection
} from './apiConnection'
export const getAllFollowers = (setFunction, setError) => {
  apiConnection('GET', 'relationships', setFunction, setError)
}
