
// Consent Form
const welcomeInfo = `
<p>Thanks for your interest in Money and Time Preference Survey.</p>

<p>This survey aims to understand how people feel about money and time. 
It consists of XX choice tasks. Each task contains several individual choices. 
Please consider each task carefully and choose the options that truly reflect your preferences.</p>

<p>The survey will take about 13 minutes to complete. 
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
const instructionText = `
<p>
In this survey, many tasks will be presented in form of tables.
</p>

<p>
Each row of these tables contains two options, labelled as Option A and Option B. 
These options offer different amounts of money at different points in time. 
You should choose the option you prefer. 
</p>

<p>
In each table, you do not have to click through all rows. 
You only need to click an option on the row where you switch from choosing option B to choosing Option A. 
If you choose Option B in a row, we assume you will choose Option B for any row above that row. 
If you choose Option A in a row, we assume you will choose Option A for any row below that row. 
We will automatically complete the choices on the rest of rows for you. 
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
`Option A offers you a sum of money in a single date. The amount varies from row to row.`,
`Under Option B, you could receive two different amounts in two different dates. 
This option is constant across rows.`,
`If you click Option A on this row, it means you prefer Option A to Option B 
for all rows <span style="font-weight: bold">below</span> this (including this row).`,
`If you click Option B on this row, it means you prefer Option B to Option A 
for all rows <span style="font-weight: bold">above</span> this (including this row).`
]

const tryChoiceText = "You can try to make your own choice. Some rows may unfold after that."

const anotherChoiceText = "Please make another choice."

const changeChoiceText = 'You can always change your choice before you click "Next".'

const confirmOptions = ['Yes &rarr; Click "Confirm" to precede to the next page. ',
                        'No &rarr; I want to redo my choices.']


// Practice Tasks
const trainIntroText = `
<p>
Before the formal tasks begin, we set up 3 practice tasks for you.
</p>

<p>
After each practice task, there is an question to check whether you have correctly comprehend the rules of the survey. 
Please try to answer these questions correctly.
</p>

<p>
Note in the following tasks, clicking "Next" means you are ready to submit your choices. Please make sure that
your choice is final before clicking "Next" on each page (you will not be able to redo the choices).
</p>

<p>
Please click "Next" to start the practice.
</p>
`
const comprehensionQuestionText = `
    (<span style='font-weight:bold'>Comprehension Check</span>) What do you mean by your choice?
`

// Intro to Intertemporal Choice Tasks
const intertemporalIntroText = `
<p>
Starting from the next page, you will see XX formal tasks consecutively presented in the same format as the practice tasks.
</p>

<p>
Please think carefully about each task and choose the options that truly reflects your preferences. 
</p>

<p>
In the formal tasks, we will not let you confirm your choice or check your comprehension about the rules.
Instead, after each task there will be a question asking you to rate how sure you are about your preference.
</p>

<p>
In these tasks, clicking "Next" means you are ready to submit your choices. Please make sure that
your choice is final before clicking "Next" on each page.
</p>

<p>
Please click "Next" to start the formal tasks.
</p>
`

// Page Setting for Intertemporal Choice Task and Confidence Check
const pageIteration = ['intertemporal-choice','confidence-check']

const intertemporalChoicePage = `
    <div id='intertemporalQuestionContent'></div>
    <div id='error-intertemporal' class='error-message'></div>
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
        <h2>Switch Row:<span id="switchRow"></span></h2>
    </div>
`

const confidenceCheckPage = `
    <div id="confidenceQuestionBlock">
        <div id='error-confidence' class='error-message'></div>
        <div id="confidenceQuestionContent"></div>
        <form id="confidenceForm">
    </div>
`

// Text for Intertemporal Choice Task
const intertemporalQuestionText = `
    <p id="notice">
    <span style="font-weight: bold">Note:</span>
    You only need to click an option on the row where you switch from choosing option B to choosing Option A. 
    If you click Option B in a row, we assume you will choose Option B for any row above that row. 
    If you click Option A in a row, we assume you will choose Option A for any row below that row. 
    After one click, some rows could unfold so you may need to make another choice. </p>
    
    Which option would you prefer in each row?
    `

// Text for Confidence Check
const confidenceQuestionText = "How sure are you that you"

const confidenceLevels = ["Totally not sure", 
                         "Slightly sure", 
                         "Moderately sure", 
                         "Quite Sure", 
                         "Absolutely sure"]


// Intro to Risky Choices
const riskyIntroText = `
<p>
Thanks for your responses!
</p>

<p>
Before the survey ends, please complete 3 choice tasks to help us understand how you feel about taking risks. 
These tasks are the same as the previous tasks in format. 
On each row of a task, you can choose whether to get a small amount with certainty or a large amount with some probability. 
</p>

<p>
In each task, you only need to make one choice. 
You only need to click an option on the row where you switch your preference. 
The rest of rows will be completed automatically. 
Please select the row and option that truly reflect your preferences.
</p>
`

// Risky Choice Page
const riskyChoicePage = `
    <div id='riskyQuestionContent'></div>
    <div id='error-risky' class='error-message'></div>
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
        <h2>Switch Row:<span id="switchRow"></span></h2>
    </div>
`

const riskyQuestionText = `
    <p id="notice">
    <span style="font-weight: bold">Note:</span>
    You only need to click an option on the row where you switch from choosing option B to choosing Option A. 
    If you click Option B in a row, we assume you will choose Option B for any row above that row. 
    If you click Option A in a row, we assume you will choose Option A for any row below that row. 
    </p>

    <p>
    Imagine that you can get either a large amount of money with a 50% chance or 
    a small amount of money with certainty.
    </p>
    
    Which option would you prefer in each row?
    `


// Error Message
const error_consentForm = "* Please check all boxes if you argee to participate this study."
const error_intertemporalChoice = "* Please complete all choices before proceeding."
const error_confirmCheck = "* Please select an option before proceeding."
const error_redoChoice = "* Please redo your choices before proceeding."





