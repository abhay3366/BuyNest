import React, { useState } from 'react'

const useSingleAccordion = () => {
    const [allowSingleAccordion, setAllowSingleAccordion] = useState(false);
    const handelToggleAccordion = () => {
        setAllowSingleAccordion(!allowSingleAccordion)
    }
    return { handelToggleAccordion, allowSingleAccordion }
}

export default useSingleAccordion