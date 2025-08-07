 const TableSkeleton = ({ rows = 5 }) => {
  return (
    <>
      {Array.from({ length: rows }).map((_, index) => (
        <tr key={index} className="border-b border-gray-100">
          {/* ID Column */}
          <td className="py-4 px-6">
            <div className="h-4 bg-gray-200 rounded animate-pulse w-8"></div>
          </td>
          
          {/* Name Column */}
          <td className="py-4 px-6">
            <div className="h-4 bg-gray-200 rounded animate-pulse w-24"></div>
          </td>
          
          {/* Email Column */}
          <td className="py-4 px-6">
            <div className="h-4 bg-gray-200 rounded animate-pulse w-32"></div>
          </td>
          
          {/* Phone Column */}
          <td className="py-4 px-6">
            <div className="h-4 bg-gray-200 rounded animate-pulse w-28"></div>
          </td>
          
          {/* Orders Column */}
          <td className="py-4 px-6">
            <div className="h-4 bg-gray-200 rounded animate-pulse w-6"></div>
          </td>
          
          {/* Registered Column */}
          <td className="py-4 px-6">
            <div className="h-4 bg-gray-200 rounded animate-pulse w-20"></div>
          </td>
          
          {/* Actions Column */}
          <td className="py-4 px-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-200 rounded-lg animate-pulse"></div>
              <div className="w-8 h-8 bg-gray-200 rounded-lg animate-pulse"></div>
            </div>
          </td>
        </tr>
      ))}
    </>
  );
};

 export default TableSkeleton