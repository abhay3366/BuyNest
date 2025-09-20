import { Button } from "@mui/material"
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="searchbox w-full h-[50px] bg-[#e5e5e5] rounded-[5px] relative flex items-center px-2">
  <input
    type="text"
    placeholder="Search for product..."
    className="w-full h-[35px] px-3 focus:outline-none bg-transparent text-[15px]"
  />
  <Button className="absolute top-1/3 right-[5px] w-[35px] h-[35px] !min-w-[35px] rounded-full -translate-y-1/2">
    <FaSearch className="text-[22px] text-[#717171]" />
  </Button>
</div>

  )
}

export default Search