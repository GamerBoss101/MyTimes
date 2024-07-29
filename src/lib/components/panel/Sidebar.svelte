<script>
    // @ts-nocheck
    import { onMount } from "svelte";

    onMount(() => {
        var sidebar = document.querySelector('.sidebar');
        var sidebarToggles = document.querySelectorAll('#sidebarToggle, #sidebarToggleTop');
        
        if (sidebar) {
            
            var collapseEl = sidebar.querySelector('.collapse');
            var collapseElementList = [].slice.call(document.querySelectorAll('.sidebar .collapse'))
            var sidebarCollapseList = collapseElementList.map(function (collapseEl) {
                return new bootstrap.Collapse(collapseEl, { toggle: false });
            });

            for (var toggle of sidebarToggles) {

            // Toggle the side navigation
            toggle.addEventListener('click', function(e) {
                document.body.classList.toggle('sidebar-toggled');
                    sidebar.classList.toggle('toggled');

                    if (sidebar.classList.contains('toggled')) {
                        for (var bsCollapse of sidebarCollapseList) {
                            bsCollapse.hide();
                        }
                    };
                });
            }

            // Close any open menu accordions when window is resized below 768px
            window.addEventListener('resize', function() {
            var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

            if (vw < 768) {
                for (var bsCollapse of sidebarCollapseList) {
                bsCollapse.hide();
                }
            };
            });
        }

        // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
        
        var fixedNaigation = document.querySelector('body.fixed-nav .sidebar');
        
        if (fixedNaigation) {
            fixedNaigation.on('mousewheel DOMMouseScroll wheel', function(e) {
                var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

                if (vw > 768) {
                    var e0 = e.originalEvent,
                    delta = e0.wheelDelta || -e0.detail;
                    this.scrollTop += (delta < 0 ? 1 : -1) * 30;
                    e.preventDefault();
                }
            });
        }

        var scrollToTop = document.querySelector('.scroll-to-top');
        
        if (scrollToTop) {
            
            // Scroll to top button appear
            window.addEventListener('scroll', function() {
                var scrollDistance = window.pageYOffset;

                //check if user is scrolling up
                if (scrollDistance > 100) {
                    scrollToTop.style.display = 'block';
                } else {
                    scrollToTop.style.display = 'none';
                }
            });
        }
    });
</script>

<nav class="navbar align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0 navbar-dark">
    <div class="container-fluid d-flex flex-column p-0">
        <a class="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="/">
            <div class="sidebar-brand-icon rotate-n-15">
                <i class="fa fa-regular fa-stopwatch"></i>
            </div>
            <div class="sidebar-brand-text mx-3">
                <span>MyTimes</span>
            </div>
        </a>
        <hr class="sidebar-divider my-0">
        <ul class="navbar-nav text-light" id="accordionSidebar">
            <li class="nav-item">
                <a class="nav-link" href="/panel/dashboard">
                    <i class="fas fa-tachometer-alt"></i>
                    <span>Dashboard</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/panel/profile">
                    <i class="fas fa-user"></i>
                    <span>Profile</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/panel/ttables">
                    <i class="fas fa-table"></i>
                    <span>Time Tables</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/logout">
                    <i class="far fa-user-circle"></i>
                    <span>Logout</span>
                </a>
            </li>
        </ul>
        <div class="text-center d-none d-md-inline">
            <button class="btn rounded-circle border-0" id="sidebarToggle" type="button"></button>
        </div>
    </div>
</nav>