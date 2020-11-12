<script>
	import { onMount } from 'svelte'
	import { currentTime } from '../stores/voice'
 
	onMount(() => {
		const timingEls = document.querySelectorAll('[data-time]')

		for (const el of timingEls) {
			el.style.opacity = 0
			el.style.transform = `translateY(10px)`
			el.style.transition = '.5s'
		}

		currentTime.subscribe(ct => {
			for (const el of timingEls) {
				const attrTime = el.getAttribute('data-time')
				if (ct > attrTime) {
					el.classList.add('display')
				}
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
<p data-time={2}>
	Le principe du podcast existe depuis le début des années 2000.
</p>
<div class="icons">
	<div class="icon" data-time={4}>
		<i class="fas fa-microphone"></i>
		<p>microphone</p>
	</div>

	<div class="icon" data-time={4.4}>
		<i class="fas fa-rss"></i>
		<p>rss</p>
	</div>

	<div class="icon" data-time={4.8}>
		<i class="fas fa-laptop"></i>
		<p>ordinateur</p>
	</div>
</div>
<p data-time={6}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est odio inventore excepturi molestias unde nulla eligendi omnis sequi facere dolorum porro at assumenda facilis saepe, itaque vitae eveniet incidunt. Esse.</p>
