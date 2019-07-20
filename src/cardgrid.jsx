import React, { useState, useCallback } from 'react';
import data from './data.json';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import update from 'immutability-helper';
import Card from './card';

/* CardGrid is to be used in complement with Card to display a grid of drag/droppable cards */
const CardGrid = (prop) => {
  const [cards, setCards] = useState(data);

  const moveCard = useCallback(
    (sourceIndex, targetIndex) => {
      const dragCard = cards[sourceIndex];
      setCards(update(cards, {
        $splice: [[sourceIndex, 1], [targetIndex, 0, dragCard]],
      }));
    },
    [cards],
  )

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="grid">
        {cards.map((item, i) => <Card
          key={item.position}
          index={i}
          id={item.position}
          title={item.title}
          type={item.type}
          moveCard={moveCard}
        />)}
      </div>
    </DndProvider>
  );
}

export default CardGrid;
