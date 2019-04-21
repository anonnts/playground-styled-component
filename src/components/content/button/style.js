import styled, { keyframes, css} from 'styled-components'


export const slideShadow = keyframes`
      0%{
            top: 3px;
            left: -20px;
            height:300px;
            visibility: visible;
      }100%{
            top: -120px;
            left: 130px;
            visibility: hidden;
      }
`;

export const hiddenButton = keyframes`
     0%{
     
     }100%{
           padding:0px;
           transform:scale(0);
           visibility:hidden;
     }
`;

export const Section = styled.div`
      position:relative;
      overflow:hidden;
      padding:10px 20px;
      margin-left:auto;
      margin-right:auto;
      display: table;

      ${props => props.statusMoreInfo && css`
           animation: ${hiddenButton} .2s ease-out forwards; 
      `}
`;

export const ButtonInformation = styled.button`
      box-shadow: 1px 1px 2px #888888;
      border: unset;
      outline: 0;
      padding:10px;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      border-bottom-left-radius: 10px; 
      border-bottom-right-radius: 10px;
      transition: .2s ease-out;
      background-color:#1E1E1E;
      color:#F3F3F3;
      cursor:pointer;

      &:hover {
            transform:scale(1.1);
      }

      &:active{
            transform: scale(1.2);
      }

      ${props => props.statusMoreInfo && css`
           padding:0px;
      `}
`;

export const Shadow = styled.div`
            width: 25px;
            height: 150px;
            position: absolute;
            background-color: white;
            transform: rotate(120deg);
            opacity: .2;
            top: 3px;
            left: -10px;
            
            ${ButtonInformation}:hover ~ & {
                  animation: ${slideShadow} 1s ease-out 1;
            }
`;

