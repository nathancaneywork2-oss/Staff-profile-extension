const headerRows = document.querySelectorAll('.resultsGroupHeader td')

//Add the copy training button and it's event lisstener if it doesn't exists
if (document.querySelector('.rowCopy') == null) {
    headerRows.forEach((row)=>{
        row.insertAdjacentHTML('beforeend', `
            <style>
                .rowCopy{
                    float: right; 
                    background: rgba(255,255,255, 1);
                    height: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.25s;
                    border: none;
                }

                .rowCopy:hover{
                    background: rgba(82, 139, 231, 0.5);
                    color: rgb(255,255,255, 1);
                }
            </style>
        
            <button class="rowCopy"><i class="fa-solid fa-copy rowCopy"></i></button>
        `)
    })

    document.addEventListener('click', (e)=>{
        if (e.target.classList.contains('rowCopy')) {
            const headingRow = e.target.closest('.resultsGroupHeader')
            let string = ''

            let currentRow = headingRow.nextElementSibling

            while (currentRow && currentRow.classList.contains('resultsTableRow')) {
                const cells = currentRow.querySelectorAll('.resultsTableCell')
                const courseTitle = cells[7]?.textContent.trim() || ''
                const courseDate = cells[8]?.textContent.trim() || ''
                string += `• ${courseTitle}\t${courseDate} \n`
                currentRow = currentRow.nextElementSibling
            }

            console.log(string)
            navigator.clipboard.writeText(string)
        }
    })
}
