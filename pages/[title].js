import { useRouter } from 'next/router'


/* create dynamic route y*/

export default  function NewReport_Details () {
	const router = useRouter()
	const { title } = router.query


	return (
		<div>
			<p>11.11.20</p>
			<h1> {title }</h1>
			<p> Report Summary: </p>
			<p>	Last known location of RCS#127:Saber is unknown, this report shows possible avenues of exploration.</p>

		</div>)

}