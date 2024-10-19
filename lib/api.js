// export const sendContactForm = async (data) => fetcht("api/contact", {
//     method: 'POST',
//     body: JSON.stringify(data),
//     Headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json" 
//     }
// })

export const sendContactForm = async (data) => {
    try {
        const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(data),
        });

        console.log("Response status:", response.status); // Log response status

        if (!response.ok) {
            const errorText = await response.text(); // Get detailed error message
            console.log("Error response:", errorText); // Log the error response
            throw new Error("Failed to submit form");
        }

        return await response.json();
    } catch (error) {
        console.error("Error submitting form:", error);
        throw error; // Re-throw to handle it in your form
    }
};
