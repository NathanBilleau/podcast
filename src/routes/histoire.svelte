<script>

	import { currentTime, voicePlaying } from '../stores/voice'
	import { onMount } from 'svelte'

	let end = 8.3

	onMount(() => {
		currentTime.subscribe(value => {
			if (value >= end) {
				$voicePlaying = false
			}
		})
	})

</script>

<style>

</style>

<svelte:head>
	<title>L'histoire du podcast</title>
</svelte:head>

<h1>L'histoire du podcast</h1>

<p data-time={2.5}>
	Le principe du <b>podcast</b> existe depuis le début des années 2000.
</p>

<div class="icons">
	<div class="icon" data-time={4}>
		<i class="fas fa-microphone"></i>
		<p>microphone</p>
	</div>

	<div class="icon" data-time={4.5}>
		<i class="fas fa-rss"></i>
		<p>rss</p>
	</div>

	<div class="icon" data-time={5}>
		<i class="fas fa-laptop"></i>
		<p>ordinateur</p>
	</div>
</div>

<p data-time={6}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est odio inventore excepturi molestias unde nulla eligendi omnis sequi facere dolorum porro at assumenda facilis saepe, itaque vitae eveniet incidunt. Esse.</p>
