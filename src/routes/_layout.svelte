<script>
	import Nav from '../components/Nav.svelte'

	export let segment;
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
</style>

<main>
	<div class="container">
		<div></div>
		<div>
			<slot></slot>
		</div>
		<Nav segment="{segment}" />
	</div>
</main>