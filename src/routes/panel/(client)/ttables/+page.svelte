<script>
    import TimeTable from '$lib/components/panel/table/TimeTable.svelte';


    let swimData = [
        { event: '50m Freestyle', seconds: 3688, offical: true, from: 'Herndon Swim League', date: '2024-06-19' },
        { event: '100m Freestyle', seconds: 7688, offical: true, from: 'Herndon Swim League', date: '2024-06-19' },
        { event: '200m Freestyle', seconds: 15688, offical: true, from: 'Herndon Swim League', date: '2024-06-19' },
        { event: '400m Freestyle', seconds: 36888, offical: true, from: 'Herndon Swim League', date: '2024-06-19' },
        { event: '800m Freestyle', seconds: 76888, offical: true, from: 'Herndon Swim League', date: '2024-06-19' },
        { event: '1500m Freestyle', seconds: 156888, offical: true, from: 'Herndon Swim League', date: '2024-06-19' }
    ];

    let runData = [
        { event: '50m Sprint', seconds: 3688, offical: true, from: 'Herndon Run League', date: '2024-06-19' },
        { event: '100m Sprint', seconds: 7688, offical: true, from: 'Herndon Run League', date: '2024-06-19' },
        { event: '200m Sprint', seconds: 15688, offical: true, from: 'Herndon Run League', date: '2024-06-19' },
        { event: '400m Sprint', seconds: 36888, offical: true, from: 'Herndon Run League', date: '2024-06-19' },
        { event: '800m Sprint', seconds: 76888, offical: true, from: 'Herndon Run League', date: '2024-06-19' },
        { event: '1500m Sprint', seconds: 156888, offical: true, from: 'Herndon Run League', date: '2024-06-19' }
    ];

</script>

<h3 class="text-dark mb-4">Time Tables</h3>
<TimeTable sport="Swimming" data={swimData} />
<br>
<TimeTable sport="Running" data={runData} />