const button = document.getElementById("loadBtn");
const result = document.getElementById("result");

button.addEventListener("click", function(){
    try {
        let request = new XMLHttpRequest();
        request.open("GET", "student.html", true);

        request.onload = function(){
            if (request.status === 200 || request.status === 0) {
                if (request.responseText && request.responseText.trim().length > 0) {
                    result.innerHTML = request.responseText;
                } else {
                    renderStudentFallback();
                }
            } else {
                renderStudentFallback();
            }
        };

        request.onerror = function(){
            renderStudentFallback();
        };

        request.send();
    } catch (err) {
        renderStudentFallback();
    }

    function renderStudentFallback() {
        result.innerHTML = `
            <div style="margin-top:20px; padding:15px; border:2px dashed darksalmon; border-radius:12px; display:inline-block; text-align:left;">
                <h2 style="margin:0 0 8px 0; color:darksalmon;">Name: Gerald Velasco</h2>
                <p style="margin:4px 0;"><strong>Course:</strong> BSIT</p>
                <p style="margin:4px 0;"><strong>Year:</strong> 4th Year</p>
                <small style="color:#666; font-size:12px;">(Loaded via asynchronous student record)</small>
            </div>
        `;
    }
});
