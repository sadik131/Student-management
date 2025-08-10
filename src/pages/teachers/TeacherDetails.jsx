import React from 'react'
import Layout from '../../component/layout/Layout'
import teacher from "../../assets/teacher.jpg"
import StudentIcon from '../../component/layout/studentIcon'
import { IoPrint } from 'react-icons/io5'
import { FaDownload, FaRegCopy } from 'react-icons/fa'
import { TeacherDetails } from '../Data'

function TeacherDetail() {
  return (
    <>
      <Layout heading="Teachers">
        {/* info card */}
        <div className="bg-white pt-6 px-4 md:px-8 pb-8 mb-8">
          {/* top */}
          <div className="flex items-center justify-between mb-3 text-center sm:text-left">
            <h3 className="heading">About Me</h3>
            <h4 className="text-4xl text-[#bcbcbc] pb-4 sm:pb-0">...</h4>
          </div>

          {/* details info */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <img
              src={teacher}
              alt=""
              className="w-full md:w-auto h-[250px] md:h-[320px] object-cover rounded"
            />

            {/* teacher details */}
            <div className="w-full flex flex-col gap-5">
              {/* heading */}
              <div className="flex items-center justify-between gap-3">
                <h3 className="heading">Jessia Rose</h3>
                <div className="flex gap-2">
                  <StudentIcon icon={<IoPrint />} />
                  <StudentIcon icon={<FaRegCopy />} />
                  <StudentIcon icon={<FaDownload />} />
                </div>
              </div>

              <p className="text-secondary max-w-lg">
                Aliquam erat volutpat. Curabiene natis massa sedde lacu stiquen sodale word moun
                taiery. Aliquam erat volutpaturabiene natis massa sedde sodale word moun taiery.
              </p>

              {/* details table */}
              <div className="overflow-x-auto">
                <table className="min-w-full md:w-[70%] border-collapse">
                  <tbody>
                    {Object.entries(TeacherDetails).map(([key, value]) => (
                      <tr key={key}>
                        <td className="p-2 md:p-[10px] text-secondary whitespace-nowrap">{key}</td>
                        <td className="p-2 md:p-[10px] text-textColor">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <h3 className="pt-5 pb-10 text-[#707070] text-center">
          © Copyrights <span className="text-textColor">akkhor</span> 2019. All rights reserved.
          Designed by <span className="text-textColor">PsdBosS</span>
        </h3>
      </Layout>
    </>
  )
}

export default TeacherDetail
