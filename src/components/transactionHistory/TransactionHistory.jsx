import PropTypes from 'prop-types';
import {
  TransactionTable,
  RowHead,
  CellHead,
  CellBody,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <thead>
        <RowHead>
          <CellHead>Type</CellHead>
          <CellHead>Amount</CellHead>
          <CellHead>Currency</CellHead>
        </RowHead>
      </thead>
      <tbody>
        {items.map((item, index) => {
          return (
            <tr
              key={item.id}
              style={{
                backgroundColor:
                  index % 2 !== 0 ? 'rgb(223, 220, 220)' : 'white',
              }}
            >
              <CellBody>{item.type}</CellBody>
              <CellBody>{item.amount}</CellBody>
              <CellBody>{item.currency}</CellBody>
            </tr>
          );
        })}
      </tbody>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
