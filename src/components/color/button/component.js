import React from 'react'
import { DefaultColor, ShadowAniamtion ,IconMoon, IconSun} from './styled'

export default props => {
      return (
            <DefaultColor {...props}>
            <IconMoon className='fas fa-lightbulb' {...props} />
            <IconSun className='far fa-lightbulb' {...props} />
              <ShadowAniamtion />
            </DefaultColor>
      )
}