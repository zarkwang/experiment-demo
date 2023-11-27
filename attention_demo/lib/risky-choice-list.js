
const maxRowNumber = 12;
var amountBreak;

// Function to generate the risky choice list
function generatePriceList(risky_outcome,risky_prob) {

    //var sequenceText = "£" + frontAmount + " today and £" + backAmount + " in " + seqLength

    amountBreak = parseInt(risky_outcome / maxRowNumber) +1;

    var table = document.getElementById("priceListTable");
    for (var x = 0; x <= maxRowNumber; x++) {
        var row = document.createElement("tr");

        
        var optionACell = document.createElement("td");
        optionACell.textContent = "£" + amountBreak*x + " with certainty";
        
        row.appendChild(optionACell);

        var choiceCell = document.createElement("td");
        var radioContainer = document.createElement("div");
        radioContainer.className = "radio-container";

        var optionARadio = document.createElement("input");
        optionARadio.type = "radio";
        optionARadio.name = "choice_" + amountBreak*x;
        optionARadio.value = "Option A";
        optionARadio.id = "optionA_" + amountBreak*x;
        optionARadio.addEventListener("click", function () {
            
            // Automatically check "Option A" buttons below and "Option B" buttons above
            currentRow = parseInt(this.id.split("_")[1])/amountBreak;
            for (var i = 0; i < currentRow; i++) {
                var optionBBtn = document.getElementById("optionB_" + amountBreak*i);
                if (optionBBtn) {
                    optionBBtn.checked = true;
                }
            }
            for (var j = currentRow; j <= maxRowNumber; j++) {
                var optionABtn = document.getElementById("optionA_" + amountBreak*j);
                if (optionABtn) {
                    optionABtn.checked = true;
                }
            }

            updateSwtichRow(currentRow, 'A');
        });

        var optionBRadio = document.createElement("input");
        optionBRadio.type = "radio";
        optionBRadio.name = "choice_" + amountBreak*x;
        optionBRadio.value = "Option B";
        optionBRadio.id = "optionB_" + amountBreak*x;
        optionBRadio.style = "margin-left:20px"
        optionBRadio.addEventListener("click", function () {
           
            // Automatically check "Option A" buttons below and "Option B" buttons above
            currentRow = parseInt(this.id.split("_")[1])/amountBreak;
            for (var i = 0; i <= currentRow; i++) {
                var optionBBtn = document.getElementById("optionB_" + amountBreak*i);
                if (optionBBtn) {
                    optionBBtn.checked = true;
                }
            }
            for (var j = currentRow+1; j <= maxRowNumber; j++) {
                var optionABtn = document.getElementById("optionA_" + amountBreak*j);
                if (optionABtn) {
                    optionABtn.checked = true;
                }
            }

            updateSwtichRow(currentRow, 'B');
        });

        var optionAButton = document.createElement("label");
        optionAButton.textContent = "Option A";
        optionAButton.htmlFor = "optionAButton_" + amountBreak*x;

        var optionBButton = document.createElement("label");
        optionBButton.textContent = "Option B";
        optionBButton.htmlFor = "optionBButton_" + amountBreak*x;

        radioContainer.appendChild(optionARadio);
        radioContainer.appendChild(optionAButton);
        radioContainer.appendChild(optionBRadio);
        radioContainer.appendChild(optionBButton);
        choiceCell.appendChild(radioContainer);
        row.appendChild(choiceCell);


        if (x === 0) {
            var optionBCell = document.createElement("td");
            var optionBDiv = document.createElement("div");

            optionBDiv.id = "riskyOption";
            optionBCell.rowSpan = maxRowNumber +1;

            var seqContent = `£${risky_outcome} with a ${risky_prob} chance`;

            if (optionBDiv) {
                optionBDiv.innerHTML = seqContent; 
            }

            optionBCell.appendChild(optionBDiv);
            row.appendChild(optionBCell);
        }
        
        table.appendChild(row);
    }
};


// Show the swtich point: indifference point of option B for option A
function updateSwtichRow(row, option) {
    var switchRow = document.getElementById("switchRow");    
    if (switchRow) {
        if(option == 'A'){
            switchRow.innerHTML = amountBreak*row;
        } else if(option == 'B'){
            switchRow.innerHTML = amountBreak*(row+1)
        }
    }
}


// Lotteris
const lotteries = [{'outcome':100, 'prob':'50%'},
                   {'outcome':200, 'prob':'50%'},
                   {'outcome':400, 'prob':'50%'}
]