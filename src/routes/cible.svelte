<script>
	import { end, start } from '../stores/voice'
	import Chart from '../components/Chart.svelte'

	$start = 60 * 2 + 7
	$end = 60 * 2 + 25 

</script>

<style>

</style>

<svelte:head>
	<title>La cible</title>
</svelte:head>


<h1>La cible</h1>

<p data-timing={60 * 2 + 7.5}>
	Les auditeurs sont en moyenne âgés de 12 à 54 ans. La cible balaye donc une large part de la population.
</p>

<Chart time={60 * 2 + 14} data={[
	{percent: 48, text: '12 - 34 ans'},
	{percent: 32, text: '35 - 54 ans'},
	{percent: 20, text: '+ 55 ans'},
]} />