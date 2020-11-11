<script>

</script>

<style>

	.icons {
		display: flex;
		justify-content: space-between;
		margin: auto;
		gap: 100px;
		width: fit-content
	}

	.icon {
		position: relative;
	}

	.icon i{
		color: #fff;
		display: block;
		width: 30px;
		height: 30px;
		text-align: center;
		font-size: .8rem;
		position: relative;
		cursor: pointer;
	}

	.icon i::after {
		content: '';
		width: 100%;
		height: 100%;
		border: 1px solid #fff;
		display: block;
		transform: rotate(45deg) translate(-50%, -50%);
		transition: .2s;
	}

	.icon p {
		opacity: 0;
		font-family: 'Playfair Display';
		font-weight: 700;
		font-size: .95rem;
		text-transform: uppercase;
		transition: .2s;
		position: absolute;
		width: 150px;
		left: calc((-150px) / 2 + (30px / 2));
		margin: 0;
		top: 45px;
		word-wrap: normal;
	}

	.icon:hover p {
		opacity: 1;
		top: 40px;
	}

	.icon:hover i::after {
		background-color: rgba(255, 255, 255, .1);
	}

</style>

<svelte:head>
	<title>L'histoire du podcast</title>
</svelte:head>

<h1>L'histoire du podcast</h1>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est odio inventore excepturi molestias unde nulla eligendi omnis sequi facere dolorum porro at assumenda facilis saepe, itaque vitae eveniet incidunt. Esse.</p>
<div class="icons">
	<div class="icon">
		<i class="fas fa-microphone"></i>
		<p>microphone</p>
	</div>

	<div class="icon">
		<i class="fas fa-rss"></i>
		<p>rss</p>
	</div>

	<div class="icon">
		<i class="fas fa-laptop"></i>
		<p>ordinateur</p>
	</div>
</div>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est odio inventore excepturi molestias unde nulla eligendi omnis sequi facere dolorum porro at assumenda facilis saepe, itaque vitae eveniet incidunt. Esse.</p>
