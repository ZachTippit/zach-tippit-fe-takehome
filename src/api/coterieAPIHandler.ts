export const createAPIObject = (formData: any) => {
    return {
        "businessName": formData.businessName,
        "contactEmail": formData.contactEmail,
        "grossAnnualSales": formData.businessEarnings,
        "annualPayroll": formData.personalEarnings,
        "numEmployees": formData.employeeCount,
        "industryId": formData.industryId,
        "locations": [
            {
                "zip": formData.zipCode
            }
        ]
    }
}

export const fetchCoterieAPI = async (apiObject: any) => {
    console.log(apiObject)
    console.log(JSON.stringify(apiObject))
    console.log(process.env.REACT_APP_COTERIE_API_URL)
    const response = await fetch(process.env.REACT_APP_COTERIE_API_URL as string, {
        method: 'POST',
        headers: {
            Authorization: `token ${process.env.REACT_APP_COTERIE_AUTH_TOKEN as string}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(apiObject)
    })
    .then(response => response.json())
    .catch(error => console.error(error))

    console.log(response)
    return response    
}