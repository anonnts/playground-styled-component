import React from 'react'
import { Section, Topic } from './style'
import { Job } from 'Components/content'

export default class Experience extends React.Component {

      render() {
            return (
                  <Section>
                        <Topic>Experience</Topic>
                        <Job
                              company="Phoenixict co.ltd"
                              year="2017 - 2018">
                                    <p>- Create user interface follow on designed by designer team. </p>
                                    <p>- Leader of crowd ambassador feature manage deadline and separate work to team. </p>
                                    <p>- Create feature about generate document and excel file. </p>
                                    <p>- Query data from database and send to display side. </p>
                                    <p>- Provide API for mobile team.</p>
                                    <p>- Plan roadmap and dead line and present to founder team </p>
                                    <p>- Create document test case for regression test </p>
                                    <p>- Create feature follow on requirement from co-founder team </p>
                                    <p>- Maintenance feature </p>
                                    <p>- Connect API between payment gateway and website </p>
                                    <p>- Create feature, queries data for set layout to .docx file as contact document </p>
                        </Job>
                        <Job
                              year="2018 - 2019">
                                    <p>- Be leader to change from MVC framework to be web component</p>
                                    <p>- Research new technologies and share that to team </p>
                                    <p>- Set web pack for building project and environment of production and local </p>
                                    <p>- Set architecture on React project and set Redux on project  </p>
                                    <p>- Research about tools for  web component as eslint, barbel, uglify, jest ( unit test ) </p>
                                    <p>- Use Cypress.js for automatic test ( E2E ) </p>
                                    <p>- Create widgets for reusable and develop document site for how to use widget </p>
                        </Job>


                  </Section>
            )
      }
}