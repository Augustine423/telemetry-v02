import { Ellipsis } from "lucide-react"
import { Link } from "react-router-dom"


const DocumentListRow = ({document}) => {
  return (
  
        <>
        <tr id="printArea" className="hover:bg-gray-100 border-b">
          {/* Occurrence Time */}
          <td className="px-6 py-4 text-sm text-gray-700 whitespace-nowrap ">
           {document.no}
          </td>
      
          {/* No */}
          <td className="px-6 py-4 text-sm text-gray-700 whitespace-nowrap">
          {document.documentName}
          </td>
      
          {/* File Name */}
          <td className="px-6 py-4 text-sm text-gray-700 whitespace-nowrap">
          {document.author}
          </td>
      
          {/* Author */}
          <td className="px-6 py-4 text-sm text-gray-700 whitespace-nowrap">
          {document.date}
          </td>
      
      
          {/* Action Buttons */}
          <td className=" py-4 text-sm">
            
      
              {/* Details Link */}
              <Link
                to={`/dashboard/document-detail/${document.id}`}
                className="text-gray-400 hover:text-gray-600"
              >
                <Ellipsis className="size-6" />
              </Link>
         
          </td>
        </tr>
   </>
  )
}

export default DocumentListRow