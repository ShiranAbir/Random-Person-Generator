<template>
  <div class="finance-details-container">
    <div class="data-container">
        <div class="title-holder">
            <h4>Current Account</h4>
        </div>
        <div class="data-holder">
            <h2>{{financeDetails.currentAccount}}</h2>
        </div>
    </div>
    <div class="data-container">
        <div class="title-holder">
            <h4>Salary</h4>
        </div>
        <div class="data-holder">
            <h2>{{financeDetails.salary}}</h2>
        </div>
    </div>
    <div v-if="financeDetails.loan.hasLoan" class="loan-data-container">
        <div class="loan-details">
            <div class="data-holder">
                <h4>Loan Amount</h4>
                <h2>{{financeDetails.loan.loanAmount}}</h2>
            </div>
            <div class="data-holder">
                <h4>Left To Pay</h4>
                <h2>{{financeDetails.loan.leftToPay}}</h2>
            </div>
            <div class="data-holder">
                <h4>Date Taken</h4>
                <h2>{{financeDetails.loan.dateTaken}}</h2>
            </div>
            <div class="data-holder">
                <h4>Last Day To Pay</h4>
                <h2>{{financeDetails.loan.lastDayToPay}}</h2>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        financeDetails: Object,
    },
}
</script>

<style>

</style>