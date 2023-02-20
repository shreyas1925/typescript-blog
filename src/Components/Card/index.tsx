import {useState } from 'react'
import clapping from "../../../src/Icons/clapping.svg"
import heartRed from "../../../src/Icons/heart-red.svg"
import heartBlack from "../../../src/Icons/heart-black.svg"
import "./Card.css"

type CardProps = {
    date:string,
    readingTime:string,
    title:string,
    description:string,
    claps:number,
    liked:boolean, 
    image:string,
    // setCount :(value: number | ((prevVar: number) => number)) => void;
    // setCount:Dispatch<SetStateAction<boolean>>;  
}
const Card = (props:CardProps):JSX.Element => {

  const [count,setCount] = useState(3)
  const [heart,setHeart] = useState(true)

  const handleClick = () => {
    setCount(count+1)
  }

  const handleToggle = () => {
    setHeart(!heart)
  }

  const likedImage = heart ? heartRed : heartBlack
  return (
    
        <div className="app--blocks-block">
            <div>
                <img src={props.image} alt=""/>
            </div>
            <div className="block--timestamp">
                <p>{props.date}</p>
                <p>{props.readingTime}</p>       
            </div>
            <div className="block--description">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
            <hr/>
            <div className="block--icons">
                <div className="block--clap">
                    <img src={clapping} alt="" onClick={handleClick}/>
                    <p>{count}</p>
                </div>
                <div>
                <img src={likedImage} onClick={() => handleToggle()} alt=""/> 
                </div>
            </div>
        </div>
   
  )
}

export default Card