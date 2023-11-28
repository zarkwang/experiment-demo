

## Test the experiment on your local device

### 1. Open a single page

All files necessary for loading the experiment are stored in folder `attention_demo`. You can find three types of files in it:

- `html` - the web pages that will be displayed to participants;
- `js` - the functions and command that control the webpage behavior (javascript);
- `css` - specifying the style of each element on the web pages

All the `html` files are listed in the order in which they will appear in the experiment. In an online experiment, these files will be hosted on a server. However, you can use your computer as a local host to check each single webpage. If you have VS Code installed, it takes two steps:

1. Click "**extension**" on the right side, then search "**live preview**" on the search bar. It is a plug-in that can easily preview webpages on the local device (developed by Microsoft). If you have installed a similar plug-in before, you can skip this step. 
2. Click "**File**" →  "**Open Folder...**" on the top panel, then open the folder `attention_demo`.  Right click on the `html` file that you want to open. You should find an option "vscode-preview-server: Launch on browser" in the menu. Click it, then you will be able to check the webpage on your browser.

### 2. Edit the page

If you want to edit the text in a webpage, two `javascript` files will enable you to do this:

- `survey-text.js` - containing almost all text in the survey;
- `stimuli-timeline.js` - containing the information about the stimuli in each round, similar with Loop & Merge in Qualtrics.

In both files, you can edit the content under each corresponding variable, to change the content of a page. 

Note:

1. `<p>...</p>` represents a paragraph element in HTML. The content between these two tags will be displayed as an individual paragraph. 

2. `<br>` produce a line break in text.

3. A stimulus may be specified in this format: 

   ```json
   {"front_amount": 100, "backend_amount": 40, "seq_length": "1 month","condition": "front-align"} 
   ```

   It means that, when participants compare a single-reward (Option A) and a two-reward sequence (Option B), the two-reward sequence is “£100 today and £40 in 1 month". The "condition" element specifies the delivery time of the single reward is aligned with which end of the sequence option: in this case, "front-align" means the single reward is delivered "today", while "back-align" means the single reward is delivered in "1 month". 

For convenience, at this moment the formal tasks only contains 4 stimuli (randomly drawn from the full stimulus list).

### 3. Test the whole experiment

I use [JATOS](https://www.jatos.org/) as a tool for deploying the experiment. It provides an easy way to solve back-end issues (e.g. data storage, workflow), so we can entirely focus on developing the front-end pages. 

For installation, please follow the instructions in https://www.jatos.org/Installation.html 

If you do not have Java in your computer, I suggest you choose the `jatos_win_java` version (suppose you use windows), which has Java pre-installed. 

After you've logged into JATOS, click on **Import Study** in the header, then select `discounting_experiment_zwang.jzip` in this folder. You should be able to see the workflow of this experiment. 

Now, you can test the whole experiment on your own.

The source files for this experiment will be stored in a folder called `study_assets_root`. You can follow the instructions above to edit the webpages in it. Once the study is ready to run, you can "**Export**" from JATOS. It should creates a `.jzip` file.

[ESCOP](https://www.escop.eu/) provides a free server called [MindProbe][https://mindprobe.eu/], for running JATOS-based experiments. It has JATOS pre-installed, so we just need to import our `.jzip` file and we can deploy the experiment directly on it.







