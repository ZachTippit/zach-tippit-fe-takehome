export const titleCase = (s: string): string => {
    return s.replace(/^_*(.)|_+(.)/g, (s, c, d) => c ? c.toUpperCase() : ' ' + d.toUpperCase())
}

// Source: https://stackoverflow.com/questions/64489395/converting-snake-case-string-to-title-case

export const capitalizeFirstLetter = (string: string): string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Source:  https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript

export const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

// Source: https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript

export const convertToFullName = (policyName: string) => {
    switch(policyName){
        case 'GL':
            return 'General Liability'
        case 'BOP':
            return 'Business Owners Policy'
        case 'PL':
            return 'Professional Liability'
        default:
            return policyName
    }
}