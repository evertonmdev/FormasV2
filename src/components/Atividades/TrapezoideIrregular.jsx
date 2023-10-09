import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { RectangleVertical } from 'lucide-react'

const TrapezoideIrregular = ({mousePosition}) => {
    const [comprimentoBaseMaior, setComprimentoBaseMaior ] = useState('')
    const [comprimentoBaseMenor, setComprimentoBaseMenor ] = useState('')
    const [altura, setAltura] = useState('')

    const [resultado, setResultado] = useState(null)

    const HandleChange = (e, setValue) => setValue(parseFloat(e.currentTarget.value))

    const changeComprimentoBaseMaior = e => HandleChange(e, setComprimentoBaseMaior )
    const changeComprimentoBaseMenor = e => HandleChange(e, setComprimentoBaseMenor )
    const changeAltura = e => HandleChange(e, setAltura)

    const CalcularArea = () => {
        let resultado = parseFloat((comprimentoBaseMaior + comprimentoBaseMenor) * altura) / 2
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
            <h3 className="left-10 text-3xl font-bold text-white">Calculo área trapezoide irregular</h3>
            <div className='mt-5 flex flex-col gap-3'>
                <input onChange={changeComprimentoBaseMaior} type='number' placeholder='Comprimento Maior' className='bg-transparent outline-none border-none text-lg text-white' />
                <input onChange={changeComprimentoBaseMenor} type='number' placeholder='Comprimento Menor' className='bg-transparent outline-none border-none text-lg text-white' />
                <input onChange={changeAltura} type='number' placeholder='Altura' className='bg-transparent outline-none border-none text-lg text-white' />

                <button onClick={CalcularArea} className='mt-2 w-fit bg-black/30 py-2 px-4 rounded-md text-neutral-100'>Calcular</button>
            </div>
            <div className='absolute flex justify-center items-center w-fit h-[30%] md:h-[80%] bottom-5 right-5'>
                <div className='relative w-full h-full flex justify-center items-center '>
                    <RectangleVertical className='text-white/80 w-full h-full rotate-45' />
                    {resultado ? <h3 className='absolute text-sm font-bold text-white'>{resultado}</h3> : null}
                </div>
            </div>
        </motion.div>
    )
}

export default TrapezoideIrregular