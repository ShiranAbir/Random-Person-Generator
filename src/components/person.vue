<template>
    <appHeader @saveRandomPerson="saveRandomPerson" :person="this.person" @getRandomPerson="getRandomPerson"/>
    <div class="person-container">
        <names :names="this.person.names"/>
        <div class="section-holder">
            <h2 @click="toggleSection('personalDetails')">Personal Details</h2>
            <personalDetails v-if="this.sectionShown.personalDetails" :personalDetails="person.personalDetails[0]"/>
        </div>
        <div class="section-holder">
            <h2 @click="toggleSection('contactDetails')" >Contact Details</h2>
            <contactDetails v-if="this.sectionShown.contactDetails" :contactDetails="person.personalDetails[1]"/>
        </div>
        <div class="section-holder">
            <h2 @click="toggleSection('personalStatus')">Personal Status</h2>
            <personalStatus v-if="this.sectionShown.personalStatus" :personalStatus="person.personalStatus"/>
        </div>
        <div class="section-holder">
            <h2 @click="toggleSection('location')">Location</h2>
            <location v-if="this.sectionShown.location" :locationDetails="person.location"/>
        </div>
        <div class="section-holder">
            <h2 @click="toggleSection('appearance')">Appearance</h2>
            <appearance v-if="this.sectionShown.appearance" :appearanceDetails="person.appearance"/>
        </div>
        <div class="section-holder">
            <h2 @click="toggleSection('finance')">Finance</h2>
            <finance v-if="this.sectionShown.finance" :financeDetails="person.finance"/>
        </div>
        <div class="section-holder">
            <h2 @click="toggleSection('professional')">Professional</h2>
            <professional v-if="this.sectionShown.professional" :professionalDetails="person.professional"/>
        </div>
        <div class="section-holder">
            <h2 @click="toggleSection('internetPreferences')">Internet Preferences</h2>
            <internetPreferences v-if="this.sectionShown.internetPreferences" :internetPreferencesDetails="person.internetPreferences"/>
        </div>
        <div class="section-holder">
            <h2 @click="toggleSection('drivingDetails')">Driving Details</h2>
            <drivingDetails v-if="this.sectionShown.drivingDetails" :drivingDetails="person.drivingDetails"/>
        </div>
        <div class="section-holder">
            <h2 @click="toggleSection('facebookUserDetails')">Facebook User Details</h2>
            <facebookUserDetails v-if="this.sectionShown.facebookUserDetails" :facebookUserDetails="person.facebookUserDetails"/>
        </div>
        <div class="section-holder">
            <h2 @click="toggleSection('twiterUserDetails')">Twitter User Details</h2>
            <twiterUserDetails v-if="this.sectionShown.twiterUserDetails" :twitterUserDetails="person.twitterUserDetails"/>
        </div>
        <div class="section-holder">
            <h2 @click="toggleSection('instagramUserDetails')">Instagram User Details</h2>
            <instagramUserDetails v-if="this.sectionShown.instagramUserDetails" :instagramUserDetails="person.instagramUserDetails"/>
        </div>
        <div class="section-holder">
            <h2 @click="toggleSection('linkedinUserDetails')">Linkedin User Details</h2>
            <linkedinUserDetails v-if="this.sectionShown.linkedinUserDetails" :linkedinUserDetails="person.linkedinUserDetails"/>
        </div>
    </div>
    <appfooter/>
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
import professional from './personDetails/personProfessional.vue'
import internetPreferences from './personDetails/personInternetPreferences.vue'
import drivingDetails from './personDetails/personDrivingDetails.vue'
import facebookUserDetails from './personDetails/personFacebookUserDetails.vue'
import twiterUserDetails from './personDetails/personTwiterUserDetails.vue'
import instagramUserDetails from './personDetails/personInstagramUserDetails.vue'
import linkedinUserDetails from './personDetails/personLinkedinUserDetails.vue'
import appfooter from './footer.vue'
export default {
    data(){
        return{
            person: null,
            sectionShown:{
                names:false,
                appHeader:false,
                personalDetails:false,
                contactDetails:false,
                personalStatus:false,
                location:false,
                appearance:false,
                finance:false,
                professional:false,
                internetPreferences:false,
                drivingDetails:false,
                facebookUserDetails:false,
                twiterUserDetails:false,
                instagramUserDetails:false,
                linkedinUserDetails:false,
            },
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
        },
        toggleSection(sectionName){
            this.sectionShown[sectionName] = !this.sectionShown[sectionName]
        },
        saveRandomPerson(){
            console.log('here!');
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
        professional,
        internetPreferences,
        drivingDetails,
        facebookUserDetails,
        twiterUserDetails,
        instagramUserDetails,
        linkedinUserDetails,
        appfooter
    }
}
</script>
