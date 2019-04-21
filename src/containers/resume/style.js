import styled from 'styled-components';

export const Container = styled.div`
      font-family: 'Roboto', sans-serif;
      max-width:1000px;
      margin-top:50px;
      margin-bottom:50px;
      margin-left:auto;
      margin-right:auto;

      @media (max-width: 1200px) {
            max-width:800px;
          }
     
`;

export const Card = styled.div`
      border: 1px solid rgb(223,225,229);
      padding: 50px 25px;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
`;

export const Themes = styled.div`
      padding:10px 0px;
      display:flex;
`;

