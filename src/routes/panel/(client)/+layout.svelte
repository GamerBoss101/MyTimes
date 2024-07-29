<script>
    import "$lib/bootstrap/css/bootstrap.min.css";

    import Sidebar from "$lib/components/panel/Sidebar.svelte";
    import NavBar from "$lib/components/panel/navbar/NavBar.svelte";

    import { onMount } from "svelte";

    onMount(() => {
        document.addEventListener('DOMContentLoaded', function() {
            var charts = document.querySelectorAll('[data-bss-chart]');
            for (var chart of charts) {
                // @ts-ignore
                chart.chart = new Chart(chart, JSON.parse(chart.dataset.bssChart));
            }
        }, false);
    })

</script>


<svelte:head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i&amp;display=swap">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.12.0/css/all.css">
</svelte:head>


<div id="wrapper">
    <Sidebar />
    <div class="d-flex flex-column" id="content-wrapper">
        <div id="content">
            <NavBar />
            <div class="container-fluid">
                <slot></slot>
            </div>
        </div>
        <footer class="bg-white sticky-footer">
            <div class="container my-auto">
                <div class="text-center my-auto copyright"><span>Copyright © MyTimes 2024</span></div>
            </div>
        </footer>
    </div><a class="border rounded d-inline scroll-to-top" href="#page-top"><i class="fas fa-angle-up"></i></a>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</div>
