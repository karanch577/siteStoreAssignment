import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

function BrandsCard({data}) {
    console.log("card rerender")
  return (
    <AnimatePresence>
    <div className="absolute flex items-center justify-end h-full top-0">
          <motion.div
          key={data.id}
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          exit={{ x: "100%"}}
          transition={{
            x: { type: "spring", stiffness: 200, damping: 30 },
            opacity: { duration: 0.2 }
          }}

          className="content w-[50%] right-0 flex flex-col">
            <div className="bg-primary-black text-white p-16">
            <p className="text-[20px]">
             {data.review}
            </p>
            <div className="user flex items-center gap-5 mt-10">
              <img className="rounded-full w-20 h-20" src={data.personImgUrl} alt="user" />
              <div>
                <h3 className="text-[24px] font-[600]">{data.personName}</h3>
                <p className="text-[24px] font-[400]">{data.personDetail}</p>
              </div>
            </div>
            </div>
           
          </motion.div>
          </div>
          </AnimatePresence>
  )
}

export default BrandsCard