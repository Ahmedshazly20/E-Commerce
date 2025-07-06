import React from 'react'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
function AppSidebar() {
  return (
    <>
    <SidebarProvider>
       <AppSidebar />
       <main>
         <SidebarTrigger />
         
       </main>
     </SidebarProvider>
   </>
  )
}

export default AppSidebar