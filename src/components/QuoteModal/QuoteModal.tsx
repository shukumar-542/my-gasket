import { Modal } from 'antd';
import React from 'react'


type QuoteModalProps = {
    openModal: boolean;
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  };
const QuoteModal : React.FC<QuoteModalProps>  = ({openModal, setOpenModal}) => {
  return (
    <div>
        <Modal  centered footer={false} open={openModal} onCancel={()=>setOpenModal(false)} >
            <p>You can upload one file at a time, and it must contain 
            the drawing of a single gaske</p>
        </Modal>
    </div>
  )
}

export default QuoteModal