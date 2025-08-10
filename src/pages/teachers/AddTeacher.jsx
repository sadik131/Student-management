import Layout from '../../component/layout/Layout'
import Input from '../../component/Form/InputField'
import ClassSelect from '../../component/Form/SelectField'
import { Blood, Gender, Religion, section } from '../Data'
import DateField from '../../component/Form/DateField'

function AddTeacher() {
    return (
        <>
            <Layout heading="Teacher">
                {/* info card */}
                <div className='bg-white pt-6 px-8 pb-8 mb-8'>
                    {/* top */}
                    <div className='flex items-center justify-between mb-3'>
                        <h3 className='heading'>Add New Teachers</h3>
                        <h4 className='text-4xl text-[#bcbcbc]'>...</h4>
                    </div>
                    {/* Admission Form */}
                    <div className=''>
                        {/* 1st 4 input field  */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

                            <Input
                                lable="First Name *"
                                type="text"
                                padding='pr-4'
                            />
                            <Input
                                lable="Last Name *"
                                type="text"
                            />
                            <ClassSelect type={"Gender *"} placeholder="Please select gender" option={Gender} />

                            <DateField lable={"Date Of Birth *"} padding='pr-4 md:px-4' />
                        </div>
                        {/* 2nd 4 input field  */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

                            <Input
                                lable="ID No"
                                type="text"
                                padding='pr-4'
                            />
                            <ClassSelect type={"Blood Group *"} placeholder="Please select gender" option={Blood} />
                            <ClassSelect type={"Religion *"} placeholder="Please select gender" option={Religion} />
                            <Input
                                lable="E-Mail"
                                type="text"
                            />
                        </div>
                        {/* 3nd 4 input field  */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

                            <ClassSelect type={"Class *"}
                                placeholder="Please select gender" option={section} />
                            <ClassSelect type={"Section  *"} placeholder="Please select gender" option={section} />
                            <Input
                                lable="Address"
                                type="text"
                            />
                            <Input
                                lable="Phon"
                                type="text"
                            />
                        </div>
                        {/* 5th field */}
                        <div className='grid grid-cols-2'>
                            <div className='mb-6 '>
                                <label className="block mb-2 text-base font-normal text-secondary">Short BIO</label>
                                <textarea className='bg-[#f0f1f3] w-full px-4 py-1 rounded-md focus:outline-none col-span-2' name="" id=""></textarea>
                            </div>
                            <div className="mt-4 lg:pl-4   ">
                                <label className="block mb-2 font-medium">Upload Student Photo (150px X 150px)</label>
                                <input type="file" />
                            </div>
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

export default AddTeacher