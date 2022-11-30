<template>
  <div class="app-footer">
    <div class="text-area">
        <div class="data-holder">
            <h2>Shiran Abir</h2>
            <h3>Full-Stack / Frontend Developer</h3>  
            <a href="https://www.npmjs.com/package/randomize-person">Try in your project -> npm i randomize-person</a>
        </div>
        
        <div class="link-holder">
            <div class="linkedin-icon">
                <h3>Contact me</h3>
            </div> 
            <div class="icon-holder">
                <a href="https://www.linkedin.com/in/shiran-abir/"><img src="../style/images/linkedin.png"></a>
                <a href="https://www.npmjs.com/package/randomize-person"><img src="../style/images/npm.png"></a>
                <img @click="onSendEmail" src="../style/images/email.png">
            </div>
        </div>
    </div>  
  </div>
</template>

<script>
export default {
data(){
    return{

    }
    
},
methods:{
    onSendEmail(){
        window.open('mailto:shirkiabir@gmail.com')
    },
},

}
</script>

<style>

</style>