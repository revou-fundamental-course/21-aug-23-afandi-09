document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("heyKawan");
    const resultDiv = document.getElementById("heyLagi");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const name = document.getElementById("name").value;
        const birthdate = document.getElementById("date").value;
        const gender = document.querySelector('input[name="jenis_kelamin"]:checked').value;
        const about = document.getElementById("Ay").value;

        const summary = `
            <p><strong>Nama:</strong> ${name}</p>
            <p><strong>Tanggal Lahir:</strong> ${birthdate}</p>
            <p><strong>Jenis Kelamin:</strong> ${gender}</p>
            <p><strong>About You:</strong> ${about}</p>
        `;

        resultDiv.innerHTML = summary;
    });
});
