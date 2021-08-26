const content = [
    {doctor:
    [ 
        {title: 'Doctor'}, 
        {productionGoal: [ {daily: 100}, {weekly: 100}, {monthly: 100}] }, 
        {openAppts: 3}, 
        {peopleToContact_FollowUps:6}
    ]}, 
    {ProgressToGoal: [
        {dollarAmount: `$ ${20000}`}, 
        {infoArea: 'lormem ispom verbos lotos dell marksis Intel '},
        {infoArea: 'lormem ispom verbos lotos dell marksis Intel '},
        {infoArea: 'lormem ispom verbos lotos dell marksis Intel '}
    ]}, 
    {UnsheduledTreatments:[
        {patientsOfTheDay:[
            {firstname: 'harry', lastname: 'styles', reason: 'cleaning', crossSellUpsell: 'teeth whiting'},
            {firstname: 'momma', lastname: 'styles', reason: 'cleaning', crossSellUpsell: 'teeth whiting'},
            {firstname: 'poppa', lastname: 'styles', reason: 'cleaning', crossSellUpsell: 'teeth whiting'},
            {firstname: 'harry', lastname: 'potter', reason: 'cleaning', crossSellUpsell: 'teeth whiting'}
    ]}]}, 
    {DentalHygienist:[{openAppts: 3}, {peopleToContact_FollowUps:6}]}, 
    {Billing_Insurance:[
        {Goal: [ {daily: 100}, {weekly: 100}, {monthly: 100}] }, 
        {Urgent: 'text area '},
        {moreInfoReq: 'text area '},
        {denied: 'text area '},
        {pre_auth: 'text area '}]}, 
    {Collections: [ {total: 100}, ]}
]

export default content

// DOCTOR
// production goals - daily, weekly, monthly
//  • Open Appts. 
//  • People to Contact and follow up with - this is an API connection  point where I=the data will be shown in order of  most important  >  less
// PROGRESS TO GOAL - $ AMOUNT
//  • Info area
//  • Info area
//  • Info area
// UNSCHEDULED TREATMENTS
//  • Patents coming in for the day / !! Cross sell up sell information and
// DENTAL HYGIENISTS
//  • Open Appts. 
//  • People to Contact and follow up with - this is an API connection  point where I=the data will be shown in order of  most important  >  less
// BILLING / INSURANCE
// - goal Avg. time to payment 10 business days
//  • Urgent
//  • more info required
//  • denied
//  • pre auth.
// COLLECTIONS
// - outstanding total of all