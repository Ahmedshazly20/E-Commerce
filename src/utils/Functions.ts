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