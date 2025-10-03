import React from 'react'
import Header from '../component/Header'
import Sidebar from '../component/Sidebar'

const Dashboard = () => {
  return (
    <section className='main'>
        <Header/>
        <div className='contentMain flex'>
          <div className="sidebarWrapper  bg-amber-400">
            <Sidebar/>
          </div>
        </div>
    </section>
  )
}

export default Dashboard