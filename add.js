const ENDPOINT = "https://melon-potent-period.glitch.me";

async function postItemData(url, data) {
    try {
		const response = await fetch(url, {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(data),
		});

		alert(response.ok ? "Skill are saved" : "Error");
		if (response.ok) {
			window.location.href = "/index.html";
		}
	} catch (error) {
		console.log(error);
	}

}

document.getElementById("add-skill-button").addEventListener("click", () => {
	const skill = document.getElementById("skill").value;
	if (skill) {
		const data = {
			skill: skill,
		};
		postItemData(ENDPOINT, data);
	} else {
		alert("Type a date");
	}
});


