import { apiConnection } from './apiConnection'
export const getAllFollowers = (setFunction) => {
 apiConnection('GET', 'relationships', setFunction)
}
