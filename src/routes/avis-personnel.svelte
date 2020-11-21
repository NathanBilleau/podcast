<script>

    import { end } from '../stores/voice'
    $end = 40

    import Figure from '../components/Figure.svelte'

    import floodcast from '../images/floodcast.jpg'
    import abdtr from '../images/abdtr.jpg'
    import syntax from '../images/syntax.jpg'
    import serialkillers from '../images/serialkillers.jpg'
    import lapoudre from '../images/lapoudre.jpg'

</script>


<h1>Avis personnel sur le média</h1>

<p>
    La grande portabilité de ce format explique selon moi sa popularité grandissante. J’écoute des épisodes en travaillant ou dans les transports ce qui me permet de me divertir et d’apprendre des choses tout en étant productif.
</p>

<div class="row">
    <Figure image={floodcast} text="Floodcast" />
    <Figure image={abdtr} text="A bientôt de te revoir" />
    <Figure image={syntax} text="Syntax" />
    <Figure image={serialkillers} text="Tueurs en séries" />
    <Figure image={lapoudre} text="La poudre" />
</div>

<p>
    Comme montré précédemment, ce média permet une grande diversité de format et de thèmes. 
</p>

