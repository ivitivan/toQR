import React from 'react'

const Input = ({onChange}) => {
  return {

    render() {
      return (
        <input type="text"
          onChange={onChange}
          className="input"
          placeholder="Type here to convert to QR code"
        />
      )
    }

  }
}

export default Input

