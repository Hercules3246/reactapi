import axios from 'axios';

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjU4ODBjMTBhLTRiMDktNDFmMy1iYmE2LTNkZjMxZDJhNGZlMCIsImlhdCI6MTY0NTA1ODY0OCwic3ViIjoiZGV2ZWxvcGVyL2ExZTU2MmYwLTMzNTUtOTc2ZS1iZGNlLTJhZmE5MTE4NWFlNyIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE5MS45NS4xNjYuMTE2Il0sInR5cGUiOiJjbGllbnQifV19.tZFTLcYHr2kHmAzWb7BYPkzHcSLBkYjEF-Jk5FZS7DD7DlL55-_-NQVicc3Ii0DV4HZg1YrgdhvstCPJfoirog';

const headers = {
    'Content-Type': 'application/json', 
    'Authorization': `Bearer ${token}`
    // 'Access-Control-Allow-Origin': '*'
};

export const api = axios.create({
    baseURL: 'https://api.clashofclans.com/v1/',
    headers: headers,
    // withCredentials: true
});