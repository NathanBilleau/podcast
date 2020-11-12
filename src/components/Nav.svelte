<script>

	import { onMount } from 'svelte'

	import { currentTime } from '../stores/voice'

	export let prev
	export let next

	let voice
	let playing

	onMount(() => {
		voice = new Audio('/voice.mp3')
		voice.addEventListener('timeupdate', e => {
			currentTime.set(voice.currentTime)
		})
	})

	const toggleVoice = () => {
		if (!voice.paused) {
			voice.pause()
		}
		else {
			voice.play()
		}

		playing = !voice.paused
	}

</script>

<style>

	nav {
		width: 100%;
		display: flex;
		align-self: center;
		justify-content: space-between;
		position: relative;
	}

	nav a {
		color: #fff;
		font-family: 'Josefin Sans';
		text-transform: uppercase;
		text-decoration: none;
		font-size: .85em;
		font-weight: 400;
	}

	nav a:first-of-type::before,
	nav a:last-of-type::after {
		content: '';
		width: 50px;
		height: 1px;
		background-color: #fff;
		display: inline-block;
		vertical-align: middle;
		margin: 0 10px;
		transition: .2s cubic-bezier(.83,0,.31,.94);
	}

	nav a:hover:first-of-type::before,
	nav a:hover:last-of-type::after {
		width: 70px;
	}

	nav a.disabled:hover:first-of-type::before,
	nav a.disabled:hover:last-of-type::after {
		width: 50px;
	}

	nav a.disabled {
		opacity: .5;
	}

	nav .btn {
		position: absolute;
		margin: auto;
		right: 0;
		left: 0;
		/* display: none; */
	}

</style>

<nav>
	<a href="{prev}" class="{prev ? '' : 'disabled'}">
		Précédent
	</a>

	<button class="btn" on:click="{toggleVoice}">
		<i class="fas fa-volume-{playing ? 'up' : 'mute'}"></i>
	</button>

	<a href="{next}" class="{next ? '' : 'disabled'}">
		Suivant
	</a>
</nav>
