import { useRef, useState } from "react"


export const useXPosition = (interval: number = 10) => {
  
    const [x, setX] = useState<number>(0);
    const limitsRef = useRef({
        start: 0,
        end: -100
    })
    const {start, end} = limitsRef.current;

    const moveRight = () => {
        setX(prev => {
            if(prev >= end ) return end;
            return prev - interval;
        })
    }

    const moveLeft = () => {
        setX(prev => {
            if(prev <= start ) return start;
            return prev - interval;
        })
    }

    return {
        x,
        moveRight,
        moveLeft
    };
}
