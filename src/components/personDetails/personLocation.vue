<template>
  <div class="location-details-container">
    <div class="data-container">
        <div class="title-holder">
            <h4>Address</h4>
        </div>
        <div class="data-holder">
            <h2>{{locationDetails.address1}}</h2>
        </div>
    </div>
    <div class="data-container">
        <div class="title-holder">
            <h4>City</h4>
        </div>
        <div class="data-holder">
            <h2>{{locationDetails.city}}</h2>
        </div>
    </div>
    <div class="data-container">
        <div class="title-holder">
            <h4>State</h4>
        </div>
        <div class="data-holder">
            <h2>{{locationDetails.state}}</h2>
        </div>
    </div>
    <div class="data-container">
        <div class="title-holder">
            <h4>Postal Code</h4>
        </div>
        <div class="data-holder">
            <h2>{{locationDetails.postalCode}}</h2>
        </div>
    </div>
    <div class="data-container">
        <div class="title-holder">
            <h4>Latitude</h4>
        </div>
        <div class="data-holder">
            <h2>{{locationDetails.coordinates.lat}}</h2>
        </div>
        <div class="title-holder">
            <h4>Longitude</h4>
        </div>
        <div class="data-holder">
            <h2>{{locationDetails.coordinates.lng}}</h2>
        </div>
    </div>
    <div class="data-container">
        <div class="map-location-title"> 
            <a class="view-in"
                :href="`https://www.google.com/maps/search/${locationDetails.coordinates.lat},${locationDetails.coordinates.lng}`">
                <h2>View in Google Maps</h2>
            </a>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        locationDetails: Object,
    },
}
</script>

<style>

</style>