export async function onRequestPost(context) {
    debugger;
    var formData = await context.request.formData();
    const token = formData.get('cf-turnstile-response');
    const ip = context.request.headers.get('CF-Connecting-IP');
    let frmData = new FormData();
    frmData.append('secret', "0x4AAAAAAARyPZqHibq-LKtF");
    frmData.append('response', token);
    frmData.append('remoteip', ip);

    const result = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        body: frmData,
        method: 'POST',
    });

    const outcome = await result.json();
    if (outcome.success) {
        var data = {};
        // data.firstName = formData.get('firstName');
        // data.lastName = formData.get('lastName');
        // data.email = formData.get('email');
        // data.phone = formData.get('phone');
        // data.message = formData.get('message');
        await sendEmail(data);
        let responseData = { message: "Success" };

        let response = new Response(JSON.stringify(responseData), {
            headers: { 'content-type': 'application/json' },
        });
        return response;
    }
    else {
        let responseData = { message: "Error verifying Captcha, please try again." };

        let response = new Response(JSON.stringify(responseData), {
            headers: { 'content-type': 'application/json' },
        });
        return response;
    }
}

async function sendEmail(data) {
    // let message = 'First Name: ' + data.firstName;
    // message += '<br />';
    // message += 'Last Name: ' + data.lastName;
    // message += '<br />';
    // message += 'Email: ' + data.email;
    // message += '<br />';
    // message += 'Phone: ' + data.phone;
    // message += '<br />';
    // message += 'Message: ' + data.message;
    // Use the fetch() method to send the email
    const response = await fetch("https://api.mailchannels.net/tx/v1/send", {
        method: "POST",
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            personalizations: [
                {
                    to: [{ email: 'hassaan@swyftlogic.com', name: 'Hassaan' }],
                },
            ],
            from: {
                email: 'info@orlandotransportationsservice.com',
                name: "Website",
            },
            subject: 'Website Inquiry',
            content: [
                {
                    type: 'text/html',
                    value: '<h1>Test Email</h1>',
                },
            ],
        }),
    })

    return response;
}