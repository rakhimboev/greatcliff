// array of partner image data (src and alt text)
const partners = [
    ["images/partners/partner-bustour.png", "Partner Bus Tours"],
    ["images/partners/partner-cabinrental.png", "Partner Cabin Rental"],
    ["images/partners/partner-campingadv.png", "Partner Camping Adventure"],
    ["images/partners/partner-collegetours.png", "Partner College Tours"],
    ["images/partners/partner-rentalbike.png", "Partner Bike Rentals"],
    ["images/partners/partner-tourgroup.png", "Partner Tour Group"]
];

// getting the <ul> element by its ID 'partners'
const partnerList = document.getElementById('partners');

//looping through the array of partners
for (let i = 0; i < partners.length; i++) {
    // creating <li> element with class 'partner'
    const li = document.createElement('li');
    li.className = 'partner';

    // creating <img> element and set its src and alt attributes
    const img = document.createElement('img');
    img.src = partners[i][0];  // src from the array
    img.alt = partners[i][1];  // alt text from the array

    // appending the <img> to the <li>
    li.appendChild(img);

    // appending the <li> to the <ul> element
    partnerList.appendChild(li);
}
