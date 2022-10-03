import { apiConnection } from './apiConnection'
export const getAllStories = (setFunction) => {
 apiConnection('GET', 'stories', setFunction)
}
