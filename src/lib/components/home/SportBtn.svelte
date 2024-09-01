<script lang="ts">
    // @ts-nocheck
    import { onMount } from 'svelte';

    export let icon;
    export let url;
    let container;

    onMount(() => {
        const bodyELE = document.querySelector('body');

        container.addEventListener('mouseover', () => {
            console.log('hovered');
            bodyELE.style.background = `url(${url}) no-repeat center/cover`;
        });

        container.addEventListener('mouseout', () => {
            bodyELE.style.background = 'none';
        });
    });
</script>


<div bind:this={container} class="btn-card myt-bg-dark">
    <!-- svelte-ignore a11y-missing-attribute -->
    <img src="{icon}">
</div>

<style>

    .btn-card {
        height: fit-content;
        width: fit-content;
        padding: 20px;
        margin: 0px;
    }

    .btn-card:hover {
        background-color: #0f0f0f;
        transition: background-color 0.5s;
        border-radius: 7.5%;
    }

    img {
        width: 100px;
        height: 100px;
    }

    .btn-card:hover {
        background-image: none;
    }

    .myt-bg-dark {
        background-color: none;
    }

    .myt-bg-dark:hover {
        background-color: #161616;
    }

</style>