import React from 'react'

const OrderStatus = ({status}) => {
  return (
    <span className={`flex items-center justify-center py-2 px-3 capitalize rounded-full ${status==="pending"?"bg-primary text-white ":""} ${status==="confirm"?"bg-green-500 text-white ":""} ${status==="delivered"?"bg-green-700 text-white ":""}`}>
        {status}
    </span>
  )
}

export default OrderStatus