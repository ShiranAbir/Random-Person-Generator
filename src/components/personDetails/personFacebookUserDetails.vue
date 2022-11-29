<template>
  <div class="facebook-user-details-container">
        <div class="data-container">
            <div class="title-holder">
                <h4>Registered</h4>
            </div>
            <div class="data-holder">
                <h2>{{facebookUserDetails.registered}}</h2>
            </div>
        </div>
        <div class="data-container">
            <div class="title-holder">
                <h4>User Name</h4>
            </div>
            <div class="data-holder">
                <h2>{{facebookUserDetails.userName}}</h2>
            </div>
        </div>
        <div class="data-container">
            <div class="title-holder">
                <h4>Posts Amount</h4>
            </div>
            <div class="data-holder">
                <h2>{{facebookUserDetails.postsAmount}}</h2>
            </div>
        </div>
        <div class="data-container">
            <div class="title-holder">
                <h4>Password</h4>
            </div>
            <div class="data-holder">
                <h2>{{facebookUserDetails.password}}</h2>
            </div>
        </div>
        <div class="data-container">
            <div class="title-holder">
                <h4>Last Seen</h4>
            </div>
            <div class="data-holder">
                <h2>{{facebookUserDetails.lastSeen}}</h2>
            </div>
        </div>
        <div class="data-container">
            <div class="title-holder">
                <h4>Photos Amount</h4>
            </div>
            <div class="data-holder">
                <h2>{{facebookUserDetails.photosAmount}}</h2>
            </div>
        </div>
        <div class="data-container">
            <div class="title-holder">
                <h4>Friends Amount</h4>
            </div>
            <div class="data-holder">
                <h2>{{facebookUserDetails.friendsAmount}}</h2>
            </div>
        </div>
        <div class="data-container">
            <div class="title-holder">
                <h4>Is Online</h4>
            </div>
            <div class="data-holder">
                <h2>{{facebookUserDetails.isOnline}}</h2>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        facebookUserDetails: Object,
    },
}
</script>

<style>

</style>