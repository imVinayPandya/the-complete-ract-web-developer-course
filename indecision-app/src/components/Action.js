import React from 'react';

const Action = (props) => {
  const { hasOptions, handlePick } = props;

  return (
    <div>
      <button
        className="big-button"
        onClick={handlePick}
        disabled={!hasOptions}>
        What should id do?
        </button>
    </div>
  );
};

export default Action;