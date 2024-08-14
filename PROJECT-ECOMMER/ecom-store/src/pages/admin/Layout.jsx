import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderAdmin from '../../components/admin/common/Header'
import SideBarMenu from '../../components/admin/common/SideBarMenu'
import FooterAdmin from '../../components/admin/common/Footer'

const LayoutAdmin = () => {
  return (
    <>


    <HeaderAdmin/>
     <div className="container-fluid">
       <div className="row">
        <SideBarMenu/>
         {/* MAIN CONTENT */}
         <main className="main-wrapper col-md-9 ms-sm-auto py-4 col-lg-9 px-md-4 border-start">
           <div className="title-group mb-3">
             <h1 className="h2 mb-0">Overview</h1>
             <small className="text-muted">Hello Thomas, welcome back!</small>
           </div>
           <div className="row my-4">
             <div className="col-lg-12 col-12">
               <div className="custom-block bg-white">
                 <h5 className="mb-4">History</h5>
                 <div id="pie-chart" />
               </div>
             </div>
        
           </div>
           <Outlet/>
          <FooterAdmin/>
         </main>
       </div>
     </div>
   </>
  )
}

export default LayoutAdmin
