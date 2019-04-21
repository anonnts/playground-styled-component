import React from 'react'
import {
      Section,
      Information,
      Topic,
      Text,
      HiddenInformation,
      Summary,
      Contact,
      DetailSummary
} from './style'
import { ProfilePicture, Button } from 'Components/content'

export default class Profile extends React.Component {

      render() {
            return (
                  <Section>
                        <ProfilePicture />
                        <Information>
                              <Topic size='60'> Anon Tustasu </Topic>
                              <Text>Position of Interested: Front-end developer, Web developer</Text>
                        </Information>
                        <Button
                              text="Personal Information"
                              {...this.props} />
                        <HiddenInformation {...this.props}>
                              <Summary {...this.props}>
                                    <h3>Summary</h3>
                                    <DetailSummary  {...this.props}>
                                          <b>Company</b>: Sinwattana (Phoenixict)
                                    </DetailSummary >
                                    <DetailSummary  {...this.props}>
                                          <b>Started</b>: 1/05/2017 to present 
                                    </DetailSummary>
                                    <p>Presently I worked at Phoenixict company and they’re start up about funding platform that name is Sinwattana platform. 
                                          They’re Singapore company I got chance to use English with them. First year I got job to do Django MVC I had to do front-end
                                          side and back-end side and next year ago I got a chance to be leader of front-end to change from Django MVC to be Web-component.
                                          I got a chance to research about React, Web pack and Redux and research about how to set that from zero. In this year when they got new
                                          junior I have to train and share about that to them.  
                                    </p>
                              </Summary>
                              <Contact {...this.props}>
                                    <h3>Personal information</h3>
                                    <p><b>Current position</b>: Full-stack developer</p>
                                    <p><b>Experience</b>: 2 Years</p>
                                    <p><b>Age</b>: 26</p>
                                    <p><b>Date of birth</b>: 24/10/1992</p>
                                    <p><b>Email</b>: Anon.ts@outlook.com</p>
                                    <p><b>Mobile</b>: 085-553-4570</p>
                                    <p><b>Address</b>: 77 Feuangtong Teetong Road. Pranakorn 10200, Bangkok</p>
                                    <p><b>Bachelor’s Degree</b>: University of the thai chamber of comerce, Computer Science</p>
                              </Contact>
                        </HiddenInformation>
                  </Section>
            )
      }

}
