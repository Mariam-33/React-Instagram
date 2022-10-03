import { apiConnection } from './apiConnection'
export const getStory = (setFunction, id) => {
  apiConnection('GET',`stories/${id}`, setFunction)
}
