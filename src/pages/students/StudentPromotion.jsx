import Layout from '../../component/layout/Layout'
import ClassSelect from '../../component/Form/SelectField'
import { section, session } from '../Data'

function StudentPromotion() {
  return (
    <>
      <Layout heading="Student">
        {/* info card */}
        <div className='bg-white pt-6 px-8 pb-8 mb-8'>
          {/* top */}
          <div className='flex items-center justify-between mb-3'>
            <h3 className='heading'>Search Student Promotion</h3>
            <h4 className='text-4xl text-[#bcbcbc] pb-4'>...</h4>
          </div>
          {/* Admission Form */}
          <div className=''>
            {/* 1st input field  */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              <ClassSelect type={"Current Session *"} placeholder="Please select gender" option={session} />
              <ClassSelect type={"Promote Session *"} placeholder="Please select gender" option={session} />
              <ClassSelect type={"Promotion From Class  *"} placeholder="Please select gender" option={section} />
              <ClassSelect type={"Promotion To Class *"} placeholder="Please select gender" option={section} />
            </div>
           

            {/* Buttons */}
            <div className="flex gap-4 lg:pl-4 mt-4">
              <button className="bg-LightYellow hover:bg-yellow-600 text-white px-6 py-2 rounded">
                Save
              </button>
              <button className="bg-LightBlue hover:bg-blue-800 text-white px-6 py-2 rounded">
                Reset
              </button>
            </div>

          </div>

        </div>
        <h3 className='pt-5 pb-10 text-[#707070]'>© Copyrights <span className='text-textColor'>akkhor</span> 2019. All rights reserved. Designed by <span className='text-textColor'>PsdBosS</span></h3>
      </Layout>
    </>
  )
}

export default StudentPromotion