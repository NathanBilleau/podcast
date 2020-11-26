<script>

	import { end, start } from '../stores/voice'

	import arte from '../images/logo-arte.svg'

	import Figure from '../components/Figure.svelte'

	$start = 14.5
	$end = 42
</script>

<style>

</style>

<svelte:head>
	<title>L'histoire du podcast</title>
</svelte:head>

<h1>L'histoire du podcast</h1>

<p data-time={15}>
	Pour commencer, le mot podcast vient de la combinaison de deux mots : iPod et Broadcasting. Son principe existe depuis le début des années 2000.
</p>

<p data-time={24}>
	D'après Wikipédia, ce sont des épisodes de série audio que les utilisateurs peuvent télécharger ou écouter de façon nomade, en effet les supports d'écoutes sont multiples :
</p>

<div class="icons">
	<div class="icon" data-time={32.5}>
		<i class="fa fa-laptop"></i>
		<p>Ordinateur</p>
	</div>

	<div class="icon" data-time={33.5}>
		<i class="fa fa-tablet-alt"></i>
		<p>Tablette</p>
	</div>

	<div class="icon" data-time={34}>
		<i class="fa fa-mobile-alt"></i>
		<p>Smartphone</p>
	</div>
</div>

<Figure image={arte} text="Arte-radio.com" time={37} />