export const formData = {
    occupation: undefined,
    businessName: undefined,
    employeeCount: undefined,
    zipCode: undefined,
    businessEarnings: undefined,
    personalEarnings: undefined,
    email: undefined
}

export const formState = {
    pages: ['industry', 'business_information', 'finance_basics', 'contact_details', 'policies'], // Should probably be removed to a constants file.
    activePage: 0, // Corresponds to index of pageArray above
    maxActivePage: 0
}