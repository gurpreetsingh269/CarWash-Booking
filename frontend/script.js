const form = document.querySelector(".booking-form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
        service: form.querySelector("select").value,
        date: form.querySelector('input[type="date"]').value,
        time: form.querySelector('input[type="time"]').value,
        name: form.querySelector('input[type="text"]').value,
        phone: form.querySelector('input[type="tel"]').value,
        email: form.querySelector('input[type="email"]').value 
    };

    try {
        const res = await fetch("http://localhost:5000/api/appointments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await res.json();
        alert(result.message || result.error);

        form.reset();
    } catch (err) {
        console.log(err);
        alert("Error booking appointment");
    }
});
