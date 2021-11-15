import React, { useState, useEffect } from 'react'

import cardsData from 'api/cards.json'

function Cards() {
  const [cards, setCards] = useState([])

  useEffect(() => {
    setCards(cardsData)
  })

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 md:gap-x-4 gap-y-4 p-4 rounded-lg">
      {cards &&
        cards.map((card) => (
          <div className="flex flex-col justify-center items-center rounded bg-white shadow-sm px-4 py-8">
            <img src={card.image} alt={card.title} className="mb-6 " />
            <h3 className="text-brand-color text-lg text-center">
              {card.title}
            </h3>
            <p className="text-base text-gray-600 mt-2 text-center h-6">
              {card.description}
            </p>
          </div>
        ))}
    </div>
  )
}

export default Cards
