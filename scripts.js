window.onload = function() {
    var archerDropdown = document.getElementById('dropdown2-boxes');
    var urlParams = new URLSearchParams(window.location.search);
    var selectedName = urlParams.get('name');
    
    var fullnameElement = document.getElementById('fullname');

    if (fullnameElement && selectedName) {
        fullnameElement.textContent = selectedName;
    } else {
        console.log("fullname element not found or selected name not provided");
    }
    function updateTableHeader() {
        var archerValue = archerDropdown.value;
        var names = archerValue.split(" ");

        var firstNameTH = document.getElementById('firstname');
        var lastNameTH = document.getElementById('lastname');

        firstNameTH.textContent = names[0]; 
        lastNameTH.textContent = names.slice(1).join(" ");

        var fullNameTH = document.getElementById('fullname');
        console.log("fullNameTH:", fullNameTH); 
        if (fullNameTH) {
            fullNameTH.textContent = archerValue;
        } else {
            console.log("fullname element not found"); 
        }
    }
    archerDropdown.addEventListener('change', updateTableHeader);
    updateTableHeader(); 
};

function redirectSecondPage() {
    var selectedName = document.getElementById('dropdown2-boxes').value;
    var selectedEquipment = document.getElementById('dropdown3-boxes').value;
    localStorage.setItem('archerDefaultEquipment', selectedEquipment);
    window.location.href = "ends.html?name=" + encodeURIComponent(selectedName);
    console.log("called!")
}

function setFullName() {
    var urlParams = new URLSearchParams(window.location.search);
    selectedName = urlParams.get('name');
    document.getElementById('fullNameInput').value = selectedName;
}

function submitEndsForm(event) {
    var endDetails = document.getElementById('ends-input').value;
    if (!endDetails) {
      event.preventDefault(); 
      alert("End details cannot be empty.");
    } else {
      var endDetailsInput = document.getElementById('ends-input');
      if (endDetailsInput.checkValidity()) {
        var urlParams = new URLSearchParams(window.location.search);
        var selectedName = urlParams.get('name');
        localStorage.setItem('archerFullName', selectedName);
  
        const endDetailsValue = document.getElementById("ends-input").value;
        var details_split = endDetailsValue.split("/");
        var endNumber = details_split[0];
        var rest = details_split[1].split("(");
        var totalEndsSpace = rest[0].split(" ");
        var totalEnds = totalEndsSpace[0];
        var rangeDistanceBrack = rest[1].split(")");
        var rangeDistance = rangeDistanceBrack[0]
        localStorage.setItem('endNumber', endNumber);
        localStorage.setItem('rangeDistance', rangeDistance);
        localStorage.setItem('totalEnds', totalEnds);
        window.location.href = "scores.html";
      } else {
        endDetailsInput.reportValidity(); 
      }
    }
}

