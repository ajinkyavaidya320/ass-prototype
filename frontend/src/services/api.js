const API_URL = "http://127.0.0.1:8000";

export async function getSessionData() {
  const response = await fetch(`${API_URL}/session`);

  if (!response.ok) {
    throw new Error("Failed to fetch session");
  }

  return response.json();
}