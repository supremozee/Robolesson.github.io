import React from 'react'
import Card from '../component/Card'
const Cardlist = (props) => {
    if (false) {
        throw new Error
    }
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