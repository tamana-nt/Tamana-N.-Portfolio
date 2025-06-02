function generateCitation() {
    const author = document.getElementById("author").value;
    const year = document.getElementById("year").value;
    const title = document.getElementById("Title").value;
    const source = document.getElementById("link").value;

    if (!author || !year || !title || !source) {
        alert("Please fill in all blanks.");
        return;
    }

    const citation = `${author} (${year}). <i>${title}</i>. ${source}.`;

    document.getElementById("citation").innerHTML = citation;
    document.getElementById("copyBtn").style.display = "inline-block";

    saveCitation(citation);
}

function saveCitation(citation) {
    const citations = JSON.parse(localStorage.getItem("citations")) || [];
    citations.push(citation);
    localStorage.setItem("citations", JSON.stringify(citations));
    displaySavedCitations();
}

function displaySavedCitations() {
    const savedCitations = JSON.parse(localStorage.getItem("citations")) || [];
    const savedList = document.getElementById("savedCitations");
    savedList.innerHTML = "";

    savedCitations.forEach((cit, i) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = cit + " ";

        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.onclick = () => deleteCitation(i);

        listItem.appendChild(deleteButton);
        savedList.appendChild(listItem);
    });
}

function deleteCitation(index) {
    const citations = JSON.parse(localStorage.getItem("citations")) || [];
    citations.splice(index, 1);
    localStorage.setItem("citations", JSON.stringify(citations));
    displaySavedCitations();
}

function copyCitation() {
    const citationText = document.getElementById("citation").innerText;
    if (!citationText) return;

    navigator.clipboard.writeText(citationText)
        .then(() => alert("Citation copied to clipboard!"))
        .catch(err => console.error("Error copying text: ", err));
}

window.onload = displaySavedCitations;

