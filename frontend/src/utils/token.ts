import { decodeJwt, SignJWT } from "jose";
import { type JWTPayload } from "@/types/auth";

const SECRET = new TextEncoder().encode("qred");
const TOKEN_NAME = "authToken";

export function decodeJWTPayload(token: string): JWTPayload | null {
  try {
    const decoded = decodeJwt(token);
    return decoded as JWTPayload;
  } catch (error) {
    console.error("Failed to decode JWT token:", error);
    return null;
  }
}

export function getAuthToken(): string | null {
  return localStorage.getItem(TOKEN_NAME);
}

export function getAuthPayload(): JWTPayload | null {
  const token = getAuthToken();
  if (!token) return null;
  return decodeJWTPayload(token);
}

export function isTokenExpired(payload: JWTPayload): boolean {
  const currentTime = Math.floor(Date.now() / 1000);
  return payload.exp < currentTime;
}

export function clearAuthToken(): void {
  localStorage.removeItem(TOKEN_NAME);
}

export function setAuthToken(token: string): void {
  localStorage.setItem(TOKEN_NAME, token);
}

export async function createJWT(payload: JWTPayload): Promise<string> {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(payload.exp)
    .sign(SECRET);
}
