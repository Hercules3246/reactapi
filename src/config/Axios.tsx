import axios from 'axios';

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImI5Y2E5YjU1LWM5NjUtNDQ1Ni1hZGZmLTlmNzFmNGUxNzYwZiIsImlhdCI6MTY0NTU2NTQxNSwic3ViIjoiZGV2ZWxvcGVyL2ExZTU2MmYwLTMzNTUtOTc2ZS1iZGNlLTJhZmE5MTE4NWFlNyIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE4MS40OC4yMC4xNzgiXSwidHlwZSI6ImNsaWVudCJ9XX0.yMnX4tOgQ98aubuxbgCg-gj-ndC3NxQKQqzIl5ax4Q8YUQNQHmrTIhjgZGqz-NAKNV1UXa1yLUNYy3DF93l9FA';

const headers = {
    'Content-Type': 'application/x-www-form-urlencoded', 
    'Authorization': `Bearer ${token}`,
    // 'Access-Control-Allow-Origin': '*'
};

export const api = axios.create({
    baseURL: 'https://api.clashofclans.com/v1/',
    headers: headers,
    // withCredentials: true
});