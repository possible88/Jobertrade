import {User} from "../../models/User";

export const setUserAction = (user: User) => {
  return{
      type: 'SET_USER',
      user
  }
}