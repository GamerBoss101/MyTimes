
<nav class="navbar navbar-expand-lg sticky-top bg-body-tertiary">
    <div class="container-fluid">
        <a class="navbar-brand" href="/">My Times</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/panel/dashboard">Panel</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/leaderboards">Leaderboards</a>
                </li>
            </ul>
            <form class="d-flex" style="margin-right:10px;">
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Search" aria-describedby="button-addon2">
                    <button class="btn btn-primary" type="button" id="button-addon2">Button</button>
                </div>
            </form>
            <div class="d-flex">
                <button class="btn btn-success" type="submit">
                    <a href="/panel/login" style="color:white; text-decoration: none;">Login</a>
                </button>
            </div>
        </div>
    </div>
</nav>

<style>
    .navbar {
        background-color: rgb(24, 24, 24) !important;
    }

    .navbar-brand {
        color: white !important;
    }

    .nav-link {
        color: white !important;
    }

    .nav-link.active {
        color: white !important;
    }

    .nav-link:hover {
        color: rgb(120, 120, 255) !important;
    }


</style>