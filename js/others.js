function showAlert() {
  alert("0523838473 | Gtbank | Samuel Winner Ebuka . Once you've paid, tell us, so it will be confirmed immediately.🌬️🌬️");
}
              
               function sendwhatsapp() {
            var phonenumber = "+2347048280029";
            var name = document.querySelector("#name").value;
            var email = document.querySelector("#email").value;
            var pnumber = document.querySelector("#pnumber").value;
            var university = document.querySelector("#university").value;
            var department = document.querySelector("#department").value;
            var level = document.querySelector("#level").value;
            var ges = document.querySelector("#ges").value;

            var url = "https://wa.me/" + phonenumber + "?text=" +
                "*Name:* " + name + "%0a" +
                "*Email:* " + email + "%0a" +
                "*Phone Number:* " + pnumber + "%0a" +
                "*University:* " + university + "%0a" +
                "*Department:* " + department + "%0a" +
                "*Level:* " + level + "%0a" +
                "*Which GES are you requesting for:* " + ges + "%0a" +
                "Good day, This are my details and I need MyGesHub";

            window.open(url, "_blank").focus();
        }
