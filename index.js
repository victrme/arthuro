function filtreArrayOfFrenchWords(raw) {
	const result = []
	const cas = ['in', 'im', 'ain', 'aim', 'un', 'en', 'ein', 'ym']

	raw.forEach((mot) => {
		let passe = false
		cas.forEach((syllabe) => {
			if (mot.endsWith(syllabe) && !passe) {
				passe = true
				result.push(mot)
			}
		})
	})

	return result
}

window.onload = function () {
	const index = Math.floor(Math.random() * liste.length)
	const mot = liste[index] + 'g'
	let found = []

	//
	// Gère le compteur
	//

	// first startup
	if (localStorage.found !== undefined) {
		found = JSON.parse(localStorage.found)
	}

	// Ajoute a la liste si jamais rencontré
	if (!found.some((a) => a === index)) {
		found.push(index)
		localStorage.found = JSON.stringify(found)
	}

	// Colori d'une mechante couleur si le mot déjà vu
	else document.querySelector('h1').style.color = 'lightcoral'

	//
	// Affiche le mot
	//

	document.querySelector('h1').textContent = mot
	document.querySelector('title').textContent = 'Arthuro.org - ' + mot
	document.querySelector('p').textContent = `${found.length} / ${liste.length}`
}
