
// Consent Form
function screenInfo(width){
    var screenInfo= `
        <div style='display:flex; align-items:center; justify-content:center; transform:translateY(100%)'>
        This study can only run on a screen with a width above 800px.<br>
        <br>
        Your screen width is ${width}px.
        </div>
    `
    return(screenInfo)
}

const welcomeInfo = `
<p>Thanks for your interest in the <span style="font-weight:bold">Money and Time Preference Study</span>.</p>

<p>This study aims to understand how people feel about money and time. 
It consists of 28 choice tasks and will take about 15 minutes to complete.
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
Each row of a table has two options, labeled as <span style='color:#2262c9'>Option A</span> and 
<span style='color:#2262c9'>Option B</span>.
These options offer different amounts of money at different points in time. 
You should choose the option you prefer. 
</p>

<p>
These amounts are hypothetical, but we want you to imagine how you would 
act in real-life situations and make choices based on that.
</p>

<p>
This page contains an example task. You can try it out yourself.
</p>
`
const instructions_1 = `
<p>
<span style='color:#2262c9'>You do not have to click through all rows.</span> 
You only need to click an option in the row where you switch from choosing option B to choosing Option A. 
We will automatically complete the choices on the rest of the rows for you. 
</p>

<p>
After you have made a choice, some rows will unfold between the two rows where you switched your preference. 
You need to make another choice on the newly unfolded rows.
</p>

<p>
Click "Continue" to see the details of the table.
</p>
`


// Example with Tips
const tipText = [
`(1/5) Option A offers you a sum of money on a single date. This amount varies from row to row.`,
`(2/5) Under Option B, you would receive two different amounts on two different dates. 
This option is constant across rows.`,
`(3/5) If you click Option A in this row, it means you prefer Option A to Option B 
for all rows <span style="font-weight: bold">below</span> this (including this row).`,
`(4/5) If you click Option B in this row, it means you prefer Option B to Option A 
for all rows <span style="font-weight: bold">above</span> this (including this row).`,
`(5/5) You can also choose Option A on all rows (or choose Option B on all rows).`
]

const tryChoiceText = "Now, you can try to make your own choice."

const choiceIndicationText = 'The choice indicates that you'

const changeChoiceText = 'You can always change your choice before you click "Next".'

// const confirmOptions = ['Yes &rarr; Click "Confirm" to precede to the next page. ',
//                         'No &rarr; I want to redo my choices.']


// Practice Tasks
const trainIntro = `
<p>
Now, there will be three practice tasks.
</p>

<p>
Each practice task will be followed by an additional question about the choice you made.
These questions aim to check your comprehension on the tasks.
Please try your best to answer the questions correctly.
</p>

<p>
Once you complete all practice tasks, you can proceed to the formal tasks.
</p>

<p>
Please click "Next" to start the practice.
</p>
`
const comprehensionQuestionText = `
    (<span style='font-weight:bold'>Comprehension Check</span>) What do you mean by your choice? 
    <p>After answering this question, click "Confirm" to proceed.</p>
`

// Intro to Intertemporal Choice Tasks
const intertemporalIntro = `
<p>
Starting from the next page, you will see 20 choice tasks. 
These tasks follow the same format as the practice tasks.
</p>

<p>
Please think carefully about each task and choose the options that 
<span style="font-weight:bold">truly reflect your preferences</span>. 
</p>

<p>
After each task, there will be a question asking you how certain you are that
the choice you have made truly reflects your preference. Below is an
example of this question (you can try it out yourself):
</p>

<div id='confidenceExample'></div>

<p>
We will no longer ask the comprehension check question or provide the reminder for each task. 
Please also note that clicking "Next" means you are ready to submit your choices.
</p>

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

    <div id="switchRowContainer">
        Switch Row:<span id="switchRow"></span>
    </div>
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
    You only need to click an option in the row where you switch from choosing option B to choosing Option A. 
    If you click Option B in a row, we assume you will choose Option B for any row above that row. 
    If you click Option A in a row, we assume you will choose Option A for any row below that row. 
    After one click, some rows may unfold so you may need to make another choice. </p>
    
    <span id='qNumber'></span> Which option would you prefer in each row?
    <div id='error-intertemporal' class='error-message'></div>
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
Before this survey ends, please complete four additional choice tasks to help us understand how you feel about 
<span style='font-weight:bold'>taking risks</span>. 
These tasks follow the same format as the previous tasks. 
</p>

<p>
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
    
    Which option would you prefer in each row?
    `


// Error Message
const error_consentForm = "* Please check all boxes if you agree to participate in this study."
const error_intertemporalChoice = "* Please complete all choices before proceeding."
const error_confirmCheck = "* Please answer this question."
const error_tips = "* Please read through the instructions."
// const error_redoChoice = "* Please redo your choices before proceeding."


// Choice meaning
function choiceMeaning(frontAmount,backAmount,seqLength,condition,upperAmount,lowerAmount){
    
    const itemStyle = "color:#ff0040;display: inline-block;"
    const singeDate = (condition === 'front-align')?'today':`in ${seqLength}`;

    if(upperAmount === 0){
        const choiceMeaningText = `
                value <span style=${itemStyle}>£${frontAmount} today and £${backAmount} in ${seqLength}</span> 
                somewhere below <span style=${itemStyle}>£${upperAmount} ${singeDate}</span>
                `
        return(choiceMeaningText)
    } else if(upperAmount > maxRowNumber*amountBreak){
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


function unfoldRange(upperAmount,lowerAmount){
    const itemStyle = "color:#ff0040;display: inline-block;"
    const anotherChoiceText = `
        The range <span style=${itemStyle}>£${lowerAmount} today</span> to 
        <span style=${itemStyle}>£${upperAmount} today</span> in Option A has now unfolded. 
        Please make another choice in this more precise range.
        `
    return(anotherChoiceText)
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


