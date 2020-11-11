<script>

	export let prev
	export let next

</script>

<style>

	nav {
		width: 100%;
		display: flex;
		align-self: center;
		justify-content: space-between;
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

	nav a.disabled {
		opacity: .5;
	}


</style>

<nav>
	<a href="{prev}" class="disabled">
		Précédent
	</a>

	<a href="{next}">
		Suivant
	</a>
</nav>
