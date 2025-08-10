const SearchInput = ({ placeholder, value, onChange , padding="px-4 py-2"}) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={`flex-1 ${padding} text-sm bg-[#f8f8f8] text-textColor rounded focus:outline-none`}
      value={value}
      onChange={onChange}
    />
  );
};

export default SearchInput;