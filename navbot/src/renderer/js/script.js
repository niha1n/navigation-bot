
// document.addEventListener('DOMContentLoaded', function() {
//   speechSynthesis.addEventListener('voiceschanged', function() {
//     speak("Greetings! Ready to guide you to your destination on our campus.");
//   });
// }); 

// fetch('http://localhost:3000/faculties')
//       .then(response => response.json())
//       .then(data => {
//         console.log(data)
//       })
const cardsContainer = document.querySelector('#cards-container');

document.addEventListener('keydown', function(event) {
  if (event.keyCode === 13) {
      window.location;
  }
});

function deptExpander(dept) {
  const departmentMap = {
    cse: 'Computer Science and Engineering',
    ce: 'Civil Engineering',
    ece: 'Electronics and Communications Engineering',
    eee: 'Electrical and Electronics Engineering',
    me: 'Mechanical Engineering',
    sh: 'Science and Humanities',
    pg: 'M.Tech',
    ad: 'Administration'
  };

  return departmentMap[dept] || 'Non-Teaching Staff';
}

// function speak(text) {
//   // Create a SpeechSynthesisUtterance
//   const utterance = new SpeechSynthesisUtterance(text);

//   // Select a voice
//   const voices = speechSynthesis.getVoices();
//   utterance.voice = voices[3]; // Choose a specific voice

//   // Speak the text
//   speechSynthesis.speak(utterance);
// }

// Establish a WebSocket connection
// Connect to the WebSocket server
const socket = new WebSocket('ws://localhost:8766');  // Change the URL if needed

// Event listener for when the connection is established
socket.onopen = function(event) {
    console.log('WebSocket connection established');
};

// Event listener for when a message is received from the server
socket.onmessage = function(event) {
    console.log('Message from server:', event.data);

    // Handle the message received from the server
    if (event.data === 'face detected') {
        window.location.href = 'demo.html';
    } else if (event.data === 'no face detected') {
        window.location.href = 'clock.html';
    }
};

// Event listener for errors
socket.onerror = function(error) {
    console.error('WebSocket error:', error);
};

// Event listener for when the connection is closed
socket.onclose = function(event) {
    console.log('WebSocket connection closed');
};




function renderCharacters(faculties) {
  faculties.forEach((faculty) => {
    const div = document.createElement('div');
    const name = document.createElement('h3');
    const dept = document.createElement('h3');
    const room = document.createElement('h3');

    div.classList =
      'staffCard rounded-lg bg-gray-200 my-2 p-3 shadow-sm cursor-pointer ';
    name.classList = 'font-bold text-xl text-gray-800';
    dept.classList = 'font-semibold text-lg text-gray-600';
    room.classList = 'font-semibold text-xl text-gray-600';

    name.innerText = ` ${faculty.name} `;
    // dept.innerText = `${faculty.dept=='pg'?deptExpander(faculty.dept).toUpperCase(): 'Dept:'+deptExpander(faculty.dept).toUpperCase() } `;
    dept.innerText = `Dept: ${deptExpander(faculty.dept).toUpperCase()} `;
    room.innerText = ` ${
      faculty.isHall
        ? 'Room No:' + faculty.room_no
        : 'Staff Room: ' + faculty.room_no
    } `;

    div.appendChild(name);
    div.appendChild(dept);
    div.appendChild(room);

    div.addEventListener('click', () => showPopup(faculty)); // Add click event listener to open popup

    cardsContainer.appendChild(div);
  });
}

function showPopup(faculty) {
  // Create a popup div
  const popupDiv = document.createElement('div');
  popupDiv.classList =
    'fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 staffPopup '; // Positioning and styling

  // Create a container div for the popup content
  const popupContainer = document.createElement('div');
  popupContainer.classList = 'bg-white p-8 rounded-lg shadow-lg'; // Styling for the popup container

  // Create content for the popup container
  const popupContent = document.createElement('div');
  popupContent.innerHTML = `
    <h2 class="text-3xl font-bold text-gray-800">${faculty.name}</h2>
    <p class="font-semibold text-2xl text-gray-700">${
      faculty.isHall == "TRUE" ? '' : faculty.designation
    }</p>
    <p class="font-semibold text-2xl text-gray-700">${deptExpander(
      faculty.dept
    )}</p>
    <p class="text-2xl text-gray-700">Room: ${faculty.room_no}</p>
    <div class="btn btn__primary mx-0 my-6 " onclick="window.location.href = './pano/${
      faculty.isHall == "TRUE"
        ? faculty.room_no
        : (faculty.designation.toLowerCase().includes('hod') &&
           !faculty.designation.toLowerCase().includes('ahod'))
        ? 'hod'+faculty.dept
        : faculty.tags.includes('principal')
        ? 'principal'
        : faculty.tags.toLowerCase().includes('viceprincipal')
        ? 'viceprincipal'
        : faculty.tags.toLowerCase().includes('asstbursar')
        ? 'asstbursar'
        : faculty.tags.toLowerCase().includes('bursar')
        ? 'bursar'
        : faculty.room_no.split(' ')[0] + '-block'
    }.html';">
    <ion-icon class="paused  mr-3 " name="play"></ion-icon>
    <p class="text-3xl font-semibold">${
      faculty.isHall == "TRUE"
        ? faculty.room_no
        : faculty.designation
            .toLowerCase()
            .includes('hod') &&
          !faculty.designation
            .toLowerCase()
            .includes('ahod')
        ? faculty.room_no
        : faculty.room_no.split(' ')[0] + ' Block'
    }</p>
                        </div>
  `;


  // speak(
  //   `Staff room of ${faculty.name} is located in ${
  //     faculty.room_no
  //   }. Click on the button for the navigation to ${
  //     faculty.isHall=='TRUE'
  //       ? faculty.room_no
  //       : faculty.room_no.split(' ')[0] + ' Block'
  //   }`
  // );
  speak(  faculty.isHall == "TRUE" ? `${faculty.name} is located in ${
    faculty.room_no.split(' ')[0]
  } Block. Click on the button for the navigation to ${
    faculty.name
  } ` :`Staff room of ${faculty.name} is located in ${
    faculty.room_no
  }. Click on the button for the navigation to ${faculty.room_no.split(' ')[0] + ' Block'}`)



  // Append popup content to the container
  popupContainer.appendChild(popupContent);

  // Append the container to the popup div
  popupDiv.appendChild(popupContainer);

  // Append popup div to the body
  document.body.appendChild(popupDiv);

  // Close the popup when clicked outside of it
  popupDiv.addEventListener('click', (event) => {
    if (event.target === popupDiv) {
      // Check if the click occurred on the popup div itself
      document.body.removeChild(popupDiv);
    }
  });
}

fetch('http://localhost:3000/faculties')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((facultiesData) => {
    faculties = facultiesData; // Store fetched faculties in a variable
    renderCharacters(faculties); // Initial rendering of all faculties
  })
  .catch((error) => console.error('Error fetching data:', error));

function renderFilteredCharacters(filteredFaculties) {
  // Clear previous cards
  cardsContainer.innerHTML = '';
  renderCharacters(filteredFaculties);
}

document.getElementById('tab-1').addEventListener('click', function () {
  renderFilteredCharacters(faculties);
});

document.getElementById('tab-2').addEventListener('click', function () {
  const filteredFaculties = faculties.filter(
    (faculty) => faculty.dept === 'ce'
  );
  renderFilteredCharacters(filteredFaculties);
});

document.getElementById('tab-3').addEventListener('click', function () {
  const filteredFaculties = faculties.filter(
    (faculty) => faculty.dept === 'cse'
  );
  renderFilteredCharacters(filteredFaculties);
});

document.getElementById('tab-4').addEventListener('click', function () {
  const filteredFaculties = faculties.filter(
    (faculty) => faculty.dept === 'ece'
  );
  renderFilteredCharacters(filteredFaculties);
});

document.getElementById('tab-5').addEventListener('click', function () {
  const filteredFaculties = faculties.filter(
    (faculty) => faculty.dept === 'eee'
  );
  renderFilteredCharacters(filteredFaculties);
});

document.getElementById('tab-6').addEventListener('click', function () {
  const filteredFaculties = faculties.filter(
    (faculty) => faculty.dept === 'me'
  );
  renderFilteredCharacters(filteredFaculties);
});

document.getElementById('tab-7').addEventListener('click', function () {
  const filteredFaculties = faculties.filter(
    (faculty) => faculty.dept === 'sh'
  );
  renderFilteredCharacters(filteredFaculties);
});

const inputField = document.getElementById('searchInput');

// inputField.addEventListener('input', function(event) {
//   const searchString = event.target.value.toLowerCase().trim();

//   // Filter the faculties array based on the input
//   const matchingFaculties = faculties.filter(faculty =>
//       faculty.name.toLowerCase().includes(searchString)
//   );
//   // Display matching names as suggestions
//   renderFilteredCharacters(matchingFaculties)
// });

// inputField.addEventListener('input', function(event) {
//   const searchString = event.target.value.toLowerCase().trim();

//   // Filter the faculties array based on the input
//   const matchingFaculties = faculties.filter(faculty => {
//     // Ensure that faculty object has all the required properties
//     if (faculty && faculty.name && faculty.dept && faculty.room_no && faculty.designation) {
//       return faculty.name.toLowerCase().includes(searchString) ||
//         faculty.dept.toLowerCase().includes(searchString) ||
//         faculty.room_no.toLowerCase().includes(searchString) ||
//         faculty.designation.toLowerCase().includes(searchString);
//     }
//     return false; // If any required property is missing, exclude this faculty
//   });

//   // Display matching names as suggestions
//   renderFilteredCharacters(matchingFaculties);
// });

inputField.addEventListener('input', function (event) {
  const searchString = event.target.value.toLowerCase().trim();

  // Split the search string into separate tokens based on space
  const searchTokens = searchString.split(' ');

  // Filter the faculties array based on the input
  const matchingFaculties = faculties.filter((faculty) => {
    // Ensure that faculty object has all the required properties
    if (
      faculty &&
      faculty.name &&
      faculty.dept &&
      faculty.room_no &&
      faculty.designation &&
      faculty.department
    ) {
      // Check if any token matches with department, room_no, designation, or name
      return searchTokens.every(
        (token) =>
          faculty.name.toLowerCase().includes(token) ||
          faculty.dept.toLowerCase().includes(token) ||
          faculty.department.toLowerCase().includes(token) ||
          faculty.room_no.toLowerCase().includes(token) ||
          faculty.designation.toLowerCase().includes(token)
      );
    }
    return false; // If any required property is missing, exclude this faculty
  });

  // Display matching names as suggestions
  renderFilteredCharacters(matchingFaculties);
});
