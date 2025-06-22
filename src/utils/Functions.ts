import {Thumbnail} from '../interface/interface' 

//discraption clise
export function discraptionclise( text:string , max : number = 80){
    if(text.length >= 80  )return `${text.slice(0, max)}...`;
    else
    return text;
}
//title clise

export function titleclise( text:string , max : number = 80){
    if(text.length >= 80  )return `${text.slice(0, max)}...`;
    else
    return text;
}


export function titlDrowereclise( text:string , max : number = 45){
    if(text.length >= 40  )return `${text.slice(0, max)}...`;
    else
    return text;
}


//img return fun

export function imgReturn(url) {
    const ApiUrl = import.meta.env.VITE_SERVER_URL;
    const imgurl = ApiUrl + url;
    return imgurl;
}