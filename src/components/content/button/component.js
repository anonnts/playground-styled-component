import React from 'react'
import { Section, ButtonInformation, Shadow } from './style'

class Button extends React.Component {

      render() {
            return (
                  <Section {...this.props}>
                        <ButtonInformation
                              onClick={this.props.triggerButton}
                              {...this.props}>{this.props.text}</ButtonInformation>
                        <Shadow />
                  </Section>
            )
      }
}

export default Button