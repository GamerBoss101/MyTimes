
<script>
    // @ts-nocheck
    import { onMount } from 'svelte';
    import SportBtn from '$lib/components/home/SportBtn.svelte';

    let title; 

    onMount(() => {
        let images = document.querySelectorAll('img');
        images.forEach(image => {
            image.addEventListener('mouseover', () => {
                title.style.color = 'black';
                title.style.fontWeight = 'bold';
                title.style.fontSize = '65px';
                title.style.transition = 'all 0.5s';
            });
            image.addEventListener('mouseout', () => {
                title.style.color = 'white';
                title.style.fontWeight = 'normal';
                title.style.fontSize = '35px';
                title.style.transition = 'all 0.5s';
            });
        });
    });
</script>

<div class="container">
    <div class="container">
        <div class="row row-cols-3">
            <div class="col"></div>
            <div class="col">
                <SportBtn icon="/swimico.png" url="/swimming.png" />
            </div>
            <div class="col"></div>
            <div class="col">
                <SportBtn icon="/runico.png" url="/running.png" />
            </div>
            <div class="col">
                <SportBtn icon="/stopwatch.png" url="#" />
            </div>
            <div class="col">
                <SportBtn icon="/bikeico.png" url="/cycling.png" />
            </div>
        </div>
    </div>
</div>

<style>
    .container {
        height: 100vh;
    }

    h1 {
        color: white;
        padding: 20px;
    }

    .col {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 35px;
        border-radius: 10px;
    }   

</style>

