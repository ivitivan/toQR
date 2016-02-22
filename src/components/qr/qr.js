import React from 'react'
import { imageSync as toQr } from 'qr-image'

const qr = (data) => ({__html: toQr(data, {type: 'svg'})})

const QR = ({data}) => (<div
  className="qr"
  dangerouslySetInnerHTML={qr(data)}
/>)

export default QR

