import React from 'react'
import Section1 from '../../views/Section1/Section1'

function Center(props) {    
  return (
    <>
        <Section1 users={props.users} />
    </>
  )
}

export default Center