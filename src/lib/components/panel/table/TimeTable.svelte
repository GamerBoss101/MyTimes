
<script>
    import TimeRecord from "./TimeRecord.svelte";
    export let sport;
    export let data;
</script>

<div class="card shadow">
    <div class="card-header py-3">
        <p class="text-primary m-0 fw-bold">{sport}</p>
    </div>
    <div class="card-body">
        <div class="table-responsive table mt-2" id="dataTable" role="grid" aria-describedby="dataTable_info">
            <table class="table my-0" id="dataTable">
                <thead>
                    <tr>
                        <th>Event</th>
                        <th>Time</th>
                        <th>Offical</th>
                        <th>Officiary</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {#each data as record}
                        <TimeRecord {...record} />
                    {/each}
                </tbody>
            </table>
        </div>
    </div>
</div>