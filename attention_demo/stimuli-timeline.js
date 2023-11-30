
import { rand,addCheckboxes } from "./lib/utils.js";


const amount_frontVary = [
    {"front_amount": 40, "backend_amount": 40},
    {"front_amount": 80, "backend_amount": 40},
    {"front_amount": 120, "backend_amount": 40},
    {"front_amount": 160, "backend_amount": 40},
    {"front_amount": 200, "backend_amount": 40},
    {"front_amount": 80, "backend_amount": 80},
    {"front_amount": 120, "backend_amount": 80},
    {"front_amount": 160, "backend_amount": 80},
    {"front_amount": 200, "backend_amount": 80},
    ]

// (5+4)

const amount_backVary = [
    {"front_amount": 40, "backend_amount": 40},
    {"front_amount": 40, "backend_amount": 80},
    {"front_amount": 40, "backend_amount": 120},
    {"front_amount": 40, "backend_amount": 160},
    {"front_amount": 40, "backend_amount": 200},
    {"front_amount": 80, "backend_amount": 80},
    {"front_amount": 80, "backend_amount": 120},
    {"front_amount": 80, "backend_amount": 160},
    {"front_amount": 80, "backend_amount": 200},
    ]


const seqLengthList = ['1 month','9 months'];

const stimuliContext = {
    'nFrontAlign': 2,
    'nBackAlign': 2,
    'stimuli_frontAlign': fullStimuli('front-align',amount_frontVary,seqLengthList),
    'stimuli_backAlign': fullStimuli('back-align',amount_backVary,seqLengthList)
}


// Generate the full stimuli array
function fullStimuli(conditionName,amountArray,seqLengthList){
    let stimuliArray = [];
    let i, j;

    for(i = 0; i < amountArray.length; i++){
        for(j = 0; j < seqLengthList.length; j++){
            let stimulus = {'condition': conditionName};
            stimulus['q_id'] = i*seqLengthList.length + j;
            stimulus['seq_length'] = seqLengthList[j];
            stimulus = Object.assign({}, stimulus, amountArray[i]);
            stimuliArray.push(stimulus);
        }
    }
    return(stimuliArray);
};


// Randomly draw stimuli from each stimuli array
function drawStimuli(stimuliArray,n,seed){

    let qID = rand(n,stimuliArray.length,seed);
    let stimuliDrawn = qID.map(qID => stimuliArray[qID]);
    return(stimuliDrawn)
};


// Load current stimulus by index
function loadStimuli(stimuli,index){

    let qOrder = Math.floor(index/2);
    let presentStimulus = stimuli[qOrder];
    presentStimulus['q_present_order'] = qOrder;

    return(presentStimulus)
};


// Stimuli for practice tasks
const practiceStimuli = [
    {"train_id":0, "front_amount": 100, "backend_amount": 40, "seq_length": "12 months", "condition": "front-align"},
    {"train_id":1, "front_amount": 400, "backend_amount": 100, "seq_length": "3 months", "condition": "back-align"},
    {"train_id":2, "front_amount": 20, "backend_amount": 200, "seq_length": "6 months", "condition": "front-align"},
]


// Lotteris
const lotteries = [{'outcome':100, 'prob':'50%'},
                   {'outcome':300, 'prob':'50%'},
                   {'outcome':500, 'prob':'50%'},
                   {'outcome':700, 'prob':'50%'}
]

export {stimuliContext,practiceStimuli,lotteries,rand,drawStimuli,loadStimuli,addCheckboxes}