<template>
  <div class="appearance-details-container">
    <div class="data-container">
        <div class="title-holder">
            <h4>Gender</h4>
        </div>
        <div class="data-holder">
            <h2>{{appearanceDetails.gender}}</h2>
        </div>
    </div>
    <div class="data-container">
        <div class="title-holder">
            <h4>Weight</h4>
        </div>
        <div class="data-holder">
            <h2>{{appearanceDetails.weigth}}</h2>
        </div>
    </div>
    <div class="data-container">
        <div class="title-holder">
            <h4>Height</h4>
        </div>
        <div class="data-holder">
            <h2>{{appearanceDetails.heigth}}</h2>
        </div>
    </div>
    <div class="data-container">
        <div class="title-holder">
            <h4>Eye Color</h4>
        </div>
        <div class="data-holder">
            <h2>{{appearanceDetails.eyeColor}}</h2>
        </div>
    </div>
    <div class="data-container">
        <div class="title-holder">
            <h4>Hair Color</h4>
        </div>
        <div class="data-holder">
            <h2>{{appearanceDetails.hairColor}}</h2>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        appearanceDetails: Object,
    },
}
</script>

<style>

</style>