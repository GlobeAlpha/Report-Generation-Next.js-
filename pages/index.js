import Head from 'next/head'
import React from 'react'
//import Image from 'next/image'
import Link from "next/link"
import Report from '../pages/Report Page'
/*import ProgressReport from '../pages/ProgressReport1'*/
/*import CreateReport from '../pages/Create_Report'*/
import styles from '../styles/Home.module.css'




export default class Home extends React.Component {

    constructor(props) {
        super(props);

        this.updateFields = this.updateFields.bind(this);
        this.submitData = this.submitData.bind(this);


        this.state = { Title: '', Summary: '', Description: '', Date: '11.11.20', submission: false }
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


    }


    NewReport() {
        <div className={styles.card}>
            <h1 >{this.state.Title}</h1 >
            <p>{this.state.Summary}</p>
            <p>{this.state.Description}</p>
            <p>{this.state.Date}</p>
            {console.log("Report Generated")}
        </div >
    }

    displayReports() {

        
        var reports = [
            // Static route seems to  not generate the component  
            <Link href="/ProgressReport1"> <Report Date="11.11.20" title="Progress Report#1" summary="Last known location of RCS#127:Saber is unknown, this report shows possible avenues of exploration." key={1} /></Link>,
            <Link href="/ProgressReport2"><Report Date="11.11.20" title="Progress Report#2" summary="3 possible locations have been established" key={2} /></Link>,
            <Link href="/ProgressReport3"><Report Date="11.11.20" title="Progress Report#3" summary="3 possible locations have been established" key={3} /></Link>

        ]

        // Create Link for new dynamic route  by adding paramater as route  whihc will be will be filled in with dynamic after parsing
        if (this.state.submission == true) {
            reports.push(<Link href="/title"><Report Date={this.state.Date} title={this.state.Title} summary={this.state.Summary} key={this.state.Title} /></Link>)
        }

        return reports
    }
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

                    {this.displayReports()}






                    <form>
                        <label htmlFor="title">
                            <input placeholder="Title" name="Title" value={this.state.Title} onChange={this.updateFields} />
                        </label>

                        <label htmlFor="summary">
                            <input placeholder="Summary" name="Summary" value={this.state.Summary} onChange={this.updateFields} />
                        </label>


                        {/*<label htmlFor="description">*/}
                        {/*    <input placeholder="Description" name="description" value={this.state.Description} onChange={this.updateFields} />*/}
                        {/*</label>*/}

                        <label htmlFor="date">
                            <input placeholder="DD.MM.YY" name="Date" value={this.state.Date} onChange={this.updateFields} />
                        </label>

                        <button type="submit" onClick={this.submitData} > Add new Report </button>



                        {/*        else if (this.state.submission == true)*/}

                        {/*        {*/}
                        {/*            this.setState({ submission: false });*/}
                        {/*        console.log(this.state.submission);*/}

                        {/*    //<Report title="Data not avaiable, report cannot be generated" />*/}
                        {/*}                  */}




                    </form>

                </div>



                <footer className={styles.footer}>
                    <h1>Footer</h1>
                    {/* <GenerateNewReport title={this.props.text }/>*/}
                </footer>
            </div>




        )
    }
}

