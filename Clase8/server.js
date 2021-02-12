const /**
	 * Acceso a rutas
	 */
	path = require("path"),
	/**
	 * Librería express
	 */
	express = require("express"),
	/**
	 * Para acceso de distinto origen
	 */
	cors = require("cors"),
	/**
	 * Core de Web Push
	 */
	webPush = require("web-push"),
	/**
	 * VAPID Keys
	 */
	keys = {
		publicKey:
			"BKqN2N4a1KbvDworXGT7dnXOXH-P1rPT06fQVpojF5q_k0iAlxLmx9mpfwRCbaNKaUaGflHsZtKZNlKsk1IDnF8",
		privateKey: "9IUHplJM2SBsPni87CvoaBGFrRtSBrBPp7rks6PGugI",
	};

webPush.setVapidDetails('mailto:prfsebastianledesma@gmail.com', keys.publicKey, keys.privateKey);
/**
 * Aplicación Express
 */
server = express();

server.use(cors());
server.use(express.json());
server.use(express.static(path.join(__dirname, "public")));

server.get("/posts", function (req, res) {
	res.send([
		{ id: 1, titulo: "Titulo 1" },
		{ id: 2, titulo: "Titulo 2" },
	]);
});

server.post("/push", function (req, res) {
	// Subscribir
    webPush.sendNotification(req.body, 'Hola mundo', {});

    res.send({ ok: true }); 
});

server.listen(3000, () =>
	console.log("Servidor ejecutandose en http://localhost:3000")
);
