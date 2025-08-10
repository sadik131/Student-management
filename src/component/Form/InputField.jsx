
function Input({ lable, type, placeholder, bgColor="bg-bg", value , padding="px-4 py-3" }) {
    return (
        <div className=' w-full md:px-4 md:mb-6'>
            <label className="block mb-2 text-base font-normal text-secondary">{lable}</label>
            <input
                value={value}
                type={type}
                placeholder={placeholder}
                onChange={() => {}}
                className={`${bgColor} w-full ${padding} rounded-md focus:outline-none`}
            />
        </div>
    )
}

export default Input