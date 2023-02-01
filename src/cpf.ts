// @ts-nocheck
export function validate (cpf) {
    cpf = removeNonNumbers(cpf);
    if (cpf.length !== 11) return false;
    const { cpfDigit1, cpfDigit2 } = sumCpfDigits(cpf);
    const verificationDigits = cpf.substring(cpf.length - 2, cpf.length);
    return verificationDigits == getVerificationDigits(cpfDigit1, cpfDigit2);
}

function sumCpfDigits(cpf) {
    let cpfDigit1 = 0, cpfDigit2 = 0;
    for (let digitPosition = 1; digitPosition < cpf.length - 1; digitPosition++) {
        const digit = parseInt(cpf.substring(digitPosition - 1, digitPosition));
        ({ cpfDigit1, cpfDigit2 } = accumulateDigits(digit, cpfDigit1, cpfDigit2, digitPosition));
    }
    return { cpfDigit1, cpfDigit2 };
}

function accumulateDigits(digit, cpfDigit1, cpfDigit2, digitPosition) {
    cpfDigit1 += (11 - digitPosition) * digit;
    cpfDigit2 += (12 - digitPosition) * digit;
    return { cpfDigit1, cpfDigit2 };
}

function getVerificationDigits(cpfDigit1, cpfDigit2) {
    const verificationDigit1 = calculateVerificationDigit(cpfDigit1);
    cpfDigit2 += 2 * verificationDigit1;
    const verificationDigit2 = calculateVerificationDigit(cpfDigit2);
    return `${verificationDigit1}${verificationDigit2}`;
}

function calculateVerificationDigit(d) {
    const remainder = d % 11;
    return (remainder < 2) ? 0 : 11 - remainder;
}

function removeNonNumbers(cpf) {
    if (cpf == null || cpf == undefined) return '';
    const regExp = /(([0-9]{3})[\.]?([0-9]{3})[\.]?([0-9]{3})[-]?([0-9]{2}))/;
    try {
        return regExp.exec(cpf).slice(2, 6).join('');
    } catch(e) {
        return "";
    }
}
