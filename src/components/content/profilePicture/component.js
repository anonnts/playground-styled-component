import React from 'react'
import { ProfileCover, Section } from './styled'
import Image from 'Assets/global/img/profile.jpg'

export default props => {
      return (
            <Section>
                  <ProfileCover src={Image} />
            </Section>
      )
}
