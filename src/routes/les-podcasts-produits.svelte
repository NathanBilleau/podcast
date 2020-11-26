<script>

	import { start, end } from '../stores/voice'
	
	$start = 60 * 4 + 29
    $end = 60 * 5 + 5.3

	import abdtr from '../images/abdtr.jpg'
	import Figure from '../components/Figure.svelte'

</script>

<style>


</style>


<h1>Les podcasts produits</h1>


<p data-time={60 * 4 + 29.5}>
	La maison de production “Binge Audio” produit “A bientôt de te revoir”, un podcast animé par Sophie-Marie Larrouy.
</p>

<Figure time={60 * 4 + 31.5} image={abdtr} text="A bientôt de te revoir" />

<p data-time={60 * 4 + 35.8}>
	Elle invite toute sorte de personnalités sur la scène de la “Nouvelle Seine”, un bar-restaurant sur une péniche Parisienne. Ils abordent ensemble différents sujets que les interviews classiques n'effleurent même pas. Accompagnée par son caractère et de son humour bien à elle Sophie-Marie Larrouy donne une véritable identité à ces épisodes.
</p>

<p data-time={60 * 4 + 54.3}>
	Binge Audio permet d’avoir des sponsors réguliers. La place pour assister à l’enregistrement est payante. Ces fonds rémunèrent la présentatrice et les invités, et financent les différents frais de la structure.
</p>