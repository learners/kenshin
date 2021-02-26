import React from 'react';
import './index.less';

export default ({ text, click }: { text: string; click: () => void }) => (
  <button className="button" onClick={click}>
    {text}
  </button>
);
