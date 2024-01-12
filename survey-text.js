
// Consent Form
const welcomeInfo = `
<p>Thanks for your interest in the study of <span style="font-weight:bold">Preferences in Money, Time and Risk</span>.</p>

<p>This study consists of 22 decision tasks. These tasks are divided into 3 parts. 
It will take about 14 minutes to complete the whole study.  
</p>

<p>Please consider each task carefully and choose the options that truly reflect your preferences. 
Your answers will remain confidential and will only be used for research purposes.</p>

<p>Please note your decision to participate in this study is voluntary. 
You are free to withdraw at any time simply by closing the web page and 
any responses you have already given will be deleted.</p>

<p>Please do <span style='font-weight:bold'>not</span> refresh any page while doing the tasks. Otherwise,
you may lose your data and be excluded from the study.</p>

<p>
Should you have any questions about the present study, 
please contact Zijian Wang (zijian.wang.1@warwick.ac.uk). 
You may also contact the University of Warwick Research and Impact Services, University House, 
University of Warwick, Coventry, CV4 8UW, UK. 02476575732 if you wish to make a complaint.</p>

<p>If you agree to participate, please tick all the boxes below, then click “Next” to start:</p>
`

const consentQuestion = [
    `I confirm that I have read and understand the information for the present study.`,
    `I understand that my participation is voluntary and that 
    I am free to withdraw at any time without giving any reason.`,
    `I agree to take part in the present study.`,
    `I am happy for my anonymized data to be used for research purposes.`
]


// Instruction
const instructions_0 = `
<h3> Instruction </h3>
<p>
In this study, most tasks will be presented in tables.
</p>

<p>
Each row of a table has two options - <span style='color:#2262c9'>Option A</span> and 
<span style='color:#2262c9'>Option B</span>.
These options offer different amounts of money at different points in time. 
You should choose the option you prefer in each row. 
</p>

<p>
These amounts are hypothetical, but we want you to imagine how you would 
act in real-life situations and make choices based on that.
</p>

<p>
In each task, you only need to click an option in the row where 
you switch from choosing option A to choosing Option B.
Choices on the rest of the rows will be completed automatically.
</p>

<p>
This page contains an example task. Click "Continue" for details. 
</p>
`


// Example with Tips
const tipText = [
`(1/4) Each row has two options. Option A offers you two amounts 
on two different dates. This option is fixed across rows.`,
`(2/4) Option B offers a sum of money on a single date. It varies from row to row.`,
`(3/4) If you click Option A in this row, we assume you will also choose Option A for any row 
<span style="font-weight: bold">above</span> this row.`,
`(4/4) If you click Option B in this row, we assume you will also choose Option B for any row 
<span style="font-weight: bold">below</span> this row.`,
]

const tryChoiceText = "Now, try to make your own choices."

const choiceIndicationText = 'The choice indicates that you'

const changeChoiceText = 'You can change your choice before clicking "Next".'

const finishChoiceText = 'This taks is completed. Click "Next" to proceed.'

// const confirmOptions = ['Yes &rarr; Click "Confirm" to precede to the next page. ',
//                         'No &rarr; I want to redo my choices.']


// Practice Tasks
const trainIntro = `
<p>
This study has 3 parts. Before you start Part 1, 
we would like you to complete a <span style='font-weight:bold'>conprehension check</span> task.
</p>

<p>
The task follows the same format as the previous example. After you complete it, 
there will be an additional question about the choice that you have made.
Please try your best to answer this question correctly.
</p>

<p>
Click "Next" to view the comprehension check task.
</p>
`
const comprehensionQuestionText = `
    (<span style='font-weight:bold'>Comprehension Check</span>) What do you mean by your choice? 
`

// Intro to Intertemporal Choice Tasks
const intertemporalIntro = `
<p>
Now, you enter the Part 1 of this study. This part contains 12 tasks. 
</p>

<p>
Please think carefully about each task and choose the options that 
<span style="font-weight:bold">truly reflect your preferences</span>. 
</p>

<p>
After each task, there will be a question asking how certain you are that
the choice you have made truly reflect your preference. Below is an
example of this question (you can try it out yourself):
</p>

<div id='confidenceExample'></div>

<p>
Please click "Next" to start Part 1.
</p>
`

