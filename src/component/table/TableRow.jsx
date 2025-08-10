import { FaEdit, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const TableRow = ({ data, index, statusColors = {}, view, action = false }) => {

const getCellStyle = (key, value) => {
  if (key.toLowerCase() === "status") {
    if (value.toLowerCase() === "pending") {
      return "bg-red-500 text-white px-4 py-2 font-medium rounded-full";
    } else {
      return "bg-green-500 text-white px-4 py-2 font-medium rounded-full";
    }
  }
  return "text-secondary";
};


  return (
    <tr className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border border-[#e1e1e1]`}>
      {Object.entries(data).map(([key, value]) => (
        <td
          key={key}
          className="whitespace-nowrap min-w-[100px] px-4 py-3 text-sm"
        >
          {key === "Photo" ? (
            <img
              src={value}
              alt="product"
              className="w-8 h-w-8 object-cover rounded-full"
            />
          ) : (
            <span
              className={`px-2 py-1 rounded-full ${getCellStyle(key, value)}`}
            >
              {value}
            </span>
          )}
        </td>
      ))}
    </tr>
  );
};

export default TableRow;