import React from 'react'

const BannerBox = ({url}) => {
    return (
        <div className="box bannerBox group">
            <img src={url} alt="" className='group-hover:scale-103 transition-all' srcset="" />
        </div>
    )
}

export default BannerBox