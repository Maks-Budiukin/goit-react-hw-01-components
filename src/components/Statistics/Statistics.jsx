import PropTypes from 'prop-types';

export default function Statistics({ title = "Upload Stats", stats }) {
  return (
    
    <section>
      {title ? (<h2> {title}</h2 >) : null}
    <ul>
      {stats.map(({id, label, percentage}) => 
        
        (<li className="item" key={id}>
        <span className="label">{label}</span>
        <span className="percentage">{percentage}%</span>
      </li>)
      
      )
        }
        
      </ul>
      </section>
  )
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }))
  
}



