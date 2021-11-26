import { IHashData } from "../IHashData";
import bcrypt from 'bcrypt';

export class HashData implements IHashData {
  async hashUserData(userData: string): Promise<string> {
    const hashedPassword = bcrypt.hash(userData, 10);

    return hashedPassword;
  }

  async compareHashedUserData(incomingData: string, userData: string): Promise<boolean> {
    const comparedDataValues = await bcrypt.compare(incomingData, userData);

    return comparedDataValues;
  }
}