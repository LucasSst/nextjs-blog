import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://mejvtpqokylnzlweotzu.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1lanZ0cHFva3lsbnpsd2VvdHp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI1MTgwNDEsImV4cCI6MTk5ODA5NDA0MX0.OBkQ9KM4BCOehWj2VyTbYu8Oqh3O3A8-qKYJTwuyA68",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1lanZ0cHFva3lsbnpsd2VvdHp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI1MTgwNDEsImV4cCI6MTk5ODA5NDA0MX0.OBkQ9KM4BCOehWj2VyTbYu8Oqh3O3A8-qKYJTwuyA68"
    }
})