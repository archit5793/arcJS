/*
 *arcJs Core
 *Author:Archit
 */


/*
*Core Arc Module
*/

(function(){
    var window = this,undefined;
    arc = window.arc = function(selector){
        return new arc.arcpro.initialize(selector);
    }
    arc.arcpro = arc.prototype = {
        initialize: function(selector){
            this.selector = selector;
            return this;
        },
        //all functions
        
        //form builder
        formbuild: function(method,action,args){
            var form_div = document.querySelector(this.selector);
            var form_var = document.createElement('form');
            form_div.appendChild(form_var);
            form_var.setAttribute("method",method);
            form_var.setAttribute("action",action);
            
            var len = args.length;
            var params = ["type","value"];
            
            for(i=0;i<len;i++){
                var x = form_var.appendChild(document.createElement(args[i].split(':')[0]));
                var y = document.createElement("br");
                  for(j=0;j<=1;j++){
                    x.setAttribute(params[j],args[i].split(":")[j+1]);
                  }
                    
                x.parentNode.insertBefore(y, x.nextSibling);  
            }
            
            return this;
        }
    
    }
    arc.arcpro.initialize.prototype = arc.arcpro;
})();