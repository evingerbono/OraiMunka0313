function validateForm() {
    let x = document.validTeszt.knev.value;
    let y = document.validTeszt.jelszo1.value;
    let z = document.validTeszt.jelszo2.value;
    
    if (x === "" || y === "" || z === "") {
        alert("A mező kitöltése kötelező!");
        return false;
    }
    
    if (y !== z) {
        alert("A két jelszó nem egyezik meg!");
        return false;
    }
    
    return true;
}