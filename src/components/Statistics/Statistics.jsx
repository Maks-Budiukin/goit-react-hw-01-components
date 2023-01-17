import PropTypes from 'prop-types';

import styled from 'styled-components';


const Title = styled.h2`
  font-size: 36px;
  text-align: center;
`

const StatList = styled.ul`
  list-style: none;
  margin-left: 5px;
  padding: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 800px;
`

const StatListItem = styled.li`
display: flex;
flex-direction: column;
flex-basis: 37px;
padding: 8px;
border: 1px solid #2c2c2c;
text-align: center;



&:hover {transform: scale(1.1)};

`

const StatSection = styled.section`
  width: 280px;
  margin: 15px;
  padding: 5px;
`


export default function Statistics({ title = "Upload Stats", stats }) {
  return (
    
    <StatSection>
      {title ? (<Title>{title}</Title> ) : null}
    <StatList>
      {stats.map(({id, label, percentage}) => 
        
      (<StatListItem key={id} style={{backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`}}>
        <span className="label">{label}</span>
        <span className="percentage">{percentage}%</span>
      </StatListItem>)
      
      )
        }
        
      </StatList>
      </StatSection>
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



