const elboroughBase64 = 'data:image/png;base64, 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';

//Global variables that are used in the HTML.
var mostRecentPhotoDate = ''
var mostRecentImageUrl = ''
var workPermitRequired = ''
var workPermitCheckedDate = 'N/A'
var passportUploadedDate = '' 
var poaDocOneUploadedDate = ''
var poaDocTwoUploadedDate = ''
var dbsUpdateMostRecentDate = 'Not on update service'
var ospcUpdateMostRecentDate = 'N/A'
var drivingLicenseSeenDate = 'N/A'
var businessInsuranceSeenDate = 'N/A'
var motSeenDate = 'N/A'
var nmcPin = ''
var pinSeen = ''
var revalidationDate = ''
var nmcReferals = ''
var medProvider = ''
var medExpireDate = ''
var medCompletionYear = ''
var medCompletionDate = ''
var dbs = ''
var dbsIssueDate = ''
var blsType = 'Basic Life Support Adults'
var plsType = 'Basic Life Support Paediatrics'
var blsCompletionDate = ''
var plsCompletionDate = ''
var cplCompletionDate = ''
var foodCompletionDate = ''
var mhCompletionDate = ''
var epilepsyCompletionDate = ''
var countyCompletionDate = ''
var cseCompletionDate = ''
var substanceCompletionDate = ''
var PMVACompletionDate = ''
var omCompletionDate = ''

//Other global variables
var profileHTML = ''

