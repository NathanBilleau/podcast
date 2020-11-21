<script>

	import { end } from '../stores/voice'
	import serial from '../images/serial.svg'
	import Chart from '../components/Chart.svelte'
	import Figure from '../components/Figure.svelte'

    $end = 40

</script>

<style>

</style>

<svelte:head>
	<title>Quelques chiffres</title>
</svelte:head>


<h1>Quelques chiffres</h1>

<p>
	En 2014, le podcast Serial marque un renouveau. Il est devenu premier du classement iTunes dès le début de sa diffusion en atteignant plus de 5 millions d’écoutes et de téléchargements. Suite à cette série, la popularité des podcasts explose aux États-Unis.
</p>

<Figure time={2} image={serial} text="Serial" />

<Chart time={3} data={[
	{percent: 49, text: 'Maison'},
	{percent: 22, text: 'En voiture'}
]} />

<Chart data={[
	{percent: 11, text: '2006'}
]} />

<Chart data={[
	{percent: 36, text: '2016'}
]} />

<p>
	On peut remarquer un intérêt croissant pour ce média. 
</p>
