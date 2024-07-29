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
</div>
