$(document).ready(function(){
    var names= [["amr","cool"],["ahmed","awesome"],["khaled","fantastic"]]
    
    $.each(names ,function(index,value){
           
       // alert(index);             // htkon al ntga 0,1,2,....
       //alert(value);             // htkon al ntga amr cool ,......
       //alert(value[0]);         // htkon al ntga amr ahmed ,.....
        var loop= value[0] + " is " + value[1]
        alert(loop);
           
     }); 

    
    
    
}); 