import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

function Page(props) {
  return (
    <div className='py-10 flex items-center gap-20 h-[90vh] px-9'>
        <LeftContent />
        <RightContent users={props.users} />
    </div>
  )
}

export default Page