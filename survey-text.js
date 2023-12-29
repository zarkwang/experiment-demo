
// Consent Form
const welcomeInfo = `
<p>Thanks for your interest in the <span style="font-weight:bold">Money and Time Preference Study</span>.</p>

<p>This study consists of 19 choice tasks and will take about 10 minutes to complete.
</p>

<p>Please consider each task carefully and choose the options that truly reflect your preferences. 
Your answers will remain confidential and will only be used for research purposes.</p>

<p>Please note your decision to participate in this study is voluntary. 
You are free to withdraw at any time simply by closing the web page and 
any responses you have already given will be deleted.</p>

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
<p>
In this study, tasks will be presented in tables.
</p>

<p>
Each row of a table has two options - <span style='color:#2262c9'>Option A</span> and 
<span style='color:#2262c9'>Option B</span>.
These options offer different amounts of money at different points in time. 
You should choose the option you prefer. 
</p>

<p>
These amounts are hypothetical, but we want you to imagine how you would 
act in real-life situations and make choices based on that.
</p>

<p>
In each task, you only need to click an option in the row where 
you switch from choosing option A to choosing Option B.
Choices on the rest of the rows will be completed automatically.
You need to make such an active choice <span style='color:#2262c9'>twice</span> in a task. 
</p>

<p>
This page contains an example task. Click "Continue" for details. 
</p>
`
// const instructions_1 = `
// <p>
// <span style='color:#2262c9'>You do not have to click through all rows.</span> 
// You only need to click an option in the row where you switch from choosing option B to choosing Option A.
// </p>

// <p>
// Choices on the rest of the rows will be completed automatically.
// </p>

// <p>
// After you have made a choice, some rows will unfold between the two rows where you switched your preference. 
// You need to make another choice on the newly unfolded rows.
// </p>

// <p>
// For details of the table, click "Continue".
// </p>
// `


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
Now, we would like you to complete a conprehension check task.
</p>

<p>
The task follows the same format as the previous example. After you complete it, 
there will be an additional question about the choices that you have made.
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
The formal tasks will start from the next page.
</p>

<p>
You will see 14 choice tasks. 
Please think carefully about each task and choose the options that 
<span style="font-weight:bold">truly reflect your preferences</span>. 
</p>

<p>
After each task, there will be a question asking how certain you are that
the choices you have made truly reflect your preference. Below is an
example of this question (you can try it out yourself):
</p>

<div id='confidenceExample'></div>

<p>
Please click "Next" to start the formal tasks.
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
                <th>Choice</th>
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
    <p id="notice">
    <span style="font-weight: bold">Reminder:</span>
    You only need to click an option in the row where you switch from choosing option A to choosing Option B. 
    If you click Option A in a row, we assume you will choose Option A for any row above that row. 
    If you click Option B in a row, we assume you will choose Option B for any row below that row.</p>
    
    <span id='qNumber'></span> Which option would you prefer in each row?
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
Before the study ends, please complete three additional choice tasks to help us understand how you feel about 
<span style='font-weight:bold'>taking risks</span>. 
</p>

<p>
These tasks follow the same format as the previous tasks. 
On each row, you can choose whether to get a small amount of money with certainty or 
a large amount with some probability. 
</p>

<p>
Please select the options that truly reflect your preferences.
</p>
`
// Risky Choice Question
const riskyQuestionText = `
    <p>
    Imagine that you can get either a large amount of money with a 50% chance or 
    a small amount of money with certainty.
    </p>
    
    <span id='qNumber'></span> Which option would you prefer in each row?
    <div id='error-risky' class='error-message'></div>
    `


// Error Message
const error_consentForm = "* Please check all boxes if you agree to participate in this study."
const error_intertemporalChoice = "* Please complete all choices before proceeding."
const error_confirmCheck = `* Try your best to answering this question correctly, then click "Next".`
const error_tips = "* Please read through the instructions."
// const error_redoChoice = "* Please redo your choices before proceeding."


// Choice meaning
function choiceMeaning(frontAmount,backAmount,seqLength,condition,upperAmount,lowerAmount){
    
    const itemStyle = "color:#c74040;display: inline-block;"
    const singeDate = (condition === 'front-align')?'today':`in ${seqLength}`;

    if(upperAmount === 0){
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


