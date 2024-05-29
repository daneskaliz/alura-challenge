const contactForm = document.getElementById("contacto");
let nameField = document.getElementById("nombre");
let emailField = document.getElementById("email");
let subjectField = document.getElementById("asunto");
let messageField = document.getElementById("mensagem");

function handleSubmit(e) {
    e.preventDefault();
    const someFieldIsEmpty = validateForm();
    if (someFieldIsEmpty) return alert("Por favor completa todos los campos correctamente para poder enviar el mensaje.");
    alert(`Gracias, ${nameField.value}. Estaré atendiendo tu mensaje a la brevedad posible.`)
    clearForm();
}

function validateForm() {
    let nameFieldValue = nameField.value;
    let emailFieldValue = emailField.value;
    let subjectFieldValue = subjectField.value;
    let messageFieldValue = messageField.value;
    return nameFieldValue == "" || emailFieldValue === "" || subjectFieldValue === "" || messageFieldValue === ""
}

function clearForm() {
    nameField.value = "";
    emailField.value = "";
    subjectField.value = "";
    messageField.value = "";
}

contactForm.addEventListener("submit", handleSubmit)