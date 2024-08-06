import PropTypes from "prop-types";
import "../components/Student.css";

export const Student=(props)=>{
    const {items,color}=props;

    return(
      <div style={{backgroundColor:color,color:"white",padding:"20px"}}>
        <h5>Item List</h5>
        <ul>
            {items.map((item)=>(
                <li key={item.id}>{item.name}</li>
            ))}
            {/* <p>Paragraph</p> */}
        </ul>
      </div>
    );
};

// Student.propTypes={
//     items:PropTypes.arrayOf(
//         PropTypes.shape({
//             id:PropTypes.number.isRequired,
//             name:PropTypes.string.isRequired,
//         })
//     ).isRequired,
// };

