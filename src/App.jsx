import AutoScrollArea from "./components/AutoScrollArea"
import CardContainer from "./components/CardContainer"
import { useState } from "react"

import { AreaCirculo, AreaQuadrado, CoroaCirculo, PoligonoRegular, Retangulo, SetorCircularEmUmCirculoAninhado, TrapezoideIrregular, TroncoPiramide } from "./components/Atividades"

function App() {
  const [mousePosition, setMousePosition] = useState({x: null, y: null})
  
  const handleMouseMove = e => {
    const { clientX: mouseX, clientY: mouseY } = e

    const deltaX = ((mouseX - (window.innerWidth / 2)) / (window.innerWidth / 2)) * 20
    const deltaY = ((mouseY - (window.innerHeight / 2)) / (window.innerWidth / 2)) * 20

    setMousePosition({x: deltaX, y: deltaY})
  }

  return (
    <main className="w-screen h-screen bg-zinc-950 overflow-hidden">
      <AutoScrollArea>
        <CardContainer onMouseMove={handleMouseMove} >
         <AreaCirculo  mousePosition={mousePosition} />
        </CardContainer>

        <CardContainer onMouseMove={handleMouseMove} >
         <TroncoPiramide  mousePosition={mousePosition} />
        </CardContainer>

        <CardContainer onMouseMove={handleMouseMove} >
         <Retangulo  mousePosition={mousePosition} />
        </CardContainer>

        <CardContainer onMouseMove={handleMouseMove} >
         <CoroaCirculo  mousePosition={mousePosition} />
        </CardContainer>

        <CardContainer onMouseMove={handleMouseMove} >
         <TrapezoideIrregular  mousePosition={mousePosition} />
        </CardContainer>

        <CardContainer onMouseMove={handleMouseMove} >
         <PoligonoRegular  mousePosition={mousePosition} />
        </CardContainer>

        <CardContainer onMouseMove={handleMouseMove} >
         <AreaQuadrado mousePosition={mousePosition} />
        </CardContainer>
        
        <CardContainer onMouseMove={handleMouseMove} >
         <SetorCircularEmUmCirculoAninhado mousePosition={mousePosition} />
        </CardContainer>
      </AutoScrollArea>
    </main>
  )
}

export default App
