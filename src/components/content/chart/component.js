import React from 'react'
import { Section, Ability ,Percent, Animation ,SectionAnimation} from './style'

class Chart extends React.Component {
      render() {
            return (
                  <Section>
                        <Ability >
                              <p>{this.props.ability}</p>
                        </Ability>
                        <Percent>
                              <p>{this.props.percent}%</p>
                        </Percent>
                        <SectionAnimation>
                        <Animation 
                        percent={this.props.percent}/>
                        </SectionAnimation>
                        
                  </Section>
            )
      }
}

export default Chart