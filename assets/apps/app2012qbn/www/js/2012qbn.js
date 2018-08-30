	function syj(){
		history.go(-1);
	}

    function xyj(){
    	history.go(+1);
    }

    function bianda(){
		var textarea = document.getElementById("content");
		textarea.style.fontSize = "1.5rem";
	}
    
    function bianxiao(){
		var textarea = document.getElementById("content");
		textarea.style.fontSize = "1.1rem";
	}
    
    function moren(){
		var textarea = document.getElementById("content");
		textarea.style.fontSize = "1.3rem";
	}
    
    function heiye(){
		var textarea = document.getElementById("content");
	    textarea.style.backgroundImage = "none";
		textarea.style.backgroundColor = "darkslategrey";
		textarea.style.color = "#31B0D5";
	}
    
    function baitian(){
		var textarea = document.getElementById("content");
		textarea.style.backgroundImage = "url(/img/bj1.jpg)";
	    textarea.style.backgroundImage = "inherit";
		textarea.style.color = "initial";
    }
    
    function yueduqi(){
    	open("yueduqi.html");
    }

	function quit() {
		this.close();
		open("index.html");
	}

	function importFile() {
		var selectFile = document.getElementById("files").files[0];
		var reader = new FileReader();
		reader.readAsText(selectFile);
		reader.onload = function() {
			document.getElementById("content").value += this.result;
		}
	}

	function yinqu() {
		var label = document.getElementById("lb1");
		label.style.visibility = "hidden";
	}