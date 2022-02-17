import axios from 'axios';

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjEyYzFmN2YwLTExNzMtNGFmOS05ODRmLTliZDIxOGNhMmNhYSIsImlhdCI6MTY0NTEyNzM2MSwic3ViIjoiZGV2ZWxvcGVyL2ExZTU2MmYwLTMzNTUtOTc2ZS1iZGNlLTJhZmE5MTE4NWFlNyIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE4MS40OC4yMC4xNzgiXSwidHlwZSI6ImNsaWVudCJ9XX0.CFEc4ILHpnI3q_TqLHpgk5Okl2_eMBqZTYS0NAYGrhJhYqE8ABdG51bD-ZpCR8QtIARUPMbyoTqo3OCbKxYtnw';

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