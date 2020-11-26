<script>

	import { end, start } from '../stores/voice'
	
	import Figure from '../components/Figure.svelte'
	import buzzsprout from '../images/buzzsprout.png'
	import podbean from '../images/podbean.svg'
	import spreaker from '../images/spreaker.png'
	$start = 60 + 38.7
	$end = 60 * 2 + 7

</script>

<style>

</style>

<svelte:head>
	<title>La diffusion</title>
</svelte:head>

<h1>La diffusion</h1>

<p data-time={60 + 38.7}>
	Pour diffuser un podcast, il faut un fichier audio à renseigner à un flux RSS. Le flux RSS contient les informations de l’épisode comme le titre, la description, la miniature… et le chemin du fichier audio.
</p>

<div class="icons">

	<div class="icon" data-time={60 + 40.5}>
		<i class="fas fa-file-audio"></i>
		<p>Fichier audio</p>
	</div>

	<div class="icon" data-time={60 + 42.8}>
		<i class="fa fa-rss"></i>
		<p>flux rss</p>
	</div>

	<div class="icon" data-time={60 + 45.1}>
		<i class="fas fa-podcast"></i>
		<p>Podcast</p>
	</div>
	
</div>

<p data-time={60 + 51.7}>
	Ce flux permet aux applications d’avoir ces informations et de les servir aux auditeurs. 
	<br />
	Pour faciliter cette diffusion et l’hébergement des fichiers audio, plusieurs services existent, les plus connus étant : Buzzsprout, PodBean, Spreaker…
</p>

<div class="row">
	<Figure image={buzzsprout} text="Buzzsprout" time={2 * 60 + 3} />
	<Figure image={podbean} text="Podbean" time={2 * 60 + 4} />
	<Figure image={spreaker} text="Spreaker" time={2 * 60 + 5} />
</div>