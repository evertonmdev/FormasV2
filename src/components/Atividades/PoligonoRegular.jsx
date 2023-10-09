import React, { useState } from 'react'
import { motion } from 'framer-motion'

const PoligonoRegular = ({mousePosition}) => {
    const [numeroLados, setNumeroLados] = useState('')
    const [ComprimentoLado, setComprimentoLado] = useState('')
    const [apotema, setApotema] = useState('')

    const [resultado, setResultado] = useState(null)

    const HandleChange = (e, setValue) => setValue(parseFloat(e.currentTarget.value))

    const changeNmrLados = e => HandleChange(e, setNumeroLados)
    const changeCmpLado = e => HandleChange(e, setComprimentoLado)
    const changeApotema = e => HandleChange(e, setApotema)

    const CalcularArea = () => {
      const resultado = parseFloat((numeroLados * ComprimentoLado * apotema) / 2)
      setResultado(resultado.toFixed(3))
    }
  
    return (
      <motion.div 
          style={{
              rotateY: mousePosition.x !== null ? + mousePosition.x + 'deg' : "15deg",
              rotateX: mousePosition.y !== null ? + mousePosition.x + 'deg' : "-20deg"
          }}
          className="w-[80%] bg-white/20 rounded-3xl h-full PerspectiveCard relative flex flex-col p-10"
      >
          <h3 className="left-10 text-3xl font-bold text-white">Calcular Polígono Regular</h3>
          <div className='mt-5 flex flex-col gap-3'>
            <input onChange={changeNmrLados} type='number' placeholder='Número de lados' className='bg-transparent outline-none border-none text-lg text-white' />
            <input onChange={changeCmpLado} type='number' placeholder='Comprimento do lado' className='bg-transparent outline-none border-none text-lg text-white' />
            <input onChange={changeApotema} type='number' placeholder='Apótema' className='bg-transparent outline-none border-none text-lg text-white' />
            <button onClick={CalcularArea} className='mt-5 w-fit bg-black/30 py-2 px-4 rounded-md text-neutral-100'>Calcular</button>
          </div>
          <div className='absolute flex justify-center items-center min-w-fit h-[30%] md:h-[80%] bottom-5 right-5'>
            <div className='relative min-w-fit h-full flex justify-center items-center '>
              {resultado ? <h3 className='min-w-fit text-xl font-bold text-white right-5'>A Área é: {resultado}</h3> : null}
            </div>
          </div>
      </motion.div>
    )
}

export default PoligonoRegular