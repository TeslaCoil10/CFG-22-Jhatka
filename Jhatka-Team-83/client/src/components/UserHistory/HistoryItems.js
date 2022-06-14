import React from 'react'

function HistoryItems({items}) {
  
  
  return (
    <div className='section-center'>
      {items.map((menuItem) => {
        const { id, title, Summery, Stars } = menuItem;
        return (
          <article key={id} className='menu-item'>
            <div className='item-info'>
              <header>
                <h4>{title}</h4>
                <h6 className='price'>Stars: {Stars}/5</h6>
              </header>
            </div>
          </article>
        );
      })}
    </div>
  )
}

export default HistoryItems