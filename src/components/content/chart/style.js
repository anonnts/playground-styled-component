import styled, { keyframes } from 'styled-components'

export const addColor = percent => keyframes`
     0%{
           width:0%;
     }75%{
            width: ${percent+2}%;
     }80%{
           width: ${percent-2}%;
     }85%{
           width: ${percent+1}%;
     }90%{
            width: ${percent-1}%;
     }100%{
            width:${percent}%;
     }
`;

export const Section = styled.div`
      display:flex;
      width:100%;
      height: 25px;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      background: rgb(223,225,229);
      overflow:hidden;
      position: relative;
      margin-bottom:10px;
`;

export const Ability = styled.div`

      background-color:#1E1E1E;
      width: 100px;
      height:25;
      z-index:1;
      
      & p {
            font-weight:bold;
            color:white;
            padding:3px;
            text-align:center;
      }
`;

export const Percent = styled.div`
            position: absolute;
            right: 10;
            top: 2.5;
            z-index:1;
            font-weight:bold;
`;

export const Animation = styled.div`
            background: #1aa3ff;
            border-top-right-radius: 10px;
            border-bottom-right-radius:10px;
            height: 25;
            width: calc(${props=> props.percent}% - 100px);
            z-index: 0;
            animation:${props => addColor(props.percent)} 1s linear normal forwards;
`;

export const SectionAnimation = styled.div`
      width:100%;
`;