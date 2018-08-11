import React from 'react';

const EditExpensePage = (props) => {
  console.log(props);
  const { id } = props.match.params;
  return (
    <div>
      Editing the expense with id {id}.
    </div>
  )
};

export default EditExpensePage;