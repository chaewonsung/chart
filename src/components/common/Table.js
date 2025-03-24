import React from 'react';
import styled from 'styled-components';

const TableBlock = styled.table`
  thead {
    border-bottom: 1px solid var(--blue-01);
    th {
      text-align: left;
      padding-bottom: 1.1rem;
      color: var(--blue-06);
    }
  }
`;

const Table = ({ head, children, ...props }) => {
  return (
    <TableBlock {...props}>
      <thead>
        <tr>
          {head.map((v) => (
            <th>{v}</th>
          ))}
        </tr>
      </thead>
      {children}
    </TableBlock>
  );
};

const THeadBlock = styled.thead`
  border-bottom: 1px solid var(--blue-01);
  th {
    text-align: left;
    padding-bottom: 1.1rem;
    color: var(--blue-06);
  }
`;

export const THead = ({ head }) => {
  return (
    <THeadBlock>
      <tr>
        {head.map((v) => (
          <th key={v}>{v}</th>
        ))}
      </tr>
    </THeadBlock>
  );
};

export const TBodyTr = styled.tr`
  & + & {
    border-top: 1px solid #f2f4f7;
  }
  td {
    padding: 1.5rem 0;
  }
`;

export default Table;
