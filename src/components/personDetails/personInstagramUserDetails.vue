<template>
    <div class="instagram-user-details-container">
        <div class="data-container">
            <div class="title-holder">
                <h4>Registered</h4>
            </div>
            <div class="data-holder">
                <h2>{{instagramUserDetails.registered}}</h2>
            </div>
        </div>
        <div class="data-container">
            <div class="title-holder">
                <h4>User Name</h4>
            </div>
            <div class="data-holder">
                <h2>{{instagramUserDetails.userName}}</h2>
            </div>
        </div>
        <div class="data-container">
            <div class="title-holder">
                <h4>Password</h4>
            </div>
            <div class="data-holder">
                <h2>{{instagramUserDetails.password}}</h2>
            </div>
        </div>
        <div class="data-container">
            <div class="title-holder">
                <h4>Last Seen</h4>
            </div>
            <div class="data-holder">
                <h2>{{instagramUserDetails.lastSeen}}</h2>
            </div>
        </div>
        <div class="data-container">
            <div class="title-holder">
                <h4>Photos Amount</h4>
            </div>
            <div class="data-holder">
                <h2>{{instagramUserDetails.photosAmount}}</h2>
            </div>
        </div>
        <div class="data-container">
            <div class="title-holder">
                <h4>Followers</h4>
            </div>
            <div class="data-holder">
                <h2>{{instagramUserDetails.followers}}</h2>
            </div>
        </div>
        <div class="data-container">
            <div class="title-holder">
                <h4>Following</h4>
            </div>
            <div class="data-holder">
                <h2>{{instagramUserDetails.following}}</h2>
            </div>
        </div>
        <div class="data-container">
            <div class="title-holder">
                <h4>Is Online</h4>
            </div>
            <div class="data-holder">
                <h2>{{instagramUserDetails.isOnline}}</h2>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        instagramUserDetails: Object,
    },
}
</script>

<style>

</style>