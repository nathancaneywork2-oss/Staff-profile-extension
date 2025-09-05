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

		<button class="FormButton extensionButton"><i class="fa-regular fa-file-lines"></i>Staff Profile</button>
	`

        const hasExtensionButton = buttonContainer.querySelector('.extensionButton') !== null;

        if (!hasExtensionButton) {
            buttonContainer.insertAdjacentHTML('afterbegin', extensionButton)    
        }

        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('extensionButton') || e.target.classList.contains('fa-file-lines')) {

		let allElements = document.querySelectorAll('*')
		let spans = document.querySelectorAll('span')

		if (allElements && spans) {
		    let allElementsArray = Array.from(allElements)
  		    const spansArray = Array.from(spans)

            //Global variables that are used in the HTML.
            var mostRecentPhotoDate = ''
            var mostRecentImageUrl = ''
		    var workPermitRequired = ''
	        var workPermitCheckedDate = ''
            var passportUploadedDate = '' 
            var poaDocOneUploadedDate = ''
            var poaDocTwoUploadedDate = ''
			
		    //Click on the right to work section to expand it
		    const rtwDocumentationDiv = allElementsArray.find(e => e.textContent.trim() === 'Right to Work Documentation')
		    const rtwDocumentationContainer = rtwDocumentationDiv.closest('.FormHeader')
		    const rtwDocumentationElement = rtwDocumentationContainer.querySelector('.SubformSummaryItem')
		    const rightToWorkButton = rtwDocumentationElement.querySelector('.SummaryTableCell')
		    rightToWorkButton.click()    

 		    setTimeout(() => {
                //Get the upload date of the most recent photo
                const photoText = allElementsArray.find(e => e.textContent.trim() === 'Photograph')
                const container = photoText.closest('.form-control-group')
			
				const photoContainerArray = Array.from(container.querySelectorAll('.thumbnail'))
                var photoDates = []

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



                //Check if a work permit is required
                const rtwText = spansArray.find(e => e.textContent.trim() === 'Right to work check Expiry')
                const rtwTextContainer = rtwText.closest('.form-control-group')
                const rightToWorkExpiry = rtwTextContainer.querySelector('.input-small').value
                workPermitRequired = rightToWorkExpiry.length > 0 ? 'Yes' : 'No'

                //Get the work permit checked date
                if(workPermitRequired == 'Yes'){
                    const rtwCheckText = allElementsArray.find(e => e.textContent.trim() === 'Right to work check (only if applicable)')
                    const rtwCheckContainer = rtwCheckText.closest('.form-control-group')
                    const rtwCheckUploadedDatesArray = Array.from(rtwCheckContainer.querySelectorAll('.FileUploadListItemTimestamp'))
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
                const passportText = allElementsArray.find(e => e.textContent.trim() === 'Passport')
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
            //Wait for the right to work section to finish being clicked on
            const poaDocumentationDiv = allElementsArray.find(e => e.textContent.trim() === 'Proof of address Documentation')
            const poaDocumentationContainer = poaDocumentationDiv.closest('.FormHeader')
            const poaDocumentationElement = poaDocumentationContainer.querySelectorAll('.SubformSummaryItem')
            const poaButton = poaDocumentationElement[poaDocumentationElement.length - 1].querySelector('.SummaryTableCell') // We need to click on the last one if there's more than one
            
            setTimeout(() => {

                poaButton.click()  

            }, 150);

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
		    
            // Get the values for the easy ones that don't require me to click on anything
		    firstName = spansArray.find(e => e.textContent.trim() === 'First Name').closest('.form-control-group').querySelector('.text-field').value
		    surname = spansArray.find(e => e.textContent.trim() === 'Surname').closest('.form-control-group').querySelector('.text-field').value
		    var dateOfBirth = spansArray.find(e => e.textContent.trim() === 'Date of birth').closest('.form-control-group').querySelector('input').value
		    var role = spansArray.find(e => e.textContent.trim() === 'Role').closest('.form-control-group').querySelector('.item').textContent
		    var nationality = spansArray.find(e => e.textContent.trim() === 'Nationality').closest('.form-control-group').querySelector('.item').textContent
		    var dbs = spansArray.find(e => e.textContent.trim() === 'DBS Number').closest('.form-control-group').querySelector('.text-field').value
		    var dbsIssueDate = spansArray.find(e => e.textContent.trim() === 'DBS Issue Date').closest('.form-control-group').querySelector('input').value

            //Recruitment Values
            const recruitmentContainer = allElementsArray.find(e => e.textContent.trim() === 'Recruitment Documentation').parentElement.parentElement
            const recruitmentDivs = Array.from(recruitmentContainer.querySelectorAll('div'))
            var applicationFormDate = recruitmentDivs.find(e => e.textContent.trim() === 'Application form').closest('.SummaryTableRow').querySelectorAll('.SummaryTableCellInner')[1].innerText
		}

            
        //Get the training dates
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
 		              justify-content: center;
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
		          </style>

			<div class="loadingDiv">
			    <div class="spinner"></div>
  			</div>

		    `
		    document.body.insertAdjacentHTML('beforeend', loadingHTML)

            setTimeout(() => {
			
		    document.querySelector('.loadingDiv').remove()

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
                        height: 600px;
                        overflow-y: scroll;
                        scrollbar-width: none;
                        margin: 20px auto;
                        background: #fff;
                        padding: 0px;
                        border-radius: 5px;
                        box-sizing: border-box;
                        font-family: Arial, sans-serif;
                        color: #000;
                    }

                    .profile__page.print {
                        width: 698px;             /* A4 width at 96dpi */
                        height: auto;

                    }

                    .profile__container{
                        width: 86%;
                        margin: 0 auto;
                    }

                    .profile__beginPar{
                        text-align: center;
                        font-size: 11px;
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
                        font-size: 22px;
                        position: relative;
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
                        font-size: 18px;
                        font-weight: normal;
                        padding: 0;
                    }

                    .invisible{
                        opacity: 0;
                    }

                    .profile__nameDiv{
                        border: 1px solid #000;
                        //height: 118px;
                        display: flex;
                        flex-direction: row;
                        justify-content: start;
                    }

                    .profile__imageContainer{
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
                        font-size: 11px;
                        border: 1px solid #000;
                    }

                    .profile__nameLable{
                        width: 140px;
                        
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
                        font-size: 11px;
                        border: 1px solid #000;
                    }

                    .profile__modularTable{
                        border: 1px solid #000;
                        width: 100%;
                        border-collapse: collapse;
                    }

                    .profile__modularTable tbody tr td{
                        font-size: 11px;
                        border: 1px solid #000;
                    }

                    .profile__headerRow{
                        width: 209px;
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
                        font-size: 11px;
                        border: 1px solid #000;
                    }

                    .profile_trainingTable th, .profile_trainingTable td {
                        border: 1px solid #000;
                        padding: 1px 12px;
                        font-size: 11px;
                        text-align: center;
                    }

                    .profile_trainingTable th {
                        /* background-color: #f2f2f2; */
                        font-weight: bold;
                    }

                    .profile_trainingTable tr {
                        page-break-inside: avoid;  /* prevent rows splitting across pages */
                        break-inside: avoid;
                    }

                    .profile__endPar{
                        text-align: center;
                        font-size: 11px;
                        padding: 20px 1px;
                    }

                    .profile__completionTable {
                        border-collapse: collapse;
                        width: auto;
                        font-family: Arial, sans-serif;
                        font-size: 11px;
                        width: 100%;
                    }

                    .profile__completionTable-row {
                        border: 1px solid #000;
                        padding: 6px 10px;
                        vertical-align: middle;
                        font-size: 11px;
                    }

                    .label {
                        background-color: rgb(203, 203, 203);
                        font-weight: normal;
                        color: rgb(0, 0, 0);
                        font-size: 11px;
                        width: 105px;
                        border: 1px solid #000;
                    }

                    .profile__dateBox{
                        background-color: rgb(203, 203, 203);
                        font-size: 11px;
                        border: 1px solid #000;
                        border-radius: 0;
                    }

                    .signature {
                        font-family: "Brush Script MT", cursive;
                        width: 210px;
                        font-size: 11px;
                    }

                    @media print {
                        .profile__mask { display: none !important; }
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
                
                <div class="profile__mask">
                    <button class="profile__downloadButton"><i style="font-size: 25px;" class="fa-solid fa-file-arrow-down"></i></button>
                    <div class="profile__page">
                        <div class="profile__container">

                        <div class="profile__beginPar">
                            Elborough Care Services, Unit 2 Morston Court, Aisecome Way, Weston-super-Mare, BS22 8NG
                            hello@elboroughcares.co.uk  01934805830 <br>
                            Out of hours 01934806774
                        </div>

                        <div class="profile__titleDiv">
                            <p class="profile__titleLogo">Elborough
                                <svg class="profile__oSvg" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                     width="32" height="32" style="position:absolute;top:-4px;left:20px;transform:scale(0.30);margin:0;padding:0;">
                                    <path d="M0 0 C3.86098204 2.03579053 6.94245885 4.10150099 9 8 C9.95481924 12.16335597 10.3687605 15.8937185 9 20 C9 20.99 9 21.98 9 23 						C6.29196906 27.16620145 3.65156533 	29.2670639 -1 31 C-7.48759465 31.99809148 -12.78067392 29.74883769 -18 26 C-21.0073055 								22.39277167 -22.19779914 18.52356024 -22.5 13.875 C-21.77552393 8.26031049 -19.57662691 	5.42280965 -15.4375 1.6875 								C-10.40473736 -1.79672029 -5.76841857 -1.16805983 0 0 Z M-11.6875 6.5 C-14.54646745 10.16579262 -14.76386816 13.43478438 -15 18 C-14.34 						18 -13.68 	18 -13 18 C-13 18.66 -13 19.32 -13 20 C-9.29398698 22.47067534 -5.30359093 22.70018741 -1 22 C1.82370995 20.31778982 							3.40718704 19.01126916 5.0625 16.1875 C4.95813456 12.53470973 	3.23849087 9.7663738 1 7 C-3.70892185 3.9588213 -7.21535668 								2.33986668 -11.6875 6.5 Z " fill="#05A9B7" transform="translate(22,1)"/>
                                    <path d="M0 0 C2.59623818 2.00522461 4.43954784 4.1122667 6 7 C6.375 10.4375 6.375 10.4375 6 13 C5.5875 12.4225 5.175 11.845 4.75 11.25 						C1.05622693 6.43204633 1.05622693 	6.43204633 -4.4375 4.0625 C-9.28458025 3.9774635 -11.34629673 5.40535756 -14.75 8.6875 								C-16.89326373 12.65253791 -17.66612741 16.74704678 -16.38671875 21.07421875 C-15.66882779 	22.75156588 -14.84280701 24.38181053 -14 						26 C-17.30901116 24.9730655 -18.0219638 23.96077893 -19.75 20.875 C-21.32009851 16.70252828 -21.4937144 13.44342959 -21 9 								C-16.27590785 -0.09825154 -9.60347485 -3.85445589 0 0 Z " fill="#3852A0" transform="translate(21,2)"/>
                                    <path d="M0 0 C0.66 0.33 1.32 0.66 2 1 C1.2884375 1.7115625 1.2884375 1.7115625 0.5625 2.4375 C-1.64660603 6.06043388 -2.15627043 							9.7732569 -2 14 C-1.11797224 	16.57608109 -0.44571113 17.69967104 1.8203125 19.2265625 C6.23904486 20.79449979 11.58386932 21.08972424 						15.9140625 19.13671875 C17.70096582 17.96274076 17.70096582 17.96274076 	20 16 C20.66 15.67 21.32 15.34 22 15 C20.56179187 							20.03372844 18.09754485 21.98955889 14 25 C9.29477445 26.56840852 5.47351184 26.54895539 0.8125 24.8125 C-2.82422058 									22.46883563 -5.28746181 20.36211291 -6.5703125 16.109375 C-7.44704041 11.22208323 -6.79210353 8.236295 -4 4 C-1.8125 1.625 -1.8125 1.625 0 						0 Z " fill="#73BA3D" 	transform="translate(10,6)"/>
                                </svg>
                            </p>

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
                                        <td class="profile__thirdColumn">${mostRecentPhotoDate}</td>
                                    </tr>
                                    <tr>
                                        <td class="profile__nameLable">Work permit required:</td>
                                        <td class="profile__thirdColumn">${workPermitRequired}</td>
                                    </tr>
                                    <tr>
                                        <td class="profile__nameLable">Work permit checked date:</td>
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
                                <td class="profile__thirdColumn">${(['British', 'Irish', 'Scottish', 'Northern Irish'].includes(nationality.trim()) ? '' : `${workPermitCheckedDate}`)}</td>
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
                            <td class="profile__thirdColumn"></td>
                            </tr>
                            <tr>
                            <td class="profile__secondColumn" >CV / application on file: </td>
                            <td class="profile__thirdColumn"></td>
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
                            <td class="profile__thirdColumn"></td>
                            </tr>
                            <tr>
                            <td class="profile__secondColumn" >Disclosures on enhanced DBS cert:</td>
                            <td class="profile__thirdColumn"></td>
                            </tr>
                            </tbody>
                            </table>

                            <table class="profile__modularTable">
                            <tbody>
                            <tr>
                            <td class="profile__headerRow" rowspan="6">Driving Check</td>
                            <td class="profile__secondColumn" >Driving licence seen and verified</td>
                            <td class="profile__thirdColumn"></td>
                            </tr>
                            <tr>
                            <td class="profile__secondColumn" >Date seen and verified:</td>
                            <td class="profile__thirdColumn"></td>
                            </tr>
                            <tr>
                            <td class="profile__secondColumn" >Business Insurance seen and verified:</td>
                            <td class="profile__thirdColumn"></td>
                            </tr>
                            <tr>
                            <td class="profile__secondColumn" >Date seen and verified:</td>
                            <td class="profile__thirdColumn"></td>
                            </tr>
                            <tr>
                            <td class="profile__secondColumn" >MOT seen and verified:</td>
                            <td class="profile__thirdColumn"></td>
                            </tr>
                            <tr>
                            <td class="profile__secondColumn" >Date seen and verified:</td>
                            <td class="profile__thirdColumn"></td>
                            </tr>
                            </tbody>
                            </table>

                            <table class="profile__modularTable">
                            <tbody>
                            <tr>
                            <td class="profile__headerRow" rowspan="2">Police check (when applicable)</td>
                            <td class="profile__secondColumn" >Police check seen and verified:</td>
                            <td class="profile__thirdColumn"></td>
                            </tr>
                            <tr>
                            <td class="profile__secondColumn">Date seen and verified:</td>
                            <td class="profile__thirdColumn"></td>
                            </tr>
                            </tbody>
                            </table>

                            <table class="profile__modularTable">
                            <tbody>
                            <tr>
                            <td class="profile__headerRow" rowspan="5">Professional Registration and qualifications</td>
                            <td class="profile__secondColumn" >Pin Number:</td>
                            <td class="profile__thirdColumn"></td>
                            </tr>
                            <tr>
                            <td class="profile__secondColumn" >PIN Number seen and verified:</td>
                            <td class="profile__thirdColumn"></td>
                            </tr>
                            <tr>
                            <td class="profile__secondColumn" >Date seen and verified:</td>
                            <td class="profile__thirdColumn"></td>
                            </tr>
                            <tr>
                            <td class="profile__secondColumn" >PIN number expire date:</td>
                            <td class="profile__thirdColumn"></td>
                            </tr>
                            <tr>
                            <td class="profile__secondColumn" >Any existing undertakings/conditions with the NMC or review of fitness to practice?</td>
                            <td class="profile__thirdColumn"></td>
                            </tr>
                            </tbody>
                            </table>

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

                            <div class="profile__endPar">
                            The above-named worker has undergone all the necessary and appropriate pre-employment screening checks
                            as required to ensure their compliance prior to supply and have completed the necessary training. 
                            </div>

                            <table class="profile__completionTable">
                            <tbody>
                            <tr class="profile__completionTable-row">
                            <td class="label">Profile completed by</td>
                            <td colspan="3">Nathan Caney</td>
                            </tr>
                            <tr class="profile__completionTable-row">
                            <td class="label">Signature</td>
                            <td class="signature">N Caney</td>
                            <td class="profile__dateBox">Date</td>
                            <td>19/08/2025</td>
                            </tr>
                            </tbody>
                            </table>

                            </div>
                            </div>
                            </div>
                    `
                    document.body.insertAdjacentHTML('beforeend', profileHTML)
                
                    }, 2000)
                
                    

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
        });

    }
}, 4000)