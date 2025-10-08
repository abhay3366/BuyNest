import Footer from '../component/Footer'
import { Outlet } from 'react-router'
import Sidebar from '../component/Sidebar'
import { useSelector } from 'react-redux';
import Header from '../component/Header';

const MainLayout = () => {
    const isSideBarOpen = useSelector((state) => state.sideBarReducer.isSideBarOpen);
  return (

    <section className='main'>
      <div className='contentMain flex'>
        {/* Sidebar */}
        <div className={`sidebarWrapper  ${isSideBarOpen ? '-translate-x-full' : 'w-[18%]'} `}>
          <Sidebar />
        </div>

        {/* Right Content */}
        <div className={`contentRight transition-all ease-in-out duration-500 ${isSideBarOpen ? 'w-[100%]' : 'w-[82%]'}`}>
          <Header />
          {/* Dynamic data */}
          <div className='p-2'>
             <Outlet/>
          </div>
        </div>
      </div>
    </section >


  )
}

export default MainLayout