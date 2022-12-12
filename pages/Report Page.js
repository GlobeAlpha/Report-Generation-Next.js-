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
        this.deleteReport = this.deleteReport.bind(this);


        this.state = {  edit: false,delete:false }

    }

    editContent()
    {

        if (this.state.edit == false) {
            this.setState({ edit: true })
        }

        else if (this.state.edit == true)
        {
            this.setState({ edit: false })
        }
        // focus  on the edit 

       
    }

    deleteReport(event) {

        console.log(this.props.id)
        // filter option
        // splice
        // delete state
        if (this.state.delete == false) {
            this.setState({ delete: true })
            console.log("Deleting in Progress")
        }
      

    }
   

    render() {

        
            return (

                < div className={styles.card} contentEditable={this.state.edit} id={this.props.id} >
                    
                    
                    
            
{
                        this.state.delete ? null :
                            <div>
                                <button onClick={this.editContent}>Edit</button>
                                <button onClick={this.deleteReport}>Delete</button>
                        <p>{this.props.Date}</p>
                        <h1 >{this.props.title}</h1 >
                        <p>{this.props.summary}</p>
                    </div>

                    }



                </div >



            )
        
}
}

