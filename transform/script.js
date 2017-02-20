// Code goes here
document.addEventListener('DOMContentLoaded', function(){

    document.getElementById('id_trans_btn').addEventListener("click", function(){
      var obj = document.getElementsByTagName('textarea')[0].value;
      try{
        obj = JSON.parse(obj)      
        
      }
      catch (err) {
        alert("Структура не может быть преобразована к объекту"+err);
        obj = null
      }
      var new_struct = [];
      //рекурсивно обхожу массив и формирую новый объект
      obj.forEach(function(elem){
        if (elem.parentId === null){
          new_struct.push(get_child(obj, elem));          
        }
      });
      var tab = 0;
      //преобразую объект к удобочитаемому виду 
      var str_result = JSON.stringify(new_struct).replace(/(\[\{)|(\}\])/g,"$&\n&#9;").
        replace(/(\},\{)/g,'\n&#9;').
        replace(/(\n)|(\[\{)|(\}\])/g, function(str,p1,p2,p3){          
            if (p2) tab++; 
            var res = '\n'+'&#9;'.repeat(tab) + (p2 || p3 || '');
            if (p3) tab--;                  
            return res;    
          });

       document.getElementById('id_result').innerHTML='<pre>'+str_result+'</pre>';

    })
    
    function get_child(initial_obj, elem){
      elem.childs = [];
      initial_obj.forEach(function(element){
        if (elem.id == element.parentId){
          elem.childs.push(element);
          get_child(initial_obj, element);
        }
      })
      return elem;
    }
})