import React from 'react';
import Navbar from '../src/components/Navbar'
import Hero from '../src/components/Hero'
import Card from '../src/components/Card'
import Style from '../src/style.css'
import data from './data'

export default function App(){
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                item={item}
            />
        )
    })
    return(
        <div>
            <Navbar />
            <Hero />
            <section className='cards-list'>
                {cards}
            </section>
        </div>
    )
}