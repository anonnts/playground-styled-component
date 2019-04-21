import styled from 'styled-components'

export const Section = styled.div`
      padding:20px 10px;
      & p {
            margin-bottom:3px;
      }
`;

export const Topic = styled.h3`
      text-align:center;
      margin-bottom: 20px;
`;

export const TimeAndCompany = styled.div`
      padding-top:10px;
      display: flex;
      padding-bottom:10px;
`;

export const Year = styled.div`
      font-weight:bold;
      
`;

export const Company = styled(Year)`
      margin-left:auto;
`;