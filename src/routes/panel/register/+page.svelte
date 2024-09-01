<script>
    import "$lib/css/home.css";
    import NavBar from "$lib/components/home/NavBar.svelte";
</script>

<NavBar />
<div class="container">
    <div class="card my-5 bg-dark">
        <div class="card-body p-0">
            <div class="p-5">
                <div class="text-center">
                    <h2 class="text mb-4">Register</h2>
                </div>
                <form class="row g-3">
                    <div class="col-12">
                        <label for="username" class="form-label">Username</label>
                        <input type="text" class="form-control" id="username" placeholder="Username">
                    </div>
                    <div class="col-md-6">
                      <label for="email" class="form-label">Email</label>
                      <input type="email" class="form-control" id="email" placeholder="something@email.com">
                    </div>
                    <div class="col-md-6">
                      <label for="password" class="form-label">Password</label>
                      <input type="password" class="form-control" id="password" placeholder=". . .">
                    </div>
                    <button type="submit" class="btn btn-primary">Register</button>
                </form>
            </div>
        </div>
    </div>
</div>

<style>
    .card {
        max-width: 650px;
        margin: 0 auto;
        border: none;
        color: white !important;
    }

</style>