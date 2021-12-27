function printPDF() { 
    var element = document.getElementById('cv');
        html2pdf(element, {
          filename:'cv.pdf',
          image: { type: 'jpeg', quality: 1 },
          jsPDF: {format: 'a4', orientation: 'p'}
        });
    }