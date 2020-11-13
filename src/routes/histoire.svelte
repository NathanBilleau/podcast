<script>

	import { end } from '../stores/voice'
	$end = 7
	
</script>

<style>

</style>

<svelte:head>
	<title>L'histoire du podcast</title>
</svelte:head>

<h1>L'histoire du podcast</h1>

<p data-time={1}>
	Le principe du <b>podcast</b> existe depuis le début des années 2000. D'après Wikipédia, ce sont des épisodes de série audio que les utilisateurs peuvent télécharger ou écouter de façon nomade, en effet les supports d'écoutes sont multiples : 
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

<p data-time={3.8}>
	La plupart des utilisateurs écoutent ces podcasts sur différentes plateformes. Les plus connus sont : 
</p>

<div class="icons">
	<div class="icon" data-time={4}>
		<i class="fa fa-rss"></i>
		<p>flux rss</p>
	</div>

	<div class="icon" data-time={4.2}>
		<i class="fab fa-apple"></i>
		<p>apple podcast</p>
	</div>

	<div class="icon" data-time={4.4}>
		<i class="fab fa-google"></i>
		<p>google podcast</p>
	</div>

	<div class="icon" data-time={4.6}>
		<i class="fab fa-spotify"></i>
		<p>spotify</p>
	</div>

	<div class="icon" data-time={4.8}>
		<i class="fab fa-soundcloud"></i>
		<p>soundcloud</p>
	</div>
</div>

<p data-time={7}>
	Cependant, leur diffusion était fait à l'origine par flux RSS. 
</p>