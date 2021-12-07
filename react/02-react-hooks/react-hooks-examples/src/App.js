import React from 'react'
import ButtonModal from './ButtonModal';
import Modal from './Modal';

function App() {
  const [modal, setModal] = React.useState(false)

  return (
    <div>
      <div>{modal ? 'Modal aberto' : 'Modal fechado'}</div>
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={setModal} />
    </div>
  )
}

export default App;
