import { AUTH_LOGIN_SUCCESS } from '../actions/types'

const initialState = {
  name: '',
  username: '',
  token: '',
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN_SUCCESS: {
      const { name, username, token } = action.payload
      return {
        name,
        username,
        token,
      }
    }
    default: {
      return state
    }
  }
}

export default authReducer
