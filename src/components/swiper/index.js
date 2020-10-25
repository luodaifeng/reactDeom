import React from 'react'
import './style.css'
export default class Swiper extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        console.log(this.props.imgUrl);
        return (
            <div className='my-swiper-main'>

                {
                    this.props.imgUrl.length > 0 && this.props.imgUrl.map((item, index) => {
                        return (
                            <div className='my-silde' key={index}>
                                <a href={item.href} target='_blank' rel="noopener noreferrer">
                                    <img src={item.src} alt='' />
                                </a>
                                <div className='pagination'>
                                    <div className='doc active'></div>
                                    <div className='doc'></div>
                                    <div className='doc'></div>
                                </div>
                                </div>
                              
                        )
                    })
                }
            </div>
        )
    }
}