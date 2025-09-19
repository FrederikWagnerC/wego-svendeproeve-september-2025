 
 

 
// Hovedfunktion til API-kald
export const fetchApi = async (
  endpoint,
  method = 'GET',
  body,
  token  // Brug eksisterende token som fallback
) => {
  const headers = {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {})
  };

  console.log(endpoint, method, body, token);
 
  const config = {
    method,
    headers,
    ...(body ? { body: JSON.stringify(body) } : {})
  };
 
  try {
    const url = `${endpoint}`;
    console.log(url, config);
    const res = await fetch(`${url}`, config);
    console.log('Response:', res);
 
    // Tjek om svaret er JSON og parse det
    const isJson = res.headers.get('Content-Type')?.includes('application/json');
    const data = isJson ? await res.json() : null;
 
    if (res.ok) {
      return { success: true, data: data.response ?? data };
    }
 
    // Hvis ikke ok, returner fejl
    return { success: false, error: `${res.status}: ${res.statusText}` };
  } catch (err) {
    // Håndter fetch-fejl
    console.error('Fetch error:', err);
    return { success: false, error: err.message };
  }
};