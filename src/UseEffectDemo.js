import React, {useState, useEffect} from "react"

const UseEffectDemo = ({students, dispatchStudent}) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    // items-state
    const [items, setItems] = useState([]);
    const [resourceType, setResourceType] = useState("posts");

    const updateWindowSize = () => {
        setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        // check if students cotains the relevant data ?
        // if not, then fetch ... then dispatch it 
        // fetch
        console.log('fetching ...');
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`).
            then(response => response.json()).then(json => {
                setItems(json)
            })
    }, [resourceType])

    useEffect(() => {
        console.log('-- use effect');

        // didmount -- add event
        window.addEventListener("resize", updateWindowSize)

        return () => {
            // unmount -- remove event
            window.removeEventListener("resize", updateWindowSize)
        }
    }, [])

    return (<div>
        <hr />
        <div>Window size: {windowWidth}</div>
        <button onClick={() => setResourceType('posts')}>POSTS</button>
        <button onClick={() => setResourceType('users')}>USERS</button>
        {items.slice(0, 5).map(item => {
            return <div key={item.id}>{item.id} {item.title} {item.name}</div>
        })}
            
        </div>)

}

export default UseEffectDemo;