export interface IJsonWebTokenProvider {
  signToken(userId: number): Promise<string>
}