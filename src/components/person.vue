<template>
    <appHeader :person="this.person" @getRandomPerson="getRandomPerson"/>
    <div class="person-container">
        <names :names="this.person.names"/>
        <h2>Personal Details</h2>
        <personalDetails :personalDetails="person.personalDetails[0]"/>
        <h2>Contact Details</h2>
        <contactDetails :contactDetails="person.personalDetails[1]"/>
        <h2>Personal Status</h2>
        <personalStatus :personalStatus="person.personalStatus"/>
        <h2>Location</h2>
        <location :locationDetails="person.location"/>
        <h2>Appearance</h2>
        <appearance :appearanceDetails="person.appearance"/>
        <h2>Finance</h2>
        <finance :financeDetails="person.finance"/>
    </div>
</template>

<script>
import names from './personDetails/personNames.vue'
import appHeader from './header.vue'
import personalDetails from './personDetails/personPersonalDetails.vue'
import contactDetails from './personDetails/personContactDetailes.vue'
import personalStatus from './personDetails/personPersonalStatus.vue'
import location from './personDetails/personLocation.vue'
import appearance from './personDetails/personAppearance.vue'
import finance from './personDetails/personFinance.vue'
export default {
    data(){
        return{
            person: null,
        }
    },
    created(){
        this.$store.dispatch({ type: 'loadPerson' })
        this.person = this.$store.getters.person
    },
    methods:{
        getRandomPerson(){
            this.$store.dispatch({ type: 'loadPerson' })
            this.person = this.$store.getters.person
        }
    },
    components:{
        names,
        appHeader,
        personalDetails,
        contactDetails,
        personalStatus,
        location,
        appearance,
        finance,
    }
}
</script>
