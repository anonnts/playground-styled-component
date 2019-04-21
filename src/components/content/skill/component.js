import React from 'react'
import { Chart } from 'Components/content'
import { Section,SectionAbility,SectionSoftSkill,SectionGroupSkill } from './style'

export default class Skill extends React.Component {

      render() {
            return (
                  <Section>
                        <SectionAbility>
                              <h3>Current Skill</h3>
                              <Chart ability="HTML" percent={90} />
                              <Chart ability="JS/ES6" percent={85} />
                              <Chart ability="REACT" percent={90} />
                              <Chart ability="WEBPACK" percent={75} />
                              <Chart ability="E2E TEST" percent={70} />
                              <Chart ability="UNIT TEST" percent={40} />
                              <Chart ability="Python" percent={70} />
                              <Chart ability="CSS" percent={80} />
                              <Chart ability="SQL" percent={60} />
                              <Chart ability="SCSS" percent={45} />
                        </SectionAbility>
                        <SectionSoftSkill>
                              <SectionGroupSkill>
                                    <h3>Other skill / Library </h3>
                                    <p>React.js, Express.js, Django, Jquery, Bootstrap, Django REST framework,
                                          Web pack, Redux, Cypress.js ( automated test ), Server rendering, Next.js,
                                          Java script ES6, Payment gateway API, Object Oriented Concept, Agile,
                                          MVC Concept, Design pattern, Unit test, JIRA</p>  
                              </SectionGroupSkill>
                              <SectionGroupSkill>
                                    <h3>Version control </h3>
                                    <p>SVN Tortoise, Github</p>
                              </SectionGroupSkill>
                              <SectionGroupSkill>
                                    <h3>Comunication skill </h3>
                                    <p>Speaking: Good</p>
                                    <p>Listening: Fair</p>
                                    <p>Reading: Good</p>
                                    <p>Writing: Good</p>
                              </SectionGroupSkill>
                        </SectionSoftSkill>
                  </Section>
            )
      }

}