import React from 'react'
import Card from './Card'
const Cardlist = (props) => {
    const cardItems = props.robot.map((robots, i) => {
        return (<Card key={robots.id} id={robots.id} name={robots.name} email={robots.email} />)
}
    )
    return (
        <div>
            {cardItems}
        </div>
    )
}
export default Cardlist