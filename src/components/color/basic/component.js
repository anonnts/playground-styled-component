import React from 'react'
import { Section } from './styled'
import { ButtonThemes } from 'Components/color'

class ColorOptions extends React.Component {

      render() {
            return (
                  <Section>
                        <ButtonThemes
                              onClick={this.props.setTheme}
                              theme={this.props.theme} />
                  </Section>
            )
      }

}

export default ColorOptions