import styled from 'styled-components';

export const Section = styled.section`
  height: 220px;
  width: 80%;
  margin: 0 auto;
  background-color: navajowhite;
  h2 {
    text-align: center;
  }
`;

export const StatList = styled.ul`
  display: flex;
  height: 60%;
  align-items: center;
  justify-content: center;
  li {
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: coral;
    border-style: ridge;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    span {
      font-size: 28px;
    }
  }
`;
