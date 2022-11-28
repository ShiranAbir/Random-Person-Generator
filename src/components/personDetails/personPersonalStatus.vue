<template>
  <div class="marital-status-container">
    <div class="data-container">
        <div class="title-holder">
            <h4>Marital Status</h4>
        </div>
        <div class="data-holder">
            <h2>{{personalStatus.maritalStatus}}</h2>
        </div>
    </div>
    <div class="data-container">
        <div class="title-holder">
            <h4>Children Amount</h4>
        </div>
        <div class="data-holder">
            <h2>{{personalStatus.childrenAmount}}</h2>
        </div>
    </div>
</div>
</template>

<script>
export default {

    props: {
        personalStatus: Object,
    },

}
</script>

<style>

</style>