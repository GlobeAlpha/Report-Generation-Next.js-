import Head from 'next/head'
import React from 'react'
//import Image from 'next/image'
import Link from "next/link"
import Report from '../pages/Report Page'
/*import CreateReport from '../pages/Create_Report'*/
import styles from '../styles/Home.module.css'




export default class Home extends React.Component {

    constructor(props) {
        super(props);

        this.updateFields = this.updateFields.bind(this);
        this.handleModal = this.handleModal.bind(this);
        this.editContent = this.editContent.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.submitData = this.submitData.bind(this);


        this.state = { Title: '', Summary: '', Description: '', Date: '11.11.20',openModal:false ,edit:false,submission: false }
    }


    updateFields(_event) {
        _event.preventDefault()
        this.setState({ [_event.target.name]: _event.target.value });
        console.log([_event.target.name]);

    }



    submitData(_event) {
        _event.preventDefault();
        this.setState({ submission: true });
        //console.log(this.state.submission);
        if (this.state.submission == true) {
            closeModal()
            console.log("close after submission")
        }
        
    }
    
    handleModal()
    {

        this.setState({ openModal: true })
    }

    editContent()
    {
        this.setState({ edit: true })
        console.log(this.state.edit);
    }

    modal()
    {

        if (this.state.openModal == true)
        {
            return (
                // use before selector to darken the  modal bg
                <div className={styles.modal_background} >
                    
                    <form className={styles.modal}>
                        <button onClick={this.closeModal}>X</button>
                        

                        <label htmlFor="title">
                        <input placeholder="Title" name="Title" value={this.state.Title} onChange={this.updateFields} />
                        </label>

                        <label htmlFor="summary">
                        <input placeholder="Summary" name="Summary" value={this.state.Summary} onChange={this.updateFields} />
                        </label>


                        <label htmlFor="date">
                        <input placeholder="DD.MM.YY" name="Date" value={this.state.Date} onChange={this.updateFields} />
                        </label>

                        <button type="submit" onClick={this.submitData} > Add new Report </button>


                    </form>
                </div>)

           
        }
    }

    closeModal() {
        this.setState({ openModal:false })
    }

    NewReport() {
        <div className={styles.card}>
            <h1 >{this.state.Title}</h1 >
            <p>{this.state.Summary}</p>
            <p>{this.state.Description}</p>
            <p>{this.state.Date}</p>
            
        </div >
    }

   

    displayReports()
    {

        
        var reports = [

            // add  id to each report  whihc will be later used to delete the report 
            <div  key={1} >
                <Link href="/ProgressReport1">View Report</Link>
                <Report Date="11.11.20" title="Progress Report#1" summary="Last known location of RCS#127:Saber is unknown, this report shows possible avenues of exploration." id={1} deleteReport={this.deleteReport}></Report>

            </div>,

            <div  key={2}>

                <Link href="/ProgressReport2">View Report</Link>
                <Report Date="11.11.20" title="Progress Report#2" summary="3 possible locations have been established" contentEditable={this.state.edit} id = {2}/>,

            </div>,


            <div  key = { 3 }>
                
                <Report Date="11.11.20" title="Progress Report#3" summary="3 possible locations have been established" id={ 3}>
                    <Link href="/ProgressReport3" ><button>View Report</button></Link>
                </Report>
                 
            </div>

        ]


        
        // attempting to remove component from array using filter doesn't work 
        

       /* var removeReport = reports.filter(FirstReport)*/
        //var Reports = reports.map(report => {
        //    <div>{ report}</div>
        //})



       /* console.log(Reports)*/
        // maybe pop off the report depedning on id 
        //var newReportArray = reports.splice([reports.props.id])
        //console.log(newReportArray)

        // Create Link for new dynamic route  by adding paramater as route  whihc will be will be filled in with dynamic after parsing
        if (this.state.submission == true) {
            reports.push(<Link href="/title" id={4} key={4}><Report Date={this.state.Date} title={this.state.Title} summary={this.state.Summary} key={4} /></Link>)
        }


        // instead of rendering entire array map over the array whihc will alow id to be extracted from the list 
        return reports


        
    }

    // reports can only be accessed in displayReport so i need to find a way to access report array then  access element in array then  delete  array item
    

    // render method is what mounts the jsx onto the dom 
    render() {
        return (
            <div className={styles.container}>
                <Head>
                    <title>Report Generation</title>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>


                { /* track changes  to form*/}
                { /*store form data */}
                { /*generate report  based on data from state */}

                {/*<main className={styles.main}>*/}
                {/*    <h1 className={styles.title}>*/}

                {/*    </h1>*/}

                {/*Welcome to <a href="https://nextjs.org">Next.js!</a>*/}

                {/* WHy I am writing mutiple js expression when invoking the Report  */}

                <div className={styles.grid} >

                    {this.displayReports()},


                    <button style={{ borderRadius: '20px', height: '40px', width: '40px' }} onClick={this.handleModal }>+</button>                        
                    
                    {this.modal()}
                    


                </div>



                <footer className={styles.footer}>
                    <h1>Footer</h1>
                    {/* <GenerateNewReport title={this.props.text }/>*/}
                </footer>
            </div>




        )
    }
}


