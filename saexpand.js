$(function(){   
    //
    // FUNCIONALITY FOR FAQ EXPANDING ANSWERS
    // sets up Object
    var $answerObject = {};
    var $collapsedHeight = "2.25em";
    var $selector = $("[data-saexpand]");
    // grabs every div with the answer class
    $answerObject.target = $selector;
    // loops through them, writes each height in the height property
    for(i = 0; i < $answerObject.target.length; i++){
        $answerObject['height' + i] =  $($answerObject.target[i]).height();
        $answerObject['expanded' + i] = 0;
        $($answerObject.target[i]).height($collapsedHeight);
        $($answerObject.target[i]).attr("id", i+"uacxvy" ); 
        $($answerObject.target[i]).css("overflow", "hidden");
        $($answerObject.target[i]).css("cursor", "pointer");
        $($answerObject.target[i]).css("white-space", "nowrap");
        $($answerObject.target[i]).css("text-overflow", "ellipsis");
        // writes the original text the originalText property
        $answerObject['originalText' + i] = $($answerObject.target[i]).html();      
        // replaces the original Text with the same, but with a downarro before it.
        $($answerObject.target[i]).html("<span class='saexpand-arrow'>▼</span> " + $answerObject['originalText' + i]);
    }
    // when an answerClass is clicked
    $selector.click(function(){
        // loops and checks which id was clicked
        for(i = 0; i < $answerObject.target.length; i++){
            // when it finds the matching ID, it sets the height of the DIV to the height of the ID
            if($(this).attr("id") == $($answerObject.target[i]).attr("id") ){
                // check if the item is currently expanded
                // if it isn't, expand
                if($answerObject['expanded' + i] == 0){
                    // expands the height to the original height, which ends up too short somehow, so we are also adding a bit. I don't know why.
                    $(this).animate({height: $answerObject['height' + i]*1.1+"px"}, 100);   
                    // we are also adding this, to make sure the text now wrpas properly.
                    $(this).css("white-space", "normal");
                    // changes text add uparrow
                    $(this).html("<span class='saexpand-arrow'>▲</span> " + $answerObject['originalText' + i]);
                    // marks he clicked element as expanded.
                    $answerObject['expanded' + i] = 1;  
                }
                // if it is, make small
                else{
                    // sets the height of the element back to the starting height
                    $(this).animate({height: $collapsedHeight}, 100);       
                    // also makes the text not wrap again (for ellipsis)
                    $(this).css("white-space", "nowrap");
                    $answerObject['expanded' + i] = 0;
                    $(this).html("<span class='saexpand-arrow'>▼</span> " + $answerObject['originalText' + i]);
                }
            }
        }
    });
});