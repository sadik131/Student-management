import React, { useState } from 'react'
import Layout from '../../component/layout/Layout'
import TableHead from '../../component/table/TableHead'
import TableRow from '../../component/table/TableRow'
import { studentTh, StudentData } from '../Data'

function AllStudent() {
    const [searchExam, setSearchExam] = useState('');
    const [searchSubject, setSearchSubject] = useState('');
    const [searchDate, setSearchDate] = useState('');

    const filteredData = StudentData.filter(item => {
        return (
            item.Name.toLowerCase().includes(searchExam.toLowerCase()) &&
            item.Name.toLowerCase().includes(searchSubject.toLowerCase()) &&
            item.Name.includes(searchDate)
        );
    });

    return (
        <>
            <Layout heading="All Student">

                <div className='bg-red-400 w-full overflow-x-hidden'>
                    <TableHead headers={studentTh}>
                        {filteredData.map((item, index) => (
                            <TableRow
                                key={index}
                                index={index}
                                data={item}
                                view={false}
                            />
                        ))}
                    </TableHead>
                </div>
            </Layout>
        </>
    )
}

export default AllStudent