setTimeout(()=> {
    var firstName = '' 
    var surname = ''

    const buttonContainer = document.querySelector('.FormHeaderControlsBarNonSaveButtons')

    if (buttonContainer) {
        const extensionButton = `
		<style>
			.extensionButton{
				background: rgb(255,255,255);
				border-radius: 3px;
				transform: translateY(15px) scale(0.9);
    			animation: fadePopIn 0.5s ease-out forwards;
			}	
  			
			@keyframes fadePopIn {
    			0% {
			      opacity: 0;
			      transform: translateY(15px) scale(0.9);
			    }
 		       100% {
 			     opacity: 1;
			      transform: translateY(0px) scale(1);
			    }
		       }
		</style>

		<button class="FormButton OpenRecordButton extensionButton"><i class="fa-regular fa-file-lines"></i>Staff Profile</button>
	    `

        const hasExtensionButton = buttonContainer.querySelector('.extensionButton') !== null;

        if (!hasExtensionButton) {
            buttonContainer.insertAdjacentHTML('afterbegin', extensionButton)    
        }

        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('extensionButton') || e.target.classList.contains('fa-file-lines')) {

            let allElementsArray = Array.from(document.querySelectorAll('*'))
            let spansArray =  Array.from(document.querySelectorAll('span'))

            if (allElementsArray && spansArray) {                
                //Click on the right to work section to expand it
                const rtwDocumentationDiv = allElementsArray.find(e => e.textContent.trim() === 'Right to Work Documentation')
                const rtwDocumentationContainer = rtwDocumentationDiv.closest('.FormHeader')
                const rtwDocumentationElement = rtwDocumentationContainer.querySelectorAll('.SubformSummaryItem')
                const rightToWorkButton = rtwDocumentationElement[rtwDocumentationElement.length - 1].querySelector('.SummaryTableCell') //Click on the last one if there's more than one
                rightToWorkButton.click()    

                setTimeout(() => {
                    //Get the upload date of the most recent photo
                    const photoText = allElementsArray.find(e => e.textContent.trim() === 'Photograph')
                    const container = photoText.closest('.form-control-group')
                
                    const photoContainerArray = Array.from(container.querySelectorAll('.thumbnail'))
                    var photoDates = []

                    if (photoContainerArray.length > 0) {
                        photoContainerArray.forEach((photoContainer) => {
                            const photoDateText = photoContainer.querySelector('.FileUploadListItemTimestamp').innerText.replaceAll('Uploaded on ', '')
                            const imageUrl = photoContainer.querySelector('img').src
        
                            photoDates.push({
                                date: photoDateText,
                                imageUrl: imageUrl
                            })
                        })
        
                        // Helper: convert "dd/mm/yyyy" → Date
                        function parseDate(dateStr) {
                            var parts = dateStr.split('/');
                            return new Date(parts[2], parts[1] - 1, parts[0]); 
                        }
        
                        // Find most recent photo date
                        var mostRecent = photoDates.reduce((latest, current) => {
                            return parseDate(current.date) > parseDate(latest.date) ? current : latest;
                        });
        
                        mostRecentPhotoDate = mostRecent.date;
                        mostRecentImageUrl = mostRecent.imageUrl;   
                    }


                    //Check if a work permit is required
                    const rtwText = spansArray.find(e => e.textContent.trim() === 'Right to work check Expiry')
                    const rtwTextContainer = rtwText.closest('.form-control-group')
                    const rightToWorkExpiry = rtwTextContainer.querySelector('.input-small').value
                    
                    if ((['British', 'Irish', 'Scottish', 'Northern Irish'].includes(nationality.trim()))) {
                        workPermitRequired = 'No'
                    } else{
                        workPermitRequired = rightToWorkExpiry.length > 0 ? 'Yes' : 'Indefinite leave'
                    }

                    //Get the work permit checked date
                    const rtwCheckText = allElementsArray.find(e => e.textContent.trim() === 'Right to work check (only if applicable)')
                    const rtwCheckContainer = rtwCheckText.closest('.form-control-group')
                    const rtwCheckUploadedDatesArray = Array.from(rtwCheckContainer.querySelectorAll('.FileUploadListItemTimestamp'))
                    if (rtwCheckUploadedDatesArray.length > 0) {
                        const rtwCheckDates = []
        
                        rtwCheckUploadedDatesArray.forEach((uploadedDate) => {
                            rtwCheckDates.push(uploadedDate.textContent.replaceAll('Uploaded on ', ''))
                        })
        
                        workPermitCheckedDate = rtwCheckDates
                        .map((date) => {
                            const [day, month, year] = date.split('/')
                            return new Date(`${year}-${month}-${day}`)
                        })
                        .sort((a, b) => b - a)[0]
                        .toLocaleDateString('en-GB')
                    }
                    

                    //Get the passport uploaded date
                    const passportText = Array.from(document.querySelectorAll('*')).find(e => e.textContent.trim() === 'Passport')
                    const passportContainer = passportText.closest('.form-control-group')
                    const passportUploadedDatesArray = Array.from(passportContainer.querySelectorAll('.FileUploadListItemTimestamp'))
                    const passportDates = []
                    passportUploadedDatesArray.forEach((uploadedDate) => {
                        passportDates.push(uploadedDate.textContent.replaceAll('Uploaded on ', ''))
                    })

                    passportUploadedDate = passportDates
                    .map((date) => {
                        const [day, month, year] = date.split('/')
                        return new Date(`${year}-${month}-${day}`)
                    })
                    .sort((a, b) => b - a)[0]
                    .toLocaleDateString('en-GB')
                    
                }, 100)

                //Expand the most recent Proof of address Documentation section
                const poaDocumentationDiv = allElementsArray.find(e => e.textContent.trim() === 'Proof of address Documentation')
                const poaDocumentationContainer = poaDocumentationDiv.closest('.FormHeader')
                const poaDocumentationElement = poaDocumentationContainer.querySelectorAll('.SubformSummaryItem')
                const poaButton = poaDocumentationElement[poaDocumentationElement.length - 1].querySelector('.SummaryTableCell') //Click on the last one if there's more than one
                
                //Wait for the right to work section to finish being clicked on
                setTimeout(() => {
                    poaButton.click()  
                }, 150);

                //Give the proof of address section time to expand
                setTimeout(() => {
                    //Get the most recent Document 1 uploaded date
                    const poaDocumentationContainerContainer = poaDocumentationContainer.closest('.FormField')   
                    const poaSpans = Array.from(poaDocumentationContainerContainer.querySelectorAll('span'))
                    
                    const poaDocOneText = poaSpans.find(e => e.textContent.trim() === 'Document 1')
                    const poaDocOneContainer = poaDocOneText.closest('.form-control-group')
                    const poaDocOneUploadedDatesArray = Array.from(poaDocOneContainer.querySelectorAll('.FileUploadListItemTimestamp'))
                    const poaDocOneDates = []
                    poaDocOneUploadedDatesArray.forEach((uploadedDate) => {
                        poaDocOneDates.push(uploadedDate.textContent.replaceAll('Uploaded on ', ''))
                    })

                    poaDocOneUploadedDate = poaDocOneDates
                    .map((date) => {
                        const [day, month, year] = date.split('/')
                        return new Date(`${year}-${month}-${day}`)
                    })
                    .sort((a, b) => b - a)[0]
                    .toLocaleDateString('en-GB')

                    //Get the most recent Document 2 uploaded date
                    const poaDocTwoText = poaSpans.find(e => e.textContent.trim() === 'Document 1')
                    const poaDocTwoContainer = poaDocTwoText.closest('.form-control-group')
                    const poaDocTwoUploadedDatesArray = Array.from(poaDocTwoContainer.querySelectorAll('.FileUploadListItemTimestamp'))
                    const poaDocTwoDates = []
                    poaDocTwoUploadedDatesArray.forEach((uploadedDate) => {
                        poaDocTwoDates.push(uploadedDate.textContent.replaceAll('Uploaded on ', ''))
                    })

                    poaDocTwoUploadedDate = poaDocTwoDates
                    .map((date) => {
                        const [day, month, year] = date.split('/')
                        return new Date(`${year}-${month}-${day}`)
                    })
                    .sort((a, b) => b - a)[0]
                    .toLocaleDateString('en-GB')
                    
                }, 200);

                //Expand the DBS section
                //Wait for the proof of address section to finish being clicked on before clicking on the DBS
                setTimeout(() => {
                    // Re-query the button in case the DOM has changed
                    const dbsDocumentationDiv = allElementsArray.find(e => e.textContent.trim() === 'DBS');
                    const dbsDocumentationContainer = dbsDocumentationDiv.closest('.FormHeader');
                    const dbsDocumentationElement = dbsDocumentationContainer.querySelectorAll('.SubformSummaryItem');
                    const dbsButton = dbsDocumentationElement[dbsDocumentationElement.length - 1].querySelector('.SummaryTableCell');
                    dbsButton.click();
                }, 250);

                //Give the DBS section time to expand
                setTimeout(() => {
                    //Get the most recent DBS update service check date
                    const dbsText = spansArray.find(e => e.textContent.trim() === 'DBS update service check')
                    const container = dbsText.closest('.form-control-group')
                
                    const dbsContainerArray = Array.from(container.querySelectorAll('.thumbnail'))
                    var dbsDates = []

                    if (dbsContainerArray.length > 0) {
                        dbsContainerArray.forEach((dbsContainer) => {
                            const dbsDateText = dbsContainer.querySelector('.FileUploadListItemTimestamp').innerText.replaceAll('Uploaded on ', '')
                            dbsDates.push(dbsDateText)
                        })
            
                        dbsUpdateMostRecentDate = dbsDates
                        .map((date) => {
                            const [day, month, year] = date.split('/')
                            return new Date(`${year}-${month}-${day}`)
                        })
                        .sort((a, b) => b - a)[0]
                        .toLocaleDateString('en-GB')
                    }


                    //Get the most recent overseas police check
                    const ospcText = spansArray.find(e => e.textContent.trim() === 'Overseas police check (only if applicable)')
                    const ospcTextContainer = ospcText.closest('.form-control-group')
                    const ospcContainer = ospcTextContainer.querySelectorAll('.thumbnail')

                    if (ospcContainer.length > 0) {
                            
                        const ospcContainerArray = Array.from(ospcContainer)
                        var ospcDates = []

                        ospcContainerArray.forEach((ospcContainer) => {
                            const ospcDateText = ospcContainer.querySelector('.FileUploadListItemTimestamp').innerText.replaceAll('Uploaded on ', '')
                            ospcDates.push(ospcDateText)
                        })
            
                        ospcUpdateMostRecentDate = ospcDates
                        .map((date) => {
                            const [day, month, year] = date.split('/')
                            return new Date(`${year}-${month}-${day}`)
                        })
                        .sort((a, b) => b - a)[0]
                        .toLocaleDateString('en-GB')
        
                    }

                }, 300);

                //Drivers Documentation section, this is already expanded by default, but we'll have to expand 4 things inside it.
                //Wait for the DBS section to finish being clicked on before moving on to this.
                setTimeout(() => {
                    allElementsArray = Array.from(document.querySelectorAll('*')) // It's good to requery this from time to time
                    const driversDocumentationDiv = allElementsArray.find(e => e.textContent.trim() === 'Drivers Documentation')
                    const driversDocumentationContainer = driversDocumentationDiv.closest('.FormHeader')
                    const driversDocumentationExpandButtons = Array.from(driversDocumentationContainer.querySelectorAll('.SummaryTableCellInner'))

                    var drivingLicenseExpandButton = driversDocumentationExpandButtons.find(e => e.textContent.trim() == 'Driving license')
                    var carInsuranceExpandButton = driversDocumentationExpandButtons.find(e => e.textContent.trim() == 'Car business insurance')
                    var motExpandButton = driversDocumentationExpandButtons.find(e => e.textContent.trim() == 'MOT test check')
                    var dvlaExpandButton = driversDocumentationExpandButtons.find(e => e.textContent.trim() == 'DVLA check')
                    var carTaxExpandButton = driversDocumentationExpandButtons.find(e => e.textContent.trim() == 'Car Tax')

                    //We only want to continue if all 5 documents are uploaded
                    if (drivingLicenseExpandButton && carInsuranceExpandButton && motExpandButton && dvlaExpandButton && carTaxExpandButton) {
                        // Get expiry dates as strings
                        const drivingLicenseExpireDate = drivingLicenseExpandButton.parentElement.parentElement.querySelectorAll('.SummaryTableCellInner')[1].textContent;
                        const carInsuranceExpireDate = carInsuranceExpandButton.parentElement.parentElement.querySelectorAll('.SummaryTableCellInner')[1].textContent;
                        const motExpireDate = motExpandButton.parentElement.parentElement.querySelectorAll('.SummaryTableCellInner')[1].textContent;
                        const dvlaExpireDate = dvlaExpandButton.parentElement.parentElement.querySelectorAll('.SummaryTableCellInner')[1].textContent;
                        const carTaxExpireDate = carTaxExpandButton.parentElement.parentElement.querySelectorAll('.SummaryTableCellInner')[1].textContent;

                        // Helper to parse dd/mm/yyyy to Date
                        function parseUKDate(dateStr) {
                            const [day, month, year] = dateStr.split('/');
                            return new Date(`${year}-${month}-${day}`);
                        }

                        // Today's date at midnight
                        const today = new Date();
                        today.setHours(0,0,0,0);

                        // Parse all dates
                        const allDates = [
                            parseUKDate(drivingLicenseExpireDate),
                            parseUKDate(carInsuranceExpireDate),
                            parseUKDate(motExpireDate),
                            parseUKDate(dvlaExpireDate),
                            parseUKDate(carTaxExpireDate)
                        ];

                        // Only click if all dates are today or in the future
                        if (allDates.every(date => date >= today)) {
                            drivingLicenseExpandButton.click()
                            
                        
                            //Give the driving license section time to expand
                            setTimeout(() => {
                                //Get the driving license check date
                                let driversChecksDiv = allElementsArray.find(e => e.textContent.trim() === 'Driving Checks')
                                let driversChecksContainer = driversChecksDiv.closest('.FormHeader')
                                let driversChecksExpandButtons = Array.from(driversChecksContainer.querySelectorAll('.SummaryTableCellInner'))

                                // Find the button with the farthest future date
                                let farthestButton = null
                                let farthestDate = null

                                driversChecksExpandButtons.forEach(btn => {
                                    const dateMatch = btn.textContent.trim().match(/^(\d{2}\/\d{2}\/\d{4})$/);
                                    if (dateMatch) {
                                        const date = parseUKDate(dateMatch[1]);
                                        if (!farthestDate || date > farthestDate) {
                                            farthestDate = date
                                            farthestButton = btn
                                        }
                                    }
                                });

                                if (farthestButton) {
                                    farthestButton.click()
                                    
                                    //Give the button time to expand
                                    setTimeout(() => {
                                        const driversCheckSectionSpans = Array.from(allElementsArray.find(e => e.textContent.trim() === 'Driving Checks').closest('.Subform').querySelectorAll('span'))
                                        drivingLicenseSeenDate = driversCheckSectionSpans.find(e => e.textContent === 'Date of Check').closest('.control-group').querySelector('.input-small').value
                                        
                                        //Fully requery the insurance button before clicking on it, it won't find it otherwise.
                                        carInsuranceExpandButton = Array.from(Array.from(document.querySelectorAll('*')).find(e => e.textContent.trim() === 'Drivers Documentation').closest('.FormHeader').querySelectorAll('.SummaryTableCellInner')).find(e => e.textContent.trim() == 'Car business insurance')
                                        carInsuranceExpandButton.click()
                                    }, 300);
                                }

                                //Get the insurance check date
                                //Give the insurance section time to expand
                                setTimeout(() => {
                                    driversChecksDiv = allElementsArray.find(e => e.textContent.trim() === 'Driving Checks')
                                    driversChecksContainer = driversChecksDiv.closest('.FormHeader')
                                    driversChecksExpandButtons = Array.from(driversChecksContainer.querySelectorAll('.SummaryTableCellInner'))

                                    // Find the button with the farthest future date
                                    farthestButton = null
                                    farthestDate = null

                                    driversChecksExpandButtons.forEach(btn => {
                                        const dateMatch = btn.textContent.trim().match(/^(\d{2}\/\d{2}\/\d{4})$/);
                                        if (dateMatch) {
                                            const date = parseUKDate(dateMatch[1]);
                                            if (!farthestDate || date > farthestDate) {
                                                farthestDate = date
                                                farthestButton = btn
                                            }
                                        }
                                    });

                                    if (farthestButton) {
                                        farthestButton.click()
                                        
                                        //Give the button time to expand
                                        setTimeout(() => {
                                            const driversCheckSectionSpans = Array.from(allElementsArray.find(e => e.textContent.trim() === 'Driving Checks').closest('.Subform').querySelectorAll('span'))
                                            businessInsuranceSeenDate = driversCheckSectionSpans.find(e => e.textContent === 'Date of Check').closest('.control-group').querySelector('.input-small').value
                                            
                                            //Fully requery the MOT button before clicking on it, it won't find it otherwise.
                                            motExpandButton = Array.from(Array.from(document.querySelectorAll('*')).find(e => e.textContent.trim() === 'Drivers Documentation').closest('.FormHeader').querySelectorAll('.SummaryTableCellInner')).find(e => e.textContent.trim() == 'MOT test check')
                                            motExpandButton.click()
                                        }, 100);
                                    }

                                }, 500)

                                //Get the MOT check date
                                //Give the MOT section time to expand
                                setTimeout(() => {
                                    driversChecksDiv = allElementsArray.find(e => e.textContent.trim() === 'Driving Checks')
                                    driversChecksContainer = driversChecksDiv.closest('.FormHeader')
                                    driversChecksExpandButtons = Array.from(driversChecksContainer.querySelectorAll('.SummaryTableCellInner'))

                                    // Find the button with the farthest future date
                                    farthestButton = null
                                    farthestDate = null

                                    driversChecksExpandButtons.forEach(btn => {
                                        const dateMatch = btn.textContent.trim().match(/^(\d{2}\/\d{2}\/\d{4})$/);
                                        if (dateMatch) {
                                            const date = parseUKDate(dateMatch[1]);
                                            if (!farthestDate || date > farthestDate) {
                                                farthestDate = date
                                                farthestButton = btn
                                            }
                                        }
                                    });

                                    if (farthestButton) {
                                        farthestButton.click()
                                        
                                        //Give the button time to expand
                                        setTimeout(() => {
                                            const driversCheckSectionSpans = Array.from(allElementsArray.find(e => e.textContent.trim() === 'Driving Checks').closest('.Subform').querySelectorAll('span'))
                                            motSeenDate = driversCheckSectionSpans.find(e => e.textContent === 'Date of Check').closest('.control-group').querySelector('.input-small').value
                                            
                                        }, 200);
                                    }

                                }, 800)


                            }, 300)
                        } 

                    }

                }, 400)

                // Get the values for the easy ones that don't need me to click on anything
                firstName = spansArray.find(e => e.textContent.trim() === 'First Name').closest('.form-control-group').querySelector('.text-field').value
                surname = spansArray.find(e => e.textContent.trim() === 'Surname').closest('.form-control-group').querySelector('.text-field').value
                var dateOfBirth = spansArray.find(e => e.textContent.trim() === 'Date of birth').closest('.form-control-group').querySelector('input').value
                var role = spansArray.find(e => e.textContent.trim() === 'Role').closest('.form-control-group').querySelector('.item').textContent
                var nationality = spansArray.find(e => e.textContent.trim() === 'Nationality').closest('.form-control-group').querySelector('.item').textContent
                dbs = spansArray.find(e => e.textContent.trim() === 'DBS Number').closest('.form-control-group').querySelector('.text-field').value
                dbsIssueDate = spansArray.find(e => e.textContent.trim() === 'DBS Issue Date').closest('.form-control-group').querySelector('input').value
                var dbsConvictions = spansArray.find(e => e.textContent.trim() === 'Are there any disclosures?').closest('.form-control-group').querySelector('.item').innerText

                //Recruitment Values
                const recruitmentContainer = allElementsArray.find(e => e.textContent.trim() === 'Recruitment Documentation').parentElement.parentElement
                const recruitmentDivs = Array.from(recruitmentContainer.querySelectorAll('div'))
                var applicationFormDate = recruitmentDivs.find(e => e.textContent.trim() === 'Application form').closest('.SummaryTableRow').querySelectorAll('.SummaryTableCellInner')[1].innerText
                var referenceOneDate = recruitmentDivs.find(e => e.textContent.trim() === 'Reference 1').closest('.SummaryTableRow').querySelectorAll('.SummaryTableCellInner')[1].innerText
                var cvDate = recruitmentDivs.find(e => e.textContent.trim() === 'CV').closest('.SummaryTableRow').querySelectorAll('.SummaryTableCellInner')[1].innerText
                var userName = document.querySelector('.dropdown-toggle').innerText.replace('.', ' ').replace(/\b\w/g, c => c.toUpperCase())
                var userNameShort = userName.split(' ').map((word, i) => i === 0 ? word.charAt(0) : word).join(' ');

                //If they are a nurse, then click on the Nurses Documentation section to expand it
                if (role == 'RGN' || role == 'RMN') {
                    setTimeout(() => {
                        const rmnDocumentationDiv = Array.from(document.querySelectorAll('*')).find(e => e.textContent.trim() === 'Nurses Documentation')
                        const rmnDocumentationContainer = rmnDocumentationDiv.closest('.FormHeader')
                        const rmnDocumentationElement = rmnDocumentationContainer.querySelectorAll('.SubformSummaryItem')
                        const rmnButton = rmnDocumentationElement[rmnDocumentationElement.length - 1].querySelector('.SummaryTableCell') // We need to click on the last one if there's more than one
                        rmnButton.click()
        
                        //Give the Nurses Documentation section time to expand
                        setTimeout(() => {
                            const nmcSectionSpans = Array.from(Array.from(document.querySelectorAll('*')).find(e => e.textContent.trim() === 'Nurses Documentation').closest('.Subform').querySelectorAll('span'))

                            //Get the NMC Pin
                            nmcPin = nmcSectionSpans.find(e => e.textContent.trim() === 'Pin Number').closest('.form-control-group').querySelector('.text-field').value

                            //Get the most recent Entry statement certificate date
                            const nmcEntryText = spansArray.find(e => e.textContent.trim() === 'Entry statement certificate')
                            const container = nmcEntryText.closest('.form-control-group')
                        
                            const nmcEntryContainerArray = Array.from(container.querySelectorAll('.thumbnail'))
                            var nmcEntryDates = []

                            if (nmcEntryContainerArray.length > 0) {
                                nmcEntryContainerArray.forEach((nmcEntryContainer) => {
                                    const nmcEntryDateText = nmcEntryContainer.querySelector('.FileUploadListItemTimestamp').innerText.replaceAll('Uploaded on ', '')
                                    nmcEntryDates.push(nmcEntryDateText)
                                })
                    
                                pinSeen = nmcEntryDates
                                .map((date) => {
                                    const [day, month, year] = date.split('/')
                                    return new Date(`${year}-${month}-${day}`)
                                })
                                .sort((a, b) => b - a)[0]
                                .toLocaleDateString('en-GB')
                            }

                            //Get the pin revalidation date
                            revalidationDate = nmcSectionSpans.find(e => e.textContent.trim() === 'Pin Revalidation Due').closest('.form-control-group').querySelector('.input-small').value

                            //Get the NMC referalls text
                            nmcReferals = nmcSectionSpans.find(e => e.textContent.trim() === 'Any existing undertakings/conditions with the NMC or review of fitness to practice?').closest('.form-control-group').querySelector('.text-field').value
                            
                        }, 100)
                        
                    }, 700)
                } 

            }

            
        //Get the training dates
        const tableElements = document.querySelectorAll('.SummaryTableCellInner')
        if (tableElements) {
            const tableElementsArray = Array.from(tableElements)

            //Get the values for Basic Life Support Adults
            let blsProvider = ''
            let blsExpireDate = ''
            if (tableElementsArray.find(e => e.textContent.trim() === 'Basic Life Support Adults')) {
                const blsCell = tableElementsArray.find(e => e.textContent.trim() === 'Basic Life Support Adults')
                const blsParentCell = blsCell.parentElement.parentElement
                const blsParentCellArray = Array.from(blsParentCell.children)
                blsProvider = blsParentCellArray[2].querySelector('.SummaryTableCellInner').innerText
                blsExpireDate = blsParentCellArray[3].querySelector('.SummaryTableCellInner').innerText
                const blsCompletionYear = parseInt(blsExpireDate.substring(6,10)) - 1
                blsCompletionDate = blsExpireDate.substring(0,6) + blsCompletionYear

            } else if(tableElementsArray.find(e => e.textContent.trim() === 'ILS Adults (Practical)')){
                blsType = 'ILS Adults'
                const blsCell = tableElementsArray.find(e => e.textContent.trim() === 'ILS Adults (Practical)')
                const blsParentCell = blsCell.parentElement.parentElement
                const blsParentCellArray = Array.from(blsParentCell.children)
                blsProvider = blsParentCellArray[2].querySelector('.SummaryTableCellInner').innerText
                blsExpireDate = blsParentCellArray[3].querySelector('.SummaryTableCellInner').innerText
                const blsCompletionYear = parseInt(blsExpireDate.substring(6,10)) - 1
                blsCompletionDate = blsExpireDate.substring(0,6) + blsCompletionYear
            }
    
            //Get the values for Basic Life Support Paediatrics
            let plsProvider = ''
            let plsExpireDate = ''
            if (tableElementsArray.find(e => e.textContent.trim() === 'Basic Life Support Paediatrics')) {
                const plsCell = tableElementsArray.find(e => e.textContent.trim() === 'Basic Life Support Paediatrics')
                const plsParentCell = plsCell.parentElement.parentElement
                const plsParentCellArray = Array.from(plsParentCell.children)
                plsProvider = plsParentCellArray[2].querySelector('.SummaryTableCellInner').innerText
                plsExpireDate = plsParentCellArray[3].querySelector('.SummaryTableCellInner').innerText
                const plsCompletionYear = parseInt(plsExpireDate.substring(6,10)) - 1
                plsCompletionDate = plsExpireDate.substring(0,6) + plsCompletionYear

            } else if(tableElementsArray.find(e => e.textContent.trim() === 'ILS Paediatrics (Practical)')) {
                plsType = 'ILS Paediatrics'
                const plsCell = tableElementsArray.find(e => e.textContent.trim() === 'ILS Paediatrics (Practical)')
                const plsParentCell = plsCell.parentElement.parentElement
                const plsParentCellArray = Array.from(plsParentCell.children)
                plsProvider = plsParentCellArray[2].querySelector('.SummaryTableCellInner').innerText
                plsExpireDate = plsParentCellArray[3].querySelector('.SummaryTableCellInner').innerText
                const plsCompletionYear = parseInt(plsExpireDate.substring(6,10)) - 1
                plsCompletionDate = plsExpireDate.substring(0,6) + plsCompletionYear
            }

            //Get the values for Medication (practical), if it doesn't exist, then use Medication Online instead.
            const practicalMedCell = tableElementsArray.find(e => e.textContent.trim() === 'Medication (practical)')
            if (practicalMedCell) {
                const practicalMedParentCell = practicalMedCell.parentElement.parentElement
                const practicalMedParentCellArray = Array.from(practicalMedParentCell.children)
                medProvider = practicalMedParentCellArray[2].querySelector('.SummaryTableCellInner').innerText
                medExpireDate = practicalMedParentCellArray[3].querySelector('.SummaryTableCellInner').innerText
                
                // Check if the medication practical date has been filled in, if not, use med online dates.
                if (medExpireDate && medExpireDate.length > 5) {
                    // Parse medExpireDate (dd/mm/yyyy) to Date
                    const [day, month, year] = medExpireDate.split('/');
                    const expireDateObj = new Date(`${year}-${month}-${day}`);

                    // Get one month from today
                    const oneMonthFromToday = new Date();
                    oneMonthFromToday.setMonth(oneMonthFromToday.getMonth() + 1);
                    oneMonthFromToday.setHours(0,0,0,0);

                    // Only use practical medication if it's expiry is further in the future than one month from today
                    if (expireDateObj > oneMonthFromToday) {
                        medCompletionYear = parseInt(medExpireDate.substring(6,10)) - 1;
                        medCompletionDate = medExpireDate.substring(0,6) + medCompletionYear;
                    } else{
                        medicationOnline()
                    }

                } else{
                    medicationOnline()
                }
                
            } else{
                medicationOnline()
            }
            
            //Function to get the values for Medication Online
            function medicationOnline() {
                const medCell = tableElementsArray.find(e => e.textContent.trim() === 'Medication Online' || e.textContent.trim() === 'Medication Advanced')
                const medParentCell = medCell.parentElement.parentElement
                const medParentCellArray = Array.from(medParentCell.children)
                medProvider = medParentCellArray[2].querySelector('.SummaryTableCellInner').innerText
                medExpireDate = medParentCellArray[3].querySelector('.SummaryTableCellInner').innerText
                medCompletionYear = parseInt(medExpireDate.substring(6,10)) - 1
                medCompletionDate = medExpireDate.substring(0,6) + medCompletionYear                   
            }


            //Get the values for Safeguarding Children
            const cplCell = tableElementsArray.find(e => e.textContent.trim() === 'Safeguarding Children Level 3')
            const cplParentCell = cplCell.parentElement.parentElement
            const cplParentCellArray = Array.from(cplParentCell.children)
            const cplProvider = cplParentCellArray[2].querySelector('.SummaryTableCellInner').innerText
            const cplExpireDate = cplParentCellArray[3].querySelector('.SummaryTableCellInner').innerText
            const cplCompletionYear = parseInt(cplExpireDate.substring(6,10)) - 1
            cplCompletionDate = cplExpireDate.substring(0,6) + cplCompletionYear

            //Get the values for Food Hygiene
            const foodCell = tableElementsArray.find(e => e.textContent.trim() === 'Food hygiene')
            const foodParentCell = foodCell.parentElement.parentElement
            const foodParentCellArray = Array.from(foodParentCell.children)
            const foodProvider = foodParentCellArray[2].querySelector('.SummaryTableCellInner').innerText
            const foodExpireDate = foodParentCellArray[3].querySelector('.SummaryTableCellInner').innerText
            const foodCompletionYear = parseInt(foodExpireDate.substring(6,10)) - 1
            foodCompletionDate = foodExpireDate.substring(0,6) + foodCompletionYear

            //Get the values for Moving and Handling
            const mhCell = tableElementsArray.find(e => e.textContent.trim() === 'Moving and Handling (Practical)')
            const mhParentCell = mhCell.parentElement.parentElement
            const mhParentCellArray = Array.from(mhParentCell.children)
            const mhProvider = mhParentCellArray[2].querySelector('.SummaryTableCellInner').innerText
            const mhExpireDate = mhParentCellArray[3].querySelector('.SummaryTableCellInner').innerText
            const mhCompletionYear = parseInt(mhExpireDate.substring(6,10)) - 1
            mhCompletionDate = mhExpireDate.substring(0,6) + mhCompletionYear

            //Get the values for Epilepsy Awareness
            const epilepsyCell = tableElementsArray.find(e => e.textContent.trim() === 'Epilepsy')
            const epilepsyParentCell = epilepsyCell.parentElement.parentElement
            const epilepsyParentCellArray = Array.from(epilepsyParentCell.children)
            const epilepsyProvider = epilepsyParentCellArray[2].querySelector('.SummaryTableCellInner').innerText
            const epilepsyExpireDate = epilepsyParentCellArray[3].querySelector('.SummaryTableCellInner').innerText
            const epilepsyCompletionYear = parseInt(epilepsyExpireDate.substring(6,10)) - 1
            epilepsyCompletionDate = epilepsyExpireDate.substring(0,6) + epilepsyCompletionYear

            //Get the values for County Lines
            const countyCell = tableElementsArray.find(e => e.textContent.trim() === 'County Lines and knife crime')
            const countyParentCell = countyCell.parentElement.parentElement
            const countyParentCellArray = Array.from(countyParentCell.children)
            const countyProvider = countyParentCellArray[2].querySelector('.SummaryTableCellInner').innerText
            const countyExpireDate = countyParentCellArray[3].querySelector('.SummaryTableCellInner').innerText
            const countyCompletionYear = parseInt(countyExpireDate.substring(6,10)) - 1
            countyCompletionDate = countyExpireDate.substring(0,6) + countyCompletionYear

            //Get the values for Child Sexual Exploitation
            const cseCell = tableElementsArray.find(e => e.textContent.trim() === 'Child sexual exploitation')
            const cseParentCell = cseCell.parentElement.parentElement
            const cseParentCellArray = Array.from(cseParentCell.children)
            const cseProvider = cseParentCellArray[2].querySelector('.SummaryTableCellInner').innerText
            const cseExpireDate = cseParentCellArray[3].querySelector('.SummaryTableCellInner').innerText
            const cseCompletionYear = parseInt(cseExpireDate.substring(6,10)) - 1
            cseCompletionDate = cseExpireDate.substring(0,6) + cseCompletionYear

            //Get the values for Substance Misuse
            const substanceCell = tableElementsArray.find(e => e.textContent.trim() === 'Substance Misuse')
            const substanceParentCell = substanceCell.parentElement.parentElement
            const substanceParentCellArray = Array.from(substanceParentCell.children)
            const substanceProvider = substanceParentCellArray[2].querySelector('.SummaryTableCellInner').innerText
            const substanceExpireDate = substanceParentCellArray[3].querySelector('.SummaryTableCellInner').innerText
            const substanceCompletionYear = parseInt(substanceExpireDate.substring(6,10)) - 1
            substanceCompletionDate = substanceExpireDate.substring(0,6) + substanceCompletionYear

            //Get the values for PMVA
            const PMVACell = tableElementsArray.find(e => e.textContent.trim() === 'PMVA (Practical)')
            const PMVAParentCell = PMVACell.parentElement.parentElement
            const PMVAParentCellArray = Array.from(PMVAParentCell.children)
            const PMVAProvider = PMVAParentCellArray[2].querySelector('.SummaryTableCellInner').innerText
            const PMVAExpireDate = PMVAParentCellArray[3].querySelector('.SummaryTableCellInner').innerText
            
            if (PMVAExpireDate.length > 5) {
                const PMVACompletionYear = parseInt(PMVAExpireDate.substring(6,10)) - 1
                PMVACompletionDate = PMVAExpireDate.substring(0,6) + PMVACompletionYear
            } 

            //Get the values for Oliver McGowan
            const omCell = tableElementsArray.find(e => e.textContent.trim() === 'Oliver McGowan')
            const omParentCell = omCell.parentElement.parentElement
            const omParentCellArray = Array.from(omParentCell.children)
            const omProvider = omParentCellArray[2].querySelector('.SummaryTableCellInner').innerText
            const omExpireDate = omParentCellArray[3].querySelector('.SummaryTableCellInner').innerText
            const omCompletionYear = parseInt(omExpireDate.substring(6,10)) - 1
            omCompletionDate = omExpireDate.substring(0,6) + omCompletionYear


		    const loadingHTML = `
                <style>
                    .loadingDiv {
                        height: 600px;
                        width: 600px;
                        position: fixed;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        z-index: 9999999;
                        background: rgb(255,255,255);
                        border-radius: 10px;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-evenly;
                        align-items: center;
                    }
        
                    .spinner {
                        width: 80px;
                        height: 80px;
                        border: 8px solid #f3f3f3;
                        border-top: 8px solid #3498db;
                        border-radius: 50%;
                        animation: spin 1s linear infinite;
                    }
        
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }

                    .profile__mask{
                        z-index: 9999999;
                        width: 100%;
                        height: 100vh;
                        position: fixed;
                        top: 0;
                        left: 0;
                        animation: fadein 2s forwards;
                    }
                        
                    @keyframes fadein{
                        0%{
                            background-color: rgb(0, 0, 0, 0);
                            backdrop-filter: blur(0px);
                        }

                        100%{
                            background-color: rgba(0, 0, 0, 0.5);
                            backdrop-filter: blur(5px);
                        }
                    }

                </style>

                <div class="profile__mask"> 
                    <div class="loadingDiv">
                        <h2>Hang on...</h2>
                        <div class="spinner"></div>
                    </div>
                </div>

		    `
		    document.body.insertAdjacentHTML('beforeend', loadingHTML)

            setTimeout(() => {
			
		    document.querySelector('.loadingDiv').remove()

		    profileHTML = `
                <style>
                    .profile__background{
                        z-index: 9999999;
                        width: 100%;
                        height: 100vh;
                        position: fixed;
                        top: 0;
                        left: 0;
                    }


                    @keyframes fadeinPage{
                        0%{
                            background-color: rgba(255, 255, 255, 0.5);
                            transform: scale(0.7);
                        }
                        100%{
                            background-color: rgba(255, 255, 255, 1);
                            transform: scale(1);
                        }
                    }

                    .profile__buttonsContainer{
                        margin: 0 auto;
                        margin-top: 20px;
                        width: 698px;
                        height: 40px;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: space-between;
                    }

                    .profile__downloadButton{
                        margin: 1rem auto;
                        display: block;
                        width: 55px;
                        height: 55px;
                        background: rgba(255, 255, 255, 0.9);
                        border: none;
                        border-radius: 100%;
                        transition: all 0.2s;
                    }

                    .profile__s2Button{
                        margin: 1rem auto;
                        display: block;
                        width: 55px;
                        height: 55px;
                        font-size: 20px;
                        background: rgba(255, 255, 255, 0.9);
                        border: none;
                        border-radius: 100%;
                        transition: all 0.2s;
                    }

                    .profile__downloadButton:hover{
                        background: rgba(255, 255, 255, 1);
                    }

                    .profile__s2Button:hover{
                        background: rgba(255, 255, 255, 1);
                    }

                    .profile__page {
                        width: 698px;             /* A4 width at 96dpi */
                        height: 600px;
                        overflow-y: scroll;
                        scrollbar-width: none;
                        margin: 20px auto;
                        background: #fff;
                        padding: 0px;
                        border-radius: 5px;
                        box-sizing: border-box;
                        font-family: 'Calibri';
                        color: #000;
                        transition: all 0.25s
                    }

                    .profile__page.expanded {
                        width: 95%;
                        overflow-x: scroll;
                    }

                    .profile__page.print {
                        width: 698px;             /* A4 width at 96dpi */
                        height: auto;

                    }

                    .profile__container{
                        width: 93%;
                        margin: 0 auto;
                    }

                    .profile__beginPar{
                        text-align: center;
                        font-size: 11pt;
                        font-family: 'Calibri';
                        padding: 2px 1px;
                        border: 1px solid #000;
                    }

                    .profile__titleDiv{
                        border: 1px solid #000;
                        padding: 0;
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        align-items: center;
                    }

                    .profile__titleLogo{
                        color: rgb(59,82,159);
                        font-family: serif;
                        margin: 1px 20px;
                        padding: 0;
                        font-size: 28px;
                        width: 160px;
                    }
                        
                    .profile__oSvg{
                        position: absolute;
                        top: -4px;
                        left: 20px;
                        height: 32px;
                        width: 32px;
                        transform: scale(0.30);
                        margin: 0;
                        padding: 0;
                    }
                        
                    .profile__spacer{
                        margin: 0;
                        padding: 0;
                        opacity: 1;
                        display: inline;
                    }

                    .profile__title{
                        font-size: 18pt;
                        font-family: 'Calibri';
                        font-weight: normal;
                        padding: 0;
                    }

                    .invisible{
                        opacity: 0;
                    }

                    .profile__nameDiv{
                        border: 1px solid #000;
                        display: flex;
                        flex-direction: row;
                        justify-content: start;
                    }

                    .profile__imageContainer{
                        cursor: pointer;
                        height: auto;
                        width: 324px;
                        background-image: url(${mostRecentImageUrl});
                        background-size: contain;
                        background-repeat: no-repeat;
                        background-position: center;
                    }

                    .profile__nameTable{
                        width: 100%;
                        border: 1px solid #000;
                        height: 100%;
                        border-collapse: collapse;
                    }

                    .profile__nameTable tbody tr td{
                        font-size: 11pt;
                        font-family: 'Calibri';
                        border: 1px solid #000;
                    }

                    .profile__nameLable{
                        width: 190px;
                        
                    }

                    .profile_trainingTable {
                        width: 100%;
                        border-collapse: collapse;
                        margin-top: 0px;
                    }

                    .profile__employmentRow{
                        background-color: rgb(203, 203, 203);
                        text-align: center;
                        margin: 0;
                        padding: 1px;
                        font-size: 11pt;
                        font-family: 'Calibri';
                        border: 1px solid #000;
                    }

                    .profile__modularTable{
                        border: 1px solid #000;
                        width: 100%;
                        border-collapse: collapse;
                    }

                    .profile__modularTable tbody tr td{
                        font-size: 11pt;
                        font-family: 'Calibri';
                        border: 1px solid #000;
                    }

                    .profile__headerRow{
                        width: 215px;
                        border: 1px solid #000;
                    }

                    .profile__secondColumn{
                        width: 190px;
                    }

                    .profile__thirdColumn{
                        text-align: center;
                   
                    }

                    .profile__mandatoryRow{
                        background-color: rgb(203, 203, 203);
                        text-align: center;
                        margin: 0;
                        padding: 10px;
                        font-size: 11pt;
                        font-family: 'Calibri';
                        border: 1px solid #000;
                    }

                    .profile_trainingTable th, .profile_trainingTable td {
                        border: 1px solid #000;
                        padding: 0;
                        font-size: 11pt;
                        font-family: 'Calibri';
                        text-align: center;
                    }

                    .profile_trainingTable th {
                        /* background-color: #f2f2f2; */
                        font-weight: bold;
                        font-family: 'Calibri';
                    }

                    .profile_trainingTable tr {
                        page-break-inside: avoid;  /* prevent rows splitting across pages */
                        break-inside: avoid;
                    }

                    .profile__endPar{
                        text-align: center;
                        font-size: 11pt;
                        font-family: 'Calibri';
                        padding: 20px 1px;
                    }

                    .profile__completionTable {
                        border-collapse: collapse;
                        width: auto;
                        font-family: 'Calibri';
                        font-size: 11pt;
                        width: 100%;
                    }

                    .profile__completionTable-row {
                        border: 1px solid #000;
                        padding: 0px;
                        vertical-align: middle;
                        font-size: 11pt;
                        font-family: 'Calibri';
                    }

                    .profile__label {
                        background-color: rgb(203, 203, 203);
                        font-weight: normal;
                        color: rgb(0, 0, 0);
                        font-size: 11pt;
                        font-family: 'Calibri';
                        width: 140px;
                        height: 100%;
                        border: 1px solid #000;
                        border-radius: 0;
                    }

                    .profile__dateBox{
                        background-color: rgb(203, 203, 203);
                        font-size: 11pt;
                        border: 1px solid #000;
                        border-radius: 0;
                    }

                    .signature {
                        font-family: "Brush Script MT", cursive;
                        width: 210px;
                        font-size: 11pt;
                    }

                    @media print {
                        .profile__mask { display: none !important; }
                        .profile__background { display: none !important; }
                        .profile__page {
                            width: 100% !important;
                            min-height: auto !important;
                            height: auto !important;
                            margin: 0;
                            padding: 0px;
                            border-radius: 0;
                            box-shadow: none;
                        }
                    }
            
                </style>
                
                <div class="profile__background">
                    <div class="profile__buttonsContainer">
                        <button class="profile__downloadButton"><i style="font-size: 25px;" class="fa-solid fa-file-arrow-down"></i></button>
                        <button class="profile__s2Button">S2</button>
                    </div>
                    <div class="profile__page">
                        <div class="profile__container">

                        <div class="profile__beginPar">
                            Elborough Care Services, Unit 2 Morston Court, Aisecome Way, Weston-super-Mare, BS22 8NG
                            hello@elboroughcares.co.uk  01934805830 <br>
                            Out of hours 01934806774
                        </div>

                        <div class="profile__titleDiv">

                            <img class="profile__titleLogo" src="${elboroughBase64}" alt="Elborough">

                            <h1 class="profile__title">Staff Profile</h1>
                            <p class="profile__titleLogo invisible">Elborough</p>
                        </div>
                        
                        <div class="profile__nameDiv">
                            <div class="profile__imageContainer"></div>
                            <table class="profile__nameTable">
                                <tbody>
                                    <tr>
                                        <td class="profile__nameLable">Name:</td>
                                        <td class="profile__thirdColumn">${firstName}</td>
                                    </tr>
                                    <tr>
                                        <td class="profile__nameLable">Last Name:</td>
                                        <td class="profile__thirdColumn">${surname}</td>
                                    </tr>
                                    <tr>
                                        <td class="profile__nameLable">Date of Birth:</td>
                                        <td class="profile__thirdColumn">${dateOfBirth}</td>
                                    </tr>
                                    <tr>
                                        <td class="profile__nameLable">Job Title:</td>
                                        <td class="profile__thirdColumn">${role}</td>
                                    </tr>
                                    <tr>
                                        <td class="profile__nameLable">Issue Date of Photography:</td>
                                        <td class="profile__thirdColumn" contenteditable="true">${mostRecentPhotoDate}</td>
                                    </tr>
                                    <tr>
                                        <td class="profile__nameLable">Work permit required:</td>
                                        <td class="profile__thirdColumn">${workPermitRequired}</td>
                                    </tr>
                                    <tr>
                                        <td class="profile__nameLable" contenteditable="true">Work permit checked date:</td>
                                        <td class="profile__thirdColumn">${workPermitCheckedDate}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="profile__employmentRow">Employment Checks</div>

                        <table class="profile__modularTable">
                            <tbody>
                            <tr>
                                <td class="profile__headerRow" rowspan="5">Proof of eligibility to work in the UK</td>
                                <td class="profile__secondColumn" >Original Passport/ID card seen and verified:</td>
                                <td class="profile__thirdColumn">${passportUploadedDate.length > 1 ? 'Yes' : 'No'}</td>
                            </tr>
                            <tr>
                                <td class="profile__secondColumn" >Nationality:</td>
                                <td class="profile__thirdColumn">${nationality}</td>
                            </tr>
                            <tr>
                                <td class="profile__secondColumn" >Date seen and verified:</td>
                                <td class="profile__thirdColumn">${passportUploadedDate}</td>
                            </tr>
                            <tr>
                                <td class="profile__secondColumn" >Current visa/status check and verified:</td>
                                <td class="profile__thirdColumn">${(['British', 'Irish', 'Scottish', 'Northern Irish'].includes(nationality.trim()) ? 'N/A' : 'Yes')}</td>
                            </tr>
                            <tr>
                                <td class="profile__secondColumn" >Date seen and verified:</td>
                                <td class="profile__thirdColumn">${workPermitCheckedDate}</td>
                            </tr>
                            </tbody>
                        </table>

                        <table class="profile__modularTable">
                            <tbody>
                            <tr>
                                <td class="profile__headerRow" rowspan="5">Proof address</td>
                                <td class="profile__secondColumn" >1st proof of address:</td>
                                <td class="profile__thirdColumn">${poaDocOneUploadedDate.length > 3 ? 'Yes' : 'No'}</td>
                            </tr>
                            <tr>
                                <td class="profile__secondColumn" >Date seen and verified:</td>
                                <td class="profile__thirdColumn">${poaDocOneUploadedDate}</td>
                            </tr>
                            <tr>
                                <td class="profile__secondColumn" >2nd proof of address:</td>
                                <td class="profile__thirdColumn">${poaDocTwoUploadedDate.length > 3 ? 'Yes' : 'No'}</td>
                            </tr>
                            <tr>
                                <td class="profile__secondColumn" >Date seen and verified:</td>
                                <td class="profile__thirdColumn">${poaDocTwoUploadedDate}</td>
                            </tr>
                            </tbody>
                        </table>

                        <table class="profile__modularTable">
                            <tbody>
                            <tr>
                                <td class="profile__headerRow" rowspan="5">Employment history and references</td>
                                <td class="profile__secondColumn" >Employment History checked</td>
                                <td class="profile__thirdColumn">Yes</td>
                            </tr>
                            <tr>
                                <td class="profile__secondColumn" >Date checked:</td>
                                <td class="profile__thirdColumn">${applicationFormDate}</td>
                            </tr>
                            <tr>
                                <td class="profile__secondColumn" >References checked</td>
                                <td class="profile__thirdColumn">Yes</td>
                            </tr>
                            <tr>
                            <td class="profile__secondColumn" >Date checked:</td>
                            <td class="profile__thirdColumn">${referenceOneDate}</td>
                            </tr>
                            <tr>
                            <td class="profile__secondColumn" >CV / application on file: </td>
                            <td class="profile__thirdColumn">${cvDate.length > 3 ? 'Yes' : 'No'}</td>
                            </tr>
                            </tbody>
                            </table>

                            <table class="profile__modularTable">
                                <tbody>
                                    <tr>
                                        <td class="profile__headerRow" rowspan="5">Enhanced DBS certificate details</td>
                                        <td class="profile__secondColumn" >DBS Number:</td>
                                        <td class="profile__thirdColumn">${dbs}</td>
                                    </tr>
                                    <tr>
                                        <td class="profile__secondColumn" >DBS Issue Date:</td>
                                        <td class="profile__thirdColumn">${dbsIssueDate}</td>
                                    </tr>
                                    <tr>
                                        <td class="profile__secondColumn" >DBS Check Date:</td>
                                        <td class="profile__thirdColumn" contenteditable="true">${dbsUpdateMostRecentDate}</td>
                                    </tr>
                                    <tr>
                                        <td class="profile__secondColumn" >Disclosures on enhanced DBS cert:</td>
                                        <td class="profile__thirdColumn">${dbsConvictions}</td>
                                    </tr>
                                </tbody>
                            </table>

                            <table class="profile__modularTable">
                                <tbody>
                                    <tr>
                                        <td class="profile__headerRow" rowspan="6">Driving Check</td>
                                        <td class="profile__secondColumn" >Driving licence seen and verified</td>
                                        <td class="profile__thirdColumn">${drivingLicenseSeenDate == 'N/A' ? 'N/A' : 'Yes'}</td>
                                    </tr>
                                    <tr>
                                        <td class="profile__secondColumn" >Date seen and verified:</td>
                                        <td class="profile__thirdColumn">${drivingLicenseSeenDate}</td>
                                    </tr>
                                    <tr>
                                        <td class="profile__secondColumn" >Business Insurance seen and verified:</td>
                                        <td class="profile__thirdColumn">${businessInsuranceSeenDate == 'N/A' ? 'N/A' : 'Yes'}</td>
                                    </tr>
                                    <tr>
                                        <td class="profile__secondColumn" >Date seen and verified:</td>
                                        <td class="profile__thirdColumn">${businessInsuranceSeenDate}</td>
                                    </tr>
                                    <tr>
                                        <td class="profile__secondColumn" >MOT seen and verified:</td>
                                        <td class="profile__thirdColumn">${motSeenDate == 'N/A' ? 'N/A' : 'Yes'}</td>
                                    </tr>
                                    <tr>
                                        <td class="profile__secondColumn" >Date seen and verified:</td>
                                        <td class="profile__thirdColumn">${motSeenDate}</td>
                                    </tr>
                                </tbody>
                            </table>

                            <table class="profile__modularTable">
                                <tbody>
                                    <tr>
                                        <td class="profile__headerRow" rowspan="2">Police check (when applicable)</td>
                                        <td class="profile__secondColumn" >Police check seen and verified:</td>
                                        <td class="profile__thirdColumn">${ospcUpdateMostRecentDate.length > 7 ? 'Yes' : 'N/A'}</td>
                                    </tr>
                                    <tr>
                                        <td class="profile__secondColumn">Date seen and verified:</td>
                                        <td class="profile__thirdColumn">${ospcUpdateMostRecentDate}</td>
                                    </tr>
                                </tbody>
                            </table>

                            ${role == 'RGN' || role == 'RMN' ?
                                `
                                <table class="profile__modularTable">
                                    <tbody>
                                        <tr>
                                            <td class="profile__headerRow" rowspan="5">Professional Registration and qualifications</td>
                                            <td class="profile__secondColumn" >Pin Number:</td>
                                            <td class="profile__thirdColumn">${nmcPin}</td>
                                        </tr>
                                        <tr>
                                            <td class="profile__secondColumn" >PIN Number seen and verified:</td>
                                            <td class="profile__thirdColumn">${pinSeen.length > 7 ? 'Yes' : ''}</td>
                                        </tr>
                                        <tr>
                                            <td class="profile__secondColumn" >Date seen and verified:</td>
                                            <td class="profile__thirdColumn">${pinSeen}</td>
                                        </tr>
                                        <tr>
                                            <td class="profile__secondColumn">PIN number expire date:</td>
                                            <td class="profile__thirdColumn">${revalidationDate}</td>
                                        </tr>
                                        <tr>
                                            <td class="profile__secondColumn" >Any existing undertakings/conditions with the NMC or review of fitness to practice?</td>
                                            <td class="profile__thirdColumn" contenteditable="true">${nmcReferals}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                ` 
                            :
                             ''}

                            <div class="profile__mandatoryRow">Mandatory skills training record</div>

                            <table class="profile_trainingTable">
                                <thead>
                                    <tr>
                                        <th>Name of the training</th>
                                        <th>Provider</th>
                                        <th>Date Completed</th>
                                        <th>Expire Date</th>
                                    </tr>
                                </thead>
                                                    
                                <tbody>
                                    <tr> <td>${blsType}</td> <td>${blsProvider}</td> <td>${blsCompletionDate}</td> <td>${blsExpireDate}</td> </tr>
                                    <tr> <td>${plsType}</td> <td>${plsProvider}</td> <td>${plsCompletionDate}</td> <td>${plsExpireDate}</td> </tr>
                                    <tr> <td>Moving &amp; Handling</td> <td>${mhProvider}</td> <td>${mhCompletionDate}</td> <td>${mhExpireDate}</td> </tr>
                                    <tr> <td>Safeguarding Children</td> <td>${cplProvider}</td> <td>${cplCompletionDate}</td> <td>${cplExpireDate}</td> </tr>
                                    <tr> <td>Epilepsy Awareness</td> <td>${epilepsyProvider}</td> <td>${epilepsyCompletionDate}</td> <td>${epilepsyExpireDate}</td> </tr>
                                    <tr> <td>Food Hygiene</td> <td>${foodProvider}</td> <td>${foodCompletionDate}</td> <td>${foodExpireDate}</td> </tr>
                                    <tr> <td>Oliver McGowan</td> <td>${omProvider}</td> <td>${omCompletionDate}</td> <td>${omExpireDate}</td> </tr>
                                    <tr> <td>Child Sexual Exploitation</td> <td>${cseProvider}</td> <td>${cseCompletionDate}</td> <td>${cseExpireDate}</td> </tr>
                                    <tr> <td>County Lines and Knife Crime</td> <td>${countyProvider}</td> <td>${countyCompletionDate}</td> <td>${countyExpireDate}</td> </tr>
                                    <tr> <td>Substance Misuse</td> <td>${substanceProvider}</td> <td>${substanceCompletionDate}</td> <td>${substanceExpireDate}</td> </tr>
                                    <tr> <td>Medication</td> <td>${medProvider}</td> <td>${medCompletionDate}</td> <td>${medExpireDate}</td> </tr>
                                    <tr> <td>De-escalation/Physical Intervention</td> <td>${PMVAProvider}</td> <td>${PMVACompletionDate}</td> <td>${PMVAExpireDate}</td> </tr>
                                </tbody>
                            </table>

                            <div class="profile__endPar">
                                The above-named worker has undergone all the necessary and appropriate pre-employment screening checks
                                as required to ensure their compliance prior to supply and have completed the necessary training. 
                            </div>

                            <table class="profile__completionTable">
                                <tbody>
                                    <tr class="profile__completionTable-row">
                                        <td class="profile__label">Profile completed by</td>
                                        <td colspan="3">${userName}</td>
                                    </tr>
                                    <tr class="profile__completionTable-row">
                                        <td class="profile__label">Signature</td>
                                        <td class="signature">${userNameShort}</td>
                                        <td class="profile__dateBox">Date</td>
                                        <td>${new Date().toLocaleDateString('en-GB')}</td>
                                    </tr>
                                </tbody>
                            </table>

                            </div>
                            </div>
                            </div>
                    `
                    document.body.insertAdjacentHTML('beforeend', profileHTML)
                
                    }, 3000)

                    setTimeout(() => {
                        //When the photo is clicked on, the user can upload a different image file. 
                        const photo = document.querySelector('.profile__imageContainer')
                        const fileInput = document.createElement('input')
                        fileInput.type = 'file'
                        fileInput.accept = 'image/*'
                        fileInput.style.display = 'none'
                        document.body.appendChild(fileInput)

                        photo.addEventListener('click', () => {
                            fileInput.click()
                        });

                        fileInput.addEventListener('change', (e) => {
                            const file = e.target.files[0]
                            if (!file) return
                            const reader = new FileReader()
                            reader.onload = function(evt) {
                                photo.style.backgroundImage = `url('${evt.target.result}')`
                            }
                            reader.readAsDataURL(file)
                        })
                    }, 3010)
                
                    
                }
            }
        })

        //Close the staff profile when clicking outside of it
        document.addEventListener('click', (e)=>{
            if (e.target.classList.contains('profile__mask') || e.target.classList.contains('profile__background') || e.target.classList.contains('.profile__buttonsContainer')) {
                const mask = document.querySelector('.profile__mask')
                const background = document.querySelector('.profile__background')
                mask.remove()
                background.remove()

                const imGreat = `
                    <style>
                        .imGreat{
                            transform: translateY(15px) scale(0.9);
                            animation: fadePopInOut 2s ease-out forwards;
                        }	
  			
                        @keyframes fadePopInOut {
                            0% {
                                opacity: 0;
                                transform: translateY(15px) scale(0.9);
                            }
                            15% {
                                opacity: 1;
                                transform: translateY(0px) scale(1);
                            }
                            85% {
                                opacity: 1;
                                transform: translateY(0px) scale(1);
                            }
                            100% {
                                opacity: 0;
                                transform: translateY(15px) scale(0.9);
                            }
                        }
                    </style>

                    <div id="toast-container" class="toast-bottom-right imGreat">
                        <div class="toast toast-success" style="">
                            <div class="toast-message">Remember Nathan is great</div>
                        </div>
                    </div>
                `
                document.body.insertAdjacentHTML('beforeend', imGreat)
                
                setTimeout(() => {
                    document.querySelector('.imGreat').remove()
                }, 2001)
            }
        })

        //Handle PDF download
        document.addEventListener('click', (e) => {
            if (e.target.closest('.profile__downloadButton')) {
                //Change the ccs to print mode
                document.querySelector('.profile__page').classList.add('print')
                const profilePage = document.querySelector('.profile__page');
                if (profilePage) {
                    const opt = {
                        margin:       0.5,
                        filename:     `Staff Profile - ${firstName} ${surname}.pdf`,
                        image:        { type: 'jpeg', quality: 0.98 },
                        html2canvas:  { scale: 2 },
                        jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
                    };

                    html2pdf().set(opt).from(profilePage).save();
                }
            }
        })

        //S2 button click
        document.addEventListener('click', (e) => {         
            const profilePage = document.querySelector('.profile__page')
            if (profilePage) {
                if (e.target.classList.contains('profile__s2Button') && !e.target.classList.contains('closeButton')) {

                    profilePage.classList.add('expanded')
                    profilePage.innerHTML = `
                        <style>
                            .s2__row{
                                display: flex;
                                flex-direction: row;
                                align-items: center;
                                justify-content: start;
                                margin-top: 20px;
                            }
    
                            .s2__copyButton-one, .s2__copyButton-two{
                                margin: 1rem auto;
                                display: block;
                                width: 50px;
                                height: 50px;
                                background: rgba(0, 0, 0, 0.2);
                                border: none;
                                border-radius: 100%;
                                transition: all 0.2s;
                                margin: 0 20px;
                            }
    
                            .s2__copyButton-one:hover, .s2__copyButton-one:hover{
                                background: rgba(0, 0, 0, 0.1);
                            }
                            
                            .s2__tableOne tbody tr td, .s2__tableTwo tbody tr td{
                                font-size: 11pt;
                                font-family: 'Calibri';
                                text-align: center;
                                border: 1px solid black;
                            }
                            
                        </style>
    
                        <div class="s2__row">
                            <button class="s2__copyButton-one">Copy</button>
    
                            <table class="s2__tableOne">
                                <tbody>
                                    <tr>
                                        <td>Enhanced DBS check number</td>
                                        <td>Date DBS issued from</td>
                                        <td>DBS Check date</td>
                                        <td>Overseas police check required and completed?</td>
                                    </tr>
                                    <tr>
                                        <td>${dbs}</td>
                                        <td>${dbsIssueDate}</td>
                                        <td>${dbsUpdateMostRecentDate}</td>
                                        <td>${ospcUpdateMostRecentDate.length > 7 ? 'Yes' : 'N/A'}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
    
                        <div class="s2__row">
                            <button class="s2__copyButton-two">Copy</button>
    
                            <table class="s2__tableTwo">
                                <tbody>
                                    <tr>
                                        <td>Safeguarding training date</td>
                                        <td>Child Sexual Exploitation Training date</td>
                                        <td>De-escalation/physical intervention training date</td>
                                        <td>Substance Misuse training date</td>
                                        <td>First Aid training date</td>
                                        <td>Medication training date</td>
                                        <td>Food Hygiene training date</td>
                                        <td>List of all other training</td>
                                    </tr>
                                    <tr>
                                        <td>${cplCompletionDate}</td>
                                        <td>${cseCompletionDate}</td>
                                        <td>${PMVACompletionDate}</td>
                                        <td>${substanceCompletionDate}</td>
                                        <td>${blsCompletionDate}</td>
                                        <td>${medCompletionDate}</td>
                                        <td>${foodCompletionDate}</td>
                                        <td>Oliver McGowan Mandatory Training on Learning Disability and Autism - ${omCompletionDate}. County Lines and Knife Crime - ${countyCompletionDate}. Moving and Handling - ${mhCompletionDate}. Paediatric First Aid - ${plsCompletionDate}. Epilepsy Awareness ${epilepsyCompletionDate}.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    `
                    e.target.innerText = 'X'
                    e.target.classList.add('closeButton')
                    
                } else if(e.target.classList.contains('profile__s2Button') && e.target.classList.contains('closeButton')){
                    const testHTML = `<div> Yes </div>`
                    profilePage.classList.remove('expanded')
                    // profilePage.innerHTML = testHTML
                    profilePage.innerHTML = profileHTML

                    e.target.innerText = 'S2'
                    e.target.classList.remove('closeButton')

                }
                
            }
               

        })
        
        //S2 copy button
        document.addEventListener('click', (e) => {
            if (e.target && e.target.classList.contains('s2__copyButton-one')) {
                copyTableRow('.s2__tableOne')
            }
            if (e.target && e.target.classList.contains('s2__copyButton-two')) {
                copyTableRow('.s2__tableTwo')
            }
        })

        function copyTableRow(tableClass) {
            const table = document.querySelector(tableClass)
            if (table) {
                const rows = table.querySelectorAll('tr');
                if (rows.length > 1) {
                    const cells = Array.from(rows[1].querySelectorAll('td'));
                    const text = cells.map(cell => cell.innerText.trim()).join('\t');
                    
                    navigator.clipboard.writeText(text)
                }
            }
        }
            

    }

}, 4000)
