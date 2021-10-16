import './index.scss'

import Carousel from '../../components/common/Carousel'

const Gallery = () => {
    return (
        <div id="gallery">
            <div className='content'>
                <div className='carousel'>
                    <Carousel/>
                </div>
                <div className='photo-album'>
                    {
                        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((n, index) => {
                            return (
                                <div className='photo' key={index}>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Gallery