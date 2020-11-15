<script>
    export let totalRoutes
    export let i
</script>

<style>
    .progressContainer {
        height: 1px;
        background-color: rgba(255, 255, 255, .5);
        align-self: center;
        display: block;
    }

    .progressContainer .progress {
        height: 100%;
        background-color: #fff;
        transition: 1s cubic-bezier(.5, 0, .5, 1);
    }
</style>

<div class="progressContainer">
    <div class="progress" style="width: {(i / (totalRoutes - 1)) * 100}%"></div>
</div>