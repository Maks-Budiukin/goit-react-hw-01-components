// import PropTypes from 'prop-types';
// import data from "assets/data.json";



// export default function Statistics(data) {
//   console.log((data[0]))
  

// }

export default function Statistics({ title="Upload Stats", stats }) {
  return (
    <section>
      {title ? (<h2> {title}</h2 >) : null}
    


    <ul>
      {stats.map(stat => 
        
        (<li className="item" key={stat.id}>
        <span className="label">{stat.label}</span>
        <span className="percentage">{stat.percentage}%</span>
      </li>)
      
      )
      }


      
      </ul>
      </section>
  )
}

// export const Statistics = ({ data } ) => {
//   return (
//     <ul>
//       {data.map(stat => (
//         <li>{stat.label}</li>
//       ))}
//     </ul>
//   );
// };









  // return data.map(({label, percentage}) => {
    // <li className="item">
    //   <span className="label">{label}</span>
    //   <span className="percentage">{percentage}%</span>
    // </li>

  // })

// Statistics.propTypes = {
//     label: PropTypes.string,
//     percentage: PropTypes.number,
// }



//  <section className="statistics">
//   <h2 className="title">Upload stats</h2>

//   <ul className="stat-list">
//     <li className="item">
//       <span className="label">.docx</span>
//       <span className="percentage">4%</span>
//     </li>
//     <li className="item">
//       <span className="label">.mp3</span>
//       <span className="percentage">14%</span>
//     </li>
//     <li className="item">
//       <span className="label">.pdf</span>
//       <span className="percentage">41%</span>
//     </li>
//     <li className="item">
//       <span className="label">.mp4</span>
//       <span className="percentage">12%</span>
//     </li>
//   </ul>
// </section>