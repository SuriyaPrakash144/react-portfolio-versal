import PropTypes from "prop-types";

export const Children=(props)=>{
    return
       <div>{props.children}</div>;   
};

Children.PropTypes={
    children:PropTypes.array,
}