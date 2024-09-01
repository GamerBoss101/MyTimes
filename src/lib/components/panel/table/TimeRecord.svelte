<script>
    import EditTimeBtn from "./EditTimeBtn.svelte";

    export let event;
    export let seconds;
    export let offical;
    export let from;
    export let date;

    let time = new Date(seconds * 1000).toISOString().substr(11, 8);
    date = new Date(date).toDateString();

</script>

<tr>
    <td>{event}</td>
    <td>{time}</td>
    <td>{offical ? 'Yes' : 'No'}</td>
    <td>{from}</td>
    <td>{date}</td>
    <td>
        <EditTimeBtn />
        <button class="btn btn-danger" type="button">Delete</button>
    </td>
</tr>