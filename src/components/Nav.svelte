<script>

	import { onMount } from 'svelte'
	import { currentTime, voicePlaying, end, start } from '../stores/voice'

	export let prev, next

	let voice

	let boopSfx
	let endSfx

	onMount(() => {
		voice = document.querySelector('audio')

		boopSfx = new Audio('/sfx/mixkit-cool-interface-click-tone-2568.wav')
		boopSfx.volume = .1

		endSfx = new Audio('/sfx/mixkit-negative-tone-interface-tap-2569.wav')
		endSfx.volume = .1

		// if the voice reaches the end for the page
		currentTime.subscribe(value => {
			if (value >= $end) {
				pause()
				endSfx.play()
			}
		})

	})

	const boop = () => {
		boopSfx.play()
	}

	const toggleVoice = () => {
		if ($voicePlaying) {
			pause()
		}
		else {
			if ($currentTime <= $end) {
				play()
			}
		}
	}

	const play = () => {
		voice.play()
		$voicePlaying = true
	}

	const pause = () => {
		voice.pause()
		$voicePlaying = false
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
		font-family: 'Karla';
		text-transform: uppercase;
		text-decoration: none;
		font-size: .85em;
		font-weight: 700;
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

	nav a.disabled,
	nav .btn[disabled] {
		opacity: .5;
		cursor: auto;
	}

	nav .btn {
		position: absolute;
		margin: auto;
		right: 0;
		left: 0;
		transition: .2s cubic-bezier(.83,0,.31,.94);
	}

	audio {
		display: none;
	}

</style>

<!-- svelte-ignore a11y-media-has-caption -->
<audio src="/voice.mp3" bind:currentTime={$currentTime}></audio>

<nav>
	<a href="{prev}" class="{prev ? '' : 'disabled'}" on:mouseover="{boop}">
		Précédent
	</a>

	<button class="btn" on:mouseover="{boop}" on:click="{toggleVoice}" disabled="{!$end}" title="Lecture">
		<i class="fas fa-{$voicePlaying ? 'pause' : 'play'}"></i>
	</button>

	<a 	href="{(next == '/credits') || (($end === undefined) || ($currentTime >= $end)) ? next : undefined}"
		class="{(next == '/credits') || (($end === undefined) || next && ($currentTime >= $end)) ? '' : 'disabled'}"
		on:mouseover="{(next == '/credits') || (($end === undefined) || next && ($currentTime >= $end)) ? boop : null}">
		Suivant
	</a>
</nav>
