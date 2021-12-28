// @ts-nocheck
function printPDF() { 
    var element = document.getElementById('cv');
        html2pdf(element, {
          filename:'cv.pdf',
          image: { type: 'jpeg', quality: 1 },
          jsPDF: { 
            orientation: 'p',
            format: 'a4',
            unit: 'mm',
          }
        });
    }