<template>
  <div class="contact-details-container">
    <div class="data-container">
        <div class="title-holder">
            <h4>Email</h4>
        </div>
        <div class="data-holder">
            <h2>{{contactDetails.email}}</h2>
        </div>
    </div>
    <div class="data-container">
        <div class="title-holder">
            <h4>Mobile</h4>
        </div>
        <div class="data-holder">
            <h2>{{contactDetails.mobie}}</h2>
        </div>
    </div>
    <div class="data-container">
        <div class="title-holder">
            <h4>Phone</h4>
        </div>
        <div class="data-holder">
            <h2>{{contactDetails.phone}}</h2>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        contactDetails: Object,
    },

}
</script>

<style>

</style>