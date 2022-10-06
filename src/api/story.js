import {
  apiConnection
} from './apiConnection'
export const getStory = (setFunction, id, setError) => {
  apiConnection('GET', `stories/${id}`, setFunction, setError)
}
