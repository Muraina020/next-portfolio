
export async function POST(request) {
   const res = await request.json();
   const {name,email,message} = res;
  //  console.log({name,email,message});
    client.sendEmail({
      "From": 'Boluwatife.muraina@lampnets.com',
      "To": 'Boluwatife.muraina@lampnets.com',
      "Name": name,
      "Email": email,
      "message": message
    })

   return Response.json({res});
}
