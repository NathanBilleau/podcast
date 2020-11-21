<script>

    import { end } from '../stores/voice'
	$end = 40
	
	import Figure from '../components/Figure.svelte'

	import nouvellesecoutes from '../images/nouvellesecoutes.png'
	import bingeaudio from '../images/bingeaudio.png'
	import parcast from '../images/parcast.png'

</script>

<style>


</style>


<h1>Le modèle économique</h1>

<p>
	Malgré une implantation de plus en plus importante, il n’y a pas un modèle économique universel. Pour le comprendre, il faut différencier les podcasts indépendants et les podcasts produits par des maisons de productions.
</p>

<div class="row">
	<Figure image={nouvellesecoutes} text="Nouvelles écoutes" time={2} />
	<Figure image={bingeaudio} text="Binge Audio" time={2} />
	<Figure image={parcast} text="Parcast" time={2} />
</div>

<p>
	Les podcasts indépendants comme le nom l’indique sont indépendants de toute maison de production. Ils sont généralement fait par des passionnés sur leur temps libre ou par des personnes qui financent leur podcast eux-mêmes.
</p>