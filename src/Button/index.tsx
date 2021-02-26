import * as React from 'react'
import classNames from 'classnames'
import omit from 'rc-util/lib/omit'
import './index.less'


export default ({ text, click }: { text: string; click: () => void }) => (
  <button className="button" onClick={click}>
    {text}
  </button>
)
