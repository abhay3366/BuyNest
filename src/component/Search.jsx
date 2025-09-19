import { Button } from "@mui/material"
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="searchbox w-[100%] h-[50px] bg-[#e5e5e5] rounded-[5px] relative">
        <input type="text" placeholder="Search for product..." className="w-full px-3 h-[35px] focus:outline-none bg-none p-5 text-[15px]" />
        <Button  className="absolute top-[7px] right-[5px] w-[35px] h-[35px] !min-w[35px] rounded-full"><FaSearch className="text-[22px] text-[#717171]" /></Button>
    </div>
  )
}

export default Search