const amountBreak = 4;
const toggleRowNumber = 15;
const maxRowNumber = toggleRowNumber**2;
const maxRowAmount = maxRowNumber*amountBreak;
const extendBreak = toggleRowNumber;

const dateColor = 'color:#11439e'


var amountList = optionAmounts();
var clickedOptionType,clickedAmount,clickedConfirm,allChoicesChecked;
var currentRow = 0;

function updateCurrentRow(){
    if(clickedAmount < maxRowAmount){
        currentRow = clickedAmount/amountBreak;
    } else if(clickedAmount >= maxRowAmount){
        currentRow = maxRowNumber+(clickedAmount - maxRowAmount)/extendBreak;
    }
}
// Function to generate the options in the choice list
function optionAmounts(){
    var amountList = [];
    for (var x = 0; x <= maxRowNumber; x++) {
            amountList.push(amountBreak*x);
    }
    for (var x = 1; x < toggleRowNumber; x++) {
            amountList.push(amountBreak*maxRowNumber + extendBreak*x);
    }
    return(amountList)
}

function intertemporalOptions(seqLength,condition){
    var optionList = [];

    for (var x = 0; x <= amountList.length-1; x++) {
        if (condition === "front-align"){
            optionList.push("£" + amountList[x] + ` <span style=${dateColor}>today</span>`);
        } else if (condition === "back-align") {
            optionList.push("£" + amountList[x] + ` <span style=${dateColor}>in ` + seqLength +'</span>');
        }
    }
    return(optionList);   
}

function certaintyOptions(){
    var optionAList = [];
    
    for (var x = 0; x <= amountList.length-1; x++) {
            optionAList.push("get £" + amountList[x] + " with certainty");
    }
    return(optionAList);   
}

function sequenceContent(frontAmount,backAmount,seqLength){
    // <p style='text-indent:-80%;transform:translateY(100%);text-decoration:underline'>
    // receive:
    // </p>
    const sequenceOption = `
                <div class='card' id='card1'> 
                    <div id='cardContent1'></br> £${frontAmount}</br> 
                    <span style=${dateColor}>today</span></div>
                </div> 
                    and
                <div class='card' id='card2'> 
                    <div id='cardContent2'></br> £${backAmount}</br> 
                    <span style=${dateColor}>in ${seqLength}</span></div>
                </div>
    `
    return(sequenceOption);
}


function genOptionA(content){
    var optionACell = document.createElement("td");
    var optionDiv = document.createElement("div");

    optionACell.rowSpan = maxRowNumber +1;
    optionACell.style.width = "320px";
    optionDiv.id = "constantOption";
    optionACell.style.transform = "translateY(-10%)";

    if (optionDiv) {
        optionDiv.innerHTML = content; 
    }

    optionACell.appendChild(optionDiv);
    return(optionACell);
}

