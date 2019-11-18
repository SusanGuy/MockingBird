const createElement = name => {
    return document.createElement(name);
};

//main Div
const contentDiv = createElement("div");
contentDiv.setAttribute("class", "modal-contents");

//div for closing icon
const closeDiv = createElement("div");
closeDiv.setAttribute("id", "closeTab");
closeDiv.setAttribute("class", "close");
closeDiv.textContent = "+";

//image for the pop up box
const image = createElement("img");
image.setAttribute(
    "src",
    "https://cdn.dribbble.com/users/67979/screenshots/2103444/mockingbird-cover.jpg"
);
image.setAttribute("alt", "charity logo");

//form for donation
const form = createElement("form");

//donation amount option to choose from
const select = createElement("select");
select.setAttribute("id", "select");
const option1 = createElement("option");
option1.setAttribute("value", "donation");
option1.textContent = "Select your Donation Amount";

const option2 = createElement("option");
option2.setAttribute("value", "ten");
option2.textContent = "$10";

const option3 = createElement("option");
option3.setAttribute("value", "fifty");
option3.textContent = "$50";

const option4 = createElement("option");
option4.setAttribute("value", "hundred");
option4.textContent = "$100";

//donator name
const input = createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "donatorName");
input.setAttribute("placeholder", "Your Name");

//errorMessageDiv
const error = createElement("div");
error.setAttribute("id", "error");
error.setAttribute("class", "error");

//donate button
const anchor = createElement("a");
anchor.setAttribute("href", "#");
anchor.setAttribute("id", "donateButton");
anchor.setAttribute("class", "button");
anchor.textContent = "Donate";

contentDiv.appendChild(closeDiv);
contentDiv.appendChild(image);
contentDiv.appendChild(form);

select.appendChild(option1);
select.appendChild(option2);
select.appendChild(option3);
select.appendChild(option4);

form.appendChild(select);
form.appendChild(input);
form.appendChild(error);
form.appendChild(anchor);

document.querySelector("#button").addEventListener("click", e => {
    const model = document.querySelector("#bgModal");
    model.setAttribute("class", "bg-modal");
    document.querySelector("#bgModal").style.display = "flex";
    model.appendChild(contentDiv);

    document.querySelector("#donateButton").addEventListener("click", e => {
        const donation = document.querySelector("#select");
        const donatorNameField = document.querySelector("#donatorName");
        const donatorName = donatorNameField.value;
        const donationAmount = donation.value;
        if (donationAmount === "donation") {
            document.querySelector("#error").textContent =
                "Please select a valid donation amount!";
        } else if (donatorName === "") {
            document.querySelector("#error").textContent =
                "Please enter the Donator Name!";
        } else {
            document.querySelector("#donatorName").value = "";
            document.querySelector("#select").value = "donation";
            document.querySelector(
                "#error"
            ).textContent = `Hey ${donatorName}. Thank you for the donation!`;
            document.querySelector("#error").style.color = "blue";
        }
    });
    document.querySelector("#closeTab").addEventListener("click", e => {
        document.querySelector("#error").textContent = "";
        document.querySelector("#bgModal").style.display = "none";
    });
});