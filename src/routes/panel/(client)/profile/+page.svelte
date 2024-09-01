<script>
    import UserSet from "$lib/components/panel/profile/UserSet.svelte";
</script>

<h3 class="text-dark mb-4">Profile</h3>
<div class="row mb-3">
    <div class="col-lg-4">
        <div class="card mb-3">
            <div class="card-body text-center shadow">
                <img class="rounded-circle mb-3 mt-4" src="/avatar5.jpeg" alt="Gravatar Pic" width="160" height="160">
                <div class="mb-3"><button class="btn btn-primary btn-sm" type="button">Change Photo</button></div>
            </div>
        </div>
    </div>
    <div class="col-lg-8">
        <div class="row">
            <div class="col">
                <UserSet />
            </div>
        </div>
    </div>
</div>
