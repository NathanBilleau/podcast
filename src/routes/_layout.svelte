<script>
	import Nav from '../components/Nav.svelte'
	import { afterUpdate } from 'svelte'
	import { currentTime } from '../stores/voice'

	import '../../node_modules/@fortawesome/fontawesome-free/css/all.min.css'


	// import { spring } from 'svelte/motion';

	// let coords = spring({ x: 50, y: 50 }, {
	// 	stiffness: 0.1,
	// 	damping: 0.5
	// });

	// let size = spring(7);

	let prev = '/'
	let next = '/'

	let routes = ['/', '/histoire', '/blabla']

	afterUpdate(() => {
		let currentRoute = window.location.pathname
		let i = routes.indexOf(currentRoute)

		prev = routes[i - 1]
		next = routes[i + 1]

		const timingEls = document.querySelectorAll('[data-time]')

		for (const el of timingEls) {
			el.style.opacity = 0
			el.style.transform = `translateY(10px)`
			el.style.transition = '.8s cubic-bezier(.5, 0, .5, 1)'
		}

		currentTime.subscribe(ct => {
			for (const el of timingEls) {
				const attrTime = el.getAttribute('data-time')
				if (ct >= attrTime) {
					el.classList.add('display')
				}
			}
		})

	})

</script>

<style>
	main {
		background-image: url('/convertkit--CbLJAUI_js-unsplash.jpg');
		background-size: cover;
		background-position: center;
		background-blend-mode: multiply;
		height: 100vh;
		background-color: #333;
	}


	.container {
		padding: 0 clamp(80px, 8vw, 200px);
		display: grid;
		grid-template-rows: clamp(80px, 8vw, 200px) auto clamp(100px, 10vw, 200px);
		height: 100%;
	}

	.content {
		position:relative;
		overflow-y: auto;
	}
	
	/* svg {
		width: 100%;
		height: 100%;
		margin: -8px;
		position: absolute;
	}
	
	circle {
		fill: #fff
	} */
	
</style>

<main>
	<!-- <svg
		on:mousemove="{e => coords.set({ x: e.clientX, y: e.clientY })}"
		on:mousedown="{() => size.set(20)}"
		on:mouseup="{() => size.set(7)}"
	>
		<circle cx={$coords.x} cy={$coords.y} r={$size}/>
	</svg> -->

	<div class="container">
		<div></div>
		<div class="content">
			<slot></slot>
		</div>
		<Nav prev="{prev}" next="{next}" />
	</div>
</main>