<script>
    export let image, text, time
</script>

<figure data-time={time}>
    <img src={image} alt={text}>
    <figcaption>{text}</figcaption>
</figure>