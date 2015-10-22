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
            form_div = document.querySelector(this.selector);
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
        //updating time and conversion
        
    
    
    arc.arcpro.initialize.prototype = arc.arcpro;
})();


        function dispdate()
        {
            //var form_div = document.querySelector(this.selector);
            //alert("hello");
            div1=document.createElement("div");
            disp_time=document.createElement("p");
            form_div.appendChild(div1);
            div1.appendChild(disp_time);
            
            
            //alert("a");
            function clock(){
            var time=new Date();
            hr=time.getHours();
            min=time.getMinutes();
            sec=time.getSeconds();
            if(sec<10)
                sec="0"+sec;
            if (min < 10)
                min = "0" + min;
            if(hr<10)
                hr="0"+hr;
            if(hr>12)
                { tod="PM";
                  hr=hr-12;
                }
            else
                tod="AM";
                nowtime=hr+":"+min+":"+sec+ " "+" "+tod;
                
                
                //disp_time.removeChild();
                var t=setTimeout(function(){clock()},1000);
            }
                clock();
            now=document.createTextNode(nowtime);
                disp_time.appendChild(now);
            
            
            
        
            //alert(nowtime);
            
            
        }