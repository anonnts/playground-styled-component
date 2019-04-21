import { 
      SWITCH_THEME,TURNON_INFO } from '../../type'

const initialState = {
      font: {
            light: '#1B1B1B',
            dark: '#F3F3F3',
            
      },
      
      controller: {
            moreInfo: false,
            theme: false,
      }
}

export default (state = initialState, action) => {
      switch (action.type) {
            case SWITCH_THEME:
                  return {
                      ...initialState, controller: { ...state.controller, theme: action.payload.theme}
                  }
            case TURNON_INFO:
            return {
                  ...initialState, controller: { ...state.controller, moreInfo: action.payload.theme}
            }
            default:
                  return state
      }
}