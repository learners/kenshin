import * as React from 'react'
import classNames from 'classnames'
import omit from 'rc-util/lib/omit'
import './index.css'

// 两个中文字符
const rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/
const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar)

function isString(str: any): str is string {
  return typeof str === 'string'
}

export default ({ text, click }: { text: string, click: () => void }) => <button className="button"
                                                                                 onClick={click}>{text}</button>;
