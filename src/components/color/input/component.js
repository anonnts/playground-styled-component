import React from 'react'
import { Section, InputField, Example } from './styled'
import PropTypes from 'prop-types';

class InputColor extends React.Component {


      render() {
            const {
                  currentColor,
                  setColor,
            } = this.props

            return (
                  <Section>
                        <InputField
                              value={currentColor}
                              maxLength="7"
                              placeholder="#color"
                              onChange={setColor} />
                        <Example {...this.props} />
                  </Section>
            )
      }

}

export default InputColor

InputColor.propTypes = {
      exampleBox: PropTypes.bool,
      currentColor: PropTypes.string,
      setColor: PropTypes.func
}