import React from 'react';

import Option from './Option';

const Options = (props) => {
  const { options, handleDeleteOptions, handleDeleteOption } = props;

  return (
    <div>
      <div className='widget-header'>
        <h3 className='widget-header__title'>Your options</h3>
        <button
          className='button button--link'
          onClick={handleDeleteOptions}
        >
          Remove All
        </button>
      </div>
      {options.length === 0 && <p className="widget__message">Please add an update to get started!</p>}
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