

// *************************Way one**********************************
// /* eslint-disable no-unused-vars */
// import React from 'react'
// import card2 from '../../assets/images/AboutUs/CardSection/card2.png'


// const ImageSection = () => {
//   return (
//     <div className='px-[5.5vw] my-[60px] md:my-[120px] h-full'>
//     <div className='flex h-[40vmin] md:h-[70vmin] w-full '>

//     {Array.from({ length: 6 }).map((_, i) => (
//       <div key={i} className=' w-full rounded-full h-full text-yellow-400 overflow-hidden'>
//         <img loading='lazy' src={card2} alt="" className='w-full h-full object-cover object-center' />
//       </div>
//     ))}
        
//     </div>
//     </div>
//   )
// }

// export default ImageSection












// ****************************Way 2*************************************
// /* eslint-disable no-unused-vars */
// import React from 'react'
// import card2 from '../../assets/images/AboutUs/CardSection/card2.png'


// const ImageSection = () => {
//   return (
//     <div className='px-[5.5vw] my-[60px] md:my-[120px] h-full'>
// <div className='flex items-center justify-center h-[40vmin] md:h-[70vmin]'>

//     <div className="mask1 w-full  flex items-center justify-center">
//         <img loading='lazy'
//           src={card2}
//           alt="Cinque Terre"
//           className="w-full h-full object-cover object-center"
//         />
//       </div>
// </div>
        
//     </div>
//   )
// }

// export default ImageSection



// ***************************************Way 3*************************************
/* eslint-disable no-unused-vars */
import React from 'react'
import clipcard from '../../assets/images/AboutUs/ImageSection/clipcard.png'

const ImageSection = () => {
    return (
        <div className='px-[5.5vw] my-[60px] md:my-[120px] h-full '>
            <div
                className='relative h-[40vmin] md:h-[70vmin] bg-cover bg-center bg-no-repeat image-section'
                style={{ backgroundImage: `url(${clipcard})` }}
            >


            </div>

        </div>
    )
}

export default ImageSection
