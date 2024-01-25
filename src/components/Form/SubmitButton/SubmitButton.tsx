import React, { MouseEvent } from 'react';
interface SubmitButtonProps {
  text: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}
function SubmitButton({ text, onClick }: SubmitButtonProps) {
  return(
    <div>
      <button className='btn-cta' onClick={onClick}>{text}</button>
    </div>
  )
}

export default SubmitButton