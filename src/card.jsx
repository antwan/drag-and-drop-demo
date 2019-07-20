import React, { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import Image from './image'

const ItemTypes = {
  CARD: 'card',
}

/* Card is a draggable component that expects a title and move handler */
const Card = ({ id, title, index, moveCard, type }) => {
  const ref = useRef(null)

  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    hover(item, monitor) {
      if (!ref.current) {
        return
      }
      const sourceIndex = item.index
      const targetIndex = index

      // Avoid to replace items with themselves
      if (sourceIndex === targetIndex) {
        return
      }

      // Perform the move and set current item to target
      moveCard(sourceIndex, targetIndex)
      item.index = targetIndex
    },
  })

  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.CARD, id, index },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })

  drag(drop(ref));

  return (
    <div ref={ref} className={`card ${isDragging ? 'dragging' : ''}`}>
      <Image src={`/images/${type}.jpg`} alt={`Type ${type}`} />
      <span>{title}</span>
    </div>
  )
}

export default Card;
