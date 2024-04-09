document.addEventListener("DOMContentLoaded", function () {
  
  let data = {
    accordion: [
      {
        image: "http://dev-ict-drupal.oslabs.app/sites/default/files/2023-07/onboard-activities-activities-fitness-large-c037.jpg.image_.1440.524.high_.jpg",
        start_date: "MAR 5",
        end_date: "MAR 6",
        lat: "-80.137314",
        lng: "18.3381",
        event_body: "Walk the gold stone streets of Old City Jerusalem and meet Israelis shopping with you in the marketplace. Leave your own prayer at the Western Wall as you stand beside God’s chosen people at the holiest site in Jerusalem. Behold the famous Temple Mount; pray in the Garden of Gethsemane; sing in the Upper Room. Stand on the Mount of Olives and gaze at the gate that Jesus will walk through when He returns. Enjoy another delicious Mediterranean dinner recounting the day’s adventure with new friends. Sites you’ll see include: · Southern Steps · Davidson Center · Western Wall &amp; Plaza · Jewish Quarter &amp; Cardo · Arab Quarter · Christian Quarter · Church of the Holy Sepulchre · Via Dolorosa · Sisters of Zion · Saint Anne’s Church · Pool of Bethesda · Armenian Quarter · Mount Zion · Upper Room · Saint Peter’s in Gallicantu · Mount of Olives · Temple Mount View · Palm Sunday Road · Dominus Flevit · Garden of Gethsemane &amp; Church of All Nations · Garden Tomb · Antonia Fortress · City of David · Friends of Zion Heritage Center · Herodium",
        day_number: "1",
        location_name: "Location",
        stop_name: null
      },
      {
        image: "http://dev-ict-drupal.oslabs.app/sites/default/files/2023-06/ShipDetails-4%20%281%29_0.png",
        start_date: "MAR 6",
        end_date: "MAR 9",
        lat: "-80.137314",
        lng: "26.122438",
        event_body: "There is a security update available for your version of Drupal. To ensure the security of your server, you should update immediately! See the available updates page for more information and to install your missing updates.There is a security update available for your version of Drupal. To ensure the security of your server, you should update immediately! See the available updates page for more information and to install your missing updates.There is a security update available for your version of Drupal. To ensure the security of your server, you should update immediately! See the available updates page for more information and to install your missing updates.",
        day_number: "2",
        location_name: "Location",
        stop_name: null
      },
      {
        image: "http://dev-ict-drupal.oslabs.app/sites/default/files/2023-06/Cruises%201.jpg",
        start_date: "MAR  9",
        end_date: "MAR 11",
        lat: "-64.8941",
        lng: "18.3381",
        event_body: "Format: 2023-06-13 09:29:05. Leave blank to use the time of form submission.Format: 2023-06-13 09:29:05. Leave blank to use the time of form submission.Format: 2023-06-13 09:29:05. Leave blank to use the time of form submission.Format: 2023-06-13 09:29:05. Leave blank to use the time of form submission.Format: 2023-06-13 09:29:05. Leave blank to use the time of form submission.",
        day_number: "3",
        location_name: "Location",
        stop_name: null
      },
      {
        image: "http://dev-ict-drupal.oslabs.app/sites/default/files/2023-06/image--gallery-2.png",
        start_date: "MAR 12",
        end_date: "MAR 14",
        lat: "-66.1185",
        lng: "18.4671",
        event_body: "TestThere is a security update available for your version of Drupal. To ensure the security of your server, you should update immediately! See the available updates page for more information and to install your missing updates.There is a security update available for your version of Drupal. To ensure the security of your server, you should update immediately! See the available updates page for more information and to install your missing updates.",
        day_number: "4",
        location_name: "Location",
        stop_name: null
      },
      {
        image: "http://dev-ict-drupal.oslabs.app/sites/default/files/2023-06/Cruises%202_1.jpg",
        start_date: "MAR 15",
        end_date: "MAR 16",
        lat: "-71.1389",
        lng: "21.4675",
        event_body: "Itinerary 2There is a security update available for your version of Drupal. To ensure the security of your server, you should update immediately! See the available updates page for more information and to install your missing updates.There is a security update available for your version of Drupal. To ensure the security of your server, you should update immediately! See the available updates page for more information and to install your missing updates.There is a security update available for your version of Drupal. To ensure the security of your server, you should update immediately! See the available updates page for more information and to install your missing updates.",
        day_number: "5",
        location_name: "Location",
        stop_name: null
      },
      {
        image: "http://dev-ict-drupal.oslabs.app/sites/default/files/2023-04/cruise%20image%203_3.jpg",
        start_date: "MAR 17",
        end_date: "MAR 18",
        lat: "-75.9603729",
        lng: "24.5712",
        event_body: "There is a security update available for your version of Drupal. To ensure the security of your server, you should update immediately! See the available updates page for more information and to install your missing updates.There is a security update available for your version of Drupal. To ensure the security of your server, you should update immediately! See the available updates page for more information and to install your missing updates.There is a security update available for your version of Drupal. To ensure the security of your server, you should update immediately! See the available updates page for more information and to install your missing updates.There is a security update available for your version of Drupal. To ensure the security of your server, you should update immediately! See the available updates page for more information and to install your missing updates.",
        day_number: "6",
        location_name: "Location",
        stop_name: "Switzland"

      },
    ],
    depart_text: "MAR 5, 2023",
    conclude_text: "MAR 16, 2023",
    title: "7 - DAY ITINERARY",
  };

  var map = L.map("map").setView([21.4675, -75.9603729], 4);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    maxZoom: 18,
  }).addTo(map);

  const accorDion = document.getElementById("accordion");
  accorDion.innerHTML = "";
  data.accordion.forEach((element, i) => {
    var customIcon = L.divIcon({
      className: "custom-icon",
      html:
        '<span class="circle-marker">' +
        "Day: " +
        element.day_number +
        "</span>",
      iconSize: [50, 50],
    });

    L.marker([parseFloat(element.lng), parseFloat(element.lat)], {
      icon: customIcon,
    }).addTo(map);

    accorDion.innerHTML += `<div>
        <input type="checkbox" name="example_accordion" id="${i}" class="accordion__input">
        <label for="${i}" class="accordion__label">DAY ${element.day_number}</label>
        <div class="accordion__content">
          <img src="${element.image}"/>
          <p>
            ${element.event_body}
          </p>
        </div>
      </div>`;
  });

  const radioButtons = document.querySelectorAll(".accordion__input");
  radioButtons.forEach((radioButton) => {
    radioButton.addEventListener("click", handleRadioButtonClick)
    

  });
 
function handleRadioButtonClick(event) {
  const clickedRadioButton = event.target;
  console.log(clickedRadioButton);
  

  if (clickedRadioButton.checked) {
      const dayIndex = parseInt(clickedRadioButton.id);
      const location = data.accordion[dayIndex];

      map.flyTo([parseFloat(location.lng), parseFloat(location.lat)], 10, {
          animate: true,
          duration: 1.2  
      });
  } else {
      
      map.flyTo([21.4675,-75.9603729 ], 4, {
          animate: true,
          duration: 1  
      });
  }
}




});
