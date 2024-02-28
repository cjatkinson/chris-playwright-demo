export function generateRandomEmailAddress(length: number): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const domain = 'edify.com';
  let result = 'mmtest-';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  result += `@${domain}`;
  return result;
}

export function generateRandomPassword(length: number): string {
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const uppercase = lowercase.toUpperCase();
  const numbers = '0123456789';
  const specials = '!@#$%^&*()-_=+[{]};:<>|./?';
  const randomChar = (characters: string) => characters.charAt(Math.floor(Math.random() * characters.length));
  const allcharacters = lowercase + uppercase + numbers + specials;
  const result = [
    randomChar(lowercase),
    randomChar(uppercase),
    randomChar(numbers),
    randomChar(specials),
    ...Array.from({ length: length - 4 }, () => randomChar(allcharacters))
  ]
    .sort(() => Math.random() - 0.5)
    .join('');
  return result;
}
