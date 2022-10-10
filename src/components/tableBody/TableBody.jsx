import PropTypes from 'prop-types';
import { CellBody } from './TableBody.styled';
export const TableBody = ({ items }) => {
  return (
    <tbody>
      {items.map((item, index) => {
        return (
          <tr
            key={item.id}
            style={{
              backgroundColor: index % 2 !== 0 ? 'rgb(223, 220, 220)' : 'white',
            }}
          >
            <CellBody>{item.type}</CellBody>
            <CellBody>{item.amount}</CellBody>
            <CellBody>{item.currency}</CellBody>
          </tr>
        );
      })}
    </tbody>
  );
};

TableBody.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
