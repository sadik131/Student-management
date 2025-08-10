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
        <div className='bg-white pt-6 px-8 pb-8 mb-8'>
          {/* top */}
          <div className='flex items-center justify-between mb-3'>
            <h3 className='heading'>About Me</h3>
            <h4 className='text-4xl text-[#bcbcbc]'>...</h4>
          </div>
          {/* details info */}
          <div className='flex gap-10'>
            <img src={teacher} alt="" className='h-[320px]'/>
            {/* student details */}
            <div className='w-full flex flex-col gap-5'>
              {/* heading */}
              <div className='flex items-center justify-between'>
                <h3 className='heading'>Jessia Rose</h3>
                <div className='flex gap-2'>
                  <StudentIcon icon={<IoPrint />} />
                  <StudentIcon icon={<FaRegCopy />} />
                  <StudentIcon icon={<FaDownload />} />
                </div>
              </div>
              <p className='text-secondary max-w-lg'>Aliquam erat volutpat. Curabiene natis massa sedde lacu stiquen sodale word moun taiery.Aliquam erat volutpaturabiene natis massa sedde sodale word moun taiery.</p>
              {/* details table */}
              <table className='w-[70%]'>
                {Object.entries(TeacherDetails).map(([key, value]) => (
                  <tr key={key}>
                    <td className='text-secondary'>{key}</td>
                    <td className='text-textColor'>{value}</td>
                  </tr>
                ))}

              </table>
            </div>
          </div>
        </div>
        <h3 className='pt-5 pb-10 text-[#707070]'>© Copyrights <span className='text-textColor'>akkhor</span> 2019. All rights reserved. Designed by <span className='text-textColor'>PsdBosS</span></h3>
      </Layout>
    </>
  )
}

export default TeacherDetail