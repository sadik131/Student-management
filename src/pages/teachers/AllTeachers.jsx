import React, { useState } from 'react'
import Layout from '../../component/layout/Layout'
import TableHead from '../../component/table/TableHead'
import TableRow from '../../component/table/TableRow'
import { TeacherData, TeacherTh } from '../Data'
import SearchInput from '../../component/Form/SearchInput'

function AllTeachers() {
    const [roll, setRoll] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const filteredData = TeacherData.filter(item => {
        return (
            item.Id.toLowerCase().includes(roll.toLowerCase()) &&
            item.Name.toLowerCase().includes(name.toLowerCase()) &&
            item.Phon.includes(phone)
        );
    });

    return (
        <>
            <Layout heading="Teachers">

                <div className='bg-white pt-4 px-8 pb-8 mb-8 rounded'>
                    {/* top */}
                    <div className='flex items-center justify-between mb-3'>
                        <h3 className='heading'>All Teachers Data</h3>
                        <h4 className='text-4xl pb-4 text-[#bcbcbc] pb-4'>...</h4>
                    </div>
                    <div className='w-full overflow-x-hidden'>
                        <div className="flex flex-col lg:flex-row gap-4 mb-6">
                            <SearchInput
                                placeholder="Search by ID..."
                                value={roll}
                                onChange={(e) => setRoll(e.target.value)}
                            />
                            <SearchInput
                                placeholder="Search by Name..."
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <SearchInput
                                placeholder="Search by Phone..."
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                            <button className="bg-darkYellow uppercase text-white text-sm p-[10px] rounded">
                                SEARCH
                            </button>
                        </div>
                        <TableHead headers={TeacherTh}>
                            {filteredData.map((item, index) => (
                                <TableRow
                                    key={index}
                                    index={index}
                                    data={item}
                                />
                            ))}
                        </TableHead>
                    </div>
                </div>

            </Layout>
        </>
    )
}

export default AllTeachers