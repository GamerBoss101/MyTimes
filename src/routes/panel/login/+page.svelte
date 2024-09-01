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
                    <h3 class="text mb-4">Login</h3>
                </div>
                <form class="user">
                    <div class="mb-3">
                        <input class="form-control form-control-user" type="email" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Email / Username" name="username">
                    </div>
                    <div class="mb-3">
                        <input class="form-control form-control-user" type="password" id="exampleInputPassword" placeholder="Password" name="password">
                    </div>
                    <button class="btn btn-primary d-block btn-user w-100" type="submit">Login</button>
                    <hr>
                </form>
                <div class="text-center">
                    <a class="small" href="forgot-password.html">Forgot Password?</a>
                </div>
                <div class="text-center">
                    <a class="small" href="/panel/register">Create an Account!</a>
                </div>
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

    .form-control-user {
        color: rgb(0, 0, 0) !important;
        border: none;
        font-size: 16px;
    }

</style>