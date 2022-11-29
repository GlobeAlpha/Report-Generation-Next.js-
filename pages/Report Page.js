// JavaScript source code
// report page 
import React from 'react'
import styles from '../styles/Home.module.css'
export default class Report extends React.Component

{
    render() 
    {
    return (

            <div className = {styles.card} >

            <p>{this.props.Date}</p>
            <h1 >{this.props.title }</h1 >
            <p>{this.props.summary}</p>
        
           </div >
    )
}
}

