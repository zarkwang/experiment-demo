
import { rand } from "./lib/utils.js";


// Generate stimuli for main tasks
const stimuliNumber = 14;

const seqLengthList = ['6 months','12 months'];

const amountVaryFront = [
    {"front_amount": 25, "backend_amount": 60},
    {"front_amount": 105, "backend_amount": 60},
    {"front_amount": 185, "backend_amount": 60},
    {"front_amount": 265, "backend_amount": 60},
    {"front_amount": 345, "backend_amount": 60},
    {"front_amount": 425, "backend_amount": 60},
    {"front_amount": 505, "backend_amount": 60},
    ]


const fullStimuli = configAllStimuli(amountVaryFront,seqLengthList)

const drawnStimuli = drawRandStimuli(stimuliNumber, fullStimuli)

// Generate stimuli for consistency check tasks
const amountForCheck = [
    {"front_amount": 25, "backend_amount": 60, 'single_amount': 100},
    {"front_amount": 185, "backend_amount": 60,'single_amount': 300},
    {"front_amount": 345, "backend_amount": 60,'single_amount': 345},
    {"front_amount": 505, "backend_amount": 60,'single_amount': 505},
    ]



// Function to generate the full stimuli array
function configAllStimuli(amountArray,seqLengthList){
    let stimuliArray = [];
    let i, j;

    for(i = 0; i < seqLengthList.length; i++){
        for(j = 0; j < amountArray.length; j++){
            let stimulus = {};
            stimulus['q_id'] = i+ j*seqLengthList.length;
            stimulus['seq_length'] = seqLengthList[i];
            stimulus = Object.assign({}, stimulus, amountArray[j]);
            stimuliArray.push(stimulus);
        }
    }
    return(stimuliArray);
};


// Function to randomly draw stimuli from the full stimuli array
function drawRandStimuli(stimuliNumber,stimuliArray){

    let qID = rand(stimuliNumber,stimuliArray.length-1);
    let stimuliDrawn = qID.map(qID => stimuliArray[qID]);
    return(stimuliDrawn)
};


export {drawnStimuli,amountForCheck,seqLengthList}