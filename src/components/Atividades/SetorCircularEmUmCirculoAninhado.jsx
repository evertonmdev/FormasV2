import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {  Circle, Square } from 'lucide-react'

const SetorCircularEmUmCirculoAninhado = ({mousePosition}) => {
    const [raioMaior, setRaioMaior] = useState('')
    const [raioMenor, setRaioMenor] = useState('')

    const [resultado, setResultado] = useState(null)

    const HandleChange = (e, setValue) => setValue(parseFloat(e.currentTarget.value))

    const changeRaioMaior = e => HandleChange(e, setRaioMaior)
    const changeRaioMenor = e => HandleChange(e, setRaioMenor)

    const CalcularArea = () => {
        const calcularAreaSetorCircular = (theta, R) => 0.5 * theta * Math.pow(R, 2)

        let anguloMeio = Math.PI / 3
        let areaSetorMaior = calcularAreaSetorCircular(anguloMeio, raioMaior)
        let areaSetorMenor = calcularAreaSetorCircular(anguloMeio, raioMenor)
        
        let resultado = parseFloat(areaSetorMaior - areaSetorMenor)

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
            <h3 className="left-10 text-3xl font-bold text-white">Calcular setor circular em um círculo aninhado </h3>
            <div className='mt-5 flex flex-col gap-3'>
                <input onChange={changeRaioMaior} type='number' placeholder='Raio maior' className='bg-transparent outline-none border-none text-lg text-white' />
                <input onChange={changeRaioMenor} type='number' placeholder='Raio menor' className='bg-transparent outline-none border-none text-lg text-white' />
                <button onClick={CalcularArea} className='mt-2 w-fit bg-black/30 py-2 px-4 rounded-md text-neutral-100'>Calcular</button>
            </div>
            <div className='absolute flex justify-center items-center w-fit h-[30%] md:h-[80%] bottom-5 right-5'>
                <div className='relative w-full h-full flex justify-center items-center '>
                    <Circle className='text-white/80 w-full h-full' />
                    <Circle className='text-white/80 w-[70%] h-[70%] absolute' />
                    {resultado ? <h3 className='absolute text-sm font-bold text-white'>{resultado}</h3> : null}
                </div>
            </div>
        </motion.div>
    )
}

export default SetorCircularEmUmCirculoAninhado


