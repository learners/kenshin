import React from 'react';
import './index.css'

export default ({ text, click }: { text: string, click:()=>void }) => <button className='button' onClick={click}>{text}</button>;
