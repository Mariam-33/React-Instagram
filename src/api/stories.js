import {
  apiConnection
} from './apiConnection'
export const getAllStories = (setFunction, setError) => {
  apiConnection('GET', 'stories', setFunction, setError)
}
