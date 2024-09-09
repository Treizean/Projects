function showDetails(projectNumber) {
    const details = document.getElementById(`details${projectNumber}`);
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}
