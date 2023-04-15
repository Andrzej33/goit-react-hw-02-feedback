import styled from 'styled-components';

export const Table = styled.table`
  font-family: 'Lucida Sans Unicode', 'Lucida Grande', Sans-Serif;
  font-size: 14px;
  width: 640px;
  text-align: left;
  border-collapse: collapse;
  background: #252f48;
  margin: 0 auto;
  th {
    color: #edb749;
    border-bottom: 1px solid #37b5a5;
    padding: 12px 17px;
  }
  td {
    color: #cad4d6;
    border-bottom: 1px solid #37b5a5;
    border-right: 1px solid #37b5a5;
    padding: 7px 17px;
  }
`;
