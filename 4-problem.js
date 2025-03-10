const usersContainer = document.getElementById("users-container");

async function fetchUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    displayUsers(users); 
}

function displayUsers(users) {
    usersContainer.innerHTML = "";
    users.forEach(user => {
        const userCard = document.createElement("div");
        userCard.classList.add("user-card");
        userCard.innerHTML = `
            <div class="card">
                <h2>${user.name}</h2>
                <p>@${user.username}</p>
                <p>📧 <a href="mailto:${user.email}">${user.email}</a></p>
                <p>📞 <a href="tel:${user.phone}">${user.phone}</a></p>
                <p>🔗 <a href="http://${user.website}" target="_blank">${user.website}</a></p>
                <p>🏢 ${user.company.name}</p>
                <p>📍 Address: ${user.address.suite}, ${user.address.street}, ${user.address.city}, ${user.address.zipcode}</p>
                <p>🌐 Geo: Lat ${user.address.geo.lat}, Lng ${user.address.geo.lng}</p>
            </div>
        `;
        usersContainer.appendChild(userCard);
    });
}

fetchUsers();
