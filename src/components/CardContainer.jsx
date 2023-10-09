import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import React, { useContext } from 'react'
import { Context } from '../Context'

const CardContainer = ({ children, onMouseMove }) => {
  const { page, setPage, scrollRight, scrollLeft } = useContext(Context)

  const HandleClickBack = () => {
    setPage(page - 1)
    scrollLeft()
  }

  const HandleClickNext = () => {
    setPage(page + 1)
    scrollRight()
  }

  return (
    <div onMouseMove={onMouseMove} className={"min-w-full min-h-full flex justify-center items-center py-20"}>
      {
        page > 0 ?
          <motion.button
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            onClick={HandleClickBack} className='absolute left-2 hover:scale-110 w-[5%]'>
            <ArrowLeft color='white' className='w-full h-full' />
          </motion.button>
          : null
      }
      {children}
      <button onClick={HandleClickNext} className='absolute right-2 hover:scale-110 w-[5%]'>
        <ArrowRight color='white' className='w-full h-full' />
      </button>
    </div>
  )
}

export default CardContainer