/**
* Only useful for qqmusic web!!!
* @description This script helps you to classify your song by song language in your selected song list to a js object.
* @return Language as key, and title well be the value.result will be printed in console.
* @author KingJohnson
* 
* operations before run this script:
* 1. first open and login QQmusic in browser。Go to your song list page. 
* url for example:https://y.qq.com/portal/profile.html#sub=other&tab=create&
* 2. open f12 and turn to 'network' tab before clicking any your song list. 
* 3. click your song list you want to classify and search this request in network load history by just using filter
* fcg_musiclist_getinfo_cp.fcg?uin=
* 5. you will find 'SongList' in jsonCallback in preview tab.
* 6. right click 'SongList' and select 'store as gobal variable'.Then tmp variable 'temp1' well be created in console.
* 7. copy this script and just run in soncole tab.It well takes you some time to run out result, please wait......
* 
*/


((data)=>{
    let index=0;
    let length=data.length;
    let result={};
    let iframe = document.createElement("iframe");
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
            console.log('Finished!!!');
            console.log(result);
            document.body.removeChild(iframe); 
        }else{
            console.log(`running ${index}/${length} ... `);
            iframe.src=`https://y.qq.com/n/yqq/song/${data[index++].mid}.html`;
        }
    }
    setSrc();
    document.body.appendChild(iframe);
})(temp1);
