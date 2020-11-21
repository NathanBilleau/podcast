<script>

	import { end } from '../stores/voice'

	import arte from '../images/logo-arte.svg'

	import Figure from '../components/Figure.svelte'

	$end = 7
	
</script>

<style>

</style>

<svelte:head>
	<title>L'histoire du podcast</title>
</svelte:head>

<h1>L'histoire du podcast</h1>

<p data-time={1}>
	Pour commencer, le mot podcast vient de la combinaison d’iPod et Broadcasting et son principe existe depuis le début des années 2000.
</p>

<p>
	D'après Wikipédia, ce sont des épisodes de série audio que les utilisateurs peuvent télécharger ou écouter de façon nomade, en effet les supports d'écoutes sont multiples :
</p>

<div class="icons">
	<div class="icon" data-time={3}>
		<i class="fa fa-laptop"></i>
		<p>Ordinateur</p>
	</div>

	<div class="icon" data-time={3.2}>
		<i class="fa fa-tablet-alt"></i>
		<p>Tablette</p>
	</div>

	<div class="icon" data-time={3.4}>
		<i class="fa fa-mobile-alt"></i>
		<p>Smartphone</p>
	</div>
</div>

<Figure image={arte} text="Arte-radio.com" time={3} />