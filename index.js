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

	document.querySelector('h1').textContent = mot
	document.querySelector('title').textContent = 'Arthuro.org - ' + mot

	console.log(liste)
}
