<script>

	import { start, end } from '../stores/voice'
	import serial from '../images/serial.svg'
	import Chart from '../components/Chart.svelte'
	import Figure from '../components/Figure.svelte'

	$start = 42
    $end = 76

</script>

<style>

</style>

<svelte:head>
	<title>Quelques chiffres</title>
</svelte:head>


<h1>Quelques chiffres</h1>

<p data-time="43">
	En 2014, le podcast Serial marque un renouveau. Il est devenu premier du classement iTunes dès le début de sa diffusion en atteignant plus de 5 millions d’écoutes et de téléchargements. Suite à cette série, la popularité des podcasts explose aux États-Unis.
</p>

<Figure time={45} image={serial} text="Serial" />

<Chart time={56} data={[
	{percent: 49, text: 'Maison'},
	{percent: 22, text: 'En voiture'}
]} />

<Chart time={68} data={[
	{percent: 11, text: '2006'}
]} />

<Chart time={70} data={[
	{percent: 36, text: '2016'}
]} />

<p data-time="73">
	On peut remarquer un intérêt croissant pour ce média. 
</p>
