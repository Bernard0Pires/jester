import { NextResponse } from "next/server";

export async function GET(req: Request){
    let ApiUrl = process.env.JOKES_API_URL + "joke/"
    
    const {searchParams} = new URL(req.url)

    const categorys = searchParams.get('categorys')

    if(categorys && categorys.trim() !== ''){
        let requiredCategorys : string[] = categorys.split(',');
        console.log(requiredCategorys)
        requiredCategorys.forEach((category, index)=>{
            ApiUrl += category
            
            if(index < requiredCategorys.length -1){
                ApiUrl += ","
            }
        })
        console.log(ApiUrl)
    } else {
        ApiUrl += "Any"
    }

   const res = await fetch(ApiUrl)
   const data = await res.json();
    return NextResponse.json(data)
}