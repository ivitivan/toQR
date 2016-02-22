import React from 'react'

const NothingOnNothing = ({data, Component}) => {
  if (!data) return <div className="loading">Waiting... </div>
  else return <Component data={data} />
}

export default NothingOnNothing

