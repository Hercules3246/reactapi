import axios from 'axios';

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImY2Y2ZmNGVlLTNkZWMtNDg2Yi1hZmYxLWMxYjA4MTQwZDc1YyIsImlhdCI6MTY0NTYxOTU1Mywic3ViIjoiZGV2ZWxvcGVyL2ExZTU2MmYwLTMzNTUtOTc2ZS1iZGNlLTJhZmE5MTE4NWFlNyIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE5MS45NS4xNjguMTE5Il0sInR5cGUiOiJjbGllbnQifV19.N3v0T-aTZ4F_7WdytcoRzirjodtVl218NgR0tOOPPmfHTJxpn09QycgOWaAlBwiGvrMbHEBFk9vnb13Kj4UqQw';

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