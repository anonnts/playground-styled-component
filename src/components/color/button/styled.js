import styled, { keyframes} from 'styled-components'

const swing = keyframes`
      0%{
            top:20;
      }100%{
            top: -50;
            right: 0;
      }
`;


export const DefaultColor = styled.div`
      display: inline-block;
      box-shadow: 1px 1px 2px #888888;
      width: 25px;
      height: 25px;
      border-radius: 100%;
      background-color: ${props => props.theme === true ? '#F3F3F3' : '#1E1E1E' }
      margin-right:10px;
      transition: .3s ease-out;
      position:relative;
      overflow:hidden;
      cursor:pointer;
      line-height: 1.8;
      font-weight: bold;
      text-align:center;

      &:hover {
            transform: scale(1.2);
      }

      &:active {
            transform: scale(1.5);
      }

     
`;

export const ShadowAniamtion = styled.div`
      position:absolute;
      width:10px;
      height:50px;
      transform: rotate(120deg);
      background: white;
      opacity:0.3;
      top:20;
     
      ${DefaultColor}:hover & {
            animation: ${swing} 1s ease-out 1;
      }
`;

export const Icon = styled.i`
      position:absolute;
      transition: .5s ease-out;
      right: 7;
`;

export const IconMoon = styled(Icon)`
      color:#EBE036;
      ${props => props.theme === true ? 'top:-30' : 'top:5' }
`;

export const IconSun = styled(Icon)`
      color:#1B1B1B;
      ${props => props.theme !== true ? 'top:30' : 'top:5' }
`;