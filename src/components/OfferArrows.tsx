import { Tag, Icon } from '@chakra-ui/react'
import { useState, useEffect } from 'react';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'


interface Props {
    xAxis: number;
    side: 'l' | 'r';
    action: () => void;
}

export const OfferArrows = ({ xAxis, side, action }:Props) => {

    const [animate, setAnimate] = useState(true);

    useEffect(() => {
        if(side === 'l') {
            return (xAxis < 0) ? setAnimate(true) : setAnimate(false);
        } else {
            return (xAxis > -100) ? setAnimate(true) : setAnimate(false);
        }
    }, [xAxis, side])

    
  return (
    <>
        <Icon
            as={ BsFillArrowLeftCircleFill }
            onClick={action}
            position="absolute"
            left={side === 'l' ? '-6' : 'auto'}
            right={side === 'r' ? '-6' : 'auto'}
            top="45%"
            transform={ `scale(2.3) ${side === 'r' ? 'rotate(180deg)' : ''}` }
            opacity=".2"
            transition="opacity 200ms linear"
            fill="red.600"
            animation={ animate ? "fadeInOut 2s linear infinite" : "" }
            _hover={{
                cursor: animate ? 'pointer' : 'not-allowed',
                opacity: animate ? '1' : '.2',
            }}
        />
        {   animate && (
                <Tag
                    colorScheme="red"
                    variant="solid"
                    position="absolute"
                    left={side === 'l' ? '-16' : 'auto'}
                    right={side === 'r' ? '-16' : 'auto'}
                    animation={ animate ? "fadeInOut 2s linear infinite" : "" }
                    top="55%"
                >
                    Más ofertas</Tag>
        )}
    </>
  )
}
