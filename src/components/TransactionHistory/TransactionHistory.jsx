import PropTypes from 'prop-types';

import { Transaction } from './Transaction';
import { Table } from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(transaction => (
          <tr key={transaction.id}>
            <Transaction transaction={transaction} />
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
