import { USER_REGISTER_START, 
    USER_REGISTER_SUCCESS, 
    USER_REGISTER_FAIL, 
    USER_LOGIN_START, 
    USER_LOGIN_SUCCESS,
     USER_LOGIN_FAIL,
     ADD_REC_SUCCESS ,
     ADD_REC_FAIL,
     USER_ADD_REC_SUCCESS,
     USER_ADD_REC_FAIL,
     FETCH_TRUCKS_SUCCESS

  } from '../actions'
  
  
  
  
  export let intitialState = {

  
  user: {
    recommendations: []
  },
  
  options: [
    { key: 'u', text: 'User', value: 'user' },
  ],
  
  isLoading: false,
  error: ''
  }
  
  const persistedState = localStorage.getItem('reduxState')
  if (persistedState) {
  intitialState = JSON.parse(persistedState)
  }
  
  export const reducer = (state = intitialState, action) => {
  switch(action.type) {
    case USER_REGISTER_START:
    case USER_LOGIN_START:
        return {
            ...state, 
            isLoading: true,
            error: ''
        }
    case USER_REGISTER_SUCCESS:
        return localStorage.getItem('type') === 'user' ?
        {
            ...state,
            user: {
                ...action.payload.newUser,
                message: action.payload.message
            },
            isLoading: false,
            error: ''
        } :
        {
            ...state,
            user: {
                ...state.user,
                ...action.payload,
            },
            isLoading: false,
            error: ''
        }
    case USER_LOGIN_SUCCESS:
        return action.payload.type === 'user' ?
        {
            ...state,
            user: {
                ...action.payload,
                message: action.payload.message
            },
            isLoading: false,
            error: ''
        } 
        :
        {
            ...state,
            user: {
                ...state.user,
                ...action.payload
            },
            isLoading: false,
            error: ''
        }
    case USER_LOGIN_FAIL:
        return {
            ...state, 
            error: action.payload,
            isLoading: false
        }
    case USER_REGISTER_FAIL:
        return{
            ...state,
            error: action.payload,
            isLoading: false
        }
        case ADD_REC_SUCCESS:
        return{
            ...state,
            error: '',
            success: action.payload
        }
    case ADD_REC_FAIL: 
        return{
            ...state,
            success: '',
            error: action.payload
        }
    case USER_ADD_REC_SUCCESS:
        return{
            ...state,
            user: {
                ...state.user,
                recommendations: action.payload
            },
            isLoading: false,
            error: ''
        }
    case USER_ADD_REC_FAIL:
        return{
            ...state,
            user: {
                ...state.user,
                message: action.payload
            },
            isLoading: false,
        }
        case FETCH_TRUCKS_SUCCESS:
            return{
                ...state,
                operator: {
                    ...state.operator,
                    trucks: action.payload
                }
            }
    
    default: 
        return state
  }
  }