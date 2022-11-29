<template>
    <div class="twiter-user-details-container">
        <div class="data-container">
            <div class="title-holder">
                <h4>Registered</h4>
            </div>
            <div class="data-holder">
                <h2>{{twitterUserDetails.registered}}</h2>
            </div>
        </div>
        <div class="data-container">
            <div class="title-holder">
                <h4>User Name</h4>
            </div>
            <div class="data-holder">
                <h2>{{twitterUserDetails.userName}}</h2>
            </div>
        </div>
        <div class="data-container">
            <div class="title-holder">
                <h4>Tweets Amount</h4>
            </div>
            <div class="data-holder">
                <h2>{{twitterUserDetails.tweetsAmount}}</h2>
            </div>
        </div>
        <div class="data-container">
            <div class="title-holder">
                <h4>Password</h4>
            </div>
            <div class="data-holder">
                <h2>{{twitterUserDetails.password}}</h2>
            </div>
        </div>
        <div class="data-container">
            <div class="title-holder">
                <h4>Last Seen</h4>
            </div>
            <div class="data-holder">
                <h2>{{twitterUserDetails.lastSeen}}</h2>
            </div>
        </div>
        <div class="data-container">
            <div class="title-holder">
                <h4>Followers</h4>
            </div>
            <div class="data-holder">
                <h2>{{twitterUserDetails.followers}}</h2>
            </div>
        </div>
        <div class="data-container">
            <div class="title-holder">
                <h4>Is Online</h4>
            </div>
            <div class="data-holder">
                <h2>{{twitterUserDetails.isOnline}}</h2>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        twitterUserDetails: Object,
    },
}
</script>

<style>

</style>