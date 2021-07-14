function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    let a = document.forms["myForm"]["pnumber"].value;
    let b = document.forms["myForm"]["subject"].value;
    let c = document.forms["myForm"]["subject1"].value;
    if (x == "" || a =="" || b == "" || c == "") {
      alert("Form Submission Failed,Incomplete Fields");
      return false;
    }
   
  }
  