<script>

	import { start, end } from '../stores/voice'
	$start = 60 * 2 + 57
	$end = 60 * 3 + 55.5
	
	import Figure from '../components/Figure.svelte'

	import nouvellesecoutes from '../images/nouvellesecoutes.png'
	import bingeaudio from '../images/bingeaudio.png'
	import parcast from '../images/parcast.png'

</script>

<style>


</style>


<h1>Les maisons de production</h1>

<p data-time={60 * 2 + 57.5}>
	Une maison de production finance les podcasts en trouvant des sponsors (réguliers la plupart du temps) pour chaque épisode. 
</p>

<div class="row">
	<Figure time={60 * 3 + 9} image={nouvellesecoutes} text="Nouvelles écoutes" />
	<Figure time={60 * 3 + 20} image={bingeaudio} text="Binge Audio" />
	<Figure time={60 * 3 + 33.5} image={parcast} text="Parcast" />
</div>

<p data-time={60 * 3 + 48}>
	Les producteurs ont généralement un fil rouge commun à tous leurs podcasts, c’est ce qui crée leur identité et permet leur notoriété.
</p>