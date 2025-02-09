const htmlContent = document.body;

function printContent() {
    window.print();
}   

function downloadContent() {
const element = document.getElementById('document');
if (element) {
	const options = {
	    filename: 'Rob_Lingle_Resume.pdf',   
		margin: 0.5,   
		image: { type: 'jpeg', quality: 0.98 },
		html2canvas: { scale: 2 },
		pagebreak: { avoid: 'li'},
		jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
	};

	if (typeof html2pdf !== 'undefined') {
		html2pdf().set(options).from(element).save();
	} else {
		console.error("html2pdf library is not loaded.");
	}
} else {
	console.error("Element with ID 'document' not found.");
}
}
