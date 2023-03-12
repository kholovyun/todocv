import React, { FunctionComponent } from 'react'
import IModalProps from './IModalProps'
import './ModalWin.css'

const ModalWin:FunctionComponent<IModalProps> = (props): React.ReactElement => {
  return (
    <div className='modal_win_bg'>
    <div className='def_modal_win'>
            <h4>{props.message}</h4>
            <div className='modal_btns'>
              <button className='submit_btn' onClick={props.submitFunc}>{props.submitText}</button>
              <button className='cancel_btn' onClick={props.cancelFunc}>Cancel</button> 
            </div>            
    </div>
</div>
  )
}

export default ModalWin
