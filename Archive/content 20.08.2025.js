setTimeout(()=> {

const buttonContainer = document.querySelector('.FormHeaderControlsBarNonSaveButtons')

if (buttonContainer) {
    const extensionButton = `<button style="background: rgb(255,255,255); border-radius: 3px;" class="FormButton extensionButton"><i class="fa-regular fa-file-lines"></i>Staff Profile</button>`

    const hasExtensionButton = buttonContainer.querySelector('.extensionButton') !== null;

    if (!hasExtensionButton) {
        buttonContainer.insertAdjacentHTML('afterbegin', extensionButton)    
    }

    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('extensionButton') || e.target.classList.contains('fa-file-lines')) {
            
            const tableElements = document.querySelectorAll('.SummaryTableCellInner')

            if (tableElements) {
                const tableElementsArray = Array.from(tableElements)

                //Get the values for Basic Life Support Adults
                const blsCell = tableElementsArray.find(e => e.textContent.trim() === 'Basic Life Support Adults')
                const blsParentCell = blsCell.parentElement.parentElement
                const blsParentCellArray = Array.from(blsParentCell.children)
                const blsProvider = blsParentCellArray[2].querySelector('.SummaryTableCellInner').innerText
                const blsExpireDate = blsParentCellArray[3].querySelector('.SummaryTableCellInner').innerText
                const blsCompletionYear = parseInt(blsExpireDate.substring(6,10)) - 1
                const blsCompletionDate = blsExpireDate.substring(0,6) + blsCompletionYear
            
                //Get the values for Basic Life Support Paediatrics
                const plsCell = tableElementsArray.find(e => e.textContent.trim() === 'Basic Life Support Paediatrics')
                const plsParentCell = plsCell.parentElement.parentElement
                const plsParentCellArray = Array.from(plsParentCell.children)
                const plsProvider = plsParentCellArray[2].querySelector('.SummaryTableCellInner').innerText
                const plsExpireDate = plsParentCellArray[3].querySelector('.SummaryTableCellInner').innerText
                const plsCompletionYear = parseInt(plsExpireDate.substring(6,10)) - 1
                const plsCompletionDate = plsExpireDate.substring(0,6) + plsCompletionYear

                //Get the values for Medication Online
                const medCell = tableElementsArray.find(e => e.textContent.trim() === 'Medication Online')
                const medParentCell = medCell.parentElement.parentElement
                const medParentCellArray = Array.from(medParentCell.children)
                const medProvider = medParentCellArray[2].querySelector('.SummaryTableCellInner').innerText
                const medExpireDate = medParentCellArray[3].querySelector('.SummaryTableCellInner').innerText
                const medCompletionYear = parseInt(medExpireDate.substring(6,10)) - 1
                const medCompletionDate = medExpireDate.substring(0,6) + medCompletionYear

                //Get the values for Safeguarding Children
                const cplCell = tableElementsArray.find(e => e.textContent.trim() === 'Safeguarding Children Level 3')
                const cplParentCell = cplCell.parentElement.parentElement
                const cplParentCellArray = Array.from(cplParentCell.children)
                const cplProvider = cplParentCellArray[2].querySelector('.SummaryTableCellInner').innerText
                const cplExpireDate = cplParentCellArray[3].querySelector('.SummaryTableCellInner').innerText
                const cplCompletionYear = parseInt(cplExpireDate.substring(6,10)) - 1
                const cplCompletionDate = cplExpireDate.substring(0,6) + cplCompletionYear

                //Get the values for Food Hygiene
                const foodCell = tableElementsArray.find(e => e.textContent.trim() === 'Food hygiene')
                const foodParentCell = foodCell.parentElement.parentElement
                const foodParentCellArray = Array.from(foodParentCell.children)
                const foodProvider = foodParentCellArray[2].querySelector('.SummaryTableCellInner').innerText
                const foodExpireDate = foodParentCellArray[3].querySelector('.SummaryTableCellInner').innerText
                const foodCompletionYear = parseInt(foodExpireDate.substring(6,10)) - 1
                const foodCompletionDate = foodExpireDate.substring(0,6) + foodCompletionYear

                //Get the values for Moving and Handling
                const mhCell = tableElementsArray.find(e => e.textContent.trim() === 'Moving and Handling (Practical)')
                const mhParentCell = mhCell.parentElement.parentElement
                const mhParentCellArray = Array.from(mhParentCell.children)
                const mhProvider = mhParentCellArray[2].querySelector('.SummaryTableCellInner').innerText
                const mhExpireDate = mhParentCellArray[3].querySelector('.SummaryTableCellInner').innerText
                const mhCompletionYear = parseInt(mhExpireDate.substring(6,10)) - 1
                const mhCompletionDate = mhExpireDate.substring(0,6) + mhCompletionYear

                //Get the values for Epilepsy Awareness
                const epilepsyCell = tableElementsArray.find(e => e.textContent.trim() === 'Epilepsy')
                const epilepsyParentCell = epilepsyCell.parentElement.parentElement
                const epilepsyParentCellArray = Array.from(epilepsyParentCell.children)
                const epilepsyProvider = epilepsyParentCellArray[2].querySelector('.SummaryTableCellInner').innerText
                const epilepsyExpireDate = epilepsyParentCellArray[3].querySelector('.SummaryTableCellInner').innerText
                const epilepsyCompletionYear = parseInt(epilepsyExpireDate.substring(6,10)) - 1
                const epilepsyCompletionDate = epilepsyExpireDate.substring(0,6) + epilepsyCompletionYear

                //Get the values for County Lines
                const countyCell = tableElementsArray.find(e => e.textContent.trim() === 'County Lines and knife crime')
                const countyParentCell = countyCell.parentElement.parentElement
                const countyParentCellArray = Array.from(countyParentCell.children)
                const countyProvider = countyParentCellArray[2].querySelector('.SummaryTableCellInner').innerText
                const countyExpireDate = countyParentCellArray[3].querySelector('.SummaryTableCellInner').innerText
                const countyCompletionYear = parseInt(countyExpireDate.substring(6,10)) - 1
                const countyCompletionDate = countyExpireDate.substring(0,6) + countyCompletionYear

                //Get the values for Child Sexual Exploitation
                const cseCell = tableElementsArray.find(e => e.textContent.trim() === 'Child sexual exploitation')
                const cseParentCell = cseCell.parentElement.parentElement
                const cseParentCellArray = Array.from(cseParentCell.children)
                const cseProvider = cseParentCellArray[2].querySelector('.SummaryTableCellInner').innerText
                const cseExpireDate = cseParentCellArray[3].querySelector('.SummaryTableCellInner').innerText
                const cseCompletionYear = parseInt(cseExpireDate.substring(6,10)) - 1
                const cseCompletionDate = cseExpireDate.substring(0,6) + cseCompletionYear

                //Get the values for Substance Misuse
                const substanceCell = tableElementsArray.find(e => e.textContent.trim() === 'Substance Misuse')
                const substanceParentCell = substanceCell.parentElement.parentElement
                const substanceParentCellArray = Array.from(substanceParentCell.children)
                const substanceProvider = substanceParentCellArray[2].querySelector('.SummaryTableCellInner').innerText
                const substanceExpireDate = substanceParentCellArray[3].querySelector('.SummaryTableCellInner').innerText
                const substanceCompletionYear = parseInt(substanceExpireDate.substring(6,10)) - 1
                const substanceCompletionDate = substanceExpireDate.substring(0,6) + substanceCompletionYear

                //Get the values for PMVA
                const PMVACell = tableElementsArray.find(e => e.textContent.trim() === 'PMVA (Practical)')
                const PMVAParentCell = PMVACell.parentElement.parentElement
                const PMVAParentCellArray = Array.from(PMVAParentCell.children)
                const PMVAProvider = PMVAParentCellArray[2].querySelector('.SummaryTableCellInner').innerText
                const PMVAExpireDate = PMVAParentCellArray[3].querySelector('.SummaryTableCellInner').innerText
                const PMVACompletionYear = parseInt(PMVAExpireDate.substring(6,10)) - 1
                const PMVACompletionDate = PMVAExpireDate.substring(0,6) + PMVACompletionYear

                //Get the values for Oliver McGowan
                const omCell = tableElementsArray.find(e => e.textContent.trim() === 'Oliver McGowan')
                const omParentCell = omCell.parentElement.parentElement
                const omParentCellArray = Array.from(omParentCell.children)
                const omProvider = omParentCellArray[2].querySelector('.SummaryTableCellInner').innerText
                const omExpireDate = omParentCellArray[3].querySelector('.SummaryTableCellInner').innerText
                const omCompletionYear = parseInt(omExpireDate.substring(6,10)) - 1
                const omCompletionDate = omExpireDate.substring(0,6) + omCompletionYear
                
                const profileHTML = `
                    <style>
                        .profile__mask{
                            z-index: 9999999;
                            width: 100%;
                            height: 100vh;
                            position: fixed;
                            top: 0;
                            left: 0;
                            animation: fadein 0.25s forwards;
                        }

                        @keyframes fadein{
                            0%{
                                background-color: rgb(0, 0, 0, 0);
                                backdrop-filter: blur(0px);
                            }

                            100%{
                                background-color: rgb(0, 0, 0, 0.5);
                                backdrop-filter: blur(5px);
                            }
                        }

                        @keyframes fadeinPage{
                            0%{
                                background-color: rgb(255, 255, 255, 0.5);
                                transform: scale(0.7);
                            }
                            100%{
                                background-color: rgb(255, 255, 255, 1);
                                transform: scale(1);
                            }
                        }

                        .profile__downloadButton{
                            margin: 1rem auto;
                            display: block;
                            width: 55px;
                            height: 55px;
                            background: rgb(255, 255, 255, 0.9);
                            border: none;
                            border-radius: 100%;
                            transition: all 0.2s;
                        }

                        .profile__downloadButton:hover{
                            background: rgb(255, 255, 255, 1);
                        }

                        .profile__page {
    			    width: 698px;             /* A4 width at 96dpi */
    			    margin: 20px auto;
    			    background: #fff;
   			    padding: 0px;
			    border-radius: 5px;
			    box-sizing: border-box;
			    font-family: Arial, sans-serif;
			    font-size: 12pt;
 			    color: #000;
			    border: 2px solid green;
			    over-flow-x: hidden
			}

			.training-table {
			    width: 100%;
			    border-collapse: collapse;
 			    margin-top: 10px;
			}

			.training-table th, .training-table td {
			    border: 1px solid #000;
			    padding: 8px 12px;
			    text-align: left;
			    font-size: 11pt;
			}

			.training-table th {
			    background-color: #f2f2f2;
			    font-weight: bold;
			}

			.training-table tr {
			    page-break-inside: avoid;  /* prevent rows splitting across pages */
			    break-inside: avoid;
			}

			@media print {
			    .profile__mask { display: none !important; }
			    .profile__page {
			        width: 100% !important;
 			        min-height: auto !important;
			        margin: 0;
			        padding: 0px;
			        border-radius: 0;
			        box-shadow: none;
			    }
			}

                    
                    </style>
                
                    <div class="profile__mask">
                        <button class="profile__downloadButton"><i style="font-size: 25px;" class="fa-solid fa-file-arrow-down"></i></button>
                        <div class="profile__page">
                          <table class="training-table">
                            <thead>
                                <tr>
                                    <th>Name of the training</th>
                                    <th>Provider</th>
                                    <th>Date Completed</th>
                                    <th>Expire Date</th>
                                </tr>
                            </thead>
                        
                            <tbody>
                              <tr> <td>Basic Life Support Adults</td> <td>${blsProvider}</td> <td>${blsCompletionDate}</td> <td>${blsExpireDate}</td> </tr>
                              <tr> <td>Basic Life Support Paediatrics</td> <td>${plsProvider}</td> <td>${plsCompletionDate}</td> <td>${plsExpireDate}</td> </tr>
                              <tr> <td>Moving &amp; Handling</td> <td>${mhProvider}</td> <td>${mhCompletionDate}</td> <td>${mhExpireDate}</td> </tr>
                              <tr> <td>Safeguarding Children</td> <td>${cplProvider}</td> <td>${cplCompletionDate}</td> <td>${cplExpireDate}</td> </tr>
                              <tr> <td>Food Hygiene</td> <td>${foodProvider}</td> <td>${foodCompletionDate}</td> <td>${foodExpireDate}</td> </tr>
                              <tr> <td>Epilepsy Awareness</td> <td>${epilepsyProvider}</td> <td>${epilepsyCompletionDate}</td> <td>${epilepsyExpireDate}</td> </tr>
                              <tr> <td>County Lines and Knife Crime</td> <td>${countyProvider}</td> <td>${countyCompletionDate}</td> <td>${countyExpireDate}</td> </tr>
                              <tr> <td>Child Sexual Exploitation</td> <td>${cseProvider}</td> <td>${cseCompletionDate}</td> <td>${cseExpireDate}</td> </tr>
                              <tr> <td>Substance Misuse</td> <td>${substanceProvider}</td> <td>${substanceCompletionDate}</td> <td>${substanceExpireDate}</td> </tr>
                              <tr> <td>Medication</td> <td>${medProvider}</td> <td>${medCompletionDate}</td> <td>${medExpireDate}</td> </tr>
                              <tr> <td>Oliver McGowan</td> <td>${omProvider}</td> <td>${omCompletionDate}</td> <td>${omExpireDate}</td> </tr>
                              <tr> <td>De-escalation/Physical Intervention</td> <td>${PMVAProvider}</td> <td>${PMVACompletionDate}</td> <td>${PMVAExpireDate}</td> </tr>
                            </tbody>
                          </table>
                        </div>
                    </div>
                `
                document.body.insertAdjacentHTML('beforeend', profileHTML)

            }
        }
    })

    //Close the staff profile when clicking outside of it
    document.addEventListener('click', (e)=>{
        if (e.target.classList.contains('profile__mask')) {
            const mask = document.querySelector('.profile__mask')
            mask.remove()
        }
    })

     //Handle PDF download
     document.addEventListener('click', (e) => {
     if (e.target.closest('.profile__downloadButton')) {
        const profilePage = document.querySelector('.profile__page');
        if (profilePage) {
            const opt = {
                margin:       0.5,
                filename:     'staff_profile.pdf',
                image:        { type: 'jpeg', quality: 0.98 },
                html2canvas:  { scale: 2 },
                jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
            };

            html2pdf().set(opt).from(profilePage).save();
        }
    }


});

}

    
}, 7000)