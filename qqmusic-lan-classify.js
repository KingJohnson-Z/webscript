((data)=>{
    let index=0;
    let length=data.length;
    let result={};
    let iframe = document.createElement("iframe");
    iframe.id='my';
    iframe.onload=function(){
        setTimeout(function(){
            var doc=iframe.contentDocument;
            var title=doc.getElementsByClassName("data__name_txt")[0].title;
            var type=doc.getElementsByClassName("data_info__item js_lan")[0].innerText;
            if(!result.hasOwnProperty(type)){
                result[type]=[];
            }
            result[type].push(title);
            setSrc();
        },100);
    
    }
    
    let setSrc=()=>{
        if(index>=length){
            console.log(result);           
        }else{
            iframe.src=`https://y.qq.com/n/yqq/song/${data[index++].mid}.html`;
        }
    }
    setSrc();
    document.body.appendChild(iframe);
})(temp1);