function generatePriceList(optionAContent,optionBContent) {

    var table = document.getElementById("priceListTable");
    for (var x = 0; x <= amountList.length-1; x++) {
        var row = document.createElement("tr");

        if (x === 0) {
            var optionACell = genOptionA(optionAContent);
            row.appendChild(optionACell);
        } 

        var choiceCell = document.createElement("td");
        var radioContainer = document.createElement("div");
        radioContainer.className = "radio-container";

        var optionARadio = document.createElement("input");
        optionARadio.type = "radio";
        optionARadio.name = "choice_" + amountList[x];
        optionARadio.value = "Option A";
        optionARadio.id = "optionA_" + amountList[x];
        optionARadio.addEventListener("click", function () {

            clickedOptionType = "A";
            clickedAmount = parseInt(this.id.split("_")[1]);
            updateCurrentRow();

            // Automatically check "Option A" buttons below and "Option B" buttons above
            for (var i = 0; i <= currentRow; i++) {
                var optionABtn = document.getElementById("optionA_" + amountList[i]);
                if (optionABtn) {
                    optionABtn.checked = true;
                }
            }
            for (var j = currentRow+1; j <= amountList.length; j++) {
                var optionBBtn = document.getElementById("optionB_" + amountList[j]);
                if (optionBBtn) {
                    optionBBtn.checked = true;
                }
            }

            // if(clickedAmount % (toggleRowNumber*amountBreak) == 0){
            //     var confirmDiv = document.getElementById('confirmContainer');
            //     confirmDiv.style.display = "inline-block";
            //     confirmDiv.style.transform = `translateY(${(currentRow-1)*4.2}px)`
            // }
            // Automatically click the "Show/Hide Rows" button
            // if (currentRow % toggleRowNumber == 0 && currentRow >= 0){
            //     setTimeout(function() {
            //         toggleHiddenRows(currentRow+1,currentRow+toggleRowNumber-1);
            //         // hideRows(2,currentRow)
            //     }, 200)
            // }
        });

        var optionBRadio = document.createElement("input");
        optionBRadio.type = "radio";
        optionBRadio.name = "choice_" + amountList[x];
        optionBRadio.value = "Option B";
        optionBRadio.id = "optionB_" + amountList[x];
        optionBRadio.style = "margin-left:20px"
        optionBRadio.addEventListener("click", function () {

            clickedOptionType = "B";
            clickedAmount = parseInt(this.id.split("_")[1]);
            updateCurrentRow();

            // Automatically check "Option A" buttons below and "Option B" buttons above
            for (var i = 0; i < currentRow; i++) {
                var optionABtn = document.getElementById("optionA_" + amountList[i]);
                if (optionABtn) {
                    optionABtn.checked = true;
                }
            }
            for (var j = currentRow; j <= amountList.length; j++) {
                var optionBBtn = document.getElementById("optionB_" + amountList[j]);
                if (optionBBtn) {
                    optionBBtn.checked = true;
                }
            }

            // if(clickedAmount % (toggleRowNumber*amountBreak) == 0){
            //     var confirmDiv = document.getElementById('confirmContainer');
            //     confirmDiv.style.display = "inline-block";
            //     confirmDiv.style.transform = `translateY(${(currentRow-1)*4.2}px)`
            // }
            // Automatically click the "Show/Hide Rows" button
            // if (currentRow % toggleRowNumber == 0 && currentRow >= 0){
            //     setTimeout(function() {
            //         toggleHiddenRows(currentRow-toggleRowNumber+1,currentRow-1);
            //         // hideRows(currentRow+2,maxRowNumber+1)
            //       }, 200)
            // };
        });

        var optionAButton = document.createElement("label");
        optionAButton.textContent = "Option A";
        optionAButton.htmlFor = "optionAButton_" + amountList[x];

        var optionBButton = document.createElement("label");
        optionBButton.textContent = "Option B";
        optionBButton.htmlFor = "optionBButton_" + amountList[x];

        var optionBCell = document.createElement("td");
        optionBCell.innerHTML = optionBContent[x];
        // optionBCell.style.width = '130px';

        radioContainer.appendChild(optionARadio);
        radioContainer.appendChild(optionAButton);
        radioContainer.appendChild(optionBRadio);
        radioContainer.appendChild(optionBButton);
        choiceCell.appendChild(radioContainer);
        row.appendChild(choiceCell);
        row.appendChild(optionBCell);
        table.appendChild(row);
    }

    var rowWithoutBorder = 1;
    while(rowWithoutBorder < maxRowNumber){
        removeBorder(table,rowWithoutBorder,rowWithoutBorder+toggleRowNumber-2);
        rowWithoutBorder+=toggleRowNumber;
    }
    removeBorder(table,maxRowNumber+1,maxRowNumber+toggleRowNumber-1);

    var nextButton = document.getElementById('nextButton');
    addConfirmBtn(nextButton);
    document.addEventListener("DOMContentLoaded", function(){
        clickedConfirm = false;
    });
    document.getElementById('optionB_0').disabled = true;
};


// Function to unfold hidden rows within a specific range
function toggleHiddenRows(start, end) {
    hideRowsInitial();

    var table = document.getElementById("priceListTable");
    for (var x = start; x <= end; x++) {
        var row = table.getElementsByTagName('tr')[x];
        if (row) {
            var isHidden = row.style.display === "none";
            row.style.display = isHidden ? "table-row" : "none";
            
            // Un-check the radios
            var radios = row.querySelectorAll("input[type='radio']");
            radios.forEach(function (radio) {
                radio.checked = false;
            });
        }   
    }
}

// Function to initially hide the rows
function hideRowsInitial() {
    var rowToHide;

    for (var x = 1; x <= amountList.length; x++) {
        if ((x-1) % toggleRowNumber !== 0 || x>maxRowNumber+1) {
            rowToHide = document.getElementsByTagName("tr")[x];
            if (rowToHide) {
                rowToHide.style.display = "none";
            }
        }
    }
}

// Function to add a confirmation button
function addConfirmBtn(confirmButton){
    // var confirmDiv = document.getElementById('confirmContainer');
    // confirmDiv.innerHTML =`
    //     <div id='button-triangle'></div>
    //     <button id='choice-confirm'>Confirm</button>
    //     `
    // var confirmButton = document.getElementById('choice-confirm');
    
    confirmButton.addEventListener("click", function () {

        if(!clickedConfirm){
        // confirmDiv.style.display = "none";
            if(clickedOptionType === 'A'){
                if (currentRow % toggleRowNumber == 0 && currentRow >= 0){
                        hideRows(currentRow+2+toggleRowNumber,maxRowNumber+1);
                        hideRows(1,currentRow-1);
                        disableRangeRows()
                        setTimeout(function(){
                            toggleHiddenRows(currentRow+1,currentRow+toggleRowNumber-1);
                            clickedConfirm = true;
                        },200);
                }
            } else if(clickedOptionType === 'B'){
                if (currentRow % toggleRowNumber == 0 && currentRow >= 0){
                        hideRows(currentRow+2,maxRowNumber+1);
                        hideRows(1,currentRow-toggleRowNumber);
                        disableRangeRows()
                        setTimeout(function(){
                            toggleHiddenRows(currentRow-toggleRowNumber+1,currentRow-1);
                            clickedConfirm = true;
                        },200);      
                };
            }
        }
    });
}


function disableRangeRows(){
    if(clickedOptionType === 'A'){
        var inputLower = document.querySelectorAll(`input[name=choice_${clickedAmount}]`);
        var inputUpper = document.querySelectorAll(`input[name=choice_${amountList[currentRow+toggleRowNumber]}]`);
    }
    if(clickedOptionType === 'B'){
            var inputLower = document.querySelectorAll(`input[name=choice_${clickedAmount}]`);
            var inputUpper = document.querySelectorAll(`input[name=choice_${amountList[currentRow-toggleRowNumber]}]`);
    }
    inputLower.forEach(function(input) {input.disabled = true;});
    inputUpper.forEach(function(input) {input.disabled = true;});
}

function returnError(error_msg){
    allChoicesChecked = true;
    for (let x = 0; x < amountList.length; x++) {
        const choiceChecked = $('input[name="choice_'+amountList[x] +'"]:checked').val();
        if (!choiceChecked) {
            allChoicesChecked = false;
            $('#error-choicelist').html(error_msg);
        break; 
        } 
    }
}

// Function to hide the rows between specific amount numbers
function hideRows(start,end) {
    var startRow;

    if(end <= start){ return; }

    if(start === 1){
        var firstRowToHide = document.getElementsByTagName("tr")[1];
        firstRowToHide.cells[1].style.display = "none";
        firstRowToHide.cells[2].style.display = "none";
        startRow = 2; 
    } else {
        startRow = start;
    }

    for (var x = startRow; x <= end; x++) {
            var rowToHide = document.getElementsByTagName("tr")[x];
            if (rowToHide) {
                rowToHide.style.display = "none";
            }
        }
}

// Remove border
function removeBorder(table,startRow, endRow) {
    var rows = table.getElementsByTagName("tr"); 

    for (var i = startRow; i <= endRow; i++) {
        var cells = rows[i].getElementsByTagName("td"); 
        for (var j = 0; j < cells.length; j++) {
            cells[j].style.borderBottom = "none";
            cells[j].style.borderTop = "none"; 
        }
    }
}


