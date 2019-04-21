import styled from 'styled-components'

export const Section = styled.div`
      margin-left:auto;
      position:relative;
      overflow: hidden;
`;

export const InputField = styled.input`
      padding:5px;
      border: 1px solid rgb(223, 225, 229);
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      border-bottom-left-radius: 10px;
      outline: 0;
      width:50px;
      transition: .3s ease-out;

      &:hover {
            width:150px;
      }

      &:focus{
            width:150px;
      }
`;

export const Example = styled.div`
      top: 50;
      right: 10;
      border: 1px solid rgb(223,225,229);
      width: 10px;
      height: 10px;
      position:absolute;
      transition: .3s ease-out;

      ${InputField}:focus ~ & {
            top:8;
            background-color: ${props => props.currentColor}
      }
`;