<template>
    <div class="driving-details-container">
        <div v-if="!drivingDetails.hasDrivingLicense" class="data-container">
            <div class="title-holder">
                <h4>Has Driving License</h4>
            </div>
            <div class="data-holder">
                <h2>{{drivingDetails.hasDrivingLicense}}</h2>
            </div>
        </div>
        <div v-if="drivingDetails.hasDrivingLicense" class="data-container">
            <div class="title-holder">
                <h4>Drivers License Type</h4>
            </div>
            <div class="data-holder">
                <h2>{{drivingDetails.driversLicenseType}}</h2>
            </div>
        </div>
        <div v-if="drivingDetails.hasDrivingLicense" class="data-container">
            <div class="title-holder">
                <h4>Vehicle Plate Number</h4>
            </div>
            <div class="data-holder">
                <h2>{{drivingDetails.vehiclePlateNumber}}</h2>
            </div>
        </div>
        <div v-if="drivingDetails.hasDrivingLicense" class="data-container">
            <div class="title-holder">
                <h4>Vehicle Brand</h4>
            </div>
            <div class="data-holder">
                <h2>{{drivingDetails.vehicle.brand}}</h2>
            </div>
        </div>
        <div v-if="drivingDetails.hasDrivingLicense" class="data-container">
            <div class="title-holder">
                <h4>Vehicle Model</h4>
            </div>
            <div class="data-holder">
                <h2>{{drivingDetails.vehicle.model}}</h2>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        drivingDetails: Object,
    },
}
</script>

<style>

</style>