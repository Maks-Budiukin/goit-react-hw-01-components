import PropTypes from 'prop-types';
import css from "./TransactionHistory.module.css"

export default function TransactionsHistory({ items }) { 
return (    
    <table className={css.table}>
  <thead >
    <tr className={css.head}>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody className={css.body}>
  {items.map(({id, type, amount, currency}) => 
        
        (<tr key={id}>
      <td className={css.typecell}>{type}</td>
      <td className={css.cell}>{amount}</td>
      <td className={css.cell}>{currency}</td>
    </tr>)
      
      )
      }

  </tbody>
    </table>
    
)
}

TransactionsHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  })),
}