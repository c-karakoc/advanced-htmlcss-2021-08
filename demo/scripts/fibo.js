
self.addEventListener('message', e => {
	console.log('worker ontvangt:', e.data);

	let result = fibo(e.data);

	self.postMessage(result);
});

function fibo(n) {
	if (n === 0 || n === 1) {
		return 1;
	}
	return fibo(n - 2) + fibo(n - 1);
}

/*
wat je niet hebt:
- window
- document
- navigator

praktische use cases??
- QR-code
- gezichtsherkenning

Camera API
*/
