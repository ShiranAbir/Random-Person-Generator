<template>
    <div class="professional-details-container">
        <div class="data-container">
            <div class="title-holder">
                <h4>Education</h4>
            </div>
            <div class="data-holder">
                <h2>{{professionalDetails.education}}</h2>
            </div>
        </div>
        <div class="data-container">
            <div class="title-holder">
                <h4>Job Title</h4>
            </div>
            <div class="data-holder">
                <h2>{{professionalDetails.jobTitle}}</h2>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        professionalDetails: Object,
    },
}
</script>

<style>

</style>