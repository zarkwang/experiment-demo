
// Consent Form
const welcomeInfo = `
<p>Thanks for your interest in <span style="font-weight:bold">Money and Time Preference Survey</span>.</p>

<p>This survey aims to understand how people feel about money and time. 
It consists of 28 choice tasks. Each task contains several individual choices. 
Please consider each task carefully and choose the options that truly reflect your preferences.</p>

<p>The survey will take about 15 minutes to complete. 
After completion, you will receive £2 as a token of appreciation for your participation. 
We strongly recommend that you complete the survey on a desktop device. 
Your answers will remain confidential and will only be used for research purposes.</p>

<p>Please note your decision to participate in this survey is voluntary. 
You are free to withdraw at any time simply by closing the web page.</p>

<p>The data collected from this survey will be used to write an academic paper. 
Should you have any further questions about the present study, 
please contact Zijian Wang (zijian.wang.1@warwick.ac.uk). 
You may also contact the University of Warwick Research and Impact Services, University House, 
University of Warwick, Coventry, CV4 8UW, UK. 02476575732 if you wish to make a complaint about the research.</p>

<p>If you agree to participate, please tick all the boxes below, then click “Next” to start the survey:</p>
`

const consentQuestion = [
    `I confirm that I have read and understand the information for the present study.`,
    `I understand that my participation is voluntary and that 
    I am free to withdraw at any time without giving any reason.`,
    `I agree to take part in the present study.`,
    `I am happy for my anonymized data to be used in future research.`
]


// Instruction
const instructions = `
<p>
In this survey, many tasks will be presented in the form of tables.
</p>

<p>
Each row of these tables contains two options, labeled as Option A and Option B. 
These options offer different amounts of money at different points in time. 
You should choose the option you prefer. 
</p>

<p>
In each table, you do not have to click through all rows. 
You only need to click an option in the row where you switch from choosing option B to choosing Option A. 
If you choose Option B in a row, we assume you will choose Option B for any row above that row. 
If you choose Option A in a row, we assume you will choose Option A for any row below that row. 
We will automatically complete the choices on the rest of the rows for you. 
</p>

<p>
After you have made a choice, some rows will unfold between the two rows where you switched your preference. 
You need to make another choice on the newly unfolded rows. 
You can also choose Option A on all rows, or choose Option B on all rows.
</p>

<p>
The next page contains an example task. You can try it out yourself.
</p>
    `


// Example with Tips
const tipText = [
`Option A offers you a sum of money in a single date. This amount varies from row to row.`,
`Under Option B, you could receive two different amounts in two different dates. 
This option is constant across rows.`,
`If you click Option A in this row, it means you prefer Option A to Option B 
for all rows <span style="font-weight: bold">below</span> this (including this row).`,
`If you click Option B in this row, it means you prefer Option B to Option A 
for all rows <span style="font-weight: bold">above</span> this (including this row).`
]

const tryChoiceText = "You can try to make your own choice. Some rows may unfold after that."

const choiceIndicationText = 'The choice you made indicates that you'

const anotherChoiceText = 'Please make another choice.'

const changeChoiceText = 'You can always change your choice before you click "Next".'

// const confirmOptions = ['Yes &rarr; Click "Confirm" to precede to the next page. ',
//                         'No &rarr; I want to redo my choices.']


// Practice Tasks
const trainIntro = `
<p>
To make sure that you correctly understand the rules of this survey, we set up 3 practice tasks for you.
</p>

<p>
Each practice task will be followed with an additional question to check your comprehension on the choice
you have made. Please try your best to answer these questions correctly.
</p>

<p>
Note in subsequent tasks, clicking "Next" means you are ready to submit your choices. 
Please make sure that your choice is final before clicking "Next" on each page.
</p>

<p>
Once you complete all practice tasks, you can proceed to the formal tasks.
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
<span style="font-weight:bold">truly reflects your preferences</span>. 
</p>

<p>
After each task, there will be a question asking you how certain you are that
the choice that you have made truly reflects your preference. The below is an
example of this question (you can try it out yourself):
</p>

<div id='confidenceExample'></div>

<p>
In the subsequent tasks, we will not check your comprehension about your choices. 
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
    <span style="font-weight: bold">Note:</span>
    You only need to click an option in the row where you switch from choosing option B to choosing Option A. 
    If you click Option B in a row, we assume you will choose Option B for any row above that row. 
    If you click Option A in a row, we assume you will choose Option A for any row below that row. 
    After one click, some rows could unfold so you may need to make another choice. </p>
    
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
Thanks for your responses!
</p>

<p>
Before this survey ends, please complete 4 choice tasks to help us understand how you feel about 
<span style='font-weight:bold'>taking risks</span>. 
These tasks are the same as the previous tasks in format. 
</p>

<p>
On each row of a task, you can choose whether to get a small amount of money with certainty or 
a large amount with some probability. 
</p>

<p>
Please select the options that truly reflect your preferences.
</p>
`
// Risky Choice Question
const riskyQuestionText = `
    <p id="notice">
    <span style="font-weight: bold">Note:</span>
    You only need to click an option in the row where you switch from choosing option B to choosing Option A. 
    If you click Option B in a row, we assume you will choose Option B for any row above that row. 
    If you click Option A in a row, we assume you will choose Option A for any row below that row. 
    After one click, some rows could unfold so you may need to make another choice.
    </p>

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


