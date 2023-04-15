import styled from 'styled-components';

export const Friends = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 180px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  li {
    display: flex;
    gap: 10px;
    background-color: #dddddd;
    width: 100%;
    align-items: center;
    padding-left: 20px;
    box-shadow: 2px 3px 30px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    height: 120px;
    img {
      background-color: silver;
      border-radius: 8px;
      padding: 5px;
    }
  }
`;

export const Status = styled.span`
  border-radius: 50%;
  height: 14px;
  width: 14px;
  display: block;
  background-color: ${props => {
    return props.isOnline ? 'green' : 'red';
  }};
`;
