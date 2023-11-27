

// Generate n random numbers from 0 ~ max-1
export function rand(n, max, seed){
    let r = shuffle(max,seed).slice(0,n);
    return(r)
}

function shuffle(len,seed) {
    var a = Array.from({ length: len }, (_, index) => index)
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(mulberry32(seed*2023+i) * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
};

function mulberry32(seed) {
    var a = cyrb128('apple'+seed)[0];
    var t = a += 0x6D2B79F5;
      t = Math.imul(t ^ t >>> 15, t | 1);
      t ^= t + Math.imul(t ^ t >>> 7, t | 61);
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
};


function cyrb128(str) {
    let h1 = 1779033703, h2 = 3144134277,
        h3 = 1013904242, h4 = 2773480762;
    for (let i = 0, k; i < str.length; i++) {
        k = str.charCodeAt(i);
        h1 = h2 ^ Math.imul(h1 ^ k, 597399067);
        h2 = h3 ^ Math.imul(h2 ^ k, 2869860233);
        h3 = h4 ^ Math.imul(h3 ^ k, 951274213);
        h4 = h1 ^ Math.imul(h4 ^ k, 2716044179);
    }
    h1 = Math.imul(h3 ^ (h1 >>> 18), 597399067);
    h2 = Math.imul(h4 ^ (h2 >>> 22), 2869860233);
    h3 = Math.imul(h1 ^ (h3 >>> 17), 951274213);
    h4 = Math.imul(h2 ^ (h4 >>> 19), 2716044179);
    h1 ^= (h2 ^ h3 ^ h4), h2 ^= h1, h3 ^= h1, h4 ^= h1;
    return [h1>>>0, h2>>>0, h3>>>0, h4>>>0];
};


// Add multiple check boxes
export function addCheckboxes(containerID,labelArray) {
    
    const container = document.getElementById(containerID);

    for(var i = 0; i < labelArray.length; i++){

        // Create checkbox element
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = 'consent_' + i; 
        checkbox.value = true;

        // Create label element
        var checkboxLabel = document.createElement('label');
        checkboxLabel.htmlFor = 'consent_' + i; 
        checkboxLabel.textContent = labelArray[i];

        // Add checkbox and label to the container
        container.appendChild(checkbox);
        container.appendChild(checkboxLabel);

        // Add a line break for better spacing
        container.appendChild(document.createElement('br'));
    }
}