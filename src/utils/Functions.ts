
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

// titlDrowereclise
export function titlDrowereclise( text:string , max : number = 45){
    if(text.length >= 40  )return `${text.slice(0, max)}...`;
    else
    return text;
}

// UserId  clise
export function UserId( text:string , max : number = 10){
    if(text.length >= 20  )return `${text.slice(0, max)}...`;
    else
    return text;
}

// convertDate show data with other format
export function convertDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const year = date.getFullYear();
    
    return `${day}/${month}/${year}`;
}