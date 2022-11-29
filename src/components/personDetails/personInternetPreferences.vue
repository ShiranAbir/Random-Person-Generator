<template>
  <div class="internet-preferences-details-container">
        <div class="data-container" :style="{ 'background-color': internetPreferencesDetails.preferredHexColor }">
            <div class="title-holder">
                <h4>Preferred Color</h4>
            </div>
            <div class="data-holder">
                <h2>{{internetPreferencesDetails.preferredHexColor}}</h2>
            </div>
        </div>
        <div class="data-container">
            <div class="title-holder">
                <h4>Preferred Mode</h4>
            </div>
            <div class="data-holder">
                <h2>{{internetPreferencesDetails.preferredMode}}</h2>
            </div>
        </div>
        <div class="data-container">
            <div class="title-holder">
                <h4>Preferred Font Size</h4>
            </div>
            <div class="data-holder">
                <h2>{{internetPreferencesDetails.preferredFontSize}}</h2>
            </div>
        </div>
        <div class="data-container">
            <div class="title-holder">
                <h4>Preferred Font Family</h4>
            </div>
            <div class="data-holder">
                <h2>{{internetPreferencesDetails.preferredFontFamily}}</h2>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        internetPreferencesDetails: Object,
    },
}
</script>

<style>

</style>