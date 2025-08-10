import Layout from '../../component/layout/Layout'
import Input from '../../component/Form/InputField'

function AdmissionForm() {
  return (
    <>
      <Layout heading="Students Admission">
        {/* info card */}
        <div className='bg-white pt-6 px-8 pb-8 mb-8'>
          {/* top */}
          <div className='flex items-center justify-between mb-3'>
            <h3 className='heading'>Add New Students</h3>
            <h4 className='text-4xl text-[#bcbcbc]'>...</h4>
          </div>
          {/* Admission Form */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            <Input
            lable="First Name *"
            type="text"
          />
            <Input
            lable="Last Name *"
            type="text"
          />
            <Input
            lable="First Name *"
            type="text"
          />
            <Input
            lable="First Name *"
            type="text"
          />
          </div>
          
        </div>
        <h3 className='pt-5 pb-10 text-[#707070]'>© Copyrights <span className='text-textColor'>akkhor</span> 2019. All rights reserved. Designed by <span className='text-textColor'>PsdBosS</span></h3>
      </Layout>
    </>
  )
}

export default AdmissionForm