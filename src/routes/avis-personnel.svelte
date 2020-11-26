<script>

    import { start, end } from '../stores/voice'
    $start = 60 * 5 + 5.5
    $end = 60 * 5 + 35

    import Figure from '../components/Figure.svelte'

    import floodcast from '../images/floodcast.jpg'
    import abdtr from '../images/abdtr.jpg'
    import syntax from '../images/syntax.jpg'
    import serialkillers from '../images/serialkillers.jpg'
    import lapoudre from '../images/lapoudre.jpg'

</script>

<svelte:head>
	<title>Avis personnel sur le média</title>
</svelte:head>

<h1>Avis personnel sur le média</h1>

<p data-time={60 * 5 + 5.6}>
    La grande portabilité de ce format explique selon moi sa popularité grandissante. J’écoute des épisodes en travaillant ou dans les transports ce qui me permet de me divertir et d’apprendre des choses tout en étant productif.
</p>

<div class="row">
    <Figure time={60 * 5 + 20} image={floodcast} text="Floodcast" />
    <Figure time={60 * 5 + 21} image={abdtr} text="A bientôt de te revoir" />
    <Figure time={60 * 5 + 23.7} image={syntax} text="Syntax" />
    <Figure time={60 * 5 + 24.7} image={serialkillers} text="Tueurs en séries" />
    <Figure time={60 * 5 + 26.5} image={lapoudre} text="La poudre" />
</div>

<p data-time={60 * 5 + 29}>
    Comme montré précédemment, ce média permet une grande diversité de format et de thèmes. 
</p>