function hideTip(tipNumber) {
    $('#step_' + tipNumber).hide();
    $('#triangle_' + tipNumber).hide();
    $('#popover_' +tipNumber).hide();
    $('#popContent_' +tipNumber).hide();
    $('#tipButton_' +tipNumber).hide();
    $('#error-intertemporal').hide();
}

function showTip(tipNumber) {
    if(tipNumber >= 1){
    $('#popContent_' +tipNumber).html(tipText[tipNumber-1])
    }
    $('#step_' + tipNumber).show();
    $('#triangle_' + tipNumber).show();
    $('#popover_' +tipNumber).show();
    $('#popContent_' +tipNumber).show();
    $('#tipButton_' +tipNumber).show();
}

function nextTip() {
    let tipNumber = parseInt($(this).attr('id').replace(/\D/g, ''));
    
    hideTip(tipNumber);
    showTip(tipNumber+1);
}


function generateConfidenceQuestion(question,style){

    var questionContent = document.getElementById('confidenceQuestionContent');
    var sliderContainer = document.querySelector('.slider-container');
    var slider = document.getElementById('confidence-scale');
    var answer = document.getElementById('confidenceAnswer');

    questionContent.innerHTML = question;
    style.innerHTML = `
            .slider::-webkit-slider-thumb {
                opacity: 0; /* Initially hide the thumb */
            }; 
        `

    for (var i = 0; i <= 10; i++) {
    var tick = document.createElement('div');
    tick.className = 'tick';
    tick.style.left = (0.5 + i * 9.95) + '%';
    sliderContainer.appendChild(tick);

    var tickLabel = document.createElement('div');
    tickLabel.className = 'tick-label';
    tickLabel.innerText = (i * 10) + '%';
    tickLabel.style.left = (0.5 + i * 9.95) + '%';
    sliderContainer.appendChild(tickLabel);
    };    

    slider.addEventListener('input', function() {
        style.innerHTML = `
            .slider::-webkit-slider-thumb {
                opacity: 1;
                transition: opacity 0.2s;
            }; 
        `
        answer.innerText = this.value;
  });
}

//Function to update the list of clicked button IDs
// function updateClickedButtonsList() {
//     var clickedButtonsList = document.getElementById("clickedButtonsList");
//     clickedButtonsList.innerHTML = "";
//     clickedButtonIds.forEach(function (id) {
//         var listItem = document.createElement("li");
//         listItem.textContent = id;
//         clickedButtonsList.appendChild(listItem);
//     });
// }


// Dynamically create buttons for specific ranges
// var buttonContainer = document.getElementById("buttonContainer");
// for (var i = 1; i <= maxRowNumber; i += 10) {
//     let start = i;
//     let end = i + 8;
//     var button = document.createElement("button");
//     button.id = "showHideButton_" + start + "-" + end; // Unique ID for each button
//     button.textContent = "Show/Hide Rows " + start + "-" + end;
//     button.addEventListener("click", function () {
//         toggleHiddenRows(start, end);
//     });
//     buttonContainer.appendChild(button);
// };


// function generateConfidenceQuestion(question){

//     const questionContent = document.getElementById('confidenceQuestionContent');
//     const form = document.getElementById("confidenceForm");

//     questionContent.innerHTML = question;

//     confidenceLevels.forEach((level, index) => {
//         const listItem = document.createElement('ul');
//         const radioBtn = document.createElement('input');

//         radioBtn.type = 'radio';
//         radioBtn.id = 'level' + index;
//         radioBtn.name = 'confidenceLevel';
//         radioBtn.value = level;

//         const label = document.createElement('label');
//         label.htmlFor = 'level' + index;
//         label.appendChild(document.createTextNode(level));

//         listItem.appendChild(radioBtn); 
//         listItem.appendChild(label); 
//         form.appendChild(listItem); 
//     });
// }
