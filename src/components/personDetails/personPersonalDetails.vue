<template>
<div class="personal-details-container">
    <div class="data-container">
        <div class="title-holder">
            <h4>ID Card Number</h4>
        </div>
        <div class="data-holder">
            <h2>{{personalDetails.idCardNumber}}</h2>
        </div>
    </div>
    <div class="data-container">
        <div class="title-holder">
            <h4>_id</h4>
        </div>
        <div class="data-holder">
            <h2>{{personalDetails._id}}</h2>
        </div>
    </div>
    <div class="data-container">
        <div class="title-holder">
            <h4>Passport Number</h4>
        </div>
        <div class="data-holder">
            <h2>{{personalDetails.passportNumber}}</h2>
        </div>
    </div>
    <div class="data-container">
        <div class="title-holder">
            <h4>Birthday</h4>
        </div>
        <div class="data-holder">
            <h2>{{personalDetails.birthDay}}</h2>
        </div>
    </div>
    <div class="data-container">
        <div class="title-holder">
            <h4>Age</h4>
        </div>
        <div class="data-holder">
            <h2>{{personalDetails.age}}</h2>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        personalDetails: Object,
    },

}
</script>

<style>

</style>