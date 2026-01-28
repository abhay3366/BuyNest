import React from 'react'
import Header from '../component/Header'
import Sidebar from '../component/Sidebar'

const Dashboard = () => {
  return (
    <section className='main'>
        <Header/>
        <div className='contentMain'>
          <div className='sidebarWrapper w-[25%]'>
            <Sidebar />
          </div>
        </div>
    </section>
  )
}

export default Dashboard