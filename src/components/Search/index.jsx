import React from "react";
import { Input } from "antd";

const { Search } = Input;

const SearchBar = (props) => {
  const {
    placeholder,
    buttonText,
    size,
    prefix,
    suffix,
    onSearch,
    onChange,
    value,
  } = props;
  return (
    <Search
      placeholder={placeholder}
      enterButton={buttonText}
      size={size}
      prefix={prefix}
      suffix={suffix}
      onSearch={onSearch}
      onChange={onChange}
      value={value}
    />
  );
};

export default SearchBar;
