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
              
        const { data, error } = await supabase
            .from('saved_jokes')
            .insert(
                {
                    save_joke_id: joke.joke.id,
                    save_user: user.data.user?.id,
                },
            )
            .select()
        
        console.log(data)
        console.log(error)

        return NextResponse.json({ message: 'Joke added to favorites successfully' });
    } catch (error) {
        console.error('Error handling the request:', error);
        return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
    }
}
