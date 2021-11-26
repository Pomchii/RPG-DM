export interface IHashData {
  hashUserData(userData: string): Promise<string>;
  compareHashedUserData(incomingData: string, userData: string): Promise<boolean>;
}