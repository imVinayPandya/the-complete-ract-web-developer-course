import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => {
  const { selectedOption, handleClearSelectedOption } = props;
  return (
    <Modal
      isOpen={!!selectedOption}
      onRequestClose={handleClearSelectedOption}
      contentLabel="Selected option"
      closeTimeoutMS={200}
      className="modal"
    >
      <h3 className='modal__title'>Selected option</h3>
      {props.selectedOption && <p className='modal__body'>{selectedOption}</p>}

      <button className='button' onClick={handleClearSelectedOption}>Okay</button>
    </Modal>
  );
}

export default OptionModal;