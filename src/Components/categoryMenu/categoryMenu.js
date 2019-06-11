import './categoryMenu.css' 
import React from 'react'
import {Link} from 'react-router-dom'

const CategoryMenu = () => {
 let menu = [
   {
    label:"Handmade",
    descendants:[
      {
       label:"Embroidery",
       descendants: ["fils1","fils2","fils3"]
      },
      {
        label:"Crochet",
        descendants: ["fils1","fils2","fils3"]
      },
      {
        label:"Decoration",
        descendants: ["fils1","fils2","fils3"]
      },
    ]
   },
   {
    label:"Journey",
    descendants:[
      {
       label:"Appliance",
       descendants: ["fils1","fils2","fils3"]
      },
      {
        label:"Accessoires",
        descendants: ["fils1","fils2","fils3"]
      }
       
    ]
   },
   {
    label:"Games",
    descendants:[
      {
       label:"Intellectual games",
       descendants: ["fils1","fils2","fils3"]
      },
      {
        label:"Video games",
        descendants: ["fils1","fils2","fils3"]
      },
      
    ]
   },
   {
    label:"Music",
    descendants:[
      {
       label:"Instruments",
       descendants: ["fils1","fils2","fils3"]
      },
      {
        label:"Records",
        descendants: ["fils1","fils2","fils3"]
      }
    ]
   },
   {
    label:"Sports",
    descendants:[
      {
       label:"Equipment",
       descendants: ["fils1","fils2","fils3"]
      },
      {
        label:"Clothes",
        descendants: ["fils1","fils2","fils3"]
      }
    ]
   },
   {
    label:"Reading",
    descendants:[
      {
       label:"Psychology",
       descendants: ["fils1","fils2","fils3"]
      },
      {
        label:"Human Development",
        descendants: ["fils1","fils2","fils3"]
      },
      {
        label:"Relations",
        descendants: ["fils1","fils2","fils3"]
      },
      {
        label:"Nature",
        descendants: ["fils1","fils2","fils3"]
       },
       {
        label:"Languages",
        descendants: ["fils1","fils2","fils3"]
       },

    ]
   },
 ]


  return (
    <div>
      <div id="navbar">

{      
  menu.map((element) => {
    return(
      
      <div id="dropdown">
      <button id="dropbtn">{element.label} 
        <i id="fa fa-caret-down" />
      </button>
      <div id="dropdown-content"> 
        <div id="row">
        {
        element.descendants.map((filselement)=> {
          return (
            <div id="column">
              <h3>{filselement.label}</h3>
              {
                filselement.descendants.map((petitfilselement)=> {
                  return (
                    <Link to={`/${element.label}/${filselement.label}/${petitfilselement}`}>{petitfilselement}</Link>
                  )
                }
              )
              }
              
              
            </div>
          )
        }
        )
      }
        </div>
      </div>
     </div> 
  
    )
  
  }
  )
}

      </div>
    </div>
  )
}

export default CategoryMenu