// Page Setting for Intertemporal Choice Task and Confidence Check
const pageIteration = ['intertemporal-choice','confidence-check']

const intertemporalChoicePage = `
    <div id='intertemporalQuestionContent'></div>
    <table id='tableContainer'>
        <thead>
            <tr>
                <th>Option A</th>
                <th>I prefer ______</th>
                <th>Option B</th>
            </tr>
        </thead>
        <tbody id="priceListTable">
            <!-- Rows will be generated here using JavaScript -->
        </tbody>
    </table>
    <div id='confirmContainer'></div>
`

const confidenceCheckPage = `
    <div id="confidenceQuestionBlock">
    <div id='error-confidence' class='error-message'></div>
        <div id="confidenceQuestionContent"></div>
        <div class="slider-container">
            <input type="range" min="0" max="100" value="0" class="slider" id="confidence-scale">
            <div class="scale-label">very uncertain</div>
            <div class="scale-label right">very certain</div>
        </div>
        <div id='confidenceAnswerBlock'>
            Your answer: <span id='confidenceAnswer'></span>%
        </div>
    </div>
`

// Text for Intertemporal Choice Task
const intertemporalQuestionText = `
    <div id='error-choicelist' class='error-message'></div>
    `

// Text for Confidence Check
const confidenceQuestionText = "How certain are you that you actually"

// const confidenceLevels = ["Totally not sure", 
//                          "Slightly sure", 
//                          "Moderately sure", 
//                          "Quite Sure", 
//                          "Absolutely sure"]


// Intro to Risky Choices
const riskyIntro = `
<p>
In Part 2, there are 4 tasks about how you feel about 
<span style='font-weight:bold'>taking risks</span>. 
</p>

<p>
These tasks follow the same format as the previous tasks. However, on each row, 
you should choose whether to get a large amount of money with some probability or 
a small amount of money with certainty.
</p>

<p>
Please select the options that truly reflect your preferences.
</p>
`

// Error Message
const error_consentForm = "* Please check all boxes if you agree to participate in this study."
const error_intertemporalChoice = "* Please complete all choices before proceeding."
const error_confirmCheck = `* Try your best to answering this question correctly, then click "Next".`
const error_tips = "* Please read through the instructions."
const error_enter = "* Please enter a number greater than 0."
// const error_redoChoice = "* Please redo your choices before proceeding."


// Choice meaning
function choiceMeaning(frontAmount,backAmount,seqLength,condition,upperAmount,lowerAmount){
    
    const itemStyle = "color:#c74040;display: inline-block;"
    const singeDate = (condition === 'front-align')?'today':`in ${seqLength}`;

    if(upperAmount === amountList[0]){
        const choiceMeaningText = `
                value <span style=${itemStyle}>£${frontAmount} today and £${backAmount} in ${seqLength}</span> 
                somewhere below <span style=${itemStyle}>£${upperAmount} ${singeDate}</span>
                `
        return(choiceMeaningText)
    } else if(upperAmount > amountList[amountList.length-1]){
        const choiceMeaningText = `
                value <span style=${itemStyle}>£${frontAmount} today and £${backAmount} in ${seqLength}</span> 
                somewhere above <span style=${itemStyle}>£${lowerAmount} ${singeDate}</span>
                `
        return(choiceMeaningText)
    } else {
        const choiceMeaningText = `
                value <span style=${itemStyle}>£${frontAmount} today and £${backAmount} in ${seqLength}</span>
                somewhere between
                <span style=${itemStyle}>£${lowerAmount}</span>
                and
                <span style=${itemStyle}>£${upperAmount} ${singeDate}</span> 
                `
        return(choiceMeaningText)
    }   
}


