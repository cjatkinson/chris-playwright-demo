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
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const specials = '!@#$%^&*()-_=+[{]};:<>|./?';
  const randomChar = (chars: string) => chars.charAt(Math.floor(Math.random() * chars.length));
  const allChars = lowercase + uppercase + numbers + specials;
  return [randomChar(lowercase), randomChar(uppercase), randomChar(specials), ...Array.from({ length: length - 3 }, () => randomChar(allChars))]
    .sort(() => Math.random() - 0.5)
    .join('');
}
