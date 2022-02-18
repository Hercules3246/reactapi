import axios from 'axios';

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjBmYzY2MmM5LTU4NDMtNDUzYy1iOGJhLWU4NTFiMTc4N2ZlNCIsImlhdCI6MTY0NTE0NTcyMywic3ViIjoiZGV2ZWxvcGVyL2ExZTU2MmYwLTMzNTUtOTc2ZS1iZGNlLTJhZmE5MTE4NWFlNyIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE5MS45NS4xNjYuMTAzIl0sInR5cGUiOiJjbGllbnQifV19.b06cZcOLj2quBy39melggCczgO6sZbAmCLh-MO6hD6x94taC7sDFaX2deBZNwcPRVsh2sFQ9oODF2JU1gNXM1w';

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