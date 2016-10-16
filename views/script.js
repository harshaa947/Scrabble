var is_correct=false;
var new_word=[] ;
var wordlist=[];
var myscore=0;
var timeval=1000;
var re = /(,[a-z]+)\+/g;
var re0 = /(,[a-z])([a-z]*)0/g;
var re1 = /(,[a-z]{2})([a-z]*)1/g;
var re2 = /(,[a-z]{3})([a-z]*)2/g;
var re3 = /(,[a-z]{4})([a-z]*)3/g;
var re4 = /(,[a-z]{5})([a-z]*)4/g;
var re5 = /(,[a-z]{6})([a-z]*)5/g;
var re6 = /(,[a-z]{7})([a-z]*)6/g;
var re7 = /(,[a-z]{8})([a-z]*)7/g;
var re8 = /(,[a-z]{9})([a-z]*)8/g;
var re9 = /(,[a-z]{10})([a-z]*)9/g;
(function onLoad(){
	alphaTiles =[
['A',1,1,'a.png',3,3],
['B',2,3,'b.png',1,4],
['C',3,3,'c.png',2,6],
['D',4,2,'d.png',3,9],
['E',5,1,'e.png',3,12],
['F',6,4,'f.png',2,14],
['G',7,2,'g.png',3,17],
['H',8,4,'h.png',2,19],
['I',9,1,'i.png',3,22],
['J',10,8,'j.png',1,23],
['K',11,5,'k.png',1,24],
['L',12,1,'l.png',3,27],
['M',13,3,'m.png',2,29],
['N',14,1,'n.png',3,32],
['O',15,1,'o.png',3,35],
['P',16,3,'p.png',2,37],
['Q',17,10,'q.png',1,38],
['R',18,1,'r.png',3,41],
['S',19,1,'s.png',3,44],
['T',20,1,'t.png',3,47],
['U',21,1,'u.png',3,50],
['V',22,4,'v.png',2,52],
['W',23,4,'w.png',2,54],
['X',24,8,'x.png',1,55],
['Y',25,4,'y.png',2,57],
['Z',26,10,'z.png',1,58],
]
a = new Array();

for(var x = 0; x < 100; x++){
    a[x] = [];    
    for(var y = 0; y < 100; y++){ 
        a[x][y] = -1;    
    }    
}

 time=document.getElementById("time");
wordprint=document.getElementById("wordlist");
upscore=document.getElementById("score");
totTiles=58;
lettertable=document.getElementById("lettertable");
	 letterbox=document.getElementById("letterbox");
	 gamecanvas=document.getElementById("gamecanvas");
	 boardtable=document.getElementById("boardtable");
//test=document.getElementById("testme");
	   generatetile();
	   startDrag();
	   Dropme();
	 document.addEventListener("dragover", function(e){
    e=e||window.event;
	cursorX = e.pageX;
	   cursorY = e.pageY;
	   
    posX=cursorX-506;
    posY=cursorY-206;
    i=Math.floor(posX/46);
	j=Math.floor(posY/46);
	//test.innerHTML=i + " " + j;
	   
	   }, false);
	   
	 /*  	 document.addEventListener("drop", function(e){
  e=e||window.event;   
   cursorX = e.pageX;
	   cursorY = e.pageY;
	   
    posX=cursorX-506;
    posY=cursorY-206;
    i=Math.floor(posX/46);
	j=Math.floor(posY/46);
	test.innerHTML=i + " " + j;
	   test.style.color="red";
	   }, false); */ 
     alreadydone=[
	 [-1,-1],
	 ];
	 recentlydone=[
	 [-1,-1],
	 ];
	 timecalc();
	 //test.innerHTML=alreadydone.length;
})();
function generatetile() {
	 
	
	for( le=0;le<7;le++)
	{
		
		if(!lettertable.rows[0].cells[le].getElementsByTagName('img')[0]){
		var number=Math.floor((Math.random() * totTiles) + 1);
		
		for (tileNum=0;number>alphaTiles[tileNum][5];tileNum++)
		{
			
		}
		lettertable.rows[0].cells[le].innerHTML="<img src='"+ "image/"  +alphaTiles[tileNum][3]+"' width='38px' height='38px' draggable='true'/>";
		
	}
	//lettertable.rows[0].cells[7].innerHTML="<img src='image/1.png' width='38px' height='38px' draggable='true' id='meblank'/>"
	}
}

function startDrag(){
	
	src=document.getElementById("letterbox");
	src.ondragstart = function(e) {
 
 //test.innerHTML="drag has started"+e.target.src;
 }  
 src.ondragend = function(e) {
 
 //test.innerHtML="drag end";
 }
 src.ondrag = function(e) {
 //test.innerHTML = e.target.src;
 meto=e.target;
}} 
 function Dropme(){
	target=gamecanvas;
    target.ondragenter = handleDrag;
 target.ondragover = handleDrag;

 function handleDrag(e) {
 e.preventDefault();
 } 	
 target.ondrop = function(e) {

  newElem = meto.cloneNode(false);
 

getCell();

 newElem.setAttribute('draggable', false);
/*meblank=document.getElementById("meblank");
 meblank.addEventListener('click',function(e){alphabox=document.getElementById("alphabox");
	alphabox.style.opacity=1;
	alphabox.style.zIndex=4;
	alphabox.style.left=e.pageX+"px";
	alphabox.style.left=e.pageY+"px";},false);*/
 } 
	 
 }
	
function getCell(){
	
posX=cursorX-506;
posY=cursorY-206;
    i=Math.floor(posX/46);
	j=Math.floor(posY/46);
	//test.innerHTML=i + " " + j;
	//test.innerHTML=recentlydone.length;
	
	for(x=0;x<alreadydone.length;x++)
	{
		//test.innerHTML=x;
		if(alreadydone[x][0]==i&&alreadydone[x][1]==j)
			break;
	}
	
	if(alreadydone.length>0&&x!=alreadydone.length)
		return;
	
for(x=0;x<recentlydone.length;x++)
	{
		if(recentlydone[x][0]==i&&recentlydone[x][1]==j)
			break;
	}

	if(recentlydone.length>0&&x!=recentlydone.length)
		return;
	
	
	if(!boardtable.rows[j].cells[i].getElementsByTagName('img')[0]){
		
		meto.parentNode.removeChild(meto);
	boardtable.rows[j].cells[i].innerHTML="";
	boardtable.rows[j].cells[i].appendChild(newElem);
	newarray = [i,j];
	recentlydone.push(newarray);
	}
	else return;
}

function finish_turn(){
	if(recentlydone.length==1)
	{
		alert("submit at least one tile");
		return;
	}
	//test.innerHTML="word submitted";

	
	for(lo=0;lo<recentlydone.length;lo++)
	{
		//test.innerHTML+=recentlydone[lo][0]+" "+ recentlydone[lo][1]+ " ";
	}
	for(le=1;le<recentlydone.length;le++)
	{
		 myi=recentlydone[le][1];
		 myj=recentlydone[le][0];
		if(boardtable.rows[myi].cells[myj].hasChildNodes()){
		if(boardtable.rows[myi].cells[myj].childNodes[0].src!=58)
		{
			//test.innerHTML=boardtable.rows[myi].cells[myj].childNodes.length;
			a[myi][myj]=getLetter(boardtable.rows[myi].cells[myj].getElementsByTagName('img')[0].src);}
			//a[myi][myj]=getLetter(boardtable.rows[myi].cells[myj].innerHTML)+"!";
	}
	}
	checkwords();
	new_word.length=0;
	if(is_correct)
	{generatetile();
	recentlydone=[
	 [-1,-1],
	 ];
	/*for(le=1;le<alreadydone.length;le++)
	{
		 myi=alreadydone[le][1];
		 myj=alreadydone[le][0];
		if(boardtable.rows[myi].cells[myj].firstChild)
		{
			a[myi][myj]=getLetter(boardtable.rows[myi].cells[myj].getElementsByTagName('img')[0].src);
		}
	*/
	is_correct=false;
	new_word.length=0;
	}
}

function returnstate() {
//test.innerHTML="state returned";
	regret();
}
function getLetter(z){
	
  var chara= z[z.length-5];
  for (var me=0;me<26;me++)
  {
	  if(  chara.toUpperCase() === alphaTiles[me][0].toUpperCase())
	  {
		  return me;
	  }
  }
  return 58;
}
function regret(){
	var junk=1;
	for(var punk=0;punk<7;punk++)
	{
	   if(!lettertable.rows[0].cells[punk].getElementsByTagName('img')[0])
	   {
		   myi=recentlydone[junk][1];
		 myj=recentlydone[junk][0];
		
		 lettertable.rows[0].cells[punk].innerHTML=boardtable.rows[myi].cells[myj].innerHTML;
		 myelem=lettertable.rows[0].cells[punk].getElementsByTagName('img')[0];
		 myelem.setAttribute('draggable',true);
		 boardtable.rows[myi].cells[myj].innerHTML="";
		 a[myi][myj]=-1;
		 junk++;
		 
	   }
	}
	recentlydone=[
	 [-1,-1],
	 ];
	
}
function checkwords(){
 if(!checkrow()&&!checkcolumn())
 {
	 alert ("Tiles placed should be in either horizontal or vertical")
	 regret();
	 return;
 }
  if(!touching())
 {
	 alert("At least one of your placed tiles must touch an existing tile.");
	 regret();
	 return;
 }
 
getnew_word();
 if(!spellCheck())
{  new_word=[];
	regret();
	return;
}
wordlist.push(new_word);
for(var junk=0;junk<new_word.length;junk++)
	{wordprint.innerHTML+=new_word[junk]+" ";
	}
calcscore();
upscore.innerHTML=myscore;
is_correct=true;
 }

function checkrow(){
	
	 row=recentlydone[1][1];
	for(var junk=2;junk<recentlydone.length;junk++)
	{
		if(recentlydone[junk][1]!=row)
			return false;
	}
	return true;

}
function checkcolumn(){
	
	 column=recentlydone[1][0];
	for(var junk=2;junk<recentlydone.length;junk++)
	{
		if(recentlydone[junk][0]!=column)
			return false;
	}
	return true;
	
}
function touching(){
	if(checkrow()){
		 row=recentlydone[1][1];
		rowmin=recentlydone[1][0];
		rowmax=recentlydone[1][0];
		for(var junk=2;junk<recentlydone.length;junk++)
	       {
             if(recentlydone[junk][0]>rowmax)
		          rowmax=recentlydone[junk][0];
	           if(recentlydone[junk][0]<rowmin)
		               rowmin=recentlydone[junk][0];
             }
        for (var punk=rowmin;punk<rowmax;punk++)
		{ 
	          // test.innerHTML+= a[row][punk]+" ";
			if(a[row][punk]==-1)
				return false;
		}
	}
	
 	if(checkcolumn()){
		 column=recentlydone[1][0];
		colmin=recentlydone[1][1];
		colmax=recentlydone[1][1];
		for(var junk=2;junk<recentlydone.length;junk++)
	       {
             if(recentlydone[junk][1]>colmax)
		          colmax=recentlydone[junk][1];
	           if(recentlydone[junk][1]<colmin)
		               colmin=recentlydone[junk][1];
             }
        for (var punk=colmin;punk<colmax;punk++)
		{
			if(a[punk][column]==-1)
				return false;
		}
	}
	//test.innerHTML+=" "+max+" "+min;
	return true;
}
function getnew_word(){
	if(checkrow())
	{
		//main word formed
		for( start_dx=rowmin;a[row][start_dx-1]!=-1;start_dx--)
		{if (start_dx==1)
			{
		          start_dx--;
				break;
				
			}
			
			if(start_dx==0)
				break;
			}
	for( end_dx=rowmax;a[row][end_dx+1]!=-1;end_dx++)
		{
			if(end_dx==13)
			{
				end_dx++;
				break;
			}
			if(end_dx==14)
				break;
		}
	if(start_dx!=end_dx)
	    new_word.push(genhString(start_dx,end_dx,row));
		
		//side word 
		for( junk=1;junk<recentlydone.length;junk++)
		{
		 ver=recentlydone[junk][0];
			for( start_dx=recentlydone[junk][1];a[start_dx-1][ver]!=-1;start_dx--)
		{if (start_dx==1)
			{
		          start_dx--;
				break;
				
			}
			if(start_dx==0)
				break;}
	for( end_dx=recentlydone[junk][1];a[end_dx+1][ver]!=-1;end_dx++)
		{if(end_dx==13)
			{
				end_dx++;
				break;
			}
			if(end_dx==14)
				break;}
	     if(start_dx!=end_dx)
	    new_word.push(genvString(start_dx,end_dx,ver));
		}
	}
  else if(checkcolumn())
	{
		//main word formed
		for( start_dx=colmin;a[start_dx-1][column]!=-1;start_dx--)
		{
			if (start_dx==1)
			{
		          start_dx--;
				break;
				
			}
			if(start_dx==0)
				break;
		}
	
	for( end_dx=colmax;a[end_dx+1][column]!=-1;end_dx++)
		{if(end_dx==13)
			{
				end_dx++;
				break;
			}
			if(end_dx==14)
				break;}
	if(start_dx!=end_dx)
	    new_word.push(genvString(start_dx,end_dx,column));
		
		//side word 
		for( junk=1;junk<recentlydone.length;junk++)
		{
			 hor=recentlydone[junk][1];
			for( start_dx=recentlydone[junk][0];a[hor][start_dx-1]!=-1;start_dx--)
		{if (start_dx==1)
			{
		          start_dx--;
				break;
				
			}
			if(start_dx==0)
				break;}
	for( end_dx=recentlydone[junk][0];a[hor][end_dx+1]!=-1;end_dx++)
		{if(end_dx==13)
			{
				end_dx++;
				break;
			}
			if(end_dx==14)
				break;}
	     if(start_dx!=end_dx)
	    new_word.push(genhString(start_dx,end_dx,hor));
		}
	}
}
function genhString (p,q,r) {
	var myString="";
	//test.innerHTML+=" horpqr"+p+" "+q+ " "+r+" ";
	for(var junk=p;junk<=q;junk++)
	{   var mynum=a[r][junk];
//test.innerHTML+=" mynum"+mynum;
		myString+=alphaTiles[mynum][0];

}
return myString;
}
function genvString (p,q,r) {
	var myString="";
	          //test.innerHTML+=" verpqr"+p+" "+q+ " "+r;

	for(var junk=p;junk<=q;junk++)
	{   var mynum=a[junk][r];
          //test.innerHTML+=" mynum"+mynum;
		myString+=alphaTiles[mynum][0];

}
return myString;
}
function spellCheck(){
	for(var junk=0;junk<new_word.length;junk++)
	{  str=new_word[junk];
		if(!matchmyword(str))
		{
			alert (" The word "+new_word[junk]+"  is misspelled.");
			return false;
		}
	}
	return true;
}
function matchmyword(theWord) {
	//return false;
	theWord = theWord.toLowerCase();
	if (theWord.length == 2) return (D2.indexOf(theWord) != -1);
	first3 = theWord.replace(/^(...).*/, "$1");
	if (typeof(D[first3]) == "undefined") return false;
	var theEntry = D[first3];
	if (!theEntry.match(/,$/)) {
		// We've not looked at this entry before - uncompress it, etc.
		theEntry = theEntry.replace(/W/g, "le");
		theEntry = theEntry.replace(/K/g, "al");
		theEntry = theEntry.replace(/F/g, "man");
		theEntry = theEntry.replace(/U/g, "ous");
		theEntry = theEntry.replace(/M/g, "ment");
		theEntry = theEntry.replace(/B/g, "able");
		theEntry = theEntry.replace(/C/g, "ic");
		theEntry = theEntry.replace(/X/g, "on");
		theEntry = theEntry.replace(/Q/g, "ng");
		theEntry = theEntry.replace(/R/g, "ier");
		theEntry = theEntry.replace(/S/g, "st");
		theEntry = theEntry.replace(/Y/g, "ly");
		theEntry = theEntry.replace(/J/g, "ally");
		theEntry = theEntry.replace(/E/g, "es");
		theEntry = theEntry.replace(/L/g, "less");
		theEntry = theEntry.replace(/Z/g, "ies");
		theEntry = theEntry.replace(/P/g, "tic");
		theEntry = theEntry.replace(/I/g, "iti");
		theEntry = theEntry.replace(/V/g, "tion");
		theEntry = theEntry.replace(/H/g, "zation");
		theEntry = theEntry.replace(/A/g, "abiliti");
		theEntry = theEntry.replace(/O/g, "ologi");
		theEntry = theEntry.replace(/T/g, "est");
		theEntry = theEntry.replace(/D/g, "ed");
		theEntry = theEntry.replace(/N/g, "ness");
		theEntry = theEntry.replace(/G/g, "ing");
		theEntry = "," + theEntry + ",";
		// May have prefixes on prefixes, so need to repeat the replace.
		var more = true;
		while (more) {
			var theLength = theEntry.length;
			theEntry = theEntry.replace(re, "$1$1");
			theEntry = theEntry.replace(re0, "$1$2$1");
			theEntry = theEntry.replace(re1, "$1$2$1");
			theEntry = theEntry.replace(re2, "$1$2$1");
			theEntry = theEntry.replace(re3, "$1$2$1");
			theEntry = theEntry.replace(re4, "$1$2$1");
			theEntry = theEntry.replace(re5, "$1$2$1");
			theEntry = theEntry.replace(re6, "$1$2$1");
			theEntry = theEntry.replace(re7, "$1$2$1");
			theEntry = theEntry.replace(re8, "$1$2$1");
			theEntry = theEntry.replace(re9, "$1$2$1");
			more = (theLength != theEntry.length);
		}
		if (theEntry.match(/[0-@+]/)) {
			alert("decompression oops!");
		}
		D[first3] = theEntry;
	}
	rest = theWord.replace(/^...?/, "");
	return (D[first3].indexOf("," + rest + ",") != -1);
}
function calcscore(){
	for(var junk=0;junk<new_word.length;junk++)
	{
		myscore+=score(new_word[junk]);
	}
	
}
function score(str){
	var temp=0;
	str=str.toUpperCase();
	for(var junk=0;junk<str.length;junk++)
	{
		for(var punk=0;punk<26;punk++)
		{
			if(str[junk]==alphaTiles[punk][0])
				break;
		}
		temp+=alphaTiles[punk][2];
	}
	return temp;
}
function dosearch(){
	document.getElementById("result").innerHTML="";
	checkstr= document.getElementById("word").value;
	document.getElementById("result").innerHTML +=checkstr+"  :";
	document.getElementById("result").innerHTML += matchmyword(checkstr);
}
function timecalc(){
	alert("the game is going to start");
   //timeupdate();
   window.setInterval(function(){timeupdate()},1000);
}
function timeupdate(){
	timeval-=1;
	  if(timeval<0)
	  {
		  timeval=1000;
		  window.clearInterval();
		  alert ("game over your score is: "+myscore);
		  onLoad();
		  return;
	  }
		time.innerHTML=timeval;
	
	
	
}