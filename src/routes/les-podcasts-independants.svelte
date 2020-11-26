<script>

    import { start, end } from '../stores/voice'
	$start = 60 * 3 + 56.5
	$end = 60 * 4 + 28
	
	import Figure from '../components/Figure.svelte'

	import floodcast from '../images/floodcast.jpg'

</script>

<style>


</style>


<h1>Les podcasts indépendants</h1>
<p data-time={60 * 3 + 56.8}>
	Parmi les podcasts indépendants les plus populaires en France, nous retrouvons “Floodcast” animé par Florent Bernard et Adrien Ménielle. C’est un podcast qui invite des auteurs, des comédiens, ou d’autres personnalités du net . Les guests sont généralement connus sur internet garantissant aux auditeurs une certaine proximité.
</p>

<Figure image={floodcast} text="Floodcast" time={60 * 4 + 4} />

<p data-time={60 * 4 + 14}>
	Le podcast est financé en majorité avec l'enregistrement sur scène au Bataclan. Le public est toujours très fidèle, les places ont été vendues en quelques minutes lors des 2 évènements. L’argent récolté permet leur d’évoluer et de publier à fréquence régulière.
</p>

<div class="icons">

	<div class="icon" data-time={60 * 4 + 18}>
		<i class="fas fa-calendar-alt"></i>
		<p>Évenements</p>
	</div>
	
</div>