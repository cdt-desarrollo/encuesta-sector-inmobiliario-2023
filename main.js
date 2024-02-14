
var personalInformation =[] 
var q11 = []
var q12 = []
var q15 = []
var q17 = []
var q18 = []
var responses = []
function disableInputNumberQuestion2(option){
  if(option.checked == true)
  {
    document.getElementById("q3o1").disabled = true
    document.getElementById("q3o2").disabled = true
    document.getElementById("q3o3").disabled = true
    document.getElementById("q3o4").disabled = true
    document.getElementById("q3o5").disabled = true
    document.getElementById("q3o6").disabled = true
    document.getElementById("q3o7").disabled = true
    document.getElementById("q3o8").disabled = true
    document.getElementById("q3o9").disabled = true
    document.getElementById("q3o10").checked = true
    document.getElementById("q2o1").disabled = true
    document.getElementById("q2o1").value = ""
  }
  else if(option.checked == false){
    document.getElementById("q3o1").disabled = false
    document.getElementById("q3o2").disabled = false
    document.getElementById("q3o3").disabled = false
    document.getElementById("q3o4").disabled = false
    document.getElementById("q3o5").disabled = false
    document.getElementById("q3o6").disabled = false
    document.getElementById("q3o7").disabled = false
    document.getElementById("q3o8").disabled = false
    document.getElementById("q3o9").disabled = false
    document.getElementById("q3o10").checked = false
    document.getElementById("q2o1").disabled = false
    document.getElementById("q2o1").value = ""
  }
}
function disableInputNumberQuestion4(option){
  if(option.checked == true)
  {
    document.getElementById("q5o1").disabled = true
    document.getElementById("q5o2").disabled = true
    document.getElementById("q5o3").disabled = true
    document.getElementById("q5o4").disabled = true
    document.getElementById("q5o5").disabled = true
    document.getElementById("q5o6").disabled = true
    document.getElementById("q5o7").disabled = true
    document.getElementById("q5o8").disabled = true
    document.getElementById("q5o9").disabled = true
    document.getElementById("q5o10").checked = true
    document.getElementById("q4o1").disabled = true
    document.getElementById("q4o1").value = ""
  }
  else if(option.checked == false){
    document.getElementById("q5o1").disabled = false
    document.getElementById("q5o2").disabled = false
    document.getElementById("q5o3").disabled = false
    document.getElementById("q5o4").disabled = false
    document.getElementById("q5o5").disabled = false
    document.getElementById("q5o6").disabled = false
    document.getElementById("q5o7").disabled = false
    document.getElementById("q5o8").disabled = false
    document.getElementById("q5o9").disabled = false
    document.getElementById("q5o10").checked = false
    document.getElementById("q4o1").disabled = false
    document.getElementById("q4o1").value = ""
  }
}
function disableInputNumberQuestion6(option){
  if(option.checked == true)
  {
    document.getElementById("q7o1").disabled = true
    document.getElementById("q7o2").disabled = true
    document.getElementById("q7o3").disabled = true
    document.getElementById("q7o4").disabled = true
    document.getElementById("q7o5").disabled = true
    document.getElementById("q7o6").disabled = true
    document.getElementById("q7o7").disabled = true
    document.getElementById("q7o8").disabled = true
    document.getElementById("q7o9").disabled = true
    document.getElementById("q7o10").disabled = true
    document.getElementById("q7o11").checked = true
    document.getElementById("q6o1").disabled = true
    document.getElementById("q6o1").value = ""
  }
  else if(option.checked == false){
    document.getElementById("q7o1").disabled = false
    document.getElementById("q7o2").disabled = false
    document.getElementById("q7o3").disabled = false
    document.getElementById("q7o4").disabled = false
    document.getElementById("q7o5").disabled = false
    document.getElementById("q7o6").disabled = false
    document.getElementById("q7o7").disabled = false
    document.getElementById("q7o8").disabled = false
    document.getElementById("q7o9").disabled = false
    document.getElementById("q7o10").disabled = false
    document.getElementById("q7o11").checked = false
    document.getElementById("q6o1").disabled = false
    document.getElementById("q6o1").value = ""
  }
}
function disableOptionsQ11(option){
  if(option.checked == true){
    document.getElementById("q11o1").disabled = true
    document.getElementById("q11o1").checked = false
    document.getElementById("q11o2").disabled = true
    document.getElementById("q11o2").checked = false
    document.getElementById("q11o3").disabled = true
    document.getElementById("q11o3").checked = false
    document.getElementById("q11o4").value = ""
    document.getElementById("q11o4").disabled = true
  }
  else if(option.checked == false){
    document.getElementById("q11o1").disabled = false
    document.getElementById("q11o2").disabled = false
    document.getElementById("q11o3").disabled = false
    document.getElementById("q11o4").disabled = false
  }
}
function disableOptionsQ12(option){
  if(option.checked == true){
    document.getElementById("q12o1").disabled = true
    document.getElementById("q12o1").checked = false
    document.getElementById("q12o2").disabled = true
    document.getElementById("q12o2").checked = false
    document.getElementById("q12o3").disabled = true
    document.getElementById("q12o3").checked = false
    document.getElementById("q12o4").value = ""
    document.getElementById("q12o4").disabled = true
  }
  else if(option.checked == false){
    document.getElementById("q12o1").disabled = false
    document.getElementById("q12o2").disabled = false
    document.getElementById("q12o3").disabled = false
    document.getElementById("q12o4").disabled = false
  }
}
function disableInputNumberQuestion17Casas(option){
  if(option.checked == true){
    document.getElementById("q17o1").disabled = true
    document.getElementById("q17o1").value = ""
    document.getElementById("q18o10casas").checked = true
  }
  else if(option.checked == false){
    document.getElementById("q17o1").disabled = false
    document.getElementById("q18o10casas").checked = false
  }
}
function disableInputNumberQuestion17Condominios(option){
  if(option.checked == true){
    document.getElementById("q17o3").disabled = true
    document.getElementById("q17o3").value = ""
    document.getElementById("q18o10condominios").checked = true
  }
  else if(option.checked == false){
    document.getElementById("q17o3").disabled = false
    document.getElementById("q18o10condominios").checked = false
  }
}
function disableInputNumberQuestion17Lotes(option){
  if(option.checked == true){
    document.getElementById("q17o5").disabled = true
    document.getElementById("q17o5").value = ""
    document.getElementById("q18o10lotes").checked = true

  }
  else if(option.checked == false){
    document.getElementById("q17o5").disabled = false
    document.getElementById("q18o10lotes").checked = false
  }
}
function getValues(){
  prePersonalInformation = Array.from(document.getElementsByName("personalInformation"))
  for(i = 0; i <= prePersonalInformation.length - 1; i++){
    personalInformation.push(prePersonalInformation[i].value)
  }
  responses.push(personalInformation)
  preQ1 = Array.from(document.getElementsByName("q1"))
  for(i = 0; i <= preQ1.length - 1; i++){
    if(preQ1[i].checked == true){
      responses.push(preQ1[i].value)
    }
  }
  preQ2 = Array.from(document.getElementsByName("q2"))
  for(i = 0; i <= preQ2.length - 1; i++){
    if(preQ2[i].type == "number" && preQ2[i].value !== ""){
      responses.push(preQ2[i].value)
    }
    else if(preQ2[i].type == "checkbox" && preQ2[i].checked == true){
      responses.push(preQ2[i].value)
    }
  }
  preQ3 = Array.from(document.getElementsByName("q3"))
  for(i = 0; i <= preQ3.length - 1; i++){
    if(preQ3[i].checked == true){
      responses.push(preQ3[i].value)
    }
  }
  preQ4 = Array.from(document.getElementsByName("q4"))
  for(i = 0; i <= preQ4.length - 1; i++){
    if(preQ4[i].type == "number" && preQ4[i].value !== ""){
      responses.push(preQ4[i].value)
    }
    else if(preQ4[i].type == "checkbox" && preQ4[i].checked == true){
      responses.push(preQ4[i].value)
    }
  }
  preQ5 = Array.from(document.getElementsByName("q5"))
  for(i = 0; i <= preQ5.length - 1; i++){
    if(preQ5[i].checked == true){
      responses.push(preQ5[i].value)
    }
  }
  preQ6 = Array.from(document.getElementsByName("q6"))
  for(i = 0; i <= preQ6.length - 1; i++){
    if(preQ6[i].type == "number" && preQ6[i].value !== ""){
      responses.push(preQ6[i].value)
    }
    else if(preQ6[i].type == "checkbox" && preQ6[i].checked == true){
      responses.push(preQ6[i].value)
    }
  }
  preQ7 = Array.from(document.getElementsByName("q7"))
  for(i = 0; i <= preQ7.length - 1; i++){
    if(preQ7[i].checked == true){
      responses.push(preQ7[i].value)
    }
  }
  preQ8 = Array.from(document.getElementsByName("q8"))
  for(i = 0; i <= preQ8.length - 1; i++){
    if(preQ8[i].checked == true){
      responses.push(preQ8[i].value)
    }
  }
  preQ9 = Array.from(document.getElementsByName("q9"))
  for(i = 0; i <= preQ9.length - 1; i++){
    if(preQ9[i].checked == true){
      responses.push(preQ9[i].value)
    }
  }
  preQ10 = Array.from(document.getElementsByName("q10"))
  for(i = 0; i <= preQ10.length - 1; i++){
    if(preQ10[i].checked == true){
      responses.push(preQ10[i].value)
    }
  }
  preQ11 = Array.from(document.getElementsByName("q11"))
  for(i = 0; i <= preQ11.length - 1; i++){
    if(preQ11[i].checked == true || preQ11[i].type == "text"){
      q11.push(preQ11[i].value)
    }
  }
  responses.push(q11)
  preQ12 = Array.from(document.getElementsByName("q12"))
  for(i = 0; i <= preQ12.length - 1; i++){
    if(preQ12[i].checked == true || preQ12[i].type == "text"){
      q12.push(preQ12[i].value)
    }
  }
  responses.push(q12)
  preQ13 = Array.from(document.getElementsByName("q13"))
  for(i = 0; i <= preQ13.length - 1; i++){
    if(preQ13[i].checked == true){
      responses.push(preQ13[i].value)
    }
  }
  preQ14 = Array.from(document.getElementsByName("q14"))
  for(i = 0; i <= preQ14.length - 1; i++){
    responses.push(preQ14[i].value)
  }
  preQ15 = Array.from(document.getElementsByName("q15"))
  for(i = 0; i <= preQ15.length - 1; i++){
    if(preQ15[i].checked == true){
      responses.push(preQ15[i].value)
    }
  }
  responses.push(document.getElementById("q16response").value)
  preQ17 = Array.from(document.getElementsByName("q17"))
  for(i = 0; i <= preQ17.length - 1; i++){
    if(preQ17[i].type == "number" && preQ17[i].value !== ""){
      q17.push(preQ17[i].value)
    }
    else if(preQ17[i].type == "checkbox" && preQ17[i].checked == true){
      q17.push(preQ17[i].value)
    }
  }
  responses.push(q17)
  preQ18casas = Array.from(document.getElementsByName("q18casas"))
  for(i = 0; i <= preQ18casas.length - 1; i++){
    if(preQ18casas[i].checked == true){
      q18.push(preQ18casas[i].value)
    }
  }
  preQ18condominios = Array.from(document.getElementsByName("q18condominios"))
  for(i = 0; i <= preQ18condominios.length - 1; i++){
    if(preQ18condominios[i].checked == true){
      q18.push(preQ18condominios[i].value)
    }
  }
  preQ18lotes = Array.from(document.getElementsByName("q18lotes"))
  for(i = 0; i <= preQ18lotes.length - 1; i++){
    if(preQ18lotes[i].checked == true){
      q18.push(preQ18lotes[i].value)
    }
  }
  responses.push(q18)
  console.log(responses)
  validateInformation(responses)
}
function validateInformation(array) {
  // Error
  if(array.length < 19){
    Swal.fire({
      icon: "error",
      title: "Faltan preguntas por responder",
      confirmButtonColor: "#3085d6"
    })
    personalInformation = []
    q11 = []
    q12 = []
    q15 = []
    q17 = []
    q18 = []
    responses = []
  }
  else if(array.length == 19){
    if(array[0][1] == ""){
      errorAtSendingData("personalInformation")
    }
    else if(array[14] == ""){
      errorAtSendingData("q14")
    }
    else if(array[17].length < 3){
      errorAtSendingData("q17")
    }
    else if(array[18].length < 3){
      errorAtSendingData("q18")
    }
    else {
      sendData(array)
    }
  }
}
function errorAtSendingData(errorType){
  if(errorType == "personalInformation"){
    Swal.fire({
      icon: "error",
      title: "Falta el nombre de la empresa",
      confirmButtonColor: "#3085d6"
    })
  }
  else if(errorType == "q14"){
    Swal.fire({
      icon: "error",
      title: "Falta responder la pregunta 14",
      confirmButtonColor: "#3085d6"
    })
  }
  else if(errorType == "q17"){
    Swal.fire({
      icon: "error",
      title: "Falta algún dato en la pregunta 17",
      confirmButtonColor: "#3085d6"
    })
  }
  else if(errorType == "q18"){
    Swal.fire({
      icon: "error",
      title: "Falta alguna selección en la pregunta 18",
      confirmButtonColor: "#3085d6"
    })
  }
  personalInformation = []
  q11 = []
  q12 = []
  q15 = []
  q17 = []
  q18 = []
  responses = []
}
function sendData(array) {
  Swal.fire({
    title: "Enviando información",
    didOpen: () => {
      Swal.showLoading();
    }
  })
    var data = JSON.stringify({
      nombre: `${array[0][0]}`,
      empresa: `${array[0][1]}`,
      correo: `${array[0][2]}`,
      telefono: `${array[0][3]}`,
      q1: `${array[1]}`,
      q2: `${array[2]}`,
      q3: `${array[3]}`,
      q4: `${array[4]}`,
      q5: `${array[5]}`,
      q6: `${array[6]}`,
      q7: `${array[7]}`,
      q8: `${array[8]}`,
      q9: `${array[9]}`,
      q10: `${array[10]}`,
      q11: `${array[11]}`,
      q12: `${array[12]}`,
      q13: `${array[13]}`,
      q14: `${array[14]}`,
      q15: `${array[15]}`,
      q16: `${array[16]}`,
      q17: `${array[17]}`,
      q18: `${array[18]}`,
      q19: `${array[19]}`,
    });
    // sheet.best
    var config = {
      method: "post",
      url: "https://sheet.best/api/sheets/32aacf91-902e-4e88-8d70-e596b2f41ceb/tabs/encuesta2023",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then((res) => {
        q11 = []
        responses = []
        // console.log(res)
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Información enviada, ya puede cerrar esta ventana",
          showConfirmButton: false,
          confirmButtonColor: "#3085d6",
        });
        document.getElementById("deleteDiv").remove();
        let divToInsertHTMLTags = document.getElementById("divToInsertHTMLTags");
        let notification = document.createElement("div");
        notification.innerHTML = `<h4 class="text-center">Gracias por llenar la encuesta, ya puede cerrar esta ventana.</h4>`;
        divToInsertHTMLTags.insertAdjacentElement("beforeend", notification);
      })
      .catch(async(err) => {
        Swal.fire({
          icon: "error",
          confirmButtonColor: "#3085d6"
        })
      });
}






