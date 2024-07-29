<script>
    import Alerts from "./Alerts.svelte";
    import Profile from "./Profile.svelte";
</script>

<nav class="navbar navbar-expand bg-white shadow mb-4 topbar">
    <div class="container-fluid"><button class="btn btn-link d-md-none rounded-circle me-3" id="sidebarToggleTop" type="button"><i class="fas fa-bars"></i></button>
        <ul class="navbar-nav flex-nowrap ms-auto">
            <li class="nav-item dropdown d-sm-none no-arrow">
                <!-- svelte-ignore a11y-missing-attribute -->
                <a class="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown">
                <i class="fas fa-search"></i></a>
                <div class="dropdown-menu dropdown-menu-end p-3 animated--grow-in" aria-labelledby="searchDropdown">
                    <form class="me-auto navbar-search w-100">
                        <div class="input-group"><input class="bg-light border-0 form-control small" type="text" placeholder="Search for ..."><button class="btn btn-primary" type="button"><i class="fas fa-search"></i></button></div>
                    </form>
                </div>
            </li>
            <Alerts />
            <div class="d-none d-sm-block topbar-divider"></div>
            <Profile />
        </ul>
    </div>
</nav>