import { useState } from "react"

const useHandleAccordion = () => {
    const [index,setIndex]=useState(0)
    const handelAccordion = (clickIndex) => {
        setIndex(index == clickIndex ? null : clickIndex)
    }
    return {index,handelAccordion}
}

export default useHandleAccordion