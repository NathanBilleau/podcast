<script>
	import Nav from '../components/Nav.svelte'
	import { afterUpdate } from 'svelte'

	let prev = '/'
	let next = '/'

	let routes = ['/', '/histoire', '/blabla']

	afterUpdate(() => {
		let currentRoute = window.location.pathname
		let i = routes.indexOf(currentRoute)

		prev = routes[i - 1]
		next = routes[i + 1]
	})

</script>

<style>
	main {
		background-image: url('/convertkit--CbLJAUI_js-unsplash.jpg');
		background-size: cover;
		background-position: center;
		background-blend-mode: multiply;
		height: 100vh;
		background-color: #555;
	}

	.container {
		padding: 0 clamp(100px, 10vw, 200px);
		display: grid;
		grid-template-rows: clamp(100px, 10vw, 200px) auto clamp(100px, 10vw, 200px);
		height: 100%;
	}

	.content {
		position:relative;
	}
</style>

<main>
	<div class="container">
		<div></div>
		<div class="content">
			<slot></slot>
		</div>
		<Nav prev="{prev}" next="{next}" />
	</div>
</main>