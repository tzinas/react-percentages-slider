import React, {useRef} from 'react'
import styled from 'styled-components'

const _ = require('lodash')

const BAR_HEIGHT = 3
const THUMB_WIDTH = 0.9
const THUMB_BORDER = 0.2

const SlideBar = styled.div`
  display: flex;
  width: 100%;
  border-radius: 3px;
  height: ${BAR_HEIGHT}rem;
  border-radius: 10px;
  overflow: hidden;
`
const Rect = styled.div`
  height: ${BAR_HEIGHT}rem;
  overflow: hidden;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .text {
    font-weight: 600;
    font-size: 0.9rem;
  }
  .percentage {
    font-size: 0.83rem;
  }
`

const SlideThumb = styled.div`
  border-left: ${THUMB_BORDER}rem;
  border-right: ${THUMB_BORDER}rem;
  border-top: 0;
  border-bottom: 0;
  border-style: solid;
  padding: 0;
  width: ${THUMB_WIDTH}rem;
  height: ${BAR_HEIGHT}rem;
  top: 0px;
  background: none;
  cursor: ew-resize;
  user-select: none;
`

const remToPixels = (rem) => {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize)
}

const Thumb = ({barRef, divisions, leftIndex, leftColor, rightColor, setDivisions, thumbsSpace}) => {
  const rightIndex = leftIndex + 1
  let oldX, oldPercentages = {}

  const handleMouseMove = event => {
    const newX = event.clientX
    const barWidth = barRef.current.offsetWidth

    let newPercentages = _.clone(oldPercentages)

    const changePercentage = (oldX - newX) / (barWidth - remToPixels(thumbsSpace)) * 100

    if(oldPercentages.left - changePercentage < 0) {
      newPercentages.right = oldPercentages.right + Math.abs(oldPercentages.left)
      newPercentages.left = 0
    }
    else if (oldPercentages.right + changePercentage < 0) {
      newPercentages.left = oldPercentages.left + Math.abs(oldPercentages.right)
      newPercentages.right = 0
    }
    else {
      newPercentages.left = oldPercentages.left - changePercentage
      newPercentages.right = oldPercentages.right + changePercentage
    }

    let tempDivisions = divisions
    tempDivisions[leftIndex].percentage = newPercentages.left
    tempDivisions[rightIndex].percentage = newPercentages.right

    setDivisions(_.clone(tempDivisions))
  }

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mouseup', handleMouseUp)
  }

  const handleMouseDown = event => {
    oldX = event.clientX
    oldPercentages.left = divisions[leftIndex].percentage
    oldPercentages.right = divisions[rightIndex].percentage

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  }

  return (
    <SlideThumb onMouseDown={handleMouseDown} style={{borderLeftColor: leftColor, borderRightColor: rightColor}} />
  )
}


const PercentagesSlider = ({divisions, setDivisions}) => {
  const thumbsSpace = (divisions.length - 1) * THUMB_WIDTH
  const barRef = useRef()
  return (
    <SlideBar ref={barRef}>
      {divisions.map((division, index) =>
        <React.Fragment key={index}>
          <Rect style={{width: `calc((100% - ${thumbsSpace}rem) * ${division.percentage} / 100 )`, backgroundColor: division.color}}>
            <span className='text'>{division.text}</span>
            <span className='percentage'>{(division.percentage).toFixed(0)}%</span>
          </Rect>
          {index < divisions.length - 1 ?
            <Thumb barRef={barRef} divisions={divisions}
                   leftIndex={index} leftColor={division.color}
                   rightIndex={divisions[index + 1].percentage} rightColor={divisions[index + 1].color}
                   setDivisions={setDivisions} thumbsSpace={thumbsSpace} />
            :
            <React.Fragment></React.Fragment>
          }
        </React.Fragment>
      )}

    </SlideBar>
  )
}

export default PercentagesSlider
