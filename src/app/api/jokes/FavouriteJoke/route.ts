import { NextResponse } from "next/server";
import { supabaseServerClient } from "@/utility/supabase/supabaseServer";

export async function PUT(req: Request){
    try {
        const supabase = await supabaseServerClient();
               
        const user = await supabase.auth.getUser();
        if (!user) {
            return NextResponse.json({ error: 'User not authenticated' }, { status: 401 });
        }

        const joke = await req.json();

        const { error } = await supabase
            .from('saved_jokes')
            .insert([
                {
                    save_joke_id: joke.id,
                    save_user: user.data.user?.id  
                }
            ]);
        return NextResponse.json({ message: 'Joke added to favorites successfully' });
    } catch (error) {
        console.error('Error handling the request:', error);
        return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
    }
}

export async function DELETE(req: Request){
    const {searchParams} = new URL(req.url)
    let ApiUrl = "2"
    const categorys = searchParams.get('categorys')

    if(categorys && categorys.trim() !== ''){
        let requiredCategorys : string[] = categorys.split(',');
        requiredCategorys.forEach((category, index)=>{
            ApiUrl += category
            
            if(index < requiredCategorys.length -1){
                ApiUrl += ","
            }
        })
    } else {
        ApiUrl += "Any"
    }

   const res = await fetch(ApiUrl)
   const data = await res.json();
    return NextResponse.json(data)
}