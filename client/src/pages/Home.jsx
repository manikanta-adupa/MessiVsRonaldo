import { useState, useEffect } from 'react'

function Greeting(props) {
    return (
        <div>
            <h1>Hello, {props.name}</h1>
        </div>
    )
}

export default function Home() {
    const [toggleState, setToggleState] = useState(false);
    useEffect(() => {
        console.log('toggleState', toggleState);
    }, [toggleState]);

    const handleToggle = () => {
        setToggleState(!toggleState);
    }
    return (
        <div>
            <Greeting name='Pandikokku'/>
            <Greeting name='Dhunaa'/>
            <button onClick={handleToggle}>Toggle</button>
            {toggleState && <p>You clicked the button!</p>}
        </div>
    )
}