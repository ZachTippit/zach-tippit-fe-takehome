export const formData = {
    occupation:         <string|undefined>      undefined,
    contactEmail:       <string|undefined>      undefined,
    businessName:       <string|undefined>      undefined,
    industryId:         <number|undefined>      undefined,
    employeeCount:      <number|undefined>      undefined,
    zipCode:            <number|undefined>      undefined,
    businessEarnings:   <number|undefined>      undefined,
    personalEarnings:   <number|undefined>      undefined,

}

export const formState = {
    pages:              <string[]>              ['industry', 'business_information', 'finance_basics', 'contact_details', 'policies'], // Should probably be removed to a constants file.
    activePage:         <number>                0, // Corresponds to index of pageArray above
    maxActivePage:      <number>                0,
    availablePolicyTypes:        <string[]|undefined>    undefined
}