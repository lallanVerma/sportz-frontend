import { API_BASE_URL } from "../constants";
import { CommentaryResponse, MatchResponse } from "../types";

export const fetchMatches = async (limit = 50): Promise<MatchResponse> => {
//   console.log("ENV:", import.meta.env);
// console.log("API:", API_BASE_URL);
// // console.log("WS:", WS_BASE_URL);
  try {
    const response = await fetch(`${API_BASE_URL}/matches?limit=${limit}`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // Propagate error to be handled by the UI layer
    throw error;
  }
};

export const fetchMatchCommentary = async (
  matchId: string | number,
  limit = 100
): Promise<CommentaryResponse> => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/matches/${matchId}/commentary?limit=${limit}`,
      {
        method: "GET",
      }
    );

    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};