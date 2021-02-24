(function (global) {
	const dependencies = {
		pokes: "https://pokeapi.co/api/v2/pokemon/",
	};

	async function loadDeps(deps) {
		const ret = {};

		for (const dep in deps) {
			if (Object.hasOwnProperty.call(deps, dep)) {
				const url = deps[dep];

				const storageName = `POKEMON_DEP::${dep}`;

				if (localStorage.getItem(storageName)) {
					ret[dep] = JSON.parse(localStorage.getItem(storageName));
					console.log("[Deps] Cargando desde el Storage: " + dep);
				} else {
					const res = await fetch(url);
					const data = await res.json();

					ret[dep] = data;

					localStorage.setItem(storageName, JSON.stringify(data));

					console.log("[Deps] Cargand desde la red: " + dep);
				}
			}
		}

		return ret;
	}

	function initApp(deps) {
		// Rellenar #contenido
		const template = (id, poke) => {
			const tr = document.createElement("tr");

			const th = document.createElement("th");
			th.setAttribute("scope", "row");
			th.innerHTML = id;
			tr.appendChild(th);

			const td1 = document.createElement("td");
			td1.innerHTML = poke.name;
			tr.appendChild(td1);

			const td2 = document.createElement("td");

			const aTd2 = document.createElement("a");
			aTd2.innerHTML = poke.url;
			aTd2.href = poke.url;
			td2.appendChild(aTd2);

			tr.appendChild(td2);

			return tr;
		};

		const frag = document.createDocumentFragment();
		deps.pokes.results.forEach((poke, i) => {
			const ind = i + 1;
			frag.appendChild(template(ind, poke));
		});

		document.querySelector("#contenido").appendChild(frag);

		// Registrar ServiceWorker

		if ("serviceWorker" in navigator) {
			navigator.serviceWorker.register("sw.js").then((reg) => {
				console.log("SW registrado");
			});
		}

        let dialogo;

        const btnInstalar = document.querySelector('#btnInstalar');

        window.addEventListener('beforeinstallprompt', e => {
            e.preventDefault();
            dialogo = e;
            btnInstalar.disabled = false;
        });

        btnInstalar.addEventListener('click', async () => {
            dialogo.prompt();

            const respuesta = await dialogo.userChoice;

            console.log('RESPUESTA: ',respuesta);
        });
	}

	loadDeps(dependencies).then(initApp);
})(window);
