<script>
	import { end } from '../stores/voice'
	import Chart from '../components/Chart.svelte'

    $end = 40

</script>

<style>

</style>

<svelte:head>
	<title>La cible</title>
</svelte:head>


<h1>La cible</h1>

<p>
	Les auditeurs sont en moyenne âgés de 12 à 54 ans. La cible balaye donc une large part de la population.
</p>

<Chart data={[
	{percent: 48, text: '12 - 34 ans'},
	{percent: 32, text: '35 - 54 ans'},
	{percent: 20, text: '+ 55 ans'},
]} />