import React,{useState} from 'react'
import TableSkeleton from '../../Component/shared/TableusersSkelton';
import { FaUser,  FaBan } from 'react-icons/fa';
import { useDeleteDashboardUsersMutation, useGetDashboardUsersQuery } from '../../store/Services/Users';
import { UserId ,convertDate } from '../../utils/Functions';
import Usershowmodal from '../../Component/Usershowmodal'
import DeleteConfirmationPopup from './../shared/DeletPopup';
import { Trash2 } from 'lucide-react';

function Customers() {

    const [user,setuser]=useState({})
    const [UserDelet,setUserDelet]=useState<string>("")
    const [UserPopupOpen ,setUserPopupOpen] =useState<boolean>(false)
    const [OpenDeletPopUP , setOpenDeletPopUP]=useState<boolean>(false)
    const[UserIdTodelete ,setUserIdTodelete] =useState<string>("") 
    const [distroy]=useDeleteDashboardUsersMutation() 
     const {data ,isFetching ,isSuccess}= useGetDashboardUsersQuery()
  
    console.log(data);



const handleViewCustomer = (CustomerData) => {
    setUserPopupOpen(true)
    setuser(CustomerData)
  };

const handleBanCustomer = (CustomerData) => {
  setUserDelet(`${CustomerData.firstname} ${' '} ${CustomerData.lastname}`)
  setUserIdTodelete(CustomerData.id)
 setOpenDeletPopUP(true)
}

const DeletUser = () => {
  distroy(UserIdTodelete)
}
  
   if(isFetching){
    return <TableSkeleton/>;
   }else
   
  return (
    <div className="bg-white rounded-lg shadow-sm border">
      <DeleteConfirmationPopup  isOpen={OpenDeletPopUP} onConfirm={DeletUser} itemName={UserDelet} action="Ban" onClose={ ()=>setOpenDeletPopUP(false) } title={"Ban user "}   message=" Are you sure you want to ban this user?"  />
        <Usershowmodal isOpen={UserPopupOpen}  userData={user} onClose={() => setUserPopupOpen(false)} />
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">User ID</th>
                      <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Name</th>
                      <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Email</th>
                      <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Phone</th>
                      <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Registration Date</th>
                      <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((customer) => (
                      <tr key={customer.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-6 text-sm text-primary font-medium cursor-pointer hover:bg-slate-400 hover:text-white" title="Copy UserId 🗄️" >{UserId(customer.id)}</td>
                        <td className="py-4 px-6 text-sm text-gray-900"> {`${customer.firstname} ${' '} ${customer.lastname}` }</td>
                        <td className="py-4 px-6 text-sm text-gray-900">{customer.email}</td>
                        <td className="py-4 px-6 text-sm text-gray-900">0{customer.Phone.toString()}</td>
                       
                        <td className="py-4 px-6 text-sm text-gray-900">{convertDate(customer.createdAt)}</td>
                        <td className="py-4 px-6">
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => handleViewCustomer(customer)}
                              className="p-2 text-gray-600 hover:text-primary hover:bg-primary-50 rounded-lg transition-colors"
                              title="View Customer"
                            >
                              <FaUser className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleBanCustomer(customer)}
                              className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                              title="Ban Customer ‼️"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
  )
}

export default Customers