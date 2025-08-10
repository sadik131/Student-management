import React from 'react'

function Layout({ children, heading }) {
    return (
        <>
            <div className='flex flex-col h-full bg-bg w-full gap-10 p-5 lg:p-10 max-w-6xl'>
                <div className=''>
                    <h1 className='text-3xl font-bold text-textColor '>{heading}</h1>
                </div>
                <div className=''>{children}</div>
            </div>
        </>
    )
}

export default Layout