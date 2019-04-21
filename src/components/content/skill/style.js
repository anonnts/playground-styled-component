import styled from 'styled-components'

export const Section = styled.div`
      display:flex;
      @media (max-width: 700px) {
            display: block;
      }
`;

export const Half = styled.div`
      width:50%;
      @media (max-width: 700px) {
            width:100%;
      }
`;

export const SectionAbility = styled(Half)`
      padding-right: 10px;
      & h3 {
            color:#1E1E1E;
            padding-bottom:3px;
            margin-bottom:10px;
            display:block;
            margin-left:auto;
            margin-right:auto;
            text-align:center;
      }
`;

export const SectionSoftSkill = styled(SectionAbility)`
      padding:10px;
      border: 1px solid rgb(223,225,229);
      & h3 {
            margin-left:unset;
            margin-right:unset;
            text-align:left;
            display:inline-block;
            border-bottom:3px solid #1aa3ff;
      }

      @media (max-width: 700px) {
            padding: 10px 0px;
            border:unset;
      }
`;

export const SectionGroupSkill = styled.div`
      margin-bottom:15px;
`;