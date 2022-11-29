<template>
    <div class="names-cmp-container">
        <div class="names-container">
            <div class="first-name-holder">
                <div class="title-holder">
                    <h4>First Name</h4>
                </div>
                <div class="data-holder">
                    <h1>{{names.firstName}}</h1>
                </div>
            </div>
            <div class="last-name-holder">
                <div class="title-holder">
                    <h4>Last Name</h4>
                </div>
                <div class="data-holder">
                    <h1>{{names.lastName}}</h1>
                </div>
            </div>
        </div>
    </div>
  
</template>

<script>
export default {
    props: {
        names: Object,
    },
 data(){

    return {
    }
 }
}
</script>

<style>

</style>