const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const uppercase = lowercase.toUpperCase();
const numbers = '0123456789';

const randomChar = (characters: string) => characters.charAt(Math.floor(Math.random() * characters.length));

export function synEmailAddress(length: number, domain: string = 'edify.com'): string {
  const characters = lowercase + uppercase + numbers;
  const result = [
    randomChar(lowercase),
    randomChar(uppercase),
    randomChar(numbers),
    ...Array.from({ length: length - 3 }, () => randomChar(characters))
  ]
    .sort(() => Math.random() - 0.5)
    .join('');
  return result + '@' + domain;
}

export function synPassword(length: number): string {
  const specials = '!@#$%^&*()-_=+[{]};:<>|./?';
  const characters = lowercase + uppercase + numbers + specials;
  const result = [
    randomChar(lowercase),
    randomChar(uppercase),
    randomChar(numbers),
    randomChar(specials),
    ...Array.from({ length: length - 4 }, () => randomChar(characters))
  ]
    .sort(() => Math.random() - 0.5)
    .join('');
  return result;
}
