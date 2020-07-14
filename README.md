# Javascript-Quiz

<hr>

A Javascript quiz that does the following:

  <ul>
  <li>Starts by a click event</li>
  <li>Has a timer</li>
  <li>Updates html via the javascript</li>
  <li>Displays questions and answer</li>
  <li>Displays next question after answered</li>
    <ul>
      <li>If right adds to score and continues to next question</li>
      <li>If wrong subtracts time and continues to next question</li>
    </ul>
  <li>Quiz ends when timer reaches 0 or all questions answered</li>
    <ul>
    <li>High score box appears</li>
    <li>User can enter name</li>
    <li>User can save name & score</li>
    <li>User can get list of high scores</li>
    <li>User can restart the quiz</li>
    </ul>
  </ul>
 <br>

 <hr>
  
  <h2>Other Info</h2>
<ul>
  <li>This page utilizes bootstrap and has some basic css.</li>
  <li>Quiz game is updated dynamically from the javscript.</li>
  <li>Utilizes James Quick's youtube tutorials for:</li>
    <ol>
     <li>Randomizing the question array</li>
     <li>Displaying the questions and answers</li>
     <li>Selecting answers & checking answers</li>
     <li>Building, sorting, splicing, the high score array</li>
     <li> <a href="https://github.com/jamesqquick/Build-A-Quiz-App-With-HTML-CSS-and-JavaScript">
       https://github.com/jamesqquick/Build-A-Quiz-App-With-HTML-CSS-and-JavaScript</a></li>
     </ol>
  <li>Quiz utilizies two javascript files.</li>
  <li>Is mobile responsive.</li>
</ul>
<br>

 <hr>
 
  <h2>Known Issues</h2>
 <ul>
  <li>Due to how the quiz was started, there are many nested functions.</li>
  <li>High score section was able to be unnested by using localstorage with the score variable.</li>
  <li>If time runs out and user has not selected any answers, saving the score, uses the previous scores value.</li>
 </ul>
