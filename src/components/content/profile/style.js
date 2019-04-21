import styled, {css} from 'styled-components'


export const Section = styled.div`
      padding: 20px 0px;
`;

export const Information = styled.div`
      text-align:center;
`;

export const Topic = styled.p`
      font-size: ${props =>(props.size)}px;
      font-weight:bold;
      font-family: 'Patua One', cursive;
`;

export const Text = styled.p`
      font-size: 16px;
`;

export const HiddenInformation = styled.div`
      visibility: hidden;
      border:1px solid #1E1E1E;
      border-top-right-radius:10px;
      border-top-left-radius:10px;
      border-bottom-right-radius:10px;
      border-bottom-left-radius:10px;
      transition: .3s linear;
      background:#1E1E1E;
      transform:scale(0);
      display:flex;
      ${props => props.statusMoreInfo && css`
      transform:scale(1);
      padding:20px;
      visibility: visible;
      `}
      @media (max-width: 700px) {
            display: block;
      }
`;

export const SectionInformtion = styled.div`
      color:#F3F3F3;
      display:none;
      & h3 {
            display:inline-block;
            border-bottom:2px solid #F3F3F3;
            margin-bottom:10px;
      }

      @media (max-width: 700px) {
            width:100%;
            margin-top:10px;
            margin-bottom:10px;
      }
      
`;

export const Summary = styled(SectionInformtion)`
      width:65%;
      padding-right:10px;
      ${props => props.statusMoreInfo && css`
            display:block;
      `}
      
 
`;

export const Contact = styled(SectionInformtion)`
      width:35%;
      & h3 {
            text-align:center;
      }

      ${props => props.statusMoreInfo && css`
      display:block;
`}
`;

export const DetailSummary = styled(SectionInformtion)`
      margin-bottom:10px;
      ${props => props.statusMoreInfo && css`
      display:block;
`}
`;