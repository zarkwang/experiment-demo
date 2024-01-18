
// Consent Form
const welcomeInfo = `
<p>Thanks for your interest in the <span style="font-weight:bold">Money and Time Preference Survey</span>.</p>

<p>This survey consists of 18 questions. 
It will take about 7 minutes to complete the survey.  
</p>

<p>Please consider each question carefully and answer it based on your actual preference. 
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


// Error Message
const error_consentForm = "* Please check all boxes if you agree to participate in this study."
const error_consistency = "* Please answer this question before proceeding."
const error_enter = "* Please enter a number greater than 0."
const error_next = `After completing this question, press the "Enter" key or click "Next" to proceed.`



const consistencyIntro = `
<h3> Instruction </h3>

<p>
This study consists of two parts. Part 1 contains 4 choice questions.
</p>

<p>
Each question has two options. 
Each option offers you two different amounts of money on two different dates. 
You should choose the option you prefer.
</p>

<p>
These amounts are hypothetical, but we want you to imagine how you would act 
in real-life situations and make choices based on that. 
Please read each question carefully, and choose the option that truly reflects your preference.
</p>

<p> 
You can click "Next" to start Part 1. 
</p>
`


const consistencyPage = `
<p class='error-message' style='color:gray'> <span id='qNumber'></span>
</p>
<p> Which option do you prefer?</p>

<input type="radio" name="consistency" id="consistency_a">
<label for="consistency_1"> 
receive <span id='payoff_a1' style='color:MediumBlue'></span> 
    and <span id='payoff_a2' style='color:MediumBlue'></span>
</label><br>

<br>
        
<input type="radio" name="consistency" id="consistency_b">
<label for="consistency_2"> 
receive <span id='payoff_b1' style='color:MediumBlue'></span> 
    and <span id='payoff_b2'style ='color:MediumBlue'></span>
</label><br>

<br>

<div id='error-enter' class='error-message'></div>
`



const enterIntro = `
<p>
Now, you are into Part 2 of this survey. This part contains 14 blank filling questions.
</p>

<p>
In each question, you will see two options - Option A and Option B. 
These options follow the same format as Part 1. 
However, Option B contains an unknown number <span style='font-weight:bold'>X</span>. 
You should identify which level of <span style='font-weight:bold'>X</span>
would make you <span style='color:#c74040'>value the two options equally</span>. 

<p>
Below is an example question (you can try it out):
</p>

<div id='pairExample' class='example-div'></div>

<p>
Please read each question carefully, and fill in the amount that truly reflect your preferences.
</p>

<p>
You can click "Next" to start Part 2.
</p>
`


const pairValueTime = `
<p class='error-message' style='color:gray'> <span id='qNumber'></span>

</p>

  <table id='pair-value-table'>
    <tr>
      <th>Option A</th>
      <td>
        <div id='optionA'>
        receive <div id='payoff_a1' class='payoff_front'></div> and <div id='payoff_a2' class='payoff_back'>
        </div>
      </td>
    </tr>
    <tr>
      <th>Option B</th>
      <td>
        <div id='optionB'>
        receive <div id='payoff_b1' class='payoff_front'></div> and <div id='payoff_b2' class='payoff_back'></div>
        </div>
      </td>
    </tr>
  </table>

  <p> What is the smallest amount for <span style='font-weight:bold'>X</span> that would make you 
  prefer Option B at least as much as Option A? </p>
  <p>Your answer: <input type="text" id="userAnswer" placeholder="Fill in amount" autocomplete="off" style='font-size:16px'></p>
  <div id='error-enter' class='error-message'></div>
`