function unfoldRange(upperAmount,lowerAmount,seqLength,condition){
    
    const itemStyle = "color:#c74040;display:inline-block;"
    const singeDate = (condition === 'front-align')?'today':`in ${seqLength}`;
    
    if(upperAmount > amountList[maxRowNumber]){
        const anotherChoiceText = `
            Note the range above <span style=${itemStyle}>£${lowerAmount} ${singeDate}</span> has unfolded.
            <br><br> 
            Please make another choice in this more precise range.
            `
            return(anotherChoiceText)
    } else {
        const anotherChoiceText = `
            Note the range between <span style=${itemStyle}>£${lowerAmount}</span>
            and
            <span style=${itemStyle}>£${upperAmount} ${singeDate}</span> 
            has unfolded. 
            <br><br> 
            Please make another choice in this more precise range.
            `
        return(anotherChoiceText)
    }
}

// function choiceMeaning(frontAmount,backAmount,seqLength,indiffPoint,currentCond){
    
//     var itemStyle = "color:#ff0040;display: inline-block;"
//     var indiffAmount = parseInt(indiffPoint);
//     var singleDate = (currentCond === 'today')?'today':`in ${currentCond}`;

//     if(indiffAmount === 0){
//         const choiceMeaningText = `
//                 prefer receiving 
//                 <span style=${itemStyle}>£${indiffAmount} ${singleDate}</span> to Option B (receiving 
//                 <span style=${itemStyle}>£${frontAmount} today and £${backAmount} in ${seqLength}</span>)
//                 `
//         return(choiceMeaningText)
//     } else if(indiffAmount > maxRowNumber*amountBreak){
//         const choiceMeaningText = `
//                 prefer Option B (receiving 
//                 <span style=${itemStyle}>£${frontAmount} today and £${backAmount} in ${seqLength}</span>) 
//                 to receiving <span style=${itemStyle}>£${indiffAmount-amountBreak} ${singleDate}</span>
//                 `
//         return(choiceMeaningText)
//     } else {
//         const choiceMeaningText = `
//                 prefer Option B (receiving 
//                 <span style=${itemStyle}>£${frontAmount} today and £${backAmount} in ${seqLength}</span>)
//                 to receiving
//                 <span style=${itemStyle}>£${indiffAmount-amountBreak} ${singleDate}</span>
//                 and prefer receiving
//                 <span style=${itemStyle}>£${indiffAmount} ${singleDate}</span> 
//                 to Option B
//                 `
//         return(choiceMeaningText)
//     }   
// }



function setpayoff_1(payoff_1){
    let setPayoff = `
                    <span style='color:#11439e'>£${payoff_1}  today</span>
    `

    $('#payoff_1').html(setPayoff);

}

function setpayoff_2(payoff_2,delay){
    let setPayoff = `
                    <span style='color:#11439e'>£${payoff_2} in ${delay}</span>
    `
    $('#payoff_2').html(setPayoff);
}


const pairValueTime = `
<p> Imagine that you have two options:</p>

  <table id='pair-value-table'>
    <tr>
      <th>Option A</th>
      <th>Option B</th>
    </tr>
    <tr>
      <td>
        <div id='optionA'>
            receive  &nbsp;<span style='color:#11439e'>£X today</span>
        </div>
      </td>
      <td>
        <div id='optionB'>
            receive<div id='payoff_1'></div> and <div id='payoff_2'></div>
        </div>
      </td>
    </tr>
  </table>

  <p> What is the smallest amount for <span style='font-weight:bold'>X</span> that would make you 
  prefer Option A at least as much as Option B? </p>
  <p>Your answer: <input type="text" id="userAnswer" placeholder="Enter amount"></p>
  <div id='error-enter' class='error-message'></div>
`
// <span style='color:#c4234c'>
// 


const enterIntro = `
<p>
Now, you enter the final part of the study.
</p>

<p>
Part 3 contains 6 tasks. These tasks follow a different format from the previous tasks. 
Below is an example task:
</p>

<div id='confidenceExample'></div>

<p>
In this example, the amount you enter for <span style='font-weight:bold'>X</span> should ensure that you value 
<span style='font-weight:bold'>receive
<span style='color:#11439e'>£X today</span></span> 
and <span style='font-weight:bold'>receive
<span style='color:#11439e'>£110 today</span> and 
<span style='color:#11439e'>£90 in 5 months</span></span> equally.
</p>

<p>
Please click "Next" to start Part 3.
</p>
`