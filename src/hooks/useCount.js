import { useState } from "react"

export const useCount = (valInicial = 1, minimo, maximo) => {

    if (valInicial < minimo || valInicial > maximo) {
        valInicial = minimo
    }

    const [count, setCount] = useState(valInicial)
    const sum = () => count < maximo && setCount(count + 1)
    const minus = () => count > minimo && setCount(count - 1)
    const reset = () => setCount(valInicial)

    return { count, sum, minus, reset }
}
