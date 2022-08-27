import React, { Component } from 'react';

 const Address = (props) => {
 return (
      <div className="add">
        <div>
           {props.address}
                    </div>

      </div>
    )
  }
  Address.defaultProps = {
    address : "Gafsa Tunisia"
};

export default Address ;
