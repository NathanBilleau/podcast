<script>
    export let data
    export let time
</script>

<div data-time={time} class="chartContainer">
    {#each data as chart}
        <div class="chart" data-percent={`${chart.percent}%`} style={`width: ${chart.percent}%`}>{chart.text}</div>
    {/each}
</div>