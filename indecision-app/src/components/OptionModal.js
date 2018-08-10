import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => {
  const { selectedOption, handleClearSelectedOption } = props;
  return (
    <Modal
      isOpen={!!selectedOption}
      onRequestClose={handleClearSelectedOption}
      contentLabel="Selected option"
    >
      <h3>Selected option</h3>
      {props.selectedOption && <p>{selectedOption}</p>}

      <button onClick={handleClearSelectedOption}>Okay</button>
    </Modal>
  );
}

export default OptionModal;