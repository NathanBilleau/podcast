<script>

	import { end } from '../stores/voice'
	import buzzsprout from '../images/buzzsprout.png'
	import podbean from '../images/podbean.svg'
	import spreaker from '../images/spreaker.png'
    $end = 25

</script>

<style>

</style>

<svelte:head>
	<title>La diffusion</title>
</svelte:head>

<h1>La distribution</h1>

<p>
	Pour diffuser un podcast, il faut un fichier audio, puis le renseigner à un flux RSS. Le flux RSS contient les informations de l’épisode comme le titre, la description, la miniature… et le chemin du fichier audio.
</p>

<div class="icons">
	<div class="icon" data-time={18}>
		<i class="fa fa-rss"></i>
		<p>flux rss</p>
	</div>

	<div class="icon" data-time={18}>
		<i class="fas fa-file-audio"></i>
		<p>Fichier audio</p>
	</div>

	<div class="icon" data-time={18}>
		<i class="fas fa-podcast"></i>
		<p>Podcast</p>
	</div>
	
</div>

<p>
	Ce flux permet aux applications d’avoir ces informations et de les servir aux auditeurs. 
	<br />
	Pour faciliter cette diffusion et l’hébergement des fichiers audio, plusieurs services existent, les plus connus étant : Buzzsprout, PodBean, Spreaker…
</p>

<div class="rowImages">
	<figure>
		<img src={buzzsprout} alt="Buzzsprout">
		<figcaption>Buzzsprout</figcaption>
	</figure>

	<figure>
		<img src={podbean} alt="Podbean">
		<figcaption>Podbean</figcaption>
	</figure>

	<figure>
		<img src={spreaker} alt="Spreaker">
		<figcaption>Spreaker</figcaption>
	</figure>
</div>