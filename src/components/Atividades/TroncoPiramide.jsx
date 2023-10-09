import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Triangle } from 'lucide-react'

const TroncoPiramide = ({mousePosition}) => {
    const [aMenor, setAMenor] = useState('')
    const [aMaior, setAMaior] = useState('')
    const [h, setH] = useState('')
    const [apotema, setApotema] = useState('')
    
    const [resultado, setResultado] = useState(null)

    const HandleChange = (e, setValue) => setValue(parseFloat(e.currentTarget.value))

    const changeAMenor = e => HandleChange(e, setAMenor)
    const changeAMaior = e => HandleChange(e, setAMaior)
    const changeH = e => HandleChange(e, setH)
    const changeApotema = e => HandleChange(e, setApotema)

    const CalcularArea = () => {
        let Ltrapezoide = (aMenor + aMaior) / 2 + 2 * Math.sqrt(Math.pow((aMaior - aMenor) / 2, 2) + Math.pow(h, 2));    
        let resultado = parseFloat(aMenor + aMaior + Ltrapezoide * apotema)

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
            <h3 className="left-10 text-3xl font-bold text-white">Calculo Tronco da pirâmide</h3>
            <div className='mt-5 flex flex-col gap-3'>
                <input onChange={changeAMenor} type='number' placeholder='Área da base menor' className='bg-transparent outline-none border-none text-lg text-white' />
                <input onChange={changeAMaior} type='number' placeholder='Área da base menor' className='bg-transparent outline-none border-none text-lg text-white' />
                <input onChange={changeH} type='number' placeholder='Altura do tronco da pirâmide' className='bg-transparent outline-none border-none text-lg text-white' />
                <input onChange={changeApotema} type='number' placeholder='Apótema do trapezoide' className='bg-transparent outline-none border-none text-lg text-white' />
                <button onClick={CalcularArea} className='mt-2 w-fit bg-black/30 py-2 px-4 rounded-md text-neutral-100'>Calcular</button>
            </div>
            <div className='absolute flex justify-center items-center w-fit h-[30%] md:h-[80%] bottom-5 right-5'>
                <div className='relative w-full h-full flex justify-center items-center '>
                    <Triangle className='text-white/80 w-full h-full' />
                    {resultado ? <h3 className='absolute text-sm font-bold text-white'>{resultado}</h3> : null}
                </div>
            </div>
        </motion.div>
    )
}

export default TroncoPiramide
