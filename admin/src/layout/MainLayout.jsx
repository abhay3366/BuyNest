import Footer from '../component/Footer'
import { Outlet } from 'react-router'
import Sidebar from '../component/Sidebar'

const MainLayout = () => {
  return (
    <div>
        {/* <Sidebar/> */}
            <Outlet/>
        
    </div>
  )
}

export default MainLayout