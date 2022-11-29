<template>
   <div class="linkdin-user-details-container">
        <div class="data-container">
            <div class="title-holder">
                <h4>Registered</h4>
            </div>
            <div class="data-holder">
                <h2>{{linkedinUserDetails.registered}}</h2>
            </div>
        </div>
        <div class="data-container">
            <div class="title-holder">
                <h4>User Name</h4>
            </div>
            <div class="data-holder">
                <h2>{{linkedinUserDetails.userName}}</h2>
            </div>
        </div>
        <div class="data-container">
            <div class="title-holder">
                <h4>Connections</h4>
            </div>
            <div class="data-holder">
                <h2>{{linkedinUserDetails.connections}}</h2>
            </div>
        </div>
        <div class="data-container">
            <div class="title-holder">
                <h4>Password</h4>
            </div>
            <div class="data-holder">
                <h2>{{linkedinUserDetails.password}}</h2>
            </div>
        </div>
        <div class="data-container">
            <div class="title-holder">
                <h4>Last Seen</h4>
            </div>
            <div class="data-holder">
                <h2>{{linkedinUserDetails.lastSeen}}</h2>
            </div>
        </div>
        <div class="data-container">
            <div class="title-holder">
                <h4>Skills</h4>
            </div>
            <div class="data-holder">
                <h2>{{linkedinUserDetails.skills}}</h2>
            </div>
        </div>
        <div class="data-container">
            <div class="title-holder">
                <h4>Is Online</h4>
            </div>
            <div class="data-holder">
                <h2>{{linkedinUserDetails.isOnline}}</h2>
            </div>
        </div>
        <div class="data-container">
            <div class="title-holder">
                <h4>Activity</h4>
            </div>
            <div class="data-holder">
                <h2>{{linkedinUserDetails.activity}}</h2>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        linkedinUserDetails: Object,
    },
}
</script>

<style>

</style>