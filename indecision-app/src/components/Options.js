import React from 'react';

import Option from './Option';

const Options = (props) => {
  const { options, handleDeleteOptions, handleDeleteOption } = props;

  return (
    <div>
      <button
        className='button button--link'
        onClick={handleDeleteOptions}
      >
        Remove All
      </button>
      {options.length === 0 && <p>Please add an update to get started!</p>}
      {
        options.map((option) => (
          <Option
            key={option}
            optionText={option}
            handleDeleteOption={handleDeleteOption}
          />
        ))
      }
    </div>
  );
};

export default Options;