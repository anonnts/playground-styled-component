import React from 'react'
import { Section, Year, Work } from './styled'

export default ({ year, children }) => (
      <Section>
            <Year>{year}</Year>
            <Work>
                  {children}
            </Work>
      </Section>
)