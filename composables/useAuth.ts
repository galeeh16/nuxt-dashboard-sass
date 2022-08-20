export const useAuth = () => {
    return useState('auth', () => {
        return { 
            id: localStorage.getItem("userId") || null,
            email: localStorage.getItem("userEmail") || null,
            name: localStorage.getItem("userName") || null,
            token: localStorage.getItem("access_token") || null,
        }
    });
}