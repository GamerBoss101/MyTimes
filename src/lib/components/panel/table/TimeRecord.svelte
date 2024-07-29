<script lang="ts">

    export let event: string;
    export let seconds: number;
    export let offical: boolean;
    export let from: string;
    export let date: string;

    let time = new Date(seconds * 1000).toISOString().substr(11, 8);
    date = new Date(date).toDateString();

</script>

<tr>
    <td>{event}</td>
    <td>{time}</td>
    <td>{offical ? 'Yes' : 'No'}</td>
    <td>{from}</td>
    <td>{date}</td>
</tr>