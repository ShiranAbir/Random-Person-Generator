<template>
  <div class="header-container">
    <div class="main-nav">
        <div class="logo" @click="getRandomPerson">
            <img src="../style/images/logo.png">
            <p>Randomize Person</p>
        </div>
        <div class="buttons-holder">
            <button @click="getRandomPerson" class="button-5">
                Random
            </button>
            <div class="seprator"></div>
            <button @click="getPersonCopy" class="button-5">
                copy
            </button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        person: Object,
    },
    data(){
        return{

        }
    },
    
    methods:{
        getRandomPerson(){
            this.$emit('getRandomPerson')
        },

        getPersonCopy() {
            const copyText = JSON.stringify(this.person)
            navigator.clipboard.writeText(copyText)
            alert("Copied the random person!")
        },
        saveRandomPerson(){
            alert("Saved the random person!")
            this.$emit('saveRandomPerson')
        }
    }
}

</script>

<style>

</style>