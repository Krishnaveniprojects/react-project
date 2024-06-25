import { useState } from "react"
import Jothika from "./Jothika";

export default function App(){
const [Name,SetName]=useState("🦋🦋🦋🦋🦋")

function a(){
  SetName("Divya");
}

function b(){
  SetName(<div><img src="https://ssec.si.edu/sites/default/files/blogpost/images/BUTTERFLY%20WING%20OPTICS.png" style={{position:"relative", border:"2px solid blue"}}></img>
  <h4>Butterflies (and moths) are the only group of insects that have scales covering their wings, although some butterflies have reduced scales. They differ from other insects also by their ability to coil up their proboscis. Immatures. Caterpillars are the names given to the larvae of both butterflies and moths.</h4>
  </div>)
}

function c()
{
 SetName(<div><img src="https://pujacraft.com/cdn/shop/articles/Krishna-Janmashtami--2023-date1_64f79e1e5e4f8.jpg?v=1693982466" style={{width: "500px"} } ></img> <button onClick={k}>TV</button><button onClick={g}>Mobile</button> </div>) 
}

function k(){
  SetName(<div>
    <img src="https://www.esferize.com/wp-content/uploads/2021/11/metaball_3d-retro-tv-2.jpg" style={{width: "300px"} }  ></img> <button onClick={k}>TV</button><button onClick={g}>Mobile</button>
  </div>)
}

function g(){
  SetName(
  <img src="https://m.media-amazon.com/images/I/314Rp+8XKWL._AC_SR300,300.jpg"></img>
  )
}

function d(){
  SetName( 
  
 <div>
 <iframe width="560" height="315" src="https://www.youtube.com/embed/as4qePGRF24?si=ZOiVSgZXKraacboo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> <iframe width="560" height="315" src="https://www.youtube.com/embed/HoeyUcm0U1A?si=pe77mms3hr36xdV5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
 </div>)
}



let ar =[
  {Name:"suryraj1",age:12},
  {Name:"suryraj2",age:13},
  {Name:"suryraj3",age:17},
  {Name:"suryra4",age:15},
  {Name:"suryraj5"},
  {Name:"suryraj6"},
]

let Name1 ="suryraj"
return(
    <div>
      <button onClick={a} >Click me</button>
      <button onClick={b}>Click here</button>
      <button onClick={c}>Image Here</button>

      <button onClick={d}>Play Your Music</button>
      <h1>{Name}</h1>

      <table>
        {ar.map((y)=>(
            <tr>
              <td>{y.Name}</td>
              <td>{y.age}</td>
            </tr>
        ))}
      </table>
  <Jothika let b ={Name}/>


      </div>
      )
}

