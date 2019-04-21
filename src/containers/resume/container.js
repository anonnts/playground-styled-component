import React from 'react'
import { Container, Card, Themes } from './style'
import { Profile, Experience,  Skill } from 'Components/content'
import { ColorOptions, InputColor } from 'Components/color'

class Resume extends React.Component {

      constructor(props) {
            super(props)
            this.state = {
                  exampleBox: false,
                  currentColor: '',
                  theme: false,
                  moreInfo: false,
            }
      }

      handleSetColor = e => (this.setState({ currentColor: e.target.value }))

      handleSetTheme = () => (this.setState({ theme: !this.state.theme }))

      handleOpenInfo = () => (this.setState({ moreInfo: !this.state.moreInfo }))

      render() {
            return (
                  <Container>
                        <Themes>
                              <ColorOptions
                                    theme={this.state.theme}
                                    setTheme={this.handleSetTheme} />
                              <InputColor
                                    exampleBox={this.state.exampleBox}
                                    currentColor={this.state.currentColor}
                                    setColor={this.handleSetColor} />
                        </Themes>
                        <Card>
                              <Profile
                                    triggerButton={this.handleOpenInfo}
                                    statusMoreInfo={this.state.moreInfo} />
                              <Skill />
                              <Experience />
                        </Card>
                  </Container>
            )
      }
}

export default Resume