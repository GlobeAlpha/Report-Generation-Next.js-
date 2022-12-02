// JavaScript source code
// report page 
import React from 'react'
import styles from '../styles/Home.module.css'
export default class Report extends React.Component

{
    constructor(props)
    {
        super(props);

        this.editContent = this.editContent.bind(this);
        this.state = {  edit: false }

    }

    editContent()
    {
        this.setState({ edit: true })
        // i need to figure how to switch off the  edit after submitting edit

       
    }


    render() 
    {

       
    return (

        <div className={styles.card} contentEditable={this.state.edit }>

            {/* Swap edit and submit button*/ }
           {/* <button type="submit"> Submit Edits</button>:*/}
            <button onClick={this.editContent}>Edit</button>
            <p>{this.props.Date}</p>
            <h1 >{this.props.title }</h1 >
            <p>{this.props.summary}</p>

            
          
            
        
           </div >
    )
}
}

