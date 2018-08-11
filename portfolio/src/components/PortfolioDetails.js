import React from 'react';

const PortfolioDetails = (props) => {
  const { id } = props.match.params;
  return (
    <div>
      <h1>A Thing I've Done</h1>
      <p>This page if for the item with id of {id}</p>
    </div>
  );
}

export default PortfolioDetails